function createTemplate(data) {
    const oldHeaders = Object.keys(data[0]);
    const res = data.map(row => ({
        "Recipient ID": row[oldHeaders[0]],
        "Recipient Name": row[oldHeaders[1]]
    }));
    return res
}

export default createTemplate;