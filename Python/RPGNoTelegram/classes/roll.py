import random
import re


class Roll():

    def __init__(self):
       self.operacoes = r'[+-/*]$'

    def rolagemComum(self,text):
        lista,args = self.separador(text)
        tupla = ""

        lista = self.formataTermos(lista)

        for elemento in lista:
            if("d" in elemento):     
                tupla += "({})".format(self.gerarTuplaDeValores(elemento))
            elif(re.match(self.operacoes,elemento)):
                tupla += " {} ".format(elemento)
            else:
                tupla += "{}".format(elemento)
        
        if(args):
            return args #  FALTA FAZER LER E INTERPRETAR OS ARGS (usar o search do re para achar os termos?)
        return "{} = {}".format(tupla,int(eval(tupla)))

    def separador(self,sequencia_de_termos):
        print("ok")
        termo = ""
        lista_de_termos = []
        args = None
        for elemento in sequencia_de_termos:
            if(elemento == "$"):
                args = re.search(r'\$.+$', sequencia_de_termos).group(0)[1:]
                break
            elif(re.match(self.operacoes,elemento)):
                lista_de_termos.append(termo)
                lista_de_termos.append(elemento)
                termo=""
            else:
                termo += elemento
        lista_de_termos.append(termo)
        return (lista_de_termos,args)

    def formataTermos(self,lista_de_termos):
        for termo in lista_de_termos:
            if(termo[0] == "d"):
                lista_de_termos[lista_de_termos.index(termo)] = "1" + termo
        return lista_de_termos

    def gerarTuplaDeValores(self,termo):
        dados,lados = map(int, termo.split("d"))
        ultimo_elemento = dados-1
        resultados = ""

        for x in range(dados):
            resultados += str(random.randint(1,lados))
            if(x != ultimo_elemento):
                resultados += " + "
        return resultados