import Papa from 'papaparse';

const handleFileUpload = (e, setDatas) => {
  const file = e;
  if (!file) return;

  Papa.parse(file, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      console.log("Parsed data:", results.data);
      for (const i in setDatas) {
        setDatas[i](results.data);
      }
    }
  });
}

export default handleFileUpload;