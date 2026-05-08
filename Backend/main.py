from fastapi import FastAPI
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware
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

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)