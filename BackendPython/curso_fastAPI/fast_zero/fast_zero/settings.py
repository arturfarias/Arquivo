from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

print('Procurando .env em:', Path(__file__).resolve().parent.parent / '.env')
print('Existe?', (Path(__file__).resolve().parent.parent / '.env').exists())


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file='.env', env_file_encoding='utf-8'
    )
    DATABASE_URL: str
