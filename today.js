document.querySelector("js-today");
const today = new Date();   


function getDate(){
    const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const day = today.getDay();
    const dayEnglish =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    document.querySelector(".js-today").innerHTML = `${dayEnglish[today.getDay(day)]},${monthNames[today.getMonth()]} ${date} ,${year}`
}
// document.querySelector("h1").innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

// function init(){
//     getTime();
//     setInterval(getTime, 1000);

// }

// init();

function init(){
    getDate();
}

init();