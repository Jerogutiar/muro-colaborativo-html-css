const $time = document.querySelector('.time'),
$date = document.querySelector('.date');

function digitalClock(){
    let fecha = new Date(), day = fecha.getDate(), month = fecha.getMonth() + 1, year = fecha.getFullYear(), diaSemana = fecha.getDay();
    

    let timeString = fecha.toLocaleTimeString();
    $time.innerHTML = timeString;

    $date.innerHTML = `${day}-${month}-${year}`;
}

setInterval(() => {
    digitalClock()
}, 1000);