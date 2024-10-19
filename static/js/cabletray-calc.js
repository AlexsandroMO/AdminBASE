

function suggestTray() {
    console.log("----- entrou -----");
    
    const cableSelect = document.getElementById("cable");
    const cableValue = parseFloat(cableSelect.options[cableSelect.selectedIndex].getAttribute("data-select-id"));
    
    const quantityInput = document.getElementById("quantity");
    const quantityValue = parseInt(quantityInput.value, 10);
    
    const textareaElement = document.getElementById("varResult");
    textareaElement.value = ''; // Limpar resultados anteriores

    // Calcular a área ocupada pelos cabos
    const cableArea = Math.PI * Math.pow(cableValue / 2, 2) * quantityValue; // Área total dos cabos

    // Taxa de ocupação permitida (40%)
    const allowedArea = cableArea / 0.4;

    // Sequência de dimensões para as eletrocalhas
    const trays = [
        { altura: 50, largura: 50 },
        { altura: 50, largura: 100 },
        { altura: 100, largura: 100 },
        { altura: 50, largura: 200 },
        { altura: 100, largura: 200 },
        { altura: 50, largura: 300 },
        { altura: 100, largura: 300 },
        { altura: 100, largura: 400 },
        { altura: 100, largura: 500 },
        { altura: 100, largura: 600 },
        { altura: 100, largura: 700 },
        { altura: 100, largura: 800 },
        { altura: 100, largura: 900 },
        { altura: 100, largura: 1000 }
    ];

    // Encontrar a primeira eletrocalha que atenda à necessidade
    for (const tray of trays) {
        const trayArea = tray.altura * tray.largura; // Área total da eletrocalha
        if (trayArea >= allowedArea) {
            textareaElement.value = `The suggested cable tray is: H ${tray.altura} mm x W ${tray.largura} mm`;
            console.log("-----: ", tray.altura, tray.largura);
            return; // Sai da função após encontrar a primeira opção adequada
        }
    }

    textareaElement.value = `No available cable tray meets your needs. Consider a larger cable tray.`;

}




/*
    function suggestTray() {
        console.log("----- entrou -----");
        
        const cableSelect = document.getElementById("cable");
        const cableValue = parseFloat(cableSelect.options[cableSelect.selectedIndex].getAttribute("data-select-id"));
        
        const quantityInput = document.getElementById("quantity");
        const quantityValue = parseInt(quantityInput.value, 10);
        
        const textareaElement = document.getElementById("varResult");
        textareaElement.value = ''; // Limpar resultados anteriores

        // Calcular a área ocupada pelos cabos
        const cableArea = Math.PI * Math.pow(cableValue / 2, 2) * quantityValue; // Área total dos cabos

        // Sequência de dimensões para as eletrocalhas
        const trays = [
            { altura: 50, largura: 50 },
            { altura: 100, largura: 100 },
            { altura: 200, largura: 50 },
            { altura: 200, largura: 100 },
            { altura: 300, largura: 50 },
            { altura: 300, largura: 100 },
            { altura: 400, largura: 100 },
            { altura: 500, largura: 100 },
            { altura: 600, largura: 100 },
            { altura: 700, largura: 100 },
            { altura: 800, largura: 100 },
            { altura: 900, largura: 100 },
            { altura: 1000, largura: 100 }
        ];

        // Encontrar a primeira eletrocalha que atenda à necessidade
        for (const tray of trays) {
            const trayArea = tray.altura * tray.largura; // Área total da eletrocalha
            if (trayArea >= cableArea) {
                textareaElement.value = `A eletrocalha sugerida é: ${tray.altura} mm x ${tray.largura} mm`;
                console.log("-----: ", tray.altura, tray.largura);
                return; // Sai da função após encontrar a primeira opção adequada
            }
        }

        textareaElement.value = `Nenhuma eletrocalha disponível atende suas necessidades. Considere uma eletrocalha maior.`;
        console.log("---ops--: Nenhuma alternativa encontrada");
    }

*/
