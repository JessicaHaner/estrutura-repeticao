function somaImpares() {
    let soma = 0;

    for (let i = 1; i <= 500; i++) {
        if (i % 2 !== 0 && i % 3 === 0) {
             soma += i;
        }
       


        console.log("Valor de i atualmente: " + i);
        console.log("Acumulado de soma: " + soma);
    }
    alert("A soma dos ímpares e múltiplos de 3 no conjunto de 1 à 500 é: " + soma)
}

function menorEMaiorAltura() {
    const quantidadesAlturas = 15;
    let alturas = [
        1.80,
        1.75,
        2.10,
        1.60,
        2.13,
        1.55,
        1.90,
        1.84,
        1.45,
        1.70,
        1.49,
        1.63,
        2.22,
        1.98,
        1.77
    ];
    let menor = alturas[0];
    let maior = alturas[0];

    for (let altura of alturas){
        if (altura < menor) {
            menor = altura;
        }
            
            
        if (altura > maior){
             maior = altura;
           
        }
    } alert(`
        A quantidade alturas percorridas é: ${quantidadesAlturas}
        A maior altura é: ${maior} &
        A menor altura é: ${menor} !
        `)
      console.log("Menor altura: " + menor);
      console.log("Maior altura: " + maior);


}
function mediaAritmetica(){
    let soma = 0;
    let positivos = 0;
    let negativos = 0;
    let quantidadeValores = 0;
    let valor = 10;

    while (valor >= -8) {
        sama += valor;
        quantidadeValores++
        
        if (valor > 0) {
            positivos++
        } else {
            negativos++
        }
        valor -= 1; //fator que faz ele virar negativo ao final da interação
    }
    const media = soma / quantidadeValores;
    const percentualPositivos = (positivos * 100) / quantidadeValores;
    const percentualNegativos = negativos / quantidadeValores * 100;
    alert(`
        quantidade: ${quantidadeValores}
        positivos: ${positivos}
        negativos: ${negativos}
        soma: ${soma};
        percentualPositivos: ${percentualPositivos.toFixed(2)} %
        percentualNegativos: ${percentualNegativos.toFixed(2)} %
        `)


}