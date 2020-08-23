# Generated by Django 2.2.9 on 2020-08-23 21:55

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campanha', '0010_auto_20200823_2136'),
    ]

    operations = [
        migrations.AddField(
            model_name='classe',
            name='teste_resistencia',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('CAR', 'Carisma'), ('CON', 'Constituição'), ('DES', 'Destreza'), ('FOR', 'Força'), ('INT', 'Inteligência'), ('SAB', 'Sabedoria')], default='0', max_length=3), default=list, max_length=2, size=None),
        ),
        migrations.AlterField(
            model_name='classe',
            name='pericias',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('ITM', 'Intimidação'), ('ADE', 'Adestrar animais'), ('ATL', 'Atletismo'), ('ACR', 'Acrobacia'), ('NAT', 'Natureza'), ('PER', 'Percepção'), ('SOB', 'Sobrevivência'), ('ENG', 'Enganação'), ('INT', 'Intuição'), ('REL', 'Religião'), ('ARC', 'Arcanismo'), ('MED', 'Medicina'), ('FUR', 'Furtividade'), ('INV', 'Investigação'), ('HIS', 'História'), ('ATU', 'Atuação'), ('PER', 'Persuação'), ('0', 'VAZIO'), ('PRE', 'Prestidigitação')], default='0', max_length=3), default=list, size=None),
        ),
        migrations.AlterField(
            model_name='classe',
            name='proficiencias',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, choices=[('ArdrP', 'Armaduras Pesadas'), ('0', 'VAZIO'), ('ArmaM', 'Armas Marcials'), ('ArmaS', 'Armas Simples'), ('ArdrM', 'Armaduras Médias'), ('ArdrL', 'Armaduras Leves')], default='0', max_length=5), default=list, size=None),
        ),
    ]