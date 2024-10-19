

var lista_isa = [

  ["A", "Analyzer", "Alarm", "Alarm", "Alarm", "Alarm"],
  ["B", "Burner Flame", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["C", "Electrical Conductivity", "Controller", "Controller", "Controller", "Controller"],
  ["D", "Density or Specific Mass", "Differential", "Differential", "Differential", "Differential"],
  ["E", "Electric Voltage", "Primary Element", "Primary Element", "Primary Element", "Primary Element"],
  ["F", "Flow", "Rate", "Rate", "Rate", "Rate"],
  ["G", "Dimensional Measurement", "Display", "Display", "Display", "Display"],
  ["H", "Manual Control", "High", "High", "High", "High"],
  ["I", "Electric Current", "Indicator", "Indicator", "Indicator", "-"],
  ["J", "Power", "Selector", "-", "Selector", "-"],
  ["K", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists"],
  ["L", "Level", "Low", "Pilot Light", "Low", "Low"],
  ["M", "Humidity", "-", "-", "-", "-"],
  ["N", "Undefined", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["O", "Undefined", "-", "Restriction Orifice", "-", "-"],
  ["P", "Pressure", "-", "Test Point", "-", "-"],
  ["Q", "Quantity", "Totalizer", "Totalizer", "Totalizer", "Totalizer"],
  ["R", "Radioactivity", "-", "Recorder", "-", "-"],
  ["S", "Speed", "Safety", "Switch", "Switch", "Switch"],
  ["T", "Temperature", "Transmitter", "Transmitter", "Transmitter", "-"],
  ["U", "Multivariable", "Multifunction", "Multifunction", "Multifunction", "Multifunction"],
  ["V", "Viscosity", "Valve", "Valve", "Valve", "Valve"],
  ["W", "Weight or Force", "-", "Well", "-", "-"],
  ["X", "Not Classified", "Not Classified", "Not Classified", "Not Classified", "Not Classified"],
  ["Y", "Undefined", "-", "-", "Relay", "-"],
  ["Z", "Position", "-", "-", "Unclassified Final Control Element", "-"]

];

var lista_isa2 = [

  ["A", "Analizador", "Alarma", "Alarma", "Alarma", "Alarma"],
  ["B", "Llama de Quemador", "Indefinida", "Indefinida", "Indefinida", "Indefinida"],
  ["C", "Conductividad Eléctrica", "Controlador", "Controlador", "Controlador", "Controlador"],
  ["D", "Densidad o Masa Específica", "Diferencial", "Diferencial", "Diferencial", "Diferencial"],
  ["E", "Tensión Eléctrica", "Elemento Primario", "Elemento Primario", "Elemento Primario", "Elemento Primario"],
  ["F", "Flujo", "Tasa", "Tasa", "Tasa", "Tasa"],
  ["G", "Medida Dimensional", "Pantalla", "Pantalla", "Pantalla", "Pantalla"],
  ["H", "Control Manual", "Alto", "Alto", "Alto", "Alto"],
  ["I", "Corriente Eléctrica", "Indicador", "Indicador", "Indicador", "-"],
  ["J", "Potencia", "Selector", "-", "Selector", "-"],
  ["K", "No Existe Definición", "No Existe Definición", "No Existe Definición", "No Existe Definición", "No Existe Definición"],
  ["L", "Nivel", "Bajo", "Luz Piloto", "Bajo", "Bajo"],
  ["M", "Humedad", "-", "-", "-", "-"],
  ["N", "Indefinida", "Indefinida", "Indefinida", "Indefinida", "Indefinida"],
  ["O", "Indefinida", "-", "Orificio de Restricción", "-", "-"],
  ["P", "Presión", "-", "Punto de Prueba", "-", "-"],
  ["Q", "Cantidad", "Totalizador", "Totalizador", "Totalizador", "Totalizador"],
  ["R", "Radioactividad", "-", "Registrador", "-", "-"],
  ["S", "Velocidad", "Seguridad", "Interruptor", "Interruptor", "Interruptor"],
  ["T", "Temperatura", "Transmisor", "Transmisor", "Transmisor", "-"],
  ["U", "Multivariable", "Multifunción", "Multifunción", "Multifunción", "Multifunción"],
  ["V", "Viscosidad", "Válvula", "Válvula", "Válvula", "Válvula"],
  ["W", "Peso o Fuerza", "-", "Pozo", "-", "-"],
  ["X", "No Clasificado", "No Clasificada", "No Clasificada", "No Clasificada", "No Clasificada"],
  ["Y", "Indefinida", "-", "-", "Relé", "-"],
  ["Z", "Posición", "-", "-", "Elemento Final de Control No Clasificado", "-"]

];

//-------------------------

const form = document.getElementById('some-form')
form.addEventListener('submit', e => {
    e.preventDefault()
   // console.log('Deu certo')
})

//function pegarTexto() {
//  let inputElement = document.getElementById("meuInput");
//  let texto = inputElement.value;

//    escreverTexto()
//}

function removerDuplicatas(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

function pegarTexto_Spanish(){
  console.log("Entrou!!!");

  let inputElement = document.getElementById("meuInput");
  let textareaElement = document.getElementById("textareaIsa2");
  let tag_num = inputElement.value.split("-", 3);

  let listaSemDuplicatas;
  let read_code = [];
  let cont = 0
  for (let k = 0; k < tag_num[0].length; k++) {
    for (let i = 0; i < lista_isa2.length; i++) {
      for (let j = 0; j < lista_isa2[i].length; j++) {
          if(lista_isa2[i][0] == tag_num[0][k]){
            read_code.unshift(lista_isa2[i][cont + 1])
            
          }
      }
    }

    listaSemDuplicatas = removerDuplicatas(read_code);
    cont += 1;
  
    textareaElement.innerHTML = '';

  }

  let lido = listaSemDuplicatas.join(" - "); //.replace(/,/g, "");
  console.log("Texto lido isa2: ", lido);

  textareaElement.innerHTML += lido;

}

function pegarTexto(){
  let inputElement = document.getElementById("meuInput");
  let textareaElement = document.getElementById("textareaIsa");
  let tag_num = inputElement.value.split("-", 3);

  let listaSemDuplicatas;
  let read_code = [];
  let cont = 0
  for (let k = 0; k < tag_num[0].length; k++) {
    for (let i = 0; i < lista_isa.length; i++) {
      for (let j = 0; j < lista_isa[i].length; j++) {
          if(lista_isa[i][0] == tag_num[0][k]){
            read_code.unshift(lista_isa[i][cont + 1])
            
          }
      }
    }

    listaSemDuplicatas = removerDuplicatas(read_code);
    cont += 1;
  
    textareaElement.innerHTML = '';

  }

  let lido = listaSemDuplicatas.join(" - "); //.replace(/,/g, "");
  console.log("Texto lido isa: ", lido);

  textareaElement.innerHTML += lido;

  pegarTexto_Spanish();

}








/*





    listaSemDuplicatas = removerDuplicatas(read_code);
    
    cont += 1;
    textareaElement.innerHTML = '';
  }
  for (let a = 0; a < listaSemDuplicatas.length; a++) {
    textareaElement.innerHTML += `${listaSemDuplicatas[a]}, `;
  }

  //----------------------------
  let listaSemDuplicatas2;
  let read_code2 = [];
  let cont2 = 0
  for (let k = 0; k < tag_num[0].length; k++) {
    for (let i = 0; i < lista_isa2.length; i++) {
      for (let j = 0; j < lista_isa2[i].length; j++) {
          if(lista_isa2[i][0] == tag_num[0][k]){
            read_code2.unshift(lista_isa2[i][cont2 + 1])
            
          }
      }
    }

    listaSemDuplicatas2 = removerDuplicatas(read_code2);
    console.log(">>>>", listaSemDuplicatas2);

    cont2 += 1;
    textareaElement2.innerHTML = '';
  }
  for (let a = 0; a < listaSemDuplicatas2.length; a++) {
    textareaElement2.innerHTML += `${listaSemDuplicatas2[a]}, `;
  }





  
  ["A", "Analisador", "Alarme","Alarme","Alarme","Alarme"],
  ["B", "Chama de Queimador", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["C", "Condutividade Elétrica", "Controlador","Controlador","Controlador","Controlador"],
  ["D", "Densidade ou Mass Específica", "Diferencial","Diferencial","Diferencial","Diferencial"],
  ["E", "Tensão Elétrica", "Elemento Primário","Elemento Primário","Elemento Primário","Elemento Primário"],
  ["F", "Vazão", "Razão","Razão","Razão","Razão"],
  ["G", "Medida Dimensional", "Visor","Visor","Visor","Visor"],
  ["H", "Comando Manual", "Alto","Alto","Alto","Alto"],
  ["I", "Corrente Elétrica", "Indicador","Indicador","Indicador","-"],
  ["J", "Potência", "Seletor","-","Seletor","-"],
  ["K", "Não Existe Definição", "Não Existe Definição","Não Existe Definição","Não Existe Definição","Não Existe Definição"],
  ["L", "Nível", "Baixo","Lâmpada Piloto","Baixo","Baixo"],
  ["M", "Umidade", "-","-","-","-"],
  ["N", "Indefinida", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["O", "Indefinida", "-","Orifício de Restrição","-","-"],
  ["P", "Pressão", "-","Ponto de Teste","-","-"],
  ["Q", "Quantidade", "Totalizador","Totalizador","Totalizador","Totalizador"],
  ["R", "Radioatividade", "-","Registrador","-","-"],
  ["S", "Velocidade", "Segurança","Chave","Chave","Chave"],
  ["T", "Temperatura", "Transmissor","Transmissor","Transmissor","-"],
  ["U", "Multivariável ", "Multifunção","Multifunção","Multifunção","Multifunção"],
  ["V", "Viscosidade", "Válvula","Válvula","Válvula","Válvula"],
  ["W", "Peso ou Força", "-","Poço","-","-"],
  ["X", "Não Classificadar", "Não Classificada","Não Classificada","Não Classificada","Não Classificada"],
  ["Y", "Indefinida", "-","-","Relé","-"],
  ["Z", "Posição", "-","-","Elemento Final de Controle não Classificado","-"],
  */




/*
var lista_isa = [
  ["A", "Analyzer", "Alarm", "Alarm", "Alarm", "Alarm"],
  ["B", "Burner Flame", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["C", "Electrical Conductivity", "Controller", "Controller", "Controller", "Controller"],
  ["D", "Density or Specific Mass", "Differential", "Differential", "Differential", "Differential"],
  ["E", "Electric Voltage", "Primary Element", "Primary Element", "Primary Element", "Primary Element"],
  ["F", "Flow", "Rate", "Rate", "Rate", "Rate"],
  ["G", "Dimensional Measurement", "Display", "Display", "Display", "Display"],
  ["H", "Manual Control", "High", "High", "High", "High"],
  ["I", "Electric Current", "Indicator", "Indicator", "Indicator", "-"],
  ["J", "Power", "Selector", "-", "Selector", "-"],
  ["K", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists"],
  ["L", "Level", "Low", "Pilot Light", "Low", "Low"],
  ["M", "Humidity", "-", "-", "-", "-"],
  ["N", "Undefined", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["O", "Undefined", "-", "Restriction Orifice", "-", "-"],
  ["P", "Pressure", "-", "Test Point", "-", "-"],
  ["Q", "Quantity", "Totalizer", "Totalizer", "Totalizer", "Totalizer"],
  ["R", "Radioactivity", "-", "Recorder", "-", "-"],
  ["S", "Speed", "Safety", "Switch", "Switch", "Switch"],
  ["T", "Temperature", "Transmitter", "Transmitter", "Transmitter", "-"],
  ["U", "Multivariable", "Multifunction", "Multifunction", "Multifunction", "Multifunction"],
  ["V", "Viscosity", "Valve", "Valve", "Valve", "Valve"],
  ["W", "Weight or Force", "-", "Well", "-", "-"],
  ["X", "Not Classified", "Not Classified", "Not Classified", "Not Classified", "Not Classified"],
  ["Y", "Undefined", "-", "-", "Relay", "-"],
  ["Z", "Position", "-", "-", "Unclassified Final Control Element", "-"]
];

var lista_isa2 = [
  ["A", "Analizador", "Alarma", "Alarma", "Alarma", "Alarma"],
  ["B", "Llama de Quemador", "Indefinida", "Indefinida", "Indefinida", "Indefinida"],
  ["C", "Conductividad Eléctrica", "Controlador", "Controlador", "Controlador", "Controlador"],
  ["D", "Densidad o Masa Específica", "Diferencial", "Diferencial", "Diferencial", "Diferencial"],
  ["E", "Tensión Eléctrica", "Elemento Primario", "Elemento Primario", "Elemento Primario", "Elemento Primario"],
  ["F", "Flujo", "Tasa", "Tasa", "Tasa", "Tasa"],
  ["G", "Medida Dimensional", "Visualizador", "Visualizador", "Visualizador", "Visualizador"],
  ["H", "Control Manual", "Alto", "Alto", "Alto", "Alto"],
  ["I", "Corriente Eléctrica", "Indicador", "Indicador", "Indicador", "-"],
  ["J", "Potencia", "Selector", "-", "Selector", "-"],
  ["K", "No Existe Definición", "No Existe Definición", "No Existe Definición", "No Existe Definición", "No Existe Definición"],
  ["L", "Nivel", "Bajo", "Lámpara Piloto", "Bajo", "Bajo"],
  ["M", "Humedad", "-", "-", "-", "-"],
  ["N", "Indefinida", "Indefinida", "Indefinida", "Indefinida", "Indefinida"],
  ["O", "Indefinida", "-", "Orificio de Restricción", "-", "-"],
  ["P", "Presión", "-", "Punto de Prueba", "-", "-"],
  ["Q", "Cantidad", "Totalizador", "Totalizador", "Totalizador", "Totalizador"],
  ["R", "Radiactividad", "-", "Registrador", "-", "-"],
  ["S", "Velocidad", "Seguridad", "Interruptor", "Interruptor", "Interruptor"],
  ["T", "Temperatura", "Transmisor", "Transmisor", "Transmisor", "-"],
  ["U", "Multivariables", "Multifunción", "Multifunción", "Multifunción", "Multifunción"],
  ["V", "Viscosidad", "Válvula", "Válvula", "Válvula", "Válvula"],
  ["W", "Peso o Fuerza", "-", "Pozo", "-", "-"],
  ["X", "No Clasificado", "No Clasificada", "No Clasificada", "No Clasificada", "No Clasificada"],
  ["Y", "Indefinida", "-", "-", "Relé", "-"],
  ["Z", "Posición", "-", "-", "Elemento Final de Control No Clasificado", "-"]
];

const form = document.getElementById('some-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  pegarTexto();
});

function removerDuplicatas(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

function pegarTexto() {
  let inputElement = document.getElementById("meuInput");
  let textareaIsa = document.getElementById("textareaIsa");
  let textareaIsa2 = document.getElementById("textareaIsa2");
  let tag_num = inputElement.value.split("-", 3);
  console.log(tag_num);

  let listaIsaResult = [];
  let listaIsa2Result = [];

  // Itera sobre cada tag fornecida
  for (let k = 0; k < tag_num[0].length; k++) {
      let tag = tag_num[0][k];
      console.log(">>>>: ", tag)

      // Verifica em lista_isa
      for (let i = 0; i < lista_isa.length; i++) {
          if (lista_isa[i][0] === tag) {
              listaIsaResult.push(lista_isa[i][1]); // Adiciona o resultado correto
              console.log("-----: ", lista_isa[i][1]);
              break; // Sai do loop após encontrar
          }
      }
      // Verifica em lista_isa2
      for (let i = 0; i < lista_isa2.length; i++) {
          if (lista_isa2[i][0] === tag) {
              listaIsa2Result.push(lista_isa2[i][1]); // Adiciona o resultado correto
              break; // Sai do loop após encontrar
          }
      }
  }

  // Atualiza as textareas com os resultados
  textareaIsa.value = listaIsaResult.join(", ");
  textareaIsa2.value = listaIsa2Result.join(", ");
}





/*


/*


var lista_isa = [

  ["A", "Analyzer", "Alarm", "Alarm", "Alarm", "Alarm"],
  ["B", "Burner Flame", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["C", "Electrical Conductivity", "Controller", "Controller", "Controller", "Controller"],
  ["D", "Density or Specific Mass", "Differential", "Differential", "Differential", "Differential"],
  ["E", "Electric Voltage", "Primary Element", "Primary Element", "Primary Element", "Primary Element"],
  ["F", "Flow", "Rate", "Rate", "Rate", "Rate"],
  ["G", "Dimensional Measurement", "Display", "Display", "Display", "Display"],
  ["H", "Manual Control", "High", "High", "High", "High"],
  ["I", "Electric Current", "Indicator", "Indicator", "Indicator", "-"],
  ["J", "Power", "Selector", "-", "Selector", "-"],
  ["K", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists", "No Definition Exists"],
  ["L", "Level", "Low", "Pilot Light", "Low", "Low"],
  ["M", "Humidity", "-", "-", "-", "-"],
  ["N", "Undefined", "Undefined", "Undefined", "Undefined", "Undefined"],
  ["O", "Undefined", "-", "Restriction Orifice", "-", "-"],
  ["P", "Pressure", "-", "Test Point", "-", "-"],
  ["Q", "Quantity", "Totalizer", "Totalizer", "Totalizer", "Totalizer"],
  ["R", "Radioactivity", "-", "Recorder", "-", "-"],
  ["S", "Speed", "Safety", "Switch", "Switch", "Switch"],
  ["T", "Temperature", "Transmitter", "Transmitter", "Transmitter", "-"],
  ["U", "Multivariable", "Multifunction", "Multifunction", "Multifunction", "Multifunction"],
  ["V", "Viscosity", "Valve", "Valve", "Valve", "Valve"],
  ["W", "Weight or Force", "-", "Well", "-", "-"],
  ["X", "Not Classified", "Not Classified", "Not Classified", "Not Classified", "Not Classified"],
  ["Y", "Undefined", "-", "-", "Relay", "-"],
  ["Z", "Position", "-", "-", "Unclassified Final Control Element", "-"]

];

var lista_isa2 = [

  ["A", "Analisador", "Alarme","Alarme","Alarme","Alarme"],
  ["B", "Chama de Queimador", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["C", "Condutividade Elétrica", "Controlador","Controlador","Controlador","Controlador"],
  ["D", "Densidade ou Mass Específica", "Diferencial","Diferencial","Diferencial","Diferencial"],
  ["E", "Tensão Elétrica", "Elemento Primário","Elemento Primário","Elemento Primário","Elemento Primário"],
  ["F", "Vazão", "Razão","Razão","Razão","Razão"],
  ["G", "Medida Dimensional", "Visor","Visor","Visor","Visor"],
  ["H", "Comando Manual", "Alto","Alto","Alto","Alto"],
  ["I", "Corrente Elétrica", "Indicador","Indicador","Indicador","-"],
  ["J", "Potência", "Seletor","-","Seletor","-"],
  ["K", "Não Existe Definição", "Não Existe Definição","Não Existe Definição","Não Existe Definição","Não Existe Definição"],
  ["L", "Nível", "Baixo","Lâmpada Piloto","Baixo","Baixo"],
  ["M", "Umidade", "-","-","-","-"],
  ["N", "Indefinida", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["O", "Indefinida", "-","Orifício de Restrição","-","-"],
  ["P", "Pressão", "-","Ponto de Teste","-","-"],
  ["Q", "Quantidade", "Totalizador","Totalizador","Totalizador","Totalizador"],
  ["R", "Radioatividade", "-","Registrador","-","-"],
  ["S", "Velocidade", "Segurança","Chave","Chave","Chave"],
  ["T", "Temperatura", "Transmissor","Transmissor","Transmissor","-"],
  ["U", "Multivariável ", "Multifunção","Multifunção","Multifunção","Multifunção"],
  ["V", "Viscosidade", "Válvula","Válvula","Válvula","Válvula"],
  ["W", "Peso ou Força", "-","Poço","-","-"],
  ["X", "Não Classificadar", "Não Classificada","Não Classificada","Não Classificada","Não Classificada"],
  ["Y", "Indefinida", "-","-","Relé","-"],
  ["Z", "Posição", "-","-","Elemento Final de Controle não Classificado","-"],

];

const form = document.getElementById('some-form')
form.addEventListener('submit', e => {
    e.preventDefault()
   // console.log('Deu certo')
})

//function pegarTexto() {
//  let inputElement = document.getElementById("meuInput");
//  let texto = inputElement.value;

//    escreverTexto()
//}

function removerDuplicatas(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

function pegarTexto(){
  let inputElement = document.getElementById("meuInput");
  let textareaElement = document.getElementById("meuTextarea");
  let tag_num = inputElement.value.split("-", 3);
  console.log(tag_num );
  
  let listaSemDuplicatas;
  let read_code = [];
  let cont = 0
  for (let k = 0; k < tag_num[0].length; k++) {
    for (let i = 0; i < lista_isa.length; i++) {
      for (let j = 0; j < lista_isa[i].length; j++) {
          if(lista_isa[i][0] == tag_num[0][k]){
            read_code.unshift(lista_isa[i][cont + 1])
            
          }
      }
    }
    listaSemDuplicatas = removerDuplicatas(read_code);
    //textoOriginal = textoOriginal.replace(",", "Universo");
    console.log(listaSemDuplicatas);
    cont += 1;
  
  textareaElement.innerHTML = '';

  }
  for (let a = 0; a < listaSemDuplicatas.length; a++) {
    textareaElement.innerHTML += `${listaSemDuplicatas[a]}, `;
  }
  
}

*/

/*
  ["A", "Analisador", "Alarme","Alarme","Alarme","Alarme"],
  ["B", "Chama de Queimador", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["C", "Condutividade Elétrica", "Controlador","Controlador","Controlador","Controlador"],
  ["D", "Densidade ou Mass Específica", "Diferencial","Diferencial","Diferencial","Diferencial"],
  ["E", "Tensão Elétrica", "Elemento Primário","Elemento Primário","Elemento Primário","Elemento Primário"],
  ["F", "Vazão", "Razão","Razão","Razão","Razão"],
  ["G", "Medida Dimensional", "Visor","Visor","Visor","Visor"],
  ["H", "Comando Manual", "Alto","Alto","Alto","Alto"],
  ["I", "Corrente Elétrica", "Indicador","Indicador","Indicador","-"],
  ["J", "Potência", "Seletor","-","Seletor","-"],
  ["K", "Não Existe Definição", "Não Existe Definição","Não Existe Definição","Não Existe Definição","Não Existe Definição"],
  ["L", "Nível", "Baixo","Lâmpada Piloto","Baixo","Baixo"],
  ["M", "Umidade", "-","-","-","-"],
  ["N", "Indefinida", "Indefinida","Indefinida","Indefinida","Indefinida"],
  ["O", "Indefinida", "-","Orifício de Restrição","-","-"],
  ["P", "Pressão", "-","Ponto de Teste","-","-"],
  ["Q", "Quantidade", "Totalizador","Totalizador","Totalizador","Totalizador"],
  ["R", "Radioatividade", "-","Registrador","-","-"],
  ["S", "Velocidade", "Segurança","Chave","Chave","Chave"],
  ["T", "Temperatura", "Transmissor","Transmissor","Transmissor","-"],
  ["U", "Multivariável ", "Multifunção","Multifunção","Multifunção","Multifunção"],
  ["V", "Viscosidade", "Válvula","Válvula","Válvula","Válvula"],
  ["W", "Peso ou Força", "-","Poço","-","-"],
  ["X", "Não Classificadar", "Não Classificada","Não Classificada","Não Classificada","Não Classificada"],
  ["Y", "Indefinida", "-","-","Relé","-"],
  ["Z", "Posição", "-","-","Elemento Final de Controle não Classificado","-"],














  function traduzirParaEspanhol(texto) {
  const apiKey = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API
  const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: texto,
      source: "pt",
      target: "es",
      format: "text"
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na tradução: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log("Resposta da API:", data);
    return data.data.translations[0].translatedText; // Acessa a tradução correta
  })
  .catch(error => {
    console.error("Erro ao traduzir:", error);
    return "Erro na tradução";
  });
}









  */
