# Generated by Django 2.2.7 on 2020-01-19 01:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('personagem', '0005_auto_20200119_0134'),
    ]

    operations = [
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_car',
            new_name='base_car',
        ),
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_con',
            new_name='base_con',
        ),
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_des',
            new_name='base_des',
        ),
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_for',
            new_name='base_for',
        ),
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_int',
            new_name='base_int',
        ),
        migrations.RenameField(
            model_name='personagem',
            old_name='vh_sab',
            new_name='base_sab',
        ),
    ]
