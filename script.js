document.getElementById('privacy-policy').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdown = document.getElementById('privacy-dropdown');
    dropdown.classList.toggle('active'); // Toggle the dropdown visibility
});

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('privacy-dropdown');
    if (!dropdown.contains(event.target) && !event.target.matches('#privacy-policy')) {
        dropdown.classList.remove('active');
    }
});
