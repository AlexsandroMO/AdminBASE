function handleUpload() {
  const fileInput = document.getElementById("excelFile");
  const file = fileInput.files[0];

  if (!file) {
    alert("Selecione uma planilha primeiro!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    localStorage.setItem("excelData", JSON.stringify(json));
    window.location.href = "tabela.html";
  };

  reader.readAsArrayBuffer(file);
}
