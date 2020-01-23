function leapYear(year) {
    if(year < 1582) {
        throw new Error('Leep year rules do not work before 1585');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return (div4 && !div100) || div400;
}

export default leapYear;