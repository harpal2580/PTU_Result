function login() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('number').value;
    const error = document.getElementById('error');

    if (userId === "" || password === "") {
        error.textContent = "Please fill the details.";
    } else {
        error.textContent = "";
        // Store user information in localStorage
        localStorage.setItem('userName', '‎'); // Replace with actual name input if needed
        localStorage.setItem('userNumber', userId); // Assuming userId is the number

        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'block';

        // Update user profile in dashboard
        updateUserProfile();
    }
}

function updateUserProfile() {
    const userName = localStorage.getItem('userName');
    const userNumber = localStorage.getItem('userNumber');
    const userProfile = document.querySelector('.user-profile h2');

    userProfile.textContent = `${userName} (${userNumber})`;
}