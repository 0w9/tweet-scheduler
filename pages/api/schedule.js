// 
//
//
//
//
//
//

/* 

function setCurrentTimeAndDate() {
    // check if the document is avaiable
    if (typeof document !== "undefined") {
      const dateSelector = document.getElementById("date-selector");
      const timeSelector = document.getElementById("time-selector");
      const currentTime = new Date();
      const futureTime = new Date(currentTime.getTime() + 60000);
      dateSelector.value = currentTime.toISOString().substring(0, 10);
      const hour = futureTime.getUTCHours();
      const minutes = futureTime.getUTCMinutes();
      timeSelector.value = `${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`;
    }

function getCronStatement() {
  if (typeof document !== "undefined") {
      const dateSelector = document.getElementById("date-selector");
      const timeSelector = document.getElementById("time-selector");
      const date = dateSelector.value;
      const time = timeSelector.value;
      const dateArr = date.split("-");
      const timeArr = time.split(":");
      const cronStatement = `${timeArr[1]} ${timeArr[0]} ${dateArr[2]} ${dateArr[1]} ${dateArr[0]}`;
      return cronStatement;
  }
}



setCurrentTimeAndDate();
const cronStatement = getCronStatement();

*/