let salarioBruto = 3000;
let salarioSemInss;
let salarioLiquido;

if (salarioBruto <=1556.94){
    salarioSemInss = salarioBruto - salarioBruto*0.08;
} else if ( salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioSemInss = salarioBruto - salarioBruto*0.09;
} else if ( salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioSemInss = salarioBruto - salarioBruto*0.11;
} else {
    salarioSemInss = salarioBruto - 570.88;
}

if (salarioSemInss <= 1903.98){
    salarioLiquido = salarioSemInss;
} else if (salarioSemInss > 1903.98 && salarioSemInss <=2826.65){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.075 - 142.80);
} else if (salarioSemInss > 2826.65 && salarioSemInss <=3751.05){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.15 - 354.80);
} else if (salarioSemInss > 3751.05 && salarioSemInss <=4664.86){
    salarioLiquido = salarioSemInss - (salarioSemInss*0.225 - 636.13);
} else {
    salarioLiquido = salarioSemInss - (salarioSemInss*0.275 - 869.36);
}

salarioLiquido = salarioLiquido.toFixed(2);

console.log(salarioLiquido);