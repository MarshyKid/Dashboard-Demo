async function govSupplyCreateAll(data) {
    const response = await fetch('https://udac-dashboard-backend.onrender.com/create-all', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    console.log(response);
    return response.status;
}

export default govSupplyCreateAll;