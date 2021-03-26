let score = 155;

if(score >= 90 && score<=100){
    console.log('A')
    return 'A';
} else if(score >= 80 && score<90){
    console.log('B')
    return 'B'
} else if(score >= 70 && score<80){
    console.log('C')
    return 'C'
} else if(score >= 60 && score<70){
    console.log('D')
    return 'D'
} else if(score >= 50 && score<60){
    console.log('E')
    return 'E'
} else if(score >= 0 && score<50){
    console.log('F')
    return 'F'
} else {
    console.log('ERRO')
    return 'Erro, número fora da faixa'
}