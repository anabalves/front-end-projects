const hour = document.getElementById('hour'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds'),
      dayName = document.getElementById('dayname'),
      month = document.getElementById('month'),
      dayNum = document.getElementById('daynum'),
      year = document.getElementById('year');

const datetime = () => {
    let date = new Date();

    let hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds(), 
        dn = date.getDay(),
        dm = date.getMonth(),
        dd = date.getDate(),
        dy = date.getFullYear();

    if (hh < 10) {
        hh = `0${hh}`;
    }
    
    hour.innerHTML = `${hh}`;

    if (mm < 10) {
        mm = `0${mm}`;
    }

    minutes.innerHTML = mm;

    if (ss < 10) {
        ss = `0${ss}`;
    }

    seconds.innerHTML = ss;
    
    let months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
    
    dayName.innerHTML = `${week[dn]},`;
    month.innerHTML = `${months[dm]}`;
    dayNum.innerHTML = `${dd},`;
    year.innerHTML = dy;
}    

setInterval(datetime, 1000);