let randonNumber;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
function createBar(li) {
  randonNumber = generateRandomNumber();
  li.style.setProperty("--height", `${randonNumber}`);
  return li;
}
function barChart() {
  let chartArray = [];
  setInterval(function () {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    chartArray.push(createBar(li));
    chartArray.forEach((element) => {
      list.appendChild(element);
      if (chartArray.length > 20) {
        list.removeChild(list.firstElementChild);
        chartArray.splice(0, 1);
      }
    });
  }, 1000);
}
barChart();
