from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from database import o_sql
from logic import Personagem

app = FastAPI(
    title="Criador de Personagem V2",
    version="0.1.2",
    description="Tentando novamente fazer o Criador de Personagem",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/salvando/")
def connectAndStore(personagem: Personagem):
    try:
        conexao = o_sql()
        cursor = conexao.cursor()

        sql = """
                INSERT INTO personagens (forca, velo, des, resi, intel, sab, von, car, influ, nome)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
            """
        valores = (
            personagem.fo,
            personagem.ve,
            personagem.de,
            personagem.re,
            personagem.inte,
            personagem.sa,
            personagem.vo,
            personagem.ca,
            personagem.influ,
            personagem.nomi
        )

        cursor.execute(sql, valores)
        conexao.commit()

        return {"Deu certo?" : "Se isso apareceu, imagino que sim.", "mensagem" : f"Personagem {personagem.nomi} salvo com sucesso"}
    
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Erro ao salvar no banco: {str(exc)}")
