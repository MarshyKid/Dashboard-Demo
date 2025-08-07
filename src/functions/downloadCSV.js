import Papa from 'papaparse';

function downloadCSV(data, transform, name) {
  const csv = Papa.unparse(transform(data));

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", name);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default downloadCSV;