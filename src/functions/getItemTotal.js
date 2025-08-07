const getItemTotal = (itemName, jsonData, type) => {
    let total = 0;
    let qty = "total_balance"
    if (type === "balance") {
        qty = "current_balance";
    } else {
        qty = "total_balance";
    }
    for (const row in jsonData) {
        if (jsonData[row].category === itemName) {
            total += +jsonData[row][qty];
        }
    }
    return total;
}

export default getItemTotal;