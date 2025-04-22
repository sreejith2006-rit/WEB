document.getElementById('contentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const contentName = document.getElementById('contentName').value;
    const expiryDate = new Date(document.getElementById('expiryDate').value);
    const today = new Date();
    
    if (expiryDate <= today) {
        alert(`${contentName} is expired!`);
    } else {
        alert(`${contentName} expires on ${expiryDate.toDateString()}.`);
    }
});
