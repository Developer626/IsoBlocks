// TODO Document this code

/**
 * 
 */

import document from "document";
import Number from "./Number";
import clock from "clock";

// 
var intervalProcess, boolHrFirst, boolHrLast, boolMinFirst, boolMinLast;

// Setting up the initial blocks to display the time.
var hrFirst = new Number(document.getElementById("n1b1"), "blue.png", 100, 10, 0);
var hrLast = new Number(document.getElementById("n2b1"), "blue.png", 190, 60, 4);
var minFirst = new Number(document.getElementById("n3b1"), "blue.png", 0, 90, 8);
var minLast = new Number(document.getElementById("n4b1"), "blue.png", 90, 140, 12);

// Adding the additional blocks to display the rest of the number.
hrFirst.addElement(document.getElementById("n1b2"), "blue.png");
hrFirst.addElement(document.getElementById("n1b3"), "blue.png");
hrFirst.addElement(document.getElementById("n1b4"), "blue.png");
hrFirst.addElement(document.getElementById("n1b5"), "blue.png");
hrFirst.addElement(document.getElementById("n1b6"), "blue.png");
hrFirst.addElement(document.getElementById("n1b7"), "blue.png");
hrFirst.addElement(document.getElementById("n1b8"), "blue.png");
hrFirst.addElement(document.getElementById("n1b9"), "blue.png");
hrFirst.addElement(document.getElementById("n1b10"), "blue.png");
hrFirst.addElement(document.getElementById("n1b11"), "blue.png");
hrFirst.addElement(document.getElementById("n1b12"), "blue.png");
hrFirst.addElement(document.getElementById("n1b13"), "blue.png");

hrLast.addElement(document.getElementById("n2b2"), "blue.png");
hrLast.addElement(document.getElementById("n2b3"), "blue.png");
hrLast.addElement(document.getElementById("n2b4"), "blue.png");
hrLast.addElement(document.getElementById("n2b5"), "blue.png");
hrLast.addElement(document.getElementById("n2b6"), "blue.png");
hrLast.addElement(document.getElementById("n2b7"), "blue.png");
hrLast.addElement(document.getElementById("n2b8"), "blue.png");
hrLast.addElement(document.getElementById("n2b9"), "blue.png");
hrLast.addElement(document.getElementById("n2b10"), "blue.png");
hrLast.addElement(document.getElementById("n2b11"), "blue.png");
hrLast.addElement(document.getElementById("n2b12"), "blue.png");
hrLast.addElement(document.getElementById("n2b13"), "blue.png");


minFirst.addElement(document.getElementById("n3b2"), "blue.png");
minFirst.addElement(document.getElementById("n3b3"), "blue.png");
minFirst.addElement(document.getElementById("n3b4"), "blue.png");
minFirst.addElement(document.getElementById("n3b5"), "blue.png");
minFirst.addElement(document.getElementById("n3b6"), "blue.png");
minFirst.addElement(document.getElementById("n3b7"), "blue.png");
minFirst.addElement(document.getElementById("n3b8"), "blue.png");
minFirst.addElement(document.getElementById("n3b9"), "blue.png");
minFirst.addElement(document.getElementById("n3b10"), "blue.png");
minFirst.addElement(document.getElementById("n3b11"), "blue.png");
minFirst.addElement(document.getElementById("n3b12"), "blue.png");
minFirst.addElement(document.getElementById("n3b13"), "blue.png");

minLast.addElement(document.getElementById("n4b2"), "blue.png");
minLast.addElement(document.getElementById("n4b3"), "blue.png");
minLast.addElement(document.getElementById("n4b4"), "blue.png");
minLast.addElement(document.getElementById("n4b5"), "blue.png");
minLast.addElement(document.getElementById("n4b6"), "blue.png");
minLast.addElement(document.getElementById("n4b7"), "blue.png");
minLast.addElement(document.getElementById("n4b8"), "blue.png");
minLast.addElement(document.getElementById("n4b9"), "blue.png");
minLast.addElement(document.getElementById("n4b10"), "blue.png");
minLast.addElement(document.getElementById("n4b11"), "blue.png");
minLast.addElement(document.getElementById("n4b12"), "blue.png");
minLast.addElement(document.getElementById("n4b13"), "blue.png");

// Setting up the clock to change only on the minute to save battery life.
clock.granularity = "minutes";

// 
clock.ontick = (evt) => {

  
  let hF, hL, mF, mL;
  
  if(evt.date.getHours() === 0){
    hF = 1;
    hL = 2;
  }else if(evt.date.getHours() > 12){
    hF = Math.floor((evt.date.getHours() - 12)/10);
    hL  = evt.date.getHours() - ((hF * 10) + 12);
  }else {
    hF = Math.floor(evt.date.getHours()/10);
    hL  = evt.date.getHours() - (hF * 10);
  }
  
  mF = Math.floor(evt.date.getMinutes()/10);
  mL  = evt.date.getMinutes() - (mF * 10);
  
  
  hrFirst.setupNext(hF);
  hrLast.setupNext(hL);

  minFirst.setupNext(mF);
  minLast.setupNext(mL);
  
  intervalProcess = setInterval(update, 50);
}

/**
 *ERROR:
 *  When the update process is still running and a new time
 *  event occures, some blocks get stuck in between states
 *  and stop on the screen.
*/

// 
function update(){
  if(hrFirst.update()){
    boolHrFirst = true;
  }
  if(hrLast.update()){
     boolHrLast = true;
  }

  if(minFirst.update()){
    boolMinFirst = true;
  }
  if(minLast.update()){
     boolMinLast = true;
  }
  
  if(boolHrFirst && boolHrLast && boolMinFirst && boolMinLast){
    boolHrFirst = false;
    boolHrLast = false;
    boolMinFirst = false;
    boolMinLast = false;
    clearInterval(intervalProcess);
  }
}