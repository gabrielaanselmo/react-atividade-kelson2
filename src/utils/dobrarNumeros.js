function dobrarNumeros(numeros) {
    const numerosDobrados = numeros.map(numero => numero * 2);
    return numerosDobrados;
  }
  
  const listaNumeros = [1, 2, 3, 4, 5];
  const resultado = dobrarNumeros(listaNumeros);
  console.log(resultado);