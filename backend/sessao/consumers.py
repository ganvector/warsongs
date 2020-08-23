from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
import json
from django.contrib.auth.models import User
from sessao.models import Message


class SessaoConsumer(WebsocketConsumer):

    def init_sessao(self, data):
        username = data['username']
        user = User.objects.get(username=username)
        content = {
            'command': 'init_sessao'
        }
        if not user:
            content['error'] = 'Unable to get or create User with username: ' + username
            self.send_message(content)
        content['success'] = 'sessaoting in with success with username: ' + username
        print('Iniciando sessao')
        self.send_message(content)

    def fetch_messages(self, data):
        messages = Message.last_50_messages()
        content = {
            'command': 'messages',
            'messages': self.messages_to_json(messages)
        }
        self.send_message(content)

    def new_message(self, data):
        author = data['from']
        text = data['text']
        author_user, created = User.objects.get_or_create(username=author)
        message = Message.objects.create(author=author_user, content=text)
        content = {
            'command': 'new_message',
            'message': self.message_to_json(message)
        }
        self.send_sessao_message(content)

    def messages_to_json(self, messages):
        result = []
        for message in messages:
            result.append(self.message_to_json(message))
        return result

    def message_to_json(self, message):
        return {
            'id': str(message.id),
            'author': message.author.username,
            'content': message.content,
            'created_at': str(message.created_at)
        }

    commands = {
        'init_sessao': init_sessao,
        'fetch_messages': fetch_messages,
        'new_message': new_message
    }

    def connect(self):
        self.room_name = 'room'
        self.room_group_name = 'sessao_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        print('--------------------> Preparando aceitacao')
        self.accept()

    def disconnect(self, close_code):
        # leave group room
        async_to_sync(self.channel_layer.group_discard)(
            self.room_group_name,
            self.channel_name
        )

    def receive(self, text_data):
        data = json.loads(text_data)
        self.commands[data['command']](self, data)

    def send_message(self, message):
        self.send(text_data=json.dumps(message))

    def send_sessao_message(self, message):
        # Send message to room group
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'sessao_message',
                'message': message
            }
        )

    # Receive message from room group
    def sessao_message(self, event):
        message = event['message']
        # Send message to WebSocket
        self.send(text_data=json.dumps(message))