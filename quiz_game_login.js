function addUser() {
    
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
    
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    window.location = "quiz_game_page.html";
    
}

function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value; 
actual_answer = parseInt(number1) * parseInt(number2);
}