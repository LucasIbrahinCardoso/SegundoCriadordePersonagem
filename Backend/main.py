from fastapi import FastAPI
from contextlib import asynccontextmanager
from database import db

@asynccontextmanager
async def lifespan(app: FastAPI):
    db.conectar()
    yield
    print("Fechando...")
    db.desconectar()

app = FastAPI(
    title="Criador de Personagem V2",
    version="0.1.0",
    description="Tentando novamente fazer o Criador de Personagem",
    lifespan=lifespan
)

