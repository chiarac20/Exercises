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
    createEmptyTh();
    const thead=document.getElementById('table-head-line');
    for (let i=1; i<=numberOfDays; i++){
        const day=document.createElement('th');
        thead.appendChild(day);
        const weekday=getWeekday(year, monthNum, i)
        day.innerText=[weekday, i, monthName, year].join(' ');
    }
}


function createEmptyTh(){
    const thead=document.getElementById('table-head-line');
    const th=document.createElement('th');
    thead.appendChild(th);
}
    
function createTbodyContent(numberOfRooms, numberOfDays) {
    for (let i=1; i<=numberOfRooms; i++){
        const tr=document.createElement('tr');
        const tbody=document.getElementById('tbody');
        const th=document.createElement('th');
        th.classList.add('roomNumber')
        tr.appendChild(th);
        tbody.appendChild(tr);
        th.innerText='Room' + i;
        const th1=document.createElement('th');
        th1.classList.add('roomType')
        tr.appendChild(th1);
        if (i===1| i===3| i===5| i===7| i===9|i===11|i===18|i===20|i===22){
            th1.innerHTML='STBD'
        } else if(i===2|i===4|i===6|i===8|i===10|i===12){
            th1.innerHTML='DLXQ'
        } else if(i===13|i===14|i===15|i===16){
            th1.innerHTML='STSB'
        } else if (i===17|i===19|i===21|i===23|i===25|i===27|i===29) {
            th1.innerHTML='DLXK'
        } else {
            th1.innerHTML='JS'
        }  
        for (let ii=1; ii<=numberOfDays; ii++){
            const td=document.createElement('td');
            tr.appendChild(td);
            td.classList.add('cell')
        }
    }  
}
