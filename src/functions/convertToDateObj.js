function convertToDateObj (timestamp, slash = true) {
    if (!timestamp) return timestamp;
    if (!timestamp.includes(' ')) return timestamp;
    const [date, time] = timestamp.split(' ');
    if (slash) {
        const [month, day, year] = date.split('/');
        const [hh, mm, ss] = time.split(':');
        const dateobj = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`);
        return dateobj;
    } else {
        const [year, month, day] = date.split('-');
        const [hh, mm, ss] = time.split(':');
        if (!year || !month || !day || !hh || !mm || !ss) {
            return null;
        }
        const dateobj = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`);
        return dateobj;
    }
    
}

export default convertToDateObj;