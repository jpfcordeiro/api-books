# Documentação da API
![NPM](https://img.shields.io/npm/l/react)

# API Books
Esta API é utilizada para gerenciar um catálogo de livros, permitindo operações de CRUD.
> Criar, Ler, Atualizar (Update) e Deletar

Tecnologias utilizadas: <br>
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=mongodb,nodejs" />
  </a>
</p>
Editor <br>
<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=vscode" />
  </a>
</p>

## Endpoints
### <font color="#FFFF00">GET</font> /books
Esse endpoint é responsável por retornar a listagem de todos os livros cadastrados no banco de dados.

#### Parâmetros:
*Nenhum*

#### Respostas:
<font color="#00FF00">OK! 200</font>: Caso essa resposta aconteça, você vai receber a listagem de todos os livros cadastrados.

Exemplo de resposta:

```
{
    "books": [
        {
            "title": "Book Title",
            "year": 2024,
            "price": 60,
            "descriptions": [
                {
                    "genre": "Action",
                    "platform": "PC",
                    "rating": "M"
                }
            ]
        },
        {
            "title": "Sea of Thieves",
            "year": 2018,
            "price": 40,
            "descriptions": [
                {
                    "genre": "Adventure",
                    "platform": "Xbox",
                    "rating": "T"
                }
            ]
        }
    ]
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor. Motivos podem incluir falhas na comunicação com o banco de dados.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - POST /book
Esse endpoint é responsável por cadastrar um novo livro no banco de dados.

#### Parâmetros:
title: Título do livro.<br>
author: Autor do livro.<br>
year: Ano de publicação do livro.<br>
description: Descrições adicionais sobre o livro: {<br>
 edition: Qual a edição do livro,<br>
 publisher: Editora responsável pela publicação,<br>
 genre: Gênero do livro,<br>
 type: Tipo do livro (Ebook ou Físico),<br>
 isbn: International Standard Book Number - ISBN 13 (Número Internacional Padrão de Livro),<br>
}

Exemplo de requisição:

```
{
    "title": "Minecraft",
    "year": 2012,
    "price": 20,
    "descriptions": [
        {
            "genre": "Sandbox",
            "platform": "PC",
            "rating": "E"
        }
    ]
}
```

#### Respostas:
##### Criado! 201
Caso essa resposta aconteça, o novo livro foi criado com sucesso.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```


### - DELETE /book/
Esse endpoint é responsável por deletar um livro específico pelo seu ID.

#### Parâmetros:
id: ID do livro a ser deletado.

#### Respostas:
##### Sem Conteúdo! 204
Caso essa resposta aconteça, o livro foi deletado com sucesso e não há conteúdo para retornar ao cliente.

Exemplo de resposta: Nenhum conteúdo retornado.

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - PUT /book/
Esse endpoint é responsável por atualizar as informações de um livro específico pelo seu ID.

#### Parâmetros:
id: ID do livro a ser atualizado.<br>
title: Título do livro.<br>
author: Autor do livro.<br>
year: Ano de publicação do livro.<br>
description: Descrições adicionais sobre o livro: {<br>
 edition: Qual a edição do livro,<br>
 publisher: Editora responsável pela publicação,<br>
 genre: Gênero do livro,<br>
 type: Tipo do livro (Ebook ou Físico),<br>
 isbn: International Standard Book Number - ISBN 13 (Número Internacional Padrão de Livro),<br>
}

Exemplo de requisição:

```
{
    "title": "Minecraft Updated",
    "year": 2013,
    "price": 25,
    "descriptions": [
        {
            "genre": "Sandbox",
            "platform": "PC",
            "rating": "E"
        }
    ]
}
```

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, as informações do livro foram atualizadas com sucesso.

Exemplo de resposta:

```
{
    "game": {
        "title": "Minecraft Updated",
        "year": 2013,
        "price": 25,
        "descriptions": [
            {
                "genre": "Sandbox",
                "platform": "PC",
                "rating": "E"
            }
        ]
    }
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

Exemplo de resposta:

```
{
    "err": "ID inválido ou dados malformados!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```

### - GET /book/
Esse endpoint é responsável por retornar as informações de um livro específico pelo seu ID.

#### Parâmetros:
id: ID do livro a ser consultado.

#### Respostas:
##### OK! 200
Caso essa resposta aconteça, você vai receber as informações do livro solicitado.

Exemplo de resposta:

```
{
    "game": {
        "title": "Minecraft",
        "year": 2012,
        "price": 20,
        "descriptions": [
            {
                "genre": "Sandbox",
                "platform": "PC",
                "rating": "E"
            }
        ]
    }
}
```

##### Não Encontrado! 404
Caso essa resposta aconteça, significa que o livro com o ID fornecido não foi encontrado.

Exemplo de resposta:

```
{
    "err": "Livro não encontrado!"
}
```

##### Requisição Inválida! 400
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

Exemplo de resposta:

```
{
    "err": "ID inválido!"
}
```

##### Erro Interno do Servidor! 500
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

Exemplo de resposta:

```
{
    "err": "Erro interno do servidor!"
}
```
