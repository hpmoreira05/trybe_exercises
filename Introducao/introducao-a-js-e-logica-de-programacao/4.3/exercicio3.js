let n=5;

let position = n+1

let asterisco = ''

for (let i=1; i<=n; i +=1 ){
    position = position - 1
    for(let j=1; j<=n; j+=1){
        if(j<position){
            asterisco = asterisco + ' ';
        }else{
            asterisco = asterisco + '*'
        }
    }
    console.log(asterisco)
    asterisco = ''
}


