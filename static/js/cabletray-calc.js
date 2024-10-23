



function toggleDivAlin2() {
    const divAlin = document.querySelector('.div-alin');
    const divAlin2 = document.querySelector('.div-alin2');
    
    if (divAlin2.style.display === 'none' || divAlin2.style.display === '') {
        divAlin2.style.display = 'block';
        divAlin.style.display = 'none'; // Hide the first div
    } else {
        divAlin2.style.display = 'none';
        divAlin.style.display = 'block'; // Show the first div
    }
}


function returnToInitialCalculation() {
    const divAlin = document.querySelector('.div-alin');
    const divAlin2 = document.querySelector('.div-alin2');
    
    divAlin.style.display = 'block'; // Show the first div
    divAlin2.style.display = 'none'; // Hide the second div
}



function suggestTray() {
    console.log("----- entrou -----");
    
    const cableSelect = document.getElementById("bitola");
    const cableValue = parseInt(cableSelect.value);
    const quantityInput = document.getElementById("quantity");
    const quantity = parseInt(quantityInput.value);
    const textareaElement = document.getElementById("suggestion"); // Defina seu textarea aqui

    // Verifica se as entradas são válidas
    if (isNaN(cableValue) || isNaN(quantity) || cableValue <= 0 || quantity <= 0) {
        textareaElement.value = "Please enter valid values ​​for gauge and quantity.";
        return;
    }

    // Calcular a área ocupada pelos cabos
    const cableArea = Math.PI * Math.pow(cableValue / 2, 2) * quantity; // Área total dos cabos

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
            textareaElement.value = `The suggested cable tray is: H ${tray.altura} mm x L ${tray.largura} mm`;
            console.log("-----: ", tray.altura, tray.largura);
            return; // Sai da função após encontrar a primeira opção adequada
        }
    }

    textareaElement.value = "No available cable tray meets your needs. Consider dividing into more cable trays.";
}


function suggestTray2() {
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

    let totalCableArea = 0; // Área total dos cabos
    let atLeastOneValidInput = false; // Flag para verificar entradas válidas

    for (let i = 1; i <= 3; i++) {
        const cableSelect = document.getElementById(`bitola${i}`);
        const cableValue = parseInt(cableSelect.value);
        const quantityInput = document.getElementById(`quantity${i}`);
        const quantity = parseInt(quantityInput.value);

        // Verifica se a bitola e a quantidade são válidas
        if (!isNaN(cableValue) && cableValue > 0 && !isNaN(quantity) && quantity > 0) {
            atLeastOneValidInput = true; // Marca que temos entradas válidas
            // Calcular a área ocupada pelos cabos
            const cableArea = Math.PI * Math.pow(cableValue / 2, 2) * quantity; // Área total dos cabos
            totalCableArea += cableArea; // Acumula a área total
        }
    }

    const textareaElement = document.getElementById("suggestion2");

    // Verifica se ao menos uma bitola e quantidade foram inseridas
    if (!atLeastOneValidInput) {
        textareaElement.value = "Please enter at least one valid gauge and quantity.";
        return;
    }

    // Taxa de ocupação permitida (40%)
    const allowedArea = totalCableArea / 0.4;

    // Encontrar a primeira eletrocalha que atenda à necessidade
    for (const tray of trays) {
        const trayArea = tray.altura * tray.largura; // Área total da eletrocalha
        if (trayArea >= allowedArea) {
            textareaElement.value = `The suggested cable tray is: H ${tray.altura} mm x L ${tray.largura} mm`;
            console.log("-----: ", tray.altura, tray.largura);
            return; // Sai da função após encontrar a primeira opção adequada
        }
    }

    textareaElement.value = "No available cable tray meets your needs. Consider dividing into more cable trays.";
}





/*

function suggestTray() {
    console.log("----- entrou -----");
    
    const cableSelect = document.getElementById("bitola");
    const cableValue = parseInt(cableSelect.value);
    const quantityInput = document.getElementById("quantity");
    const quantity = parseInt(quantityInput.value);

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
