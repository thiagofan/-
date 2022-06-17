const clockDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");

function getDay() {
  let now = new Date();
  let year = now.getFullYear();
  let month = formatNumber(now.getMonth() + 1); 
  let date = formatNumber(now.getDate()); 
  let dayNumber = now.getDay(); 
  const dayList = ["일", "월", "화", "수", "목", "금", "토"];
  let day = dayList[dayNumber];

  todayDiv.textContent = year + "-" + month + "-" + date + " " + day;
}
  
function getTime() {
    let now = new Date();
    let hour = formatNumber(now.getHours()); //시 0-23분
    let minute = formatNumber(now.getMinutes()); // 0-59분
    let second = formatNumber(now.getSeconds()); // 0-59초
    let noon = "오전";
    if (hour > 11 ) {
      noon = "오후"
      hour = hour - 12;
      if(hour == 0){
        hour = 12;
      }
    }
    clockDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;
  }

getTime();
getDay();
setInterval(getTime,1000);

function formatNumber(number) {
    if (number < 10) {
      return "0" + number;
    }
    return number;
    
  }