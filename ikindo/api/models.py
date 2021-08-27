from django.db import models

# Create your models here.

class Backup(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=256, default='ERR_MISSING_NAME')
    content = models.TextField()
