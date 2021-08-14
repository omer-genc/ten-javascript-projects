const newYear = "1 Jan 2022";
const dayELEMENT = document.querySelector("#day");
const hourELEMENT = document.querySelector("#hour");
const minuteELEMENT = document.querySelector("#minute");
const secondELEMENT = document.querySelector("#second");

function countDown() {
    // 1 day 24 h 24*60 minute 24*60*60 second
    const currentDate = new Date();
    const newYearDate = new Date(newYear);

    const diffSecond = (newYearDate - currentDate) / 1000;

    const day = Math.floor(diffSecond / (24 * 60 * 60));
    const hour = Math.floor(diffSecond / 3600) % 24;
    const minute = Math.floor(diffSecond / 60) % 60;
    const second = Math.floor(diffSecond) % 60;

    dayELEMENT.innerHTML = day;
    hourELEMENT.innerHTML = hour;
    minuteELEMENT.innerHTML = minute;
    secondELEMENT.innerHTML = second;


    
    console.log(day, hour, minute, second);
    setTimeout(countDown, 1000);
}

countDown();
