document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = "Invalid credentials!";
    }
});
