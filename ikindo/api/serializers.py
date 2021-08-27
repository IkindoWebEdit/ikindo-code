from rest_framework import serializers
from api.models import Backup

class BackupSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    date = serializers.DateTimeField()
    title = serializers.CharField(required=True, allow_blank=False, max_length=256)
    content = serializers.CharField(required=True, allow_blank=True)

    def create(self, validated_data):
        return Backup.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
