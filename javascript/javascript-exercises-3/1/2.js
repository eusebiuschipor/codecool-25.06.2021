/*
    Write a JavaScript program to get the current date.
*/

const button = document.getElementById('get-date-button');
button.onclick = function() {
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1;
    let year = todayDate.getFullYear();
    if(day < 10) {
        day = '0' + day
    }
    if(month < 10) {
        month = '0' + month
    }
    document.getElementById('content').innerText = `${day}.${month}.${year}`;
}
