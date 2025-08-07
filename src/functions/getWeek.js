import convertToDateObj from "./convertToDateObj.js";

function getWeek (json, timestamp=true, status = null) {
    const now = new Date();
    const endOfWeek = new Date(now);
    const dayOfWeek = now.getDay();
    const startOfWeek = new Date();
    startOfWeek.setDate(now.getDate() - 6);
    startOfWeek.setHours(0, 0, 0, 0);
    const headers = Object.keys(json[0]);
    return json.filter(row => {
        if (!row) return false;
        try {
            const dateobj = convertToDateObj(timestamp ? row.Timestamp : status === 'printed' ? row[headers[5]] : status ==='rejected' ? row[headers[7]] : row[headers[6]], timestamp ? true : false);
            dateobj.setHours(0, 0, 0, 0);
            return startOfWeek <= dateobj && dateobj <= endOfWeek
        } catch {
            return false;
        }
    });
}

export default getWeek;