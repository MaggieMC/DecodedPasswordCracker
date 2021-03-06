$(document).ready(function(){
  const GUESSES_PER_SECOND = 10000000000;
  //Clicks button when Enter is pressed
  $("#password").keyup(function(event){
      if(event.keyCode == 13){
          $("#submit").click();
      }
  });

  //When submit button is clicked text is displayed below with password and time
  $('#submit').click(function(){
    var password = $('#password').val();
    var total = time(password);
    var finalText = "The password " + password + " takes " + total + " seconds to crack."
    $('#result').text(finalText);
  });

  //Function to calculate how long a password would take to brute force
  function time(p){
    var time = 0;
    var pLength = p.length;
    //If password contains capital letter
    for(var i=0; i<pLength; i++){
      if(p.charAt(i)>='A' && p.charAt(i)<='Z'){
        time = time+26;
        break;
      }
    }
    //If password contains lowercase letter
    for(var i=0; i<pLength; i++){
      if(p.charAt(i)>='a' && p.charAt(i)<='z'){
        time = time+26;
        break;
      }
    }
    //If password contains digit
    for(var i=0; i<pLength; i++){
      if(p.charAt(i)>='0' && p.charAt(i)<='9'){
        time = time+10;
        break;
      }
    }
    //If password contains special character
    for(var i=0; i<pLength; i++){
      if((p.charAt(i)>=' ' && p.charAt(i)<='/') || (p.charAt(i)>=':' && p.charAt(i)<='@') || (p.charAt(i)>='[' && p.charAt(i)<='`') || (p.charAt(i)>='{' && p.charAt(i)<='~')){
        time = time+33;
        break;
      }
    }
    time = Math.pow(time, pLength);
    time = time/GUESSES_PER_SECOND;
    return time;
  }
});
