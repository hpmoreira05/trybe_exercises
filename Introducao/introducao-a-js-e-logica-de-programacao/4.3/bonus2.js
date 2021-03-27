let primos = [2, 3, 5, 7];

let n = 100;

for(let i=1; i<=n; i += 1){
    if(i % 2 !==0 && i % 3 !==0 && i % 5 !== 0 && i % 7 !== 0){
        primos.push(i)
    }
}

console.log(primos)