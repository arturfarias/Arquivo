from rest_framework import serializers
from clientes.models import Cliente
from  validate_docbr import CPF
import re

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'
    
    def validate_cpf(self, cpf):
        cpfValidate = CPF()
        if not cpfValidate.validate(cpf):
            raise serializers.ValidationError("Número CPF inválido")
        return cpf
    
    def validate_nome(self, nome):
        if not nome.isalpha():
            raise serializers.ValidationError("Não inclua numeros nesse campo")
        return nome
    
    def validate_rg(self, rg):
        if len(rg) != 9:
            raise serializers.ValidationError("O RG deve ter 9 digitos")
        return rg
    
    def validate_celular(self, celular):
        modelo = "[0-9]{2} [0-9]{5}-[0-9]{4}"
        if not re.findall(modelo, celular):
            raise serializers.ValidationError("O número de celular deve seguir este modelo: 00 00000-0000")

        return celular