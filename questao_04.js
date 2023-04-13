//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Criando o array de objetos com os valores em BRL
const faturamentosDaDistribuidora = [
    { SP: "R$67.836,43" },
    { RJ: "R$36.678,66" },
    { MG: "R$29.229,88" },
    { ES: "R$27.165,48" },
    { Outros: "R$19.849,53" },
];

// criando uma variavel para armazenar todos os valores dos faturamentos em float.
const faturamentosEmFloat = faturamentosDaDistribuidora.map((faturamentoEstado, i) => {
    const estado = Object.keys(faturamentoEstado)[0];
    const valorComPontos = faturamentoEstado[estado];
    const valorSemPonto = valorComPontos.replace('.', '');
    const valorSemRs = valorSemPonto.replace('R$', '');
    const transformaVirgulaEmPonto = valorSemRs.replace(',', '.');
    const valorEmFloat = parseFloat(transformaVirgulaEmPonto);
    return valorEmFloat
})

// Variavel para armezar o valor total somado dos faturamentos
const totalDeTodosOsFaturamentos = faturamentosEmFloat.reduce((acumalador, total) => acumalador + total, 0);

// Variavel para armazenar todos os estados no array
const todosEstados = faturamentosDaDistribuidora.map(estado => Object.keys(estado)[0]);

// variavel para calcular a porcentagem de cada estado na soma do faturamento total da distribuidora 
const valoresEmPorcentagem = faturamentosEmFloat.map((faturamento, i) => {
    const valorEmPorcentagem = (faturamento / totalDeTodosOsFaturamentos) * 100
    const valorComDuasCasas = valorEmPorcentagem.toFixed(2);
    return {[todosEstados[i]]: `${valorComDuasCasas}%`}
});

console.log("Percentuais por estado", valoresEmPorcentagem);