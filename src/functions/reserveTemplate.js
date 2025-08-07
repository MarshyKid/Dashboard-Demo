function reserveTemplate(data) {
    const headers = Object.keys(data[0]);
    const long = [];
    for (const i in data) {
        const row = data[i];
        let j = 0;
        let item = '';
        for (const key in row) {
            if (key === headers[0] || key === headers[1]) continue;
            if (j % 2 === 0) {
                item = key;
            } else {
                const newRow = {
                    'Recipient ID': row[headers[0]],
                    'Item Category': item,
                    'Item ID / Variant Name': row[item],
                    'Amount (optional)': row[key]
                };
                long.push(newRow);
            }
            j++;
        }
    }
    return long;
}

// const testData = [
//     {Badge: 1, Name: 'Johannes', Shirt: 'XL', 'Qty1': 1, Pants: 'L', 'Qty2': 2},
//     {Badge: 2, Name: 'Heikkonen', Shirt: 'XS', 'Qty1': 3, Pants: 'M', 'Qty2': 4}
// ];

// console.log(reserveTemplate(testData));

export default reserveTemplate;