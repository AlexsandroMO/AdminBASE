

function calcCirc() {
    // Obter valores dos seletores
    const cableSelect = document.getElementById("cable");
    const cableValue = parseFloat(cableSelect.options[cableSelect.selectedIndex].getAttribute("data-select-id"));
    const eletroSelect = document.getElementById("eletro");
    const eletroValue = parseFloat(eletroSelect.options[eletroSelect.selectedIndex].getAttribute("data-select-id"));

    // Verificar se os valores são válidos
    if (cableValue && eletroValue) {
        // Calcular o diâmetro externo total dos cabos
        const cableArea = Math.PI * Math.pow(cableValue / 2, 2);
        const eletroArea = Math.PI * Math.pow(eletroValue / 2, 2);

        // Calcular quantos cabos cabem no eletroduto
        // Assumindo um preenchimento máximo de 40% para acomodação de cabos em eletrodutos
        const fillPercentage = 0.4;
        const numCables = Math.floor((eletroArea * fillPercentage) / cableArea);

        // Atualizar o valor no input de resultado
        document.getElementById("varResult").value = ` ${numCables} Cabos`;

    } else {
        document.getElementById("varResult").value = "Selecione ambos os valores";
    }
}

