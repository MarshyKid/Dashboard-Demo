import csvToJson from "./csvToJson";

function getNewAccred () {
    const NEWURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSrjN8Oc0IBs7SovnMsnf718m6A9ZUoNOYueSw_uIb1Wu0UEHXMMzxYUV3se_Kd1lvwQohtgKntmKEE/pub?gid=1736227529&single=true&output=csv';
    var res = '';
    fetch(NEWURL)
    .then(response => response.text())
    .then(csv => csvToJson(csv))
    .then(csv => { res = csv; });
    return res
}

export default getNewAccred;