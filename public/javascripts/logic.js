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
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>='A' && p.charCodeAt(i)<='Z'){
        time = time+26;
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>='a' && p.charCodeAt(i)<='z'){
        time = time+26;
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>='0' && p.charCodeAt(i)<='9'){
        time = time+10;
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if((p.charCodeAt(i)>=' ' && p.charCodeAt(i)<='/') || (p.charCodeAt(i)>=':' && p.charCodeAt(i)<='@') || (p.charCodeAt(i)>='[' && p.charCodeAt(i)<='`') || (p.charCodeAt(i)>='{' && p.charCodeAt(i)<='~')){
        time = time+33;
        break;
      }
    }
    time = Math.pow(time, pLength);
    time = time/GUESSES_PER_SECOND;
    return time;
  }
});
