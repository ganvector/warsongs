# Generated by Django 2.2.7 on 2020-01-19 00:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('personagem', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='personagem',
            name='campanha',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='campanha.Campanha'),
        ),
    ]