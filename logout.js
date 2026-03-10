// logout.js

function logout(){

    // Remove login session
    localStorage.removeItem("loggedin");

    // Optional: remove other stored data
    // localStorage.clear();

    // Redirect to home page
    window.location.href = "index.html";

}