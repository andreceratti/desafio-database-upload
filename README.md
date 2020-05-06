<p align="center">
  <img src="https://i.imgur.com/Wh3jjrl.png" alt="André Ceratti da Rocha" />
</p>

# Desafio Database Upload (GoFinances Backend)

## Sobre
Este foi um desafio criado no bootcamp GoStack da Rocketseat, neste desafio foi criado o backend de uma aplicação onde podemos cadastrar transações financeiras do tipo income ou outcome e salvar no banco de dados, tendo no final um balanço.
Caso queira, é possivel importar um arquivo do tipo CSV.

## Como utilizar

É possivel rodar clonando o repositório, navegando no terminal até a pasta e rodando ela em modo de desenvolvimento com o seguinte comando:

```
yarn dev:server
```

Vai ser preciso criar um banco de dados com nome ```gostack_desafio06``` antes e checar o arquivo ```ormconfig.json``` para ver se bate com as configurações da sua maquina.

Se tudo estiver corretamente configurado, ela deve rodar no http://localhost:3333

Recomendo para testar este app o programa Insomnia, mas você pode utilizar outro de sua preferencia. As rotas utilizadas neste projeto foram:
- POST: localhost:333/transactions/import (Importação CSV)
- POST: localhost:333/transactions (Criação de nova transação)
- GET: localhost:333/transactions (Listar todas transações)
- DELETE: localhost:333/transactions/ID_Transação (Apagar uma transação)


Ao criar uma transação deve ser enviado um JSON com um title, value, type e category. Exemplo:
```
{
	"title": "Sálario",
	"value": 3000,
	"type": "income",
	"category": "Sálario"
}
```
