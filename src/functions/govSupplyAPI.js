async function govSupplyAPI(data) {
    fetch('https://udac-dashboard-backend.onrender.com/run-script', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

// govSupplyAPI({
//             createCustodian: [{
//             custodianExternalUIN: '000004',
//             custodianName: 'Test API4'
//             }, {
//             custodianExternalUIN: '000005',
//             custodianName: 'Test API5'
//             }]
//         });
export default govSupplyAPI;