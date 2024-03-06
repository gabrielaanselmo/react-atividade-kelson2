const notas = [8, 7.5, 9];


const media = notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0) / notas.length;


console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);
console.log(`A média do aluno é: ${media.toFixed(2)}`);


if (media >= 7) {
    console.log("O aluno está: APROVADO");
} else {
    console.log("O aluno está: REPROVADO");
}