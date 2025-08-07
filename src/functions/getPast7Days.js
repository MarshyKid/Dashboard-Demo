function getPast7Days() {
    const last7Days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        last7Days.push(today.toLocaleDateString('en-GB'));
        today.setDate(today.getDate() - 1);
    }
    last7Days.reverse();
    return last7Days;
}

export default getPast7Days;