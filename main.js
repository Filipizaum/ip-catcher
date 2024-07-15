document.addEventListener('DOMContentLoaded', function () {
  console.log("Carregou");

  const h1 = document.getElementById('felps');
  const botao = document.getElementById('botao');

  // Função para extrair IPs de uma string
  function extrairIps(ipString) {
    const regex = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/g;
    return ipString.match(regex) || [];
  }

  // Função para contar a ocorrência de cada IP em uma string
  function contarOcorrenciasDeIps(ipString) {
      const ips = extrairIps(ipString);
      
      // Objeto para armazenar a contagem de cada IP
      const contagemIps = {};
    
      // Iterar sobre o array de IPs e contar as ocorrências
      ips.forEach(ip => {
        if (contagemIps[ip]) {
          contagemIps[ip]++;
        } else {
          contagemIps[ip] = 1;
        }
      });
    
      return contagemIps;
  }

  // Função para ordenar IPs pela contagem de ocorrências
  function ordenarIpsPorOcorrencias(contagemIps) {
    // Converter o objeto de contagem em um array de pares [ip, contagem]
    const pares = Object.entries(contagemIps);
    // Ordenar os pares com base na contagem em ordem decrescente
    pares.sort((a, b) => b[1] - a[1]);
    return pares;
  }

  function calcula() {
    
    const ipString = h1.value;
    
    const contagem = contarOcorrenciasDeIps(ipString);
    const ipsOrdenados = ordenarIpsPorOcorrencias(contagem);

    // Gerar a string com a contagem de visualização de cada IP
    const resultado = ipsOrdenados.map(par => `${par[0]} (${par[1]})`).join('\n');

    // Exibir o resultado no console
    console.log(resultado);

    // Opcional: Exibir o resultado na página
    const resultadoElement = document.createElement('pre');
    resultadoElement.innerText = resultado;
    document.body.appendChild(resultadoElement);
  }

});
