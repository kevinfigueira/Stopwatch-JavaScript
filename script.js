let [milliseconds, myTime, seconds, minutes, hours] = [0,'',0,0,0,];

function start(){
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');

    start.style.display = 'none';
    stop.style.display = 'inline';


    myTime = setInterval(()=>{
        time();
    }, 10); 
}


function time(){    
    milliseconds++

    if(milliseconds === 100){
        milliseconds = 0;
        seconds++

        if(seconds === 60){
            seconds = 0;
            minutes++

        }else if(minutes === 60){
            minutes = 0;
            
            // VERFICAR 
            /*hours++
            var elementHours = document.createElement('span');
            elementHours.innerText = '00'
            var elementCreate =  document.querySelector('#minutes').insertAdjacentHTML('beforebegin', elementHours);
            elementCreate.innerText = (hours < 1) ? ('') : ('0' + hours + ':') && (hours > 10) ? (hours + ':' ) : ('0' + hours + ':');*/
        }
    }
    
    document.querySelector('#milliseconds').textContent = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
    document.querySelector('#seconds').textContent = (seconds < 1) ? '00' : '0' + seconds && (seconds < 10) ? '0' + seconds : seconds;
    document.querySelector('#minutes').textContent = (minutes < 1) ? '00' : '0' + minutes && (minutes < 10) ? '0' + minutes : minutes;

}

function stoped(){
    let start = document.querySelector('#start');
    let stop = document.querySelector('#stop');

    stop.style.display = 'none';
    start.style.display = 'inline';
    
    clearInterval(myTime);
}

function restart(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('milliseconds').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    
}




