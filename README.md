# Codifica - Demo API - Alunos Base Social

**API** bem simples construída utilizando **Node.JS** para introduzir e praticar os seguintes assuntos:
asdjfçladsfjçalsdkf
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

### 4️⃣.1️⃣ Produtos (Petshop)
Endpoint que retorna a listagem completa de produtos disponíveis.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/petshop/products
- Verbo: `GET`

Resultado (`200`):
```json
[
  {
    "id": 0,
    "nome": "Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos",
    "img": "https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/0/image",
    "preco": 169.01,
    "categoria": "racao",
    "descricao": "A Ração Seca Nutrilus..."
  },
  ...
]
```

### 4️⃣.2️⃣ Produtos (Diário de Um Banana)
Endpoint que retorna a listagem completa de produtos disponíveis.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products
- Verbo: `GET`

Resultado (`200`):
```json
[
  {
    "id": 1,
    "nome": "Diário de um Banana",
    "img": "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/1/image",
    "preco": 27.52,
    "categoria": "livro"
  },
  ...
]
```

### 5️⃣.1️⃣ Produto por ID (Petshop)
Endpoint que retorna um produto, de acordo com o `ID` fornecido.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/:id
- Verbo: `GET`

Para consultar o produto de `ID = 10`:  
- https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/10

Resultado (`200`):
```json
{
  "id": 10,
  "nome": "Comedouro e Bebedouro Duplo em Inox com Suporte",
  "img": "https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/10/image",
  "preco": 54.89,
  "categoria": "acessoriosAlimentacao",
  "descricao": "O Comedouro Duplo Inox com Suporte..."
}
```

Se o `ID` não for encontrado o resultado será:  
- https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/100

Resultado (`404`):
```json
{
  "mensagem": "Produto não encontrado com o ID: 100"
}
```

### 5️⃣.2️⃣ Produto por ID (Diário de Um Banana)
Endpoint que retorna um produto, de acordo com o `ID` fornecido.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/:id
- Verbo: `GET`

Para consultar o produto de `ID = 10`:  
- https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/10

Resultado (`200`):
```json
{
 "id": 10,
  "nome": "Diario de um Banana 10: Bons Tempos",
  "img": "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/10/image",
  "preco": 27.49,
  "categoria": "livro"
}
```

Se o `ID` não for encontrado o resultado será:  
- https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/100

Resultado (`404`):
```json
{
  "mensagem": "Produto não encontrado com o ID: 100"
}
```

### 6️⃣.1️⃣ Produtos por Categoria (Petshop)
Endpoint que retorna a listagem de produtos disponíveis por Categoria fornecida.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/category/:category
- Verbo: `GET`

Para consultar os produtos da Categoria `racao`:  
- https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/category/racao

Resultado (`200`):
```json
[
  {
    "id": 0,
    "nome": "Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos",
    "img": "https://codifica-demo-api.herokuapp.com/api/v2/petshop/products/0/image",
    "preco": 169.01,
    "categoria": "racao",
    "descricao": "A Ração Seca Nutrilus..."
  },
  ...
]
```

Se nenhum resultado for encontrado um array vazio será retornado:
```json
[]
```

### 6️⃣.2️⃣ Produtos por Categoria (Diário de Um Banana)
Endpoint que retorna a listagem de produtos disponíveis por Categoria fornecida.

- URL: https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/:category
- Verbo: `GET`

Para consultar os produtos da Categoria `camiseta`:  
- https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/category/camiseta

Resultado (`200`):
```json
[
  {
    "id": 23,
    "nome": "Camiseta Diário de um Banana",
    "img": "https://codifica-demo-api.herokuapp.com/api/v2/diariodeumbanana/products/23/image",
    "preco": 42.99,
    "categoria": "camiseta"
  },
  ...
]
```

Se nenhum resultado for encontrado um array vazio será retornado:
```json
[]
```
