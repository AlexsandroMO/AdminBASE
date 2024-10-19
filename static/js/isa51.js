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



