let n= 7;

if(n % 2 ===0){
    console.log('Erro, numero par. O número escolhido deve ser ímpar')
    return
}

let positionLeft = Math.ceil(1+(n/2));
let positionRight = Math.ceil((n/2)-1);



let asterisco = ''

for (let i=1; i<=n; i +=1 ){
    positionLeft -= 1
    positionRight += 1
    for(let j=1; j<=n; j+=1){
        if(j===positionLeft || j===positionRight || positionRight===n){
            asterisco = asterisco + '*';
        }else{
            asterisco = asterisco + ' '
        }

    }
    console.log(asterisco)
    asterisco = ''

    if(positionRight===n){
        break
    }
}
