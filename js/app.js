'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let section = document.getElementById('section');
let table = document.createElement('table');
section.appendChild(table);
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let allCookis = [];
function Cookies(location, minCust, maxCust, avgPerSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.ranCust = [];
  this.totalPerLocation = 0;
  this.cookPerHour = [];
  allCookis.push(this);
}

let seattle = new Cookies('Seattle', 23, 65, 6.3);
let tokyo = new Cookies('Tokyo', 3, 24, 1.2);
let dubai = new Cookies('Dubai', 11, 38, 3.7);
let paris = new Cookies('Paris', 20, 38, 2.3);
let lima = new Cookies('Lima', 2, 16, 4.6);


Cookies.prototype.getRanNumOfCust = function () {
  for (let i = 0; i < hours.length; i++) {
    this.ranCust.push(randomValue(this.minCust, this.maxCust));
  }
};
Cookies.prototype.getNumOfCookPreHour = function () {
  let value = 0;
  for (let i = 0; i < hours.length; i++) {
    value = Math.ceil(this.ranCust[i] * this.avgPerSale);
    this.totalPerLocation = this.totalPerLocation + value;
    this.cookPerHour.push(value);
  }
};


function headerRow() {
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);
  let emptyCell = document.createElement('th');
  firstRow.appendChild(emptyCell);
  let thl = null;
  for (let i = 0; i < hours.length; i++) {
    thl = document.createElement('th');
    firstRow.appendChild(thl);
    thl.textContent = hours[i];
  }
  let dailyTotal = document.createElement('th');
  firstRow.appendChild(dailyTotal);
  dailyTotal.textContent = 'Daily Location Total';
}


Cookies.prototype.render = function () {
  let dataRow = document.createElement('tr');
  table.appendChild(dataRow);

  let locationName = document.createElement('th');
  dataRow.appendChild(locationName);
  locationName.textContent = this.location;

  let tdl = null;
  for (let i = 0; i < this.cookPerHour[i]; i++) {
    tdl = document.createElement('td');
    dataRow.appendChild(tdl);
    tdl.textContent = this.cookPerHour[i];
  }
  let dailyTotal = document.createElement('th');
  dataRow.appendChild(dailyTotal);
  dailyTotal.textContent = this.totalPerLocation;
};


function footerRow() {

  let lastRow = document.createElement('tr');
  table.appendChild(lastRow);

  let firstCell = document.createElement('th');
  lastRow.appendChild(firstCell);
  firstCell.textContent = 'Total';

  let sum = 0; let tdl = null;
  let theTotal = 0;

  for (let j = 0; j < hours.length; j++) {
    for (let i = 0; i < allCookis.length; i++) {
      sum = sum + allCookis[i].cookPerHour[j];
    }
    tdl = document.createElement('td');
    lastRow.appendChild(tdl);
    tdl.textContent = sum;
    theTotal = theTotal + sum;
    sum = 0;
  }
  let lastCell = document.createElement('th');
  lastRow.appendChild(lastCell);
  lastCell.textContent = theTotal;

}


headerRow();
for (let i = 0; i < allCookis.length; i++) {
  allCookis[i].getRanNumOfCust();
  allCookis[i].getNumOfCookPreHour();
  allCookis[i].render();

}
footerRow();

console.log(allCookis);









// let seattle = {
//     name:'Seattle',
//     mincust:23,
//     maxcust:65,
//     avgsale:6.3,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     gitCustNumber: function(){
  
//       return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
//     },


// render : function(){
//     const parentElement = document.getElementById('portfolio');


//     let articleElement = document.createElement('article');
//     parentElement.appendChild(articleElement);

//     let h2Element=document.createElement('h2');
//     h2Element.textContent=this.name;
//     articleElement.appendChild(h2Element);

//     let ulElement=document.createElement('ul');
//     h2Element.appendChild(ulElement);
//     let total=0;
//     for(let i=0;i<this.hour.length;i++){
//       let liElement=document.createElement('li');
//       let cookie=this.gitCustNumber();
//       liElement.textContent=this.hour[i]+': '+cookie+' cookies';
//       total=total+cookie;
//       ulElement.appendChild(liElement);
//       if (i===13){
//         let liElement=document.createElement('li');
//         liElement.textContent='total: '+total+' cookies';
//         ulElement.appendChild(liElement);
//       }
//     }

// },
// };
// let tokyo = {
//     name:'Tokyo',
//     mincust:3,
//     maxcust:24,
//     avgsale:1.2,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     gitCustNumber: function(){
  
//       return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
//     },
  
//     render: function(){
//         const parentElement = document.getElementById('portfolio');
    
    
//         let articleElement=document.createElement('article');
//         parentElement.appendChild(articleElement);
    
//         let h2Element=document.createElement('h2');
//         h2Element.textContent=this.name;
//         articleElement.appendChild(h2Element);
    
//         let ulElement=document.createElement('ul');
//         h2Element.appendChild(ulElement);
//         let total=0;
//         for(let i=0;i<this.hour.length;i++){
//           let liElement=document.createElement('li');
//           let cookie=this.gitCustNumber();
//           liElement.textContent=this.hour[i]+': '+cookie+' cookies';
//           total=total+cookie;
//           ulElement.appendChild(liElement);
//           if (i===13){
//             let liElement=document.createElement('li');
//             liElement.textContent='total: '+total+' cookies';
//             ulElement.appendChild(liElement);
//           }
//         }

    
//       },
    
//     };

//     let dubai = {
//         name:'Dubai',
//         mincust:11,
//         maxcust:38,
//         avgsale:3.7,
//         hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//         gitCustNumber: function(){
      
//           return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
//         },
      
      
//         render: function(){
//           const parentElement = document.getElementById('portfolio');
      
      
//           let articleElement=document.createElement('article');
//           parentElement.appendChild(articleElement);
      
//           let h2Element=document.createElement('h2');
//           h2Element.textContent=this.name;
//           articleElement.appendChild(h2Element);
      
//           let ulElement=document.createElement('ul');
//           h2Element.appendChild(ulElement);
//           let total=0;
//           for(let i=0;i<this.hour.length;i++){
//             let liElement=document.createElement('li');
//             let cookie=this.gitCustNumber();
//             liElement.textContent=this.hour[i]+': '+cookie+' cookies';
//             total=total+cookie;
//             ulElement.appendChild(liElement);
//             if (i===13){
//               let liElement=document.createElement('li');
//               liElement.textContent='total: '+total+' cookies';
//               ulElement.appendChild(liElement);
//             }
//           }
      
//         },
      
//       };

      
// let paris = {
//     name:'Paris',
//     mincust:20,
//     maxcust:38,
//     avgsale:2.3,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     gitCustNumber: function(){
  
//       return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
//     },
  
  
//     render: function(){
//       const parentElement = document.getElementById('portfolio');
  
  
//       let articleElement=document.createElement('article');
//       parentElement.appendChild(articleElement);
  
//       let h2Element=document.createElement('h2');
//       h2Element.textContent=this.name;
//       articleElement.appendChild(h2Element);
  
//       let ulElement=document.createElement('ul');
//       h2Element.appendChild(ulElement);
//       let total=0;
//       for(let i=0;i<this.hour.length;i++){
//         let liElement=document.createElement('li');
//         let cookie=this.gitCustNumber();
//         liElement.textContent=this.hour[i]+': '+cookie+' cookies';
//         total=total+cookie;
//         ulElement.appendChild(liElement);
//         if (i===13){
//           let liElement=document.createElement('li');
//           liElement.textContent='total: '+total+' cookies';
//           ulElement.appendChild(liElement);
//         }
//       }
  
  
  
  
//     },
  
//   };
//   let lima = {
//     name:'Lima',
//     mincust:2,
//     maxcust:16,
//     avgsale:4.6,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     gitCustNumber: function(){
  
//       return Math.ceil(getRandomValue(this.mincust,this.maxcust)*this.avgsale);
//     },
  
  
//     render: function(){
//       const parentElement = document.getElementById('portfolio');
  
  
//       let articleElement=document.createElement('article');
//       parentElement.appendChild(articleElement);
  
//       let h2Element=document.createElement('h2');
//       h2Element.textContent=this.name;
//       articleElement.appendChild(h2Element);
  
//       let ulElement=document.createElement('ul');
//       h2Element.appendChild(ulElement);
//       let total=0;
//       for(let i=0;i<this.hour.length;i++){
//         let liElement=document.createElement('li');
//         let cookie=this.gitCustNumber();
//         liElement.textContent=this.hour[i]+': '+cookie+' cookies';
//         total=total+cookie;
//         ulElement.appendChild(liElement);
//         if (i===13){
//           let liElement=document.createElement('li');
//           liElement.textContent='total: '+total+' cookies';
//           ulElement.appendChild(liElement);
//         }
//       }
  
  
  
//     },
  
//   };
  
  
//   function getRandomValue(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }
 
// seattle.render();
// console.log(seattle);
// tokyo.render();
// console.log(tokyo);
// dubai.render();
// console.log(tokyo);
// paris.render();
// console.log(paris);
// lima.render();
// console.log(lima);