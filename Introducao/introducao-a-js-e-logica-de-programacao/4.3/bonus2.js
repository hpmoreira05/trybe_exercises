let number = 89;

let counter = 0;

for (i = number; i>0; i-=1){
    if(number % i ===0){
        counter +=1;
    }
}

if(counter === 2){
    console.log('Número primo')
} else {
    console.log('Número não é primo')
}