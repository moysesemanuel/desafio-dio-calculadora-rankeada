function calcularNivel(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
  
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Platina";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Esmeralda";
    } else {
      nivel = "Diamante";   
  
    }
  
    return `O Herói tem de saldo de ${saldo} e está no nível de ${nivel}`;
  }
  
  const minhasVitorias = 90;
  const minhasDerrotas = 0;
  const resultado = calcularNivel(minhasVitorias, minhasDerrotas);
  console.log(resultado);