// import { roomInfo } from './room_info.js';
// console.log(roomInfo);

const ROOM_INFO = [{
    id: 1,
    type: 'DLXK'
}, {
    id: 3,
    type: 'DLXK'
}, {
    id: 4,
    type: 'STSB'
}, {
    id: 6,
    type: 'STDB'
}];

document.getElementById("show-planner").addEventListener('click', ()=>{
    init();
    const selectedMonthYear=document.getElementById("selected-month").value;
    if (selectedMonthYear===''){
        return
    }
    const fullDateInfo=getYearMonth(selectedMonthYear)
    const daysInMonth=getDaysInMonth(fullDateInfo.date);
    createTheadContent(daysInMonth, fullDateInfo.monthName, fullDateInfo.year, fullDateInfo.monthNum)
    createTbodyContent(30, daysInMonth);    
})

function init(){
    document.getElementById('table-head-line').innerHTML='';
    document.getElementById('tbody').innerHTML='';
}

function getWeekday(year, month, date){
    const selectedDate=new Date(year, month-1, date);
    return selectedDate.toLocaleString('EN', {weekday: 'short'});
}

function getYearMonth(monthYear) {
    const year= +monthYear.slice(0, 4);  
    const monthNum= +monthYear.slice(-2);
    const date=new Date(year, monthNum -1);
    const monthName= date.toLocaleString('EN', {month: 'short'});
    return {date, monthName, year, monthNum};
}

function getDaysInMonth(date) {
    const lastDayPreviousMonth = new Date(date.getFullYear(), date.getMonth()+1, 0)
    const numberOfDays = lastDayPreviousMonth.getDate();
    return numberOfDays;
}

function createTheadContent(numberOfDays, monthName, year, monthNum){
    createEmptyTh();
    const thead=document.getElementById('table-head-line');
    for (let i=1; i<=numberOfDays; i++){
        const day=document.createElement('th');
        thead.appendChild(day);
        const weekday=getWeekday(year, monthNum, i)
        day.innerText=[weekday, i, monthName, year].join(' ');
    }
}

function createEmptyTh() {
    const thead=document.getElementById('table-head-line');
    const th=document.createElement('th');
    th.colSpan = 2;
    thead.appendChild(th);
}

function createTbodyContent(numberOfRooms, numberOfDays) {
    ROOM_INFO.forEach(roomInfo => {
        const tr=document.createElement('tr');
        const tbody=document.getElementById('tbody');
        const th=document.createElement('th');
        th.classList.add('room-number')
        tr.appendChild(th);
        tbody.appendChild(tr);
        th.innerText='Room ' + roomInfo.id;
        const th1=document.createElement('th');
        th1.classList.add('roomType')
        tr.appendChild(th1);
        th1.innerHTML=roomInfo.type;
        for (let ii=1; ii<=numberOfDays; ii++){
            const td=document.createElement('td');
            tr.appendChild(td);
            td.classList.add('cell')
        }
    });
}
