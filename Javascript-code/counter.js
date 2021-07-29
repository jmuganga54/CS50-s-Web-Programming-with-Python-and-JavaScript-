
//Checking if the localStorage has counter stored alread
if(!localStorage.getItem('counter')){//if not
    localStorage.setItem('counter',0);//if there is not counter set it to 0

}

//Function
function count() {
    let counter = localStorage.getItem('counter'); //getting the value of counter
  counter++;
  //selecting the element and change it's value
  document.querySelector("h1").textContent = localStorage.getItem('counter');
  localStorage.setItem('counter', counter);//Store the value of counter in localStorage
}

//Execution
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;

  //setting an interval to execute the count function after every 1s
//   setInterval(count, 1000);
});
