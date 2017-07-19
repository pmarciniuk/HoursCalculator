var t1 = document.querySelector('#timeStarted');
var t2 = document.querySelector('#timeFinished');
var btn = document.querySelector('#btn');


document.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener('click', timeDiff);
});

function toMinutes(time) {
    var t = time.split(':');
    return parseInt(t[0]) * 60 + parseInt(t[1]);
}

function minutesToString(time) {
    return Math.floor(time/60) + ' hours ' + (time%60 > 0 ? time%60 + ' minutes' : ''); 
}

function timeToCash(time) {
    return Math.round(time/60 * 100) / 100 * 7.5;
}

//function check() {
//    if (t1.value <= 0 || t1.value >= 25 || t2.value <= 0 || t2.value >= 25) {
//        return true;
//    } else {
//    };
//}


function timeDiff() {
    var timeInWork = (toMinutes(t2.value) - toMinutes(t1.value)) - 30;
    
    console.log(t2.value);
    console.log(t1.value);
    
    if (t2.value < t1.value) {
        document.querySelector('#errorPlace').classList.remove('hidden');
        document.querySelector('#result').classList.add('hidden');
        
    } else {
        document.querySelector('#worked').innerHTML = minutesToString(timeInWork);
        document.querySelector('#earned').innerHTML = timeToCash(timeInWork);
        document.querySelector('#errorPlace').classList.add('hidden');
        document.querySelector('#result').classList.remove('hidden');
        
    };
    
}


