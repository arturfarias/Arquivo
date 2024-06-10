from datetime import date
from datetime import datetime

class Funcionario:
    def __init__(self, nome, data_nascimento, salario):
        self._nome = nome
        self._data_nascimento = data_nascimento
        self._salario = salario

    @property
    def nome(self):
        return self._nome

    @property
    def salario(self):
        return self._salario

    def idade(self):
        data_objeto = datetime.strptime(self._data_nascimento, "%d/%m/%Y")
        ano_atual = date.today().year
        return ano_atual - data_objeto.year
    
    def sobrenome(self):
        nome_completo = self.nome.strip()
        nome_quebrado = nome_completo.split(' ')
        return nome_quebrado[-1]
    
    def _eh_socio(self):
        sobrenomes = ['Bragança', 'Windsor', 'Bourbon', 'Yamato', 'Al Saud', 'Khan', 'Tudor', 'Ptolomeu']
        return self._salario >= 100000 and self.sobrenome() in sobrenomes
    
    def decrecimo_salario(self):
        if self._eh_socio() :
            decrecimo = self._salario * 0.1
            self._salario -= decrecimo
            

    def calcular_bonus(self):
        valor = self._salario * 0.1
        if valor > 1000:
            raise Exception('O salario e muito alto para receber um bonus')
        return valor

    def __str__(self):
        return f'Funcionario({self._nome}, {self._data_nascimento}, {self._salario})'