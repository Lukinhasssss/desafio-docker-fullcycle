# Desafio Nginx com Node.js
## Desafio do módulo de Docker do Curso FullCycle 3.0

### Descrição do desafio
-  A ideia principal deste desafio é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

**O retorno da aplicação node.js para o nginx deverá ser:**
```html
<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.
```

### Rodando o projeto na sua máquina
```
git clone https://github.com/Lukinhasssss/desafio-docker-fullcycle.git

cd desafio_nginx_com_node

docker-compose up -d
```