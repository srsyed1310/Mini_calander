const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


const current_date = new Date();

console.log(current_date);


const week_days = ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

const months_name = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];


date.innerHTML = (current_date.getDate()<10? "0": "") + current_date.getDate();
day.innerHTML = week_days[current_date.getDay()];
month.innerHTML = months_name[current_date.getMonth()];
year.innerHTML = current_date.getFullYear();

