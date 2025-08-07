function disburseTemplate(data) {
    const headers = Object.keys(data[0]);
    const long = [];

    data.forEach(row => {
        let i = 2;
        let item = '';
        for (const key in row) {
            if (key === headers[0] || key === headers[1]) {
                continue;
            }
            if (i % 2 === 0) {
                item = headers[i];
                i++;
                continue;
            }

            const newRow = {
                "Recipient ID" : row[headers[0]],
                "Item Category" : item,
                "Quantity" : row[key]
            };
            i++;
            long.push(newRow)
        }
    })
    return long;
}

export default disburseTemplate;