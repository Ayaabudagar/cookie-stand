'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let section = document.getElementById('section');
let table = document.createElement('table');
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

tableHead();
render();


function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log( Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min);
}

tableFootr();














// Salmon.prototype.render = function () {
//   this.gitCustNumber();

//   const tr = document.createElement('tr');
//   datatable.appendChild(tr);
  
//   let td = document.createElement('td');
//   tr.appendChild(td);
//   td.textContent = this.name;

//   for(let i = 0; i < hour.length; i++) {
//     let tContent = document.createElement('td');
//     tr.appendChild(tContent);
//     tContent.textContent = this.cookiesPerHour[i];
//   }

//   let td1 = document.createElement('td');
//   tr.appendChild(td1);
//   td1.textContent = this.total;
// }





// Cookies.prototype.render = function () {
//   let dataRow = document.createElement('tr');
//   table.appendChild(dataRow);

//   let locationName = document.createElement('th');
//   dataRow.appendChild(locationName);
//   locationName.textContent = this.location;

//   let tdl = null;
//   for (let i = 0; i < this.cookPerHour[i]; i++) {
//     tdl = document.createElement('td');
//     dataRow.appendChild(tdl);
//     tdl.textContent = this.cookPerHour[i];
//   }
//   let dailyTotal = document.createElement('th');
//   dataRow.appendChild(dailyTotal);
//   dailyTotal.textContent = this.totalPerLocation;
// };


// function footerRow() {

//   let lastRow = document.createElement('tr');
//   table.appendChild(lastRow);

//   let firstCell = document.createElement('th');
//   lastRow.appendChild(firstCell);
//   firstCell.textContent = 'Total';

//   let sum = 0; let tdl = null;
//   let theTotal = 0;

//   for (let j = 0; j < hours.length; j++) {
//     for (let i = 0; i < allCookis.length; i++) {
//       sum = sum + allCookis[i].cookPerHour[j];
//     }
//     tdl = document.createElement('td');
//     lastRow.appendChild(tdl);
//     tdl.textContent = sum;
//     theTotal = theTotal + sum;
//     sum = 0;
//   }
//   let lastCell = document.createElement('th');
//   lastRow.appendChild(lastCell);
//   lastCell.textContent = theTotal;

// }


// headerRow();
// for (let i = 0; i < allCookis.length; i++) {
//   allCookis[i].getRanNumOfCust();
//   allCookis[i].getNumOfCookPreHour();
//   allCookis[i].render();

// }
// footerRow();

// console.log(allCookis);









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