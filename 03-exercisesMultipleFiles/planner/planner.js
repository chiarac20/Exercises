const ROOM_FLOORS = {
    LOWER_GROUND: 'L-Ground',
};

const ROOM_INFO = [{
    id: 1,
    type: 'DLXK',
    floor: ROOM_FLOORS.LOWER_GROUND
}, {
    id: 3,
    type: 'DLXK',
    floor: ROOM_FLOORS.LOWER_GROUND
}, {
    id: 4,
    type: 'STSB',
    floor: ROOM_FLOORS.LOWER_GROUND
}, {
    id: 6,
    type: 'STDB',
    floor:'Ground'
}, {
    id: 7,
    type: 'DLXQ',
    floor:'Ground'
}, {
    id: 8,
    type: 'STDB',
    floor:'Ground'
}, {
    id: 9,
    type: 'DLXK',
    floor:'Ground'
}, {
    id: 10,
    type: 'STDB',
    floor:'Ground-First'
}, {
    id: 11,
    type: 'JS',
    floor:'First'
}, {
    id: 12,
    type: 'STSB',
    floor:'First'
}, {
    id: 14,
    type: 'DLXK',
    floor:'First'
}, {
    id: 15,
    type: 'STDB',
    floor:'First'
}, {
    id: 16,
    type: 'DLXK',
    floor:'Ground-First'
}, {
    id: 21,
    type: 'JS',
    floor:'Second'
}, {
    id: 22,
    type: 'STSB',
    floor:'Second'
}, {
    id: 23,
    type: 'STDB',
    floor:'Second'
}, {
    id: 24,
    type: 'JS',
    floor:'Second'
}, {
    id: 31,
    type: 'JS',
    floor:'Third'
}, {
    id: 32,
    type: 'STDB',
    floor:'Third'
}, {
    id: 33,
    type: 'JS',
    floor:'Third'
}, {
    id: 34,
    type: 'STDB',
    floor:'Third'
}, {
    id: 41,
    type: 'JS',
    floor:'Fourth'
}, {
    id: 42,
    type: 'STDB',
    floor:'Fourth'
}, {
    id: 43,
    type: 'JS',
    floor:'Fourth'
}, {
    id: 44,
    type: 'STDB',
    floor:'Fourth'
}, {
    id: 51,
    type: 'DLXK',
    floor:'Fifth'
}, {
    id: 52,
    type: 'STSB',
    floor:'Fifth'
}, {
    id: 53,
    type: 'DLXK',
    floor:'Fifth'
}, {
    id: 54,
    type: 'DLXQ',
    floor:'Fifth'
}
];

document.getElementById("show-planner").addEventListener('click', ()=>{
    init();
    const selectedMonthYear=document.getElementById("selected-month").value;
    if (selectedMonthYear===''){
        return
    }
    const fullDateInfo=getYearMonth(selectedMonthYear)
    const daysInMonth=getDaysInMonth(fullDateInfo.date);
    createTheadContent(daysInMonth, fullDateInfo.monthName, fullDateInfo.year, fullDateInfo.monthNum)
    createTbodyContent(daysInMonth);    
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
    createInfoTh('Room Number');
    createInfoTh('Room Type');
    createInfoTh('Floor')
    const thead=document.getElementById('table-head-line');
    for (let i=1; i<=numberOfDays; i++){
        const day=document.createElement('th');
        thead.appendChild(day);
        const weekday=getWeekday(year, monthNum, i)
        day.innerText=[weekday, i, monthName, year].join(' ');
    }
}

function createInfoTh(info) {
    const thead=document.getElementById('table-head-line');
    const th=document.createElement('th');
    th.innerText=info;
    thead.appendChild(th);
}

function createTbodyContent(numberOfDays) {
    ROOM_INFO.forEach(roomInfo => {
        const line=createHeadedTh(roomInfo.id, roomInfo.type, roomInfo.floor);
        for (let ii=1; ii<=numberOfDays; ii++){
            const td=document.createElement('td');
            line.appendChild(td);
            td.classList.add('cell')
        }
    });
}

function createHeadedTh (roomNumber, roomType, floor) {
    const tbody=document.getElementById('tbody');
    const tr=document.createElement('tr');
    const th1=document.createElement('th');
    const th2=document.createElement('th');
    const th3=document.createElement('th');
    th1.classList.add('room-number');
    th2.classList.add('room-type');
    th3.classList.add('floor');
    tbody.appendChild(tr);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    th1.innerText=roomNumber;
    th2.innerText=roomType;
    th3.innerText=floor;
    return tr;
}
