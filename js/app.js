'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let section = document.getElementById('section');
let table = document.createElement('table');
table.setAttribute("id", "mainTable");
section.appendChild(table);




function Cookies(name, minCust, maxCust, avgSale) {
  this.name = name
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgSale = avgSale;
  this.totalPerLocation = 0;
  this.cookiesPerHour = [];
  this.cusPerHour = [];
  
  Cookies.allLocation.push(this);
}
Cookies.allLocation = [];



Cookies.prototype.gitCustNumber = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiees = Math.ceil(getRandomValue(this.minCust, this.maxCust) * this.avgSale);
    this.cookiesPerHour.push(cookiees);
    console.log (cookiees);
    this.totalPerLocation += cookiees;
   
  };
  console.log(this.cookiesPerHour);
};







Cookies.prototype.render = function () {
  this.gitCustNumber();

  const traw = document.createElement('tr');
  table.appendChild(traw);
  
  let tData = document.createElement('td');
  traw.appendChild(tData);
  tData.textContent = this.name;

  for(let i = 0; i < hours.length; i++) {
    let tableData = document.createElement('td');
    traw.appendChild(tableData);
    tableData.textContent = this.cookiesPerHour[i];
  }

  let tabled1 = document.createElement('td');
  traw.appendChild(tabled1);
  tabled1.textContent = this.totalPerLocation;
} 

 function tableHead() {
   let th = document.createElement('tr');
  table.appendChild(th);

   let thData = document.createElement('th');
   th.appendChild(thData);
   thData.textContent = '';

  
   for(let i = 0; i < hours.length; i++) {
     let thData = document.createElement('th');
    th.appendChild(thData);
     thData.textContent =hours[i];
  }

 let thData1 = document.createElement('th');
 th.appendChild(thData1);
 thData1.textContent = 'Total Daily Location';
}

function tableFootr() {
  let tfoot = document.createElement('tr');
 table.appendChild(tfoot);
 let thData = document.createElement ('th');
 tfoot.appendChild(thData);
 thData.textContent='Total';



let theTotal = 0;
for (let i = 0; i < hours.length; i++) {

  let  thData = document.createElement('th');
  let totalPerHour = 0;
  for(let j = 0; j < Cookies.allLocation.length; j++) {
    totalPerHour += Cookies.allLocation[j].cookiesPerHour[i];
    theTotal += Cookies.allLocation[j].cookiesPerHour[i];
  }
  thData.textContent = totalPerHour;
  tfoot.appendChild(thData);
}


let th1Data1 = document.createElement('th');
tfoot.appendChild(th1Data1);
th1Data1.textContent = theTotal;
}

new Cookies('Seattle', 23, 65, 6.3);
new Cookies('Tokyo', 3, 24, 1.2);
new Cookies('Dubai', 11 , 38 , 3.7);
new Cookies('Paris', 20, 38, 2.3);
new Cookies('Lima', 2, 16, 4.6);




function render() {
  for(let i = 0; i < Cookies.allLocation.length; i++){
    Cookies.allLocation[i].render();
  }
}

const form = document.getElementById('cookiesForm');
form.addEventListener('submit',  eventButton);

function eventButton(event) {
  event.preventDefault();
  console.log(event.target.locationName.value);
  const locationName = event.target.locationName.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgSale = event.target.avgSale.value;


  let newCookies= new Cookies(locationName, minCust, maxCust, avgSale );
  newCookies.gitCustNumber();
  newCookies.render();
  // var table = document.getElementById("mainTable");
  // let newRaw = table.rows.length;
// table.deleteRow(newRaw-1);
table.innerHTML='';
tableHead();

render();

tableFootr();
}














tableHead();
render();


function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log( Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min);
}

tableFootr();




