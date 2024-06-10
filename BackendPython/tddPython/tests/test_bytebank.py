from ..codigo.bytebank import Funcionario
import pytest
from pytest import mark

class TesteClass:
    def test_quando_idade_recebe_13_03_2000_retornar_23(self):
        entrada = '13/03/2000'
        esperado = 23

        funcionario_teste = Funcionario('Lucas Carvalho',entrada, 1111)

        resultado = funcionario_teste.idade()

        assert resultado == esperado
    
    def test_quando_sobrenome_recebe_Lucas_carvalho_deve_retornar_carvalho(self):
        entrada = '  Lucas Carvalho '
        esperado = 'Carvalho'

        funcionario_teste = Funcionario('Lucas Carvalho',entrada, 1111)

        resultado = funcionario_teste.sobrenome()

        assert resultado == esperado

    def test_quando_decrecimo_salario_recebe_100000_deve_retornar_90000(self):
        entrada = 100000
        entrada_nome = 'Paulo Bragança'
        esperado = 90000

        funcionario_teste = Funcionario(entrada_nome,'11/11/2000', entrada)


        funcionario_teste.decrecimo_salario() 

        resultado = funcionario_teste.salario

        assert resultado == esperado

    @mark.calcular_bonus
    def test_quando_calcular_bonus_recebe_1000_deve_retornar_100(self):
        entrada = 1000
        esperado = 100

        funcionario_teste = Funcionario('Teste','11/11/2000', entrada)

        resultado = funcionario_teste.calcular_bonus()

        assert resultado == esperado
    
    @mark.calcular_bonus
    def test_quando_calcular_bonus_recebe_1000000000_deve_retornar_exception(self):
        with pytest.raises(Exception):
            entrada = 1000000000

            funcionario_teste = Funcionario('Teste','11/11/2000', entrada)

            resultado = funcionario_teste.calcular_bonus()

            assert resultado

    def test_retorno_str(self):
        nome, data_nascimento, salario = 'Teste', '12/03/2000', 1000
        esperado = 'Funcionario(Teste, 12/03/2000, 1000)'

        funcionario_teste = Funcionario(nome, data_nascimento, salario)
        resultado = str(funcionario_teste)

        assert resultado == esperado