# Generated by Django 2.2.7 on 2020-01-19 18:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personagem', '0013_remove_traco_tipo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Pericia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(choices=[('FUR', 'Furtividade'), ('INT', 'Intuição'), ('ENG', 'Enganação'), ('ADE', 'Adestrar animais'), ('MED', 'Medicina'), ('ATU', 'Atuação'), ('ARC', 'Arcanismo'), ('NAT', 'Natureza'), ('PER', 'Percepção'), ('INV', 'Investigação'), ('ATL', 'Atletismo'), ('PER', 'Persuação'), ('ITM', 'Intimidação'), ('ACR', 'Acrobacia'), ('REL', 'Religião'), ('SOB', 'Sobrevivência'), ('HIS', 'História'), ('PRE', 'Prestidigitação')], max_length=3)),
            ],
        ),
        migrations.CreateModel(
            name='Proficiencia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(choices=[('ArmaS', 'Armas Simples'), ('ArmaM', 'Armas Marcials'), ('ArdrL', 'Armaduras Leves'), ('ArdrP', 'Armaduras Pesadas'), ('ArdrM', 'Armaduras Médias')], max_length=5)),
            ],
        ),
        migrations.AddField(
            model_name='classe',
            name='pericias',
            field=models.ManyToManyField(to='personagem.Pericia'),
        ),
        migrations.AddField(
            model_name='classe',
            name='proficiencias',
            field=models.ManyToManyField(to='personagem.Proficiencia'),
        ),
    ]