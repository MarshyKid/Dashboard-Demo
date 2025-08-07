async function govSupplyDisbursement(data) {
    fetch('https://udac-dashboard-backend.onrender.com/disbursement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

export default govSupplyDisbursement;