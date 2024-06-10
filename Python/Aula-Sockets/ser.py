import socket

tcp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# informa o ip do servidor e a porta a qual ele deve ficar escutando 
tcp.bind(("localhost",5000))
# avisa que o mesmo pode receber conexões Uma valor pode ser passado para a quantidade de conexões 
tcp.listen()

while True:
    print("Esperando um cliente")
    # trava o programa até que alguma conexão seja iniciada, con armazena os dados da conexão, address os dados de quem se conectou 
    con, address = tcp.accept()
    while True:
    #obtem os dados enviados pelo cliente, recebe o tamanho de cada pacote 
        msg = con.recv(1024)
        print("recebeu: {}".format(msg))
        
    # e true se existir mensagens 
        if msg:
            print("Enviando o valor + 1")
    # decode converte a array de bytes para string
            msg = int(msg.decode()) + 1
    # envia de volta ao cliente 
            con.send(str(msg).encode())
        else:
            break
tcp.close()

