let n = 5;

let asterisco = ''

for (let i=1; i<=n; i +=1 ){
    for(let j=0; j<n; j+=1){
        asterisco = asterisco + '*'
    }
    console.log(asterisco)
    asterisco = ''
}

