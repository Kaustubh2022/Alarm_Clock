
const alarms = [];
let time = document.getElementById("current-time");
const hour = document.getElementById('enter-hour');
const min = document.getElementById('enter-minute');
const sec = document.getElementById('enter-seconds');

console.log('working');
// Function to get current time
function showCurrentTime(){

    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();

}
showCurrentTime();

//To update the current time every second
setInterval(showCurrentTime,1000);



//Function to show notification when setting alarm
function showNotification(text){
        alert(text);
}

// Function to add alarm
function addAlarm(alarmtime){

    if(alarmtime){
        alarms.push(alarmtime);
        displayAlarms();
        showNotification('Alarm added successfully');
    }

}

//function to delete alarm
function deleteAlarm(alarmId){

}

//Function to render time
function displayAlarms(){

}

//function to add to DOM 
function addToDom(){

}

//function to play alarm sound
function playSound(){

}

function handleClickListener(e){

    const target = e.target;
    console.log(target);

    if(target.id=='set-alarm'){
        
        const alarm = {
            hour:hour,
            min:min,
            sec:sec
        }
        addAlarm(alarm);
        console.log(alarm);
    }
    
}



document.addEventListener('click',handleClickListener);
