//importando minha base de dados
const filmes = require('./database')

// pegar input do usuário (categoria)

const readline = require('readline-sync')

const entIncial = readline.question ('Deseja buscar um filme? S/N')

//verificar resposta do usuário. Se sim, mostra as categorias disponíveis e pergunta qual categoria deseja
//Se não, mostra todos os filmes em ordem crescente pela quantidade de páginas

if(entIncial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('1- Ação', '/ 2- Comédia', '/ 3- Romance', '/ 4- Drama','/5- Terror')

    var entCategoria = readline.question ('Qual categoria você escolhe? (Digite o número correspondente)')

    //para que não haja erro de digitação do usuário, foi solicitar digito de cada categoria, o switch tranforma
    //o digito no nome da categoria para utilizar no arrow function abaixo.
    switch (entCategoria){
        case '1':
            entCategoria = 'Ação'
            break;
        case '2':
            entCategoria = 'Comédia'
            break;
        case '3':
            entCategoria = 'Romance'
            break;
        case '4':
            entCategoria = 'Drama'
            break;
        case '5':
            entCategoria = 'Terror'
            break;        
    }
    //retornando lista de filme com base na categoria solicitada pelo usuário
    const retorno = filmes.filter(filme => filme.categoria === entCategoria)
    console.table(retorno)

} else {
    //retornando lista de filmes da database
    const filmesOrdenados = filmes.sort((a,b) => a.duracao - b.duracao)
    console.log ('Esses são todos os livros disponíveis:')
    console.table(filmesOrdenados)
}