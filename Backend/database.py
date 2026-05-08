import mysql.connector
from mysql.connector import Error
import os

import json as j


try:
    with open("conector.json", 'r') as arquivo:
        config = j.load(arquivo)
except FileNotFoundError:
    print("Erro: O arquivo json não foi encontrado.")

class BancoDados:
    def __init__(self):
        self.host = config["HOST"]
        self.user = config["USER"]
        self.password = config["PASSWORD"]
        self.database = config["DATABASE"]
        self.conexao = None

    def conectar(self):
        try:
            self.conexao = mysql.connector.connect(
                host=self.host,
                user = self.user,
                password = self.password,
                database = self.database
            )
            print("Conectado ao MySQL")
            return True
        except Error as erro:
            print(f"Erro ao conectar: {erro}")
            return False
    
    def desconectar(self):
        if self.conexao and self.conexao.is_connected():
            self.conexao.close()
            print("Desconectado do MySQL")

db = BancoDados()