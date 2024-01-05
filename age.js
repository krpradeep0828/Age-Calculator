const calculateAge = () => {
    let d1 = parseInt(document.getElementById("date_field").value);
    let m1 = parseInt(document.getElementById("month_field").value);
    let y1 = parseInt(document.getElementById("year_field").value);
    let result = document.getElementById("result");

    if (isNaN(d1) || isNaN(m1) || isNaN(y1)) {
        alert('Please enter valid date, month, and year.');
        return;
    }

    if (d1 > 31 || m1 < 0 || m1 > 11) {
        alert('Please enter valid date and month.');
        return;
    }

    let dob = new Date(y1, m1, d1);

    let now = new Date();
    let d2 = now.getDate();
    let m2 = now.getMonth();
    let y2 = now.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y3, m3) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    let res = (`Your age is ${y3} years, ${m3} months, and ${d3} days.`);
    result.innerHTML=res;
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}