import mysql.connector
from mysql.connector import Error

import json as j


try:
    with open("conector.json", 'r') as arquivo:
        config = j.load(arquivo)
except FileNotFoundError:
    print("Erro: O arquivo json não foi encontrado.")

def o_sql():
    return mysql.connector.connect(host = config["HOST"], user = config["USER"], password = config["PASSWORD"], database = config["DATABASE"])
    

