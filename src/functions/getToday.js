import convertToDateObj from "./convertToDateObj.js";

function getToday (json, status = 'printed') {
    return json.filter(row => {
        if (!row) return false;
        const dateobj = convertToDateObj(status === 'printed' ? row.PrintedDate : status === 'rejected' ? row.RejectedDate : row.CollectedDate, false);
        if (!dateobj) return false;
        const today = new Date();
        try {
            dateobj.setHours(0, 0, 0, 0);
            return (dateobj.getDate() === today.getDate() && dateobj.getMonth() === today.getMonth() && dateobj.getYear() === today.getYear());
        } catch {
            return false;
        }
        
    });
}

export default getToday;