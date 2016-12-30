// date deadline 
var deadline = new Date(Date.parse(new Date()) + 222 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
// function that declare date
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
// create clock by getelement by id
function initializeClock(id, endtime) {
  //clock
  var clock = document.getElementById(id);
  //days
  var daysSpan = clock.querySelector('.days');
  //hours
  var hoursSpan = clock.querySelector('.hours');
  //minutes
  var minutesSpan = clock.querySelector('.minutes');
  //seconds
  var secondsSpan = clock.querySelector('.seconds');
  //another function that make reverse clock
  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    //clear interal
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  //set interval
  var timeinterval = setInterval(updateClock, 1000);
}

