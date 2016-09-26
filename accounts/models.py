from django.db import models
from django.conf import settings
# Create your models here.

class Profile(models.Model):
    class Meta:
        verbose_name = u'프로필'
        verbose_name_plural = u'프로필'
    user = models.OneToOneField(settings.AUTH_USER_MODEL)
    nick = models.CharField(verbose_name=u'별명', max_length=50, blank=True,)
