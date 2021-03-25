let custo = 10;
let valorVenda = 96.30;

let valorCustoTotal = custo + custo*0.2;
let lucro = valorVenda - valorCustoTotal;

if( custo < 0 || valorVenda < 0) {
    console.log('Erro, confira os valores de entrada');
    return;
} else {
    console.log(lucro*1000);
    return lucro*1000;
}

