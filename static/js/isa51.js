var lista_isa = [
    ["A", "Analisador", "-","Alarme","-","-"],
    ["B", "Chama de Queimador", "-","Indefinida","Indefinida","Indefinida"],
    ["C", "Condutividade Elétrica", "-","-","Controlador","-"],
    ["D", "Densidade ou Mass Específica", "-","Diferencial","-","-"],
    ["E", "Tensão Elétrica", "-","Elemento Primário","-","-"],
    ["F", "Vazão", "Razão","-","Razão","-"],
    ["G", "Medida Dimensional", "-","Visor","Visor","-"],
    ["H", "Comando Manual", "-","-","Alto","Alto"],
    ["I", "Corrente Elétrica", "-","Indicador","Indicador","-"],
    ["J", "Potência", "Seletor","-","Seletor","-"],
    ["K", "Não Existe Definição", "Não Existe Definição","Não Existe Definição","Não Existe Definição","Não Existe Definição"],
    ["L", "Nível", "-","Lâmpada Piloto","Baixo","Baixo"],
    ["M", "Umidade", "-","-","-","-"],
    ["N", "Indefinida", "-","Indefinida","Indefinida","Indefinida"],
    ["O", "Indefinida", "-","Orifício de Restrição","-","-"],
    ["P", "Pressão", "-","Ponto de Teste","-","-"],
    ["Q", "Quantidade", "Totalizador","-","Totalizador","-"],
    ["R", "Radioatividade", "-","Registrador","-","-"],
    ["S", "Velocidade", "Segurança","-","Chave","-"],
    ["T", "Temperatura", "-","-","Transmissor ","-"],
    ["U", "Multivariável ", "-","Multifunção","Multifunção","Multifunção"],
    ["V", "Viscosidade", "-","-","Válvula","-"],
    ["W", "Peso ou Força", "-","Poço","-","-"],
    ["X", "Não Classificadar", "-","Não Classificada","Não Classificada","Não Classificada"],
    ["Y", "Indefinida", "-","-","Relé","-"],
    ["Z", "Posição", "-","-","Elemento Final de Controle não Classificado","-"],

];



var readListElement = document.getElementById("read-list");
var tableElement = document.getElementById("table");
//var tableElement = document.createElement("table");

for (var i = 0; i < lista_isa.length; i++) {
    var rowElement = document.createElement("tr");
    for (var j = 0; j < lista_isa[i].length; j++) {
        var cellElement = document.createElement("td");
        cellElement.textContent = lista_isa[i][j];
        rowElement.appendChild(cellElement);
    }
    tableElement.appendChild(rowElement);
}

readListElement.appendChild(tableElement);



