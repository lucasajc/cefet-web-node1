module.exports = function listafiltrada(caminho,tipo){

	var fs = require('fs');

	//let caminho = process.argv[2];
	//let tipo = process.argv[3];
	let caracter_ponto = '';
	let lista_filtrada = [];

	let conteudo = fs.readdir(caminho,'utf8',function callback(err,list){
		if(err===null){
			for(let i in list){
					//console.log(list);
				let tipo_analisado = [];
				for(let caracter in list[i]){
					let posicao = 0;
				
					if(list[i][caracter]==='.'){
						caracter_ponto = caracter;
					}
					if((caracter>caracter_ponto)&&(list[i][caracter]!='\n')){
						tipo_analisado.push(list[i][caracter]);
					}
				
				}
				if(tipo_analisado.join('').toString() == tipo.toString()){
						lista_filtrada.push(list[i]);
				}
			}	
			console.log('Lista de arquivos com a extensao ".'+tipo+'": '+lista_filtrada);
		}
		else{
			console.log('Erro: '+err);	
		}
	});

}


