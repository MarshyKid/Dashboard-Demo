function csvToJson(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const jsonobj = lines.slice(1).map(line => {
        const val = line.split(',').map(v => v.trim());
        return headers.reduce((obj, header, i) => {
            obj[header] = val[i];
            return obj;
        }, {});
    });
    return jsonobj;
}

export default csvToJson;