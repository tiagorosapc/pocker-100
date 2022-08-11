function perguntarIdade(){

    const ano = Number( prompt("Ano de nascimento") );
    
    const anoAtual = 2022;
    const idade = anoAtual - ano;

    if ( idade > 17 ) {
        alert('Você pode jogar');
    }else if (idade === 17){
        alert('Voce esta quase lá');
    }else{
        alert('Você não pode jogar');
    }
    
}