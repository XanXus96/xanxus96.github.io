const indicator = document.getElementById("indicator");

let timeout = 0;

pill("#page", {
  onLoading() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = 0;
    }

    addClass(indicator, "is-loading");
    indicator.style.display = "block";
  },
  onReady() {
    timeout = setTimeout(() => {
      removeClass(indicator, "is-loading");
      indicator.style.display = "none";
    }, 500);
    setCurrentYear()
    runClock()
  }
});

setCurrentYear()
runClock()

function addClass(target, className) {
  target.className = target.className
    .trim()
    .split(/\s+/)
    .concat(className)
    .join(" ");
}

function removeClass(indicator, className) {
  indicator.className = indicator.className
    .trim()
    .split(/\s+/)
    .filter(item => item !== className)
    .join(" ");
}

function setCurrentYear() {
  document.querySelector('#footer_year').innerHTML = new Date().getFullYear()
}

function runClock() {
  const deg = 6
  const hr = document.querySelector('#hr')
  const mn = document.querySelector('#mn')
  const sc = document.querySelector('#sc')

  setInterval(() => {

      let day = new Date()
      let hh = day.getHours() * 30
      let mm = day.getMinutes() * deg
      let ss = day.getSeconds() * deg
      
      hr.style.transform = `rotate(${(hh)+(mm/12)}deg)`
      mn.style.transform = `rotate(${mm}deg)`
      sc.style.transform = `rotate(${ss}deg)`
  })
}
