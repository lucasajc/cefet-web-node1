let soma=0;

for(let i in process.argv){
	if(i>=2){
		soma += Number(process.argv[i]);
	}
}

console.log(soma);
