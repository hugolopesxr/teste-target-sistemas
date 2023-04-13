

const dataJson = require("./json_questao_03.json");
const faturamentosDiarios = dataJson.faturamentos;
  
  const faturamentoMaximo = faturamentosDiarios.reduce((acumulador, atual) => {
     return acumulador.faturamento > atual.faturamento ? acumulador : atual;
  });
  
  const faturamentoMinimo = faturamentosDiarios.reduce((acumulador, atual) => {
     return acumulador.faturamento < atual.faturamento ? acumulador: atual;
  });
  
  const totalFaturamento = faturamentosDiarios.reduce((acumulador, atual) => acumulador + atual?.faturamento, 0);
  
  const mediaDoFaturammentoNoMes = totalFaturamento / faturamentosDiarios.length;
  
  const valoresMaioresQueAMediaDoMes = faturamentosDiarios.filter(data => data.faturamento > mediaDoFaturammentoNoMes)
  
  const dadosDoFaturamento = {faturamentoMaximo: faturamentoMaximo, faturamentoMinimo: faturamentoMinimo, totalFaturamento: totalFaturamento, mediaDoFaturammentoNoMes:mediaDoFaturammentoNoMes.toFixed(2), valoresMaioresQueAMediaDoMes: valoresMaioresQueAMediaDoMes}
  console.log('dadosDoFaturamento',dadosDoFaturamento);