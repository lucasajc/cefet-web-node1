var fs = require('fs');

let caminho = process.argv[2];
let conteudo = fs.readFileSync(caminho).toString();
let quantidade = 0;

for(let i in conteudo){
	if(conteudo[i] ==='\n'){
		quantidade++;
	}
}

console.log('Foram encontrados '+quantidade+' quebras de linha no arquivo'+caminho);

