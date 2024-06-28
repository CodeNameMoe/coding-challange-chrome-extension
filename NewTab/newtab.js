// Function to format time in HH:MM format
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    // Add leading zero if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    return `${hours}:${minutes}`;
}

// Function to get the full date
function formatDate(date) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];

    let day = weekday[date.getDay()];
    let dateNum = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    
    return `${day}, ${month} ${dateNum}, ${year}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    let fullDate = formatDate(now);
    let currentTime = formatTime(now);

    document.querySelector('.date').textContent = fullDate;
    document.querySelector('.time').textContent = currentTime;
});
