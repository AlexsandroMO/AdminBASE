function suggestEletro() {
    // Obter valores dos seletores
    const cableSelect = document.getElementById("cable");
    const cableValue = parseFloat(cableSelect.options[cableSelect.selectedIndex].getAttribute("data-select-id"));
    const quantityInput = document.getElementById("quantity");
    const quantity = parseInt(quantityInput.value);

    // Verificar se os valores são válidos
    if (cableValue && quantity > 0) {
        // Calcular a área de um cabo
        const cableArea = Math.PI * Math.pow(cableValue / 2, 2);

        // Calcular a área total ocupada pelos cabos
        const totalCableArea = cableArea * quantity;

        // Eletrodutos disponíveis
        const eletroOptions = [
            { size: "1/2\"", id: 21.3 },
            { size: "3/4\"", id: 26.9 },
            { size: "1\"", id: 33.4 },
            { size: "2\"", id: 48.3 },
            { size: "3\"", id: 60.3 },
            { size: "4\"", id: 88.9 }
        ];

        let suggestedEletro = "Nenhum eletroduto encontrado.";

        for (const eletro of eletroOptions) {
            const eletroArea = Math.PI * Math.pow(eletro.id / 2, 2);

            // Verificar se o eletroduto pode acomodar os cabos
            const fillPercentage = 0.4; // 40%
            if ((eletroArea * fillPercentage) >= totalCableArea) {
                suggestedEletro = `Eletroduto sugerido: ${eletro.size}`;
                break; // Sair do loop assim que encontrar um eletroduto adequado
            }
        }

        // Atualizar o valor no input de resultado
        document.getElementById("varResult").value = suggestedEletro;

    } else {
        document.getElementById("varResult").value = "Selecione a bitola do cabo e a quantidade.";
    }
}


function calcCirc() {
    // Obter valores dos seletores
    const cableSelect = document.getElementById("cable1");
    const cableValue = parseFloat(cableSelect.options[cableSelect.selectedIndex].getAttribute("data-select-id2"));
    const eletroSelect = document.getElementById("eletro");
    const eletroValue = parseFloat(eletroSelect.options[eletroSelect.selectedIndex].getAttribute("data-select-id2"));

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
        document.getElementById("varResult2").value = ` ${numCables} Cabos`;

    } else {
        document.getElementById("varResult2").value = "Selecione ambos os valores";
    }
}