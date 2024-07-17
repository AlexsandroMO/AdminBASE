var lista_isa = [
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
//    let texto = inputElement.value;

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
