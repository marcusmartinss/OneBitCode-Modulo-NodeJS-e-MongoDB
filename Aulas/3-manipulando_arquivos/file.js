const fs =  require('fs');

/* 
fs.writeFile('test.txt', 'Olá NodeJS\n', err => {
    console.log(err);
}) // Se nao existe, ele cria, se existe, apaga tudo e escreve novamente

fs.appendFile('test.txt', 'Olá NodeJS\n', err => {
    console.log(err);
}) // Adiciona um conteudo ao fim do texto ja existente

fs.rename('test.txt', 'test2.txt', err => console.log(err));
// renomeia o nome do arquivo

fs.unlink('test2.txt', err => console.log(err));
// remove o arquivo
*/

console.log(__dirname);
// __dirname é uma variável de ambiente com o caminho
// para o diretório atual que o node esta