/*
function toggleDivAlin2() {
    const divAlin2 = document.querySelector('.div-alin2');
    if (divAlin2.style.display === 'none') {
      divAlin2.style.display = 'block';
    } else {
      divAlin2.style.display = 'none';
    }
  }

  */
 
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


function suggestEletro() { 
    // Obter valores dos seletores
    const cableSelect = document.getElementById("bitola");
    const cableValue = parseInt(cableSelect.value);
    const quantityInput = document.getElementById("quanty"); 
    const quantity = parseInt(quantityInput.value);

    console.log(">>>>: ", cableValue, quantity);

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
            { size: "4\"", id: 88.9 },
            { size: " ", id: 89.0 }
        ];

        let suggestedEletro = "No conduits found.";

        for (const eletro of eletroOptions) {
            const eletroArea = Math.PI * Math.pow(eletro.id / 2, 2);

            // Verificar se o eletroduto pode acomodar os cabos
            const fillPercentage = 0.4; // 40%
            if ((eletroArea * fillPercentage) >= totalCableArea) {
                suggestedEletro = "";
                suggestedEletro = `Suggested Conduit: ${eletro.size}`;
                console.log(">>> - eletro- : ", eletro.size);
                
                // Verificar se o eletroduto sugerido é maior que 4"
                if (eletro.size === " ") {
                    suggestedEletro = "";
                    suggestedEletro = "(Consider Using a Cable Tray)";
                }
                break; // Sair do loop assim que encontrar um eletroduto adequado
            }
        }

        // Atualizar o valor no input de resultado
        document.getElementById("varResult").value = "";
        document.getElementById("varResult").value = suggestedEletro;

    } else {
        document.getElementById("varResult").value = "Select cable gauge and quantity.";
    }
}


function suggestEletro2() { 
    // Obter valores dos seletores e quantidades
    const cableSelect1 = document.getElementById("bitola1");
    const cableValue1 = parseFloat(cableSelect1.value);
    const quantityInput1 = document.getElementById("quanty1"); 
    const quantity1 = parseInt(quantityInput1.value) || 0; // Default para 0 se não preenchido
    
    const cableSelect2 = document.getElementById("bitola2");
    const cableValue2 = parseFloat(cableSelect2.value);
    const quantityInput2 = document.getElementById("quanty2"); 
    const quantity2 = parseInt(quantityInput2.value) || 0; // Default para 0 se não preenchido
    
    const cableSelect3 = document.getElementById("bitola3");
    const cableValue3 = parseFloat(cableSelect3.value);
    const quantityInput3 = document.getElementById("quanty3"); 
    const quantity3 = parseInt(quantityInput3.value) || 0; // Default para 0 se não preenchido

    // Calcular a área total ocupada pelos cabos
    const calculateCableArea = (cableValue) => cableValue ? Math.PI * Math.pow(cableValue / 2, 2) : 0;

    const totalCableArea = 
        (calculateCableArea(cableValue1) * quantity1) +
        (calculateCableArea(cableValue2) * quantity2) +
        (calculateCableArea(cableValue3) * quantity3);

    // Eletrodutos disponíveis
    const eletroOptions = [
        { size: "1/2\"", id: 21.3 },
        { size: "3/4\"", id: 26.9 },
        { size: "1\"", id: 33.4 },
        { size: "2\"", id: 48.3 },
        { size: "3\"", id: 60.3 },
        { size: "4\"", id: 88.9 },
        { size: " ", id: 89.0 }
    ];

    let suggestedEletro = "No conduits found.";

    // Verificar eletrodutos
    for (const eletro of eletroOptions) {
        const eletroArea = Math.PI * Math.pow(eletro.id / 2, 2);
        const fillPercentage = 0.4; // 40%
        
        // Verificar se o eletroduto pode acomodar os cabos
        if ((eletroArea * fillPercentage) >= totalCableArea) {
            suggestedEletro = `Suggested Conduit: ${eletro.size}`;
            
            // Verificar se o eletroduto sugerido é maior que 4"
            if (eletro.size === " ") {
                suggestedEletro = "(Consider Using a Cable Tray)";
            }
            break; // Sair do loop assim que encontrar um eletroduto adequado
        }
    }

    // Atualizar o valor no input de resultado
    document.getElementById("varResult2").value = suggestedEletro;
}



/*
function suggestEletro() {
    // Obter valores dos seletores
    const cableSelect = document.getElementById("bitola");
    const cableValue = parseInt(cableSelect.value);
    const quantityInput = document.getElementById("quantity");
    const quantity = parseInt(quantityInput.value);

    console.log(">>>>: ", cableValue, quantity)

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
                console.log(">>> - eletro- : ", eletro.size)
            }
                break; // Sair do loop assim que encontrar um eletroduto adequado
                
        }

        // Atualizar o valor no input de resultado
        document.getElementById("varResult").value = suggestedEletro;

    } else {
        document.getElementById("varResult").value = "Selecione a bitola do cabo e a quantidade.";
    }
}

*/
/*
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

*/