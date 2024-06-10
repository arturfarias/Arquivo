import telebot
import re
from classes.roll import Roll

KEY = "1016861846:AAEbE_MbdXq2-iOa-e859UnwT2RAztOMWrE"
bot = telebot.TeleBot(KEY)

roll = Roll()

def getParametros(text):
    return text.split(" ")

def validar(lista):
    dados = re.match(r'([0-9]*?d[0-9]+|[0-9]*){1}([+-/*]([0-9]*?d[0-9]+|[0-9]*))*$', lista[1])
    tamanho = len(lista)
    if (tamanho > 4 or not dados or re.search(r'/0+$', lista[1]) ):
        raise
    elif(tamanho == 4):
            if( not re.match(r'\$((r\+|r-|iv|rr)[0-9]+)+$', lista[3])): raise
            return (lista[1] + lista[3], lista[2])
    elif(tamanho == 3 and re.match(r'\$((r\+|r-|iv|rr)[0-9]+)+$', lista[2])):
            return (lista[1] + lista[2], "")
    elif(tamanho == 3 and re.match(r'[^$](.)+$', lista[2]) ):
        return (lista[1], lista[2])
    elif(tamanho == 2):
        return (lista[1], "")

@bot.message_handler(commands=["roll","r"])
def roller(session):
    try:
        lista, txt = validar(getParametros(session.text))
        valores = roll.rolagemComum(lista)
        bot.send_message(session.chat.id,"{} Rolou *{}*: {}".format(str(session.from_user.first_name), txt, valores),parse_mode='Markdown')
    except:
        bot.send_message(session.chat.id, "Formato invalido")

@bot.message_handler(commands=["sheet"])
def sheet(session):
    bot.reply_to(session,"Não Implementado")

@bot.message_handler(commands=["images"])
def images(session):
    bot.reply_to(session,"Não Implementado")

@bot.message_handler(commands=["sound"])
def sound(session):
    bot.reply_to(session,"Não Implementado")




bot.polling()

# bot.reply_to(session, "{} Rolou: {}".format(str(session.from_user.first_name,valores)))