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

### 4️⃣ Produtos
Endpoint que retorna a listagem completa de produtos disponíveis.

- URL: https://codifica-demo-api.herokuapp.com/api/v1/products
- Verbo: `GET`

Resultado (`200`):
```json
[
  {
    "id": 0,
    "nome": "Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos",
    "img": "https://www.petlove.com.br/images/products/250507/large/2492303_FRENTE.jpg?1635780028",
    "preco": 169.01,
    "categoria": "racao",
    "descricao": "A Ração Seca Nutrilus..."
  },
  {
    "id": 1,
    "nome": "Ração Magnus Todo Dia Sabor Carne para Cães Adultos",
    "img": "https://www.petlove.com.br/images/products/225830/large/Ra%C3%A7%C3%A3o_Magnus_Todo_Dia_Sabor_Carne_para_C%C3%A3es_Adultos_311810.jpg?1627724051",
    "preco": 201.9,
    "categoria": "racao",
    "descricao": "A Ração Magnus Todo Dia..."
  },
  {
    "id": 2,
    "nome": "Ração Seca True para Cães Adultos Raças Médias e Grandes",
    "img": "https://www.petlove.com.br/images/products/255531/product/Ra%C3%A7%C3%A3o_Seca_True_para_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_e_Grandes_10_1KG_2638254.png?1653046196",
    "preco": 227.92,
    "categoria": "racao",
    "descricao": "A Ração Seca True para Cães Adultos..."
  },
  ...
]
```

### 5️⃣ Produto por ID
Endpoint que retorna um produto, de acordo com o `ID` fornecido.

- URL: https://codifica-demo-api.herokuapp.com/api/v1/products/:id
- Verbo: `GET`

Para consultar o produto de `ID = 10`:  
- https://codifica-demo-api.herokuapp.com/api/v1/products/10

Resultado (`200`):
```json
{
  "id": 10,
  "nome": "Comedouro e Bebedouro Duplo em Inox com Suporte",
  "img": "https://www.petlove.com.br/images/products/187462/product/31010152.jpg?1627607228",
  "preco": 54.89,
  "categoria": "acessoriosAlimentacao",
  "descricao": "O Comedouro Duplo Inox com Suporte..."
}
```

Se o `ID` não for encontrado o resultado será:  
- https://codifica-demo-api.herokuapp.com/api/v1/products/100

Resultado (`404`):
```json
{
  "mensagem": "Produto não encontrado com o ID: 100"
}
```

### 6️⃣ Produtos por Categoria
Endpoint que retorna a listagem de produtos disponíveis por Categoria fornecida.

- URL: https://codifica-demo-api.herokuapp.com/api/v1/products/category/:category
- Verbo: `GET`

Para consultar os produtos da Categoria `racao`:  
- https://codifica-demo-api.herokuapp.com/api/v1/products/category/racao

Resultado (`200`):
```json
[
  {
    "id": 0,
    "nome": "Ração Seca Nutrilus Pro Frango & Carne para Cães Adultos",
    "img": "https://www.petlove.com.br/images/products/250507/large/2492303_FRENTE.jpg?1635780028",
    "preco": 169.01,
    "categoria": "racao",
    "descricao": "A Ração Seca Nutrilus..."
  },
  {
    "id": 1,
    "nome": "Ração Magnus Todo Dia Sabor Carne para Cães Adultos",
    "img": "https://www.petlove.com.br/images/products/225830/large/Ra%C3%A7%C3%A3o_Magnus_Todo_Dia_Sabor_Carne_para_C%C3%A3es_Adultos_311810.jpg?1627724051",
    "preco": 201.9,
    "categoria": "racao",
    "descricao": "A Ração Magnus Todo Dia..."
  },
  {
    "id": 2,
    "nome": "Ração Seca True para Cães Adultos Raças Médias e Grandes",
    "img": "https://www.petlove.com.br/images/products/255531/product/Ra%C3%A7%C3%A3o_Seca_True_para_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_e_Grandes_10_1KG_2638254.png?1653046196",
    "preco": 227.92,
    "categoria": "racao",
    "descricao": "A Ração Seca True para Cães Adultos..."
  },
  ...
]
```

Se nenhum resultado for encontrado um array vazio será retornado:
```json
[]
```