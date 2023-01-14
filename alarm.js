
var alarms = [];
const time = document.getElementById("current-time");
const hour = document.getElementById('enter-hour');
const min = document.getElementById('enter-minute');
const sec = document.getElementById('enter-seconds');
var alarmLists = document.getElementById('alarm-list');
var music = document.getElementById("myAudio");
var reset = document.getElementById('reset-alarm');

console.log('working');

// Function to get current time
function showCurrentTime(){

    let date = new Date();
    
    var hours = date.getHours();
    var min = date.getMinutes();
    var  sec = date.getSeconds();

    const currentTime = `${hours}:${min}:${sec}`;
    time.innerHTML = currentTime;

    checkAlarm();

   
}


//To update the current time every second
setInterval(showCurrentTime,1000);



//Function to show notification when setting alarm
function showNotification(text){
        alert(text);
}


//function to reset alarm 

function resetAlarm(){

    hour.value='';
    min.value='';
    sec.value='';
    return;

}
// Function to add alarm
function addAlarm(alarmtime){

    if(alarmtime){
        alarms.push(alarmtime);
        displayAlarms();
        showNotification('Alarm added successfully');
    }
    else{
        showNotification('Alarm cannot be added ')
    }

}

//function to delete alarm
function deleteAlarm(alarmId){

    var newAlarm = alarms.filter(function(alarm){
        return alarm.id != alarmId;
    })

    alarms = newAlarm;
    displayAlarms();
    showNotification('Alarm deleted successfully');

}

//Function to render time
function displayAlarms(){

    alarmLists.innerHTML = ' ';

    for(let i=0;i<alarms.length;i++){

        addToDom(alarms[i]);
    }
    

}

//function to add to DOM 
function addToDom(alarm){

    const li = document.createElement('li');

    li.innerHTML=`
    
    Alarm set : ${alarm.hour}:${alarm.min}:${alarm.sec} &nbsp; &nbsp;
    <button type="submit" class="delete" data-id="${alarm.id}">delete</button>
    
    `
    alarmLists.append(li);

}

//function to check if alarm time is === current time

function checkAlarm(){

    let date = new Date();

    console.log(date.getHours());

    for(let i = 0;i<alarms.length;i++){

        if(alarms[i].hour == date.getHours() && alarms[i].min==date.getMinutes() && alarms[i].sec==date.getSeconds() ){
            console.log('alarms up');
            playSound();
            deleteAlarm(alarms[i].id);
        }

    }
    
   
    
}  
   


//function to play alarm sound
function playSound(){

    music.play();

}

function handleClickListener(e){

    const target = e.target;
    console.log(target);

    if(target.id==='set-alarm'){
        


       
        if(hour.value>24 || min.value>59 || sec.value>59 || hour.value=='' || min.value=='' || sec.value==''){
                    showNotification('enter a valid time');
                    resetAlarm();
                    return;
                    
        }
        if(hour.value <= 9){
            hour.value = '0'+hour.value;
        }
        if(min.value <= 9){
            min.value = '0'+min.value;
        }
        if(sec.value <= 9 &sec.length <2){
            sec.value = '0'+sec.value;
        }

        const alarm = {
            hour:hour.value,
            min:min.value,
            sec:sec.value,
            id:Date.now().toString()
        }

        

        
        addAlarm(alarm);
        resetAlarm();
        checkAlarm(alarm);
        
        console.log(alarm);
    }

    else if(target.className==='delete'){
        var alarmId = target.dataset.id;
        console.log(alarmId);
        deleteAlarm(alarmId);
    }
    
    else if(target.id==='reset-alarm'){

        resetAlarm();
    }
    
   
    
}



document.addEventListener('click',handleClickListener);