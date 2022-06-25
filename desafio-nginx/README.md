## Nginx com Node.js - Curso

Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação `node.js` para o `nginx` deverá ser:

```html
<h1>Full Cycle Rocks!</h1>
```

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: `8080`.

## Instruções

- Para iniciar a aplicação utilize `docker-compose up -d`
- O cadastro de pessoas pode ser feito de duas formas.
   - Por meio da api que está exposta na porta `9000`
   - Por meio de query param na rota `http://localhost:8080?name=Wesley` caso não seja passado nenhum parametro
     um nome default será cadastrado.

### API
 - API estará disponivel em `http://localhost:9000`
 - `GET /people` - Lista de pessoas cadastradas
 - `POST /people` - Cadastrar uma pessoas.
   - Payload `{"name": ""}`
