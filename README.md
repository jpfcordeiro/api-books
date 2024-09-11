# Documentação da API
![NPM](https://img.shields.io/npm/l/react)

# API Bookshelf
Esta API é utilizada para gerenciar um catálogo de livros, permitindo operações de CRUD.
> Create, Read, Update, Delete (Criar, Ler, Atualizar e Deletar)

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

## Estrutura do JSON da API
```
{
	"title": "Título do livro",
	"author": ["Autor do livro"],
	"yearPublication": "Ano de publicação do livro",
	"description": "Descrições adicionais sobre o livro"
	[
		{
			"edition": "Qual a edição do livro",
			"publisher": "Editora responsável pela publicação",
			"genre": ["Gênero do livro"],
			"type": "Tipo do livro (Ebook ou Físico)",
			"isbn": "International Standard Book Number - ISBN 13
					(Número Internacional Padrão de Livro)",
		}
	]
}
```
> As chaves (keys) "author" e "genre" são arrays, para caso de multi valores precisarem ser inseridos.

## ENDPOINTS
### <span style = "color:#00FF00; font-weight: bold">POST</span> /book
Esse endpoint é responsável por cadastrar um novo livro no banco de dados.

#### Parâmetros:
- title: String;
- author: [String];
- yearPublication: Number;
- description:
	- edition: String;
	- publisher: String;
	- genre: [String];
	- type: String;
	- isbn: String;

##### Exemplo de requisição:
```
{
	"title": "Manifesto do partido comunista",
	"author": [
		"Marx, Karl",
		"Engels, Friedrich"
	],
	"yearPublication": 2000,
	"description": [
		{
			"edition": "2º Edição",
			"publisher": "Martin Claret",
			"genre": [
				"História",
				"Sociologia",
				"Filosofia"
			],
			"type": "Físico",
			"language": "Português",
			"isbn": "857-2324186"
		}
	]
}
```

#### Respostas:
<span style = "color:#00FF00; font-weight: bold">Criado! 201</span><br>
Caso essa resposta aconteça, o novo livro foi criado com sucesso.

##### Exemplo de resposta:
```
{
	"Success": "Manifesto do partido comunista' cadastrado com sucesso"
}
```

<span style = "color:#FF0000; font-weight: bold">Erro Interno do Servidor! 500</span><br>
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

##### Exemplo de resposta:
```
{
    "err": "Erro interno do servidor!"
}
```

### GET /books
Esse endpoint é responsável por retornar a listagem de todos os livros cadastrados no banco de dados.

#### Parâmetros:
*Nenhum*

#### Respostas:
<span style = "color:#00FF00; font-weight: bold">OK! 200</span><br>
Caso essa resposta aconteça, você vai receber a listagem de todos os livros cadastrados.

##### Exemplo de resposta:
```
{
	"books": [
		{
			"_id": "66df3950b80e0864bebdccde",
			"title": "Fahrenheit 451",
			"author": [
				"Bradbury, Ray"
			],
			"yearPublication": 2012,
			"description": [
				{
					"edition": "1º Edição",
					"publisher": "Biblioteca Azul",
					"genre": [
						"Romance",
						"Ficção científica",
						"Ficção distópica",
						"Ficção Política"
					],
					"type": "Físico",
					"language": "Português",
					"isbn": "9788525052247",
					"_id": "66df3950b80e0864bebdccdf"
				}
			],
			"__v": 0
		},
		{
			"_id": "66df39e63194ac6032997422",
			"title": "Admirável Mundo Novo",
			"author": [
				"Huxley, Aldous"
			],
			"yearPublication": 2022,
			"description": [
				{
					"edition": "23º Edição",
					"publisher": "Biblioteca Azul",
					"genre": [
						"Romance",
						"Ficção científica",
						"Ficção distópica"
					],
					"type": "eBook",
					"language": "Português",
					"isbn": "B0BCX3Z8HB",
					"_id": "66df39e63194ac6032997423"
				}
			],
			"__v": 0
		},
		{
			"_id": "66df3bb7c5e3fe845488ea99",
			"title": "Manifesto do partido comunista",
			"author": [
				"Marx, Karl",
				"Engels, Friedrich"
			],
			"yearPublication": 2000,
			"description": [
				{
					"edition": "2º Edição",
					"publisher": "Martin Claret",
					"genre": [
						"História",
						"Sociologia",
						"Filosofia"
					],
					"type": "Físico",
					"language": "Português",
					"isbn": "8572324186",
					"_id": "66df3bb7c5e3fe845488ea9a"
				}
			],
			"__v": 0
		},
		{
			"_id": "66e1a4c9e905c92685320020",
			"title": "A Divina Comédia",
			"author": [
				"Alighieri, Dante"
			],
			"yearPublication": 2017,
			"description": [
				{
					"edition": "4º Edição",
					"publisher": "Editora 34",
					"genre": [
						"Poesia"
					],
					"type": "Físico",
					"language": "Português",
					"isbn": "978-8573261202",
					"_id": "66e1a4c9e905c92685320021"
				}
			],
			"__v": 0
		}
	]
}
```

<span style = "color:#FF0000; font-weight: bold">Erro Interno do Servidor! 500</span><br>
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.
> Motivos podem incluir falhas na comunicação com o banco de dados.

##### Exemplo de resposta:
```
{
    "err": "Erro interno do servidor!"
}
```

### GET /book/ID
Esse endpoint é responsável por retornar as informações de um livro específico pelo seu **ID**.

#### Parâmetros:
- **ID do livro a ser solicitado**.

##### Exemplo de requisição:
```
/book/66df3bb7c5e3fe845488ea99
```

#### Respostas:
<span style = "color:#00FF00; font-weight: bold">OK! 200</span><br>
Caso essa resposta aconteça, você vai receber as informações do livro solicitado.

##### Exemplo de resposta:
```
{
	"book": {
		"_id": "66df3bb7c5e3fe845488ea99",
		"title": "Manifesto do partido comunista",
		"author": [
			"Marx, Karl",
			"Engels, Friedrich"
		],
		"yearPublication": 2000,
		"description": [
			{
				"edition": "2º Edição",
				"publisher": "Martin Claret",
				"genre": [
					"História",
					"Sociologia",
					"Filosofia"
				],
				"type": "Físico",
				"language": "Português",
				"isbn": "857-2324186",
				"_id": "66df3bb7c5e3fe845488ea9a"
			}
		],
		"__v": 0
	}
}
```

<span style = "color:#FAA500; font-weight: bold">Não Encontrado! 404</span><br>
Caso essa resposta aconteça, significa que o livro com o ID fornecido não foi encontrado.

##### Exemplo de resposta:
```
{
    "err": "Livro não encontrado!"
}
```

<span style = "color:#FAA500; font-weight: bold">Requisição Inválida! 400</span><br>
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

##### Exemplo de resposta:
```
{
    "err": "ID inválido!"
}
```

<span style = "color:#FF0000; font-weight: bold">Erro Interno do Servidor! 500</span><br>
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

##### Exemplo de resposta:
```
{
    "err": "Erro interno do servidor!"
}
```

### <span style = "color:#ff4D00; font-weight: bold">PUT</span> /book/id
Esse endpoint é responsável por atualizar as informações de um livro específico pelo seu **ID**.

#### Parâmetros:
- **ID**;
- **Valor que será alterado**.

##### Exemplo de requisição:
```
/book/66df3bb7c5e3fe845488ea99

{
	"title": "Manifesto do partido comunista",
		"author": [
			"Marx, Karl",
			"Engels, Friedrich"
		],
		"yearPublication": 2000,
		"description": [
			{
				"edition": "2º Edição",
				"publisher": "Martin Claret",
				"genre": [
					"História",
					"Sociologia",
					"Filosofia"
				],
				"type": "Físico",
				"language": "Português",
				"isbn": "8572324186" (Valor que será alterado)
		}
	]
}
```
> "isbn": "857-2324186" (Valor original)

#### Respostas:
<span style = "color:#00FF00; font-weight: bold">OK! 200</span><br>
Caso essa resposta aconteça, as informações do livro foram atualizadas com sucesso.

##### Exemplo de resposta:
```
{
	"Success": "Livro 'Manifesto do partido comunista' atualizado com sucesso."
}
```

<span style = "color:#FAA500; font-weight: bold">Requisição Inválida! 400</span><br>
Caso essa resposta aconteça, significa que o ID fornecido é inválido ou a requisição contém dados malformados.

##### Exemplo de resposta:
```
{
    "err": "ID inválido ou dados malformados!"
}
```

<span style = "color:#FF0000; font-weight: bold">Erro Interno do Servidor! 500</span><br>
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

##### Exemplo de resposta:
```
{
    "err": "Erro interno do servidor!"
}
```

### <span style = "color:#FF0000; font-weight: bold">DELETE</span> /book/id
Esse endpoint é responsável por deletar um livro específico pelo seu **ID**.

#### Parâmetros:
- **ID**

##### Exemplo de requisição:
```
/book/66df3bb7c5e3fe845488ea99
```

#### Respostas:
<span style = "color:#00FF00; font-weight: bold">Sem Conteúdo! 204</span><br>
Caso essa resposta aconteça, o livro foi deletado com sucesso e não há conteúdo para retornar ao cliente.

##### Exemplo de resposta:
```
Nenhum conteúdo retornado.
```

<span style = "color:#FAA500; font-weight: bold">Requisição Inválida! 400</span><br>
Caso essa resposta aconteça, significa que o ID fornecido é inválido.

##### Exemplo de resposta:
```
{
    "err": "ID inválido!"
}
```

<span style = "color:#FF0000; font-weight: bold">Erro Interno do Servidor! 500</span><br>
Caso essa resposta aconteça, significa que ocorreu um erro interno no servidor.

##### Exemplo de resposta:
```
{
    "err": "Erro interno do servidor!"
}
```