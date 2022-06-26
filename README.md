# Codifica - Demo API

**API** bem simples construída utilizando **Node.JS** para introduzir e praticar os seguintes assuntos:

- APIs
- Comunicação Front x Back
- HTTP e principais verbos (GET, POST, PUT, DELETE)
- Status code
- JSON

## Endpoints

### 1️⃣ Teste inicial
Apenas um endpoint para testar se a API está publicada e rodando corretamente.

- URL: https://codifica-demo-api.herokuapp.com/api/v1
- Verbo: `GET`

Resultado (`200`):
```json
{
    "nome": "Demo API",
    "versao": "1.0"
}
```

### 2️⃣ Users
Endpoint que retorna a listagem completa de usuários disponíveis.

- URL: https://codifica-demo-api.herokuapp.com/api/v1/users
- Verbo: `GET`

Resultado (`200`):
```json
[
    {
        "nome": "Usuário 1",
        "email": "usuario1@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 2",
        "email": "usuario2@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 3",
        "email": "usuario3@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 4",
        "email": "usuario4@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 5",
        "email": "usuario5@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 6",
        "email": "usuario6@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 7",
        "email": "usuario7@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 8",
        "email": "usuario8@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 9",
        "email": "usuario9@basesocial.org",
        "senha": "base@123"
    },
    {
        "nome": "Usuário 10",
        "email": "usuario10@basesocial.org",
        "senha": "base@123"
    }
]
```

### 3️⃣ Login
Endpoint que realiza um login bem simples baseado no `email` e `senha` fornecidos e tem dois resultados possíveis.

- URL: https://codifica-demo-api.herokuapp.com/api/v1/users/login
- Verbo: `POST`
- Cabeçalhos:
    - `Content-Type: application/json`

Corpo da Requisição (`JSON`):
```json
{
    "email": "usuario1@basesocial.org",
    "senha": "base@123"
}
```

Resultado positivo (`200`):
```json
{
    "mensagem": "Login feito com sucesso"
}
```

Resultado negativo (`404`):
```json
{
    "mensagem": "Login ou senha incorretos"
}
```