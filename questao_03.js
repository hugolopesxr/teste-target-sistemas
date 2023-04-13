

const dataJson = require("./json_questao_03.json");
const faturamentosDiarios = dataJson;
  
  const faturamentoMaximo = faturamentosDiarios.reduce((acumulador, atual) => {
     return acumulador.valor > atual.valor ? acumulador : atual;
  });
  
  const faturamentoMinimo = faturamentosDiarios.reduce((acumulador, atual) => {
     return atual.valor !== 0 && atual.valor < acumulador.valor ? atual : acumulador;
  });
  
  const totalFaturamento = faturamentosDiarios.reduce((acumulador, atual) => acumulador + atual?.valor, 0);
  
  const mediaDoFaturammentoNoMes = totalFaturamento / faturamentosDiarios.length;
  
  const valoresMaioresQueAMediaDoMes = faturamentosDiarios.filter(data => data.valor > mediaDoFaturammentoNoMes)
  
  const dadosDoFaturamento = {faturamentoMaximo: faturamentoMaximo, faturamentoMinimo: faturamentoMinimo, totalFaturamento: totalFaturamento, mediaDoFaturammentoNoMes:mediaDoFaturammentoNoMes, valoresMaioresQueAMediaDoMes: valoresMaioresQueAMediaDoMes}
  console.log('dadosDoFaturamento',dadosDoFaturamento);