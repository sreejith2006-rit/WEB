document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const contentName = document.getElementById('contentName').value;
    const expiryDate = new Date(document.getElementById('expiryDate').value);
    const today = new Date();
    
    const timeDifference = expiryDate - today; // Difference in milliseconds
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    
    if (daysDifference <= 0) {
        alert(`${contentName} is expired!`);
    } else {
        alert(`${contentName} expires on ${expiryDate.toDateString()} that is it expires in ${daysDifference} day(s).`);
    }
});
