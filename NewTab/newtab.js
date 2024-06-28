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
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];

    let day = weekday[date.getDay()];
    let dateNum = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    
    return `${day}, ${month} ${dateNum}, ${year}`;
}

// Function to update the date and time on the page
function updateDateTime() {
    const now = new Date(); // Create a new Date object representing the current date and time
    let fullDate = formatDate(now); // Pass the Date object to formatDate
    let currentTime = formatTime(now); // Pass the same Date object to formatTime

    document.querySelector('.date').textContent = fullDate;
    document.querySelector('.time').textContent = currentTime;
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime(); // Initial call to display the date and time immediately
    setInterval(updateDateTime, 60000); // Update the time every 60 seconds (60000 milliseconds)
});
