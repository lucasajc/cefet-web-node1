var fs = require('fs');

let caminho = process.argv[2];
let quantidade = 0;

let conteudo = fs.readFile(caminho,'utf8',function callback(err,data){
	if(err===null){
		for(let i in data){
			if(data[i] ==='\n'){
			quantidade++;
			}
		}	
		console.log('Foram encontrados '+quantidade+' quebras de linha no arquivo'+caminho);
	}
	else{
		console.log('Erro: '+err);	
	}
});





