import socket

# inicia o socket, AF_INET representa o envio via internet e SOCK_STREAM o protocolo TCP/IP
tcp = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

# pede uma conexão com o servidor no ip “localhost” na porta 5000
tcp.connect(("localhost", 5000))

message = input("Digite um numero: ")

# format e a forma oficial de formatar strings com python
print("Enviando o numero: {}".format(message))

# envia uma mensagens ao servidor encode() converte para bytes
tcp.send(message.encode())

# recebe mensagens enviadas do servidor 
msg = tcp.recv(1024)
print("foi recebido: {}".format(msg))

# Finaliza a conexão 
tcp.close()

