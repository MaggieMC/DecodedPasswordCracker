$(document).ready(function(){

  //Clicks button when Enter is pressed
  $("#password").keyup(function(event){
      if(event.keyCode == 13){
          $("#submit").click();
      }
  });

  //When submit button is clicked text is displayed below with password and time
  $('#submit').click(function(){
    var password = $('#password').val();
    var length = password.length;
    var total = time(password);
    var finalText = "The password " + password + " takes " + total + " seconds to crack."
    $('#result').text(finalText);
  });

  //Function to calculate how long a password would take to brute force
  function time(p){
    var time = 0;
    var pLength = p.length;
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>=65 && p.charCodeAt(i)<=90){
        time = time+26;
        console.log(time);
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>=97 && p.charCodeAt(i)<=122){
        time = time+26;
        console.log(time);
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if(p.charCodeAt(i)>=48 && p.charCodeAt(i)<=57){
        time = time+10;
        console.log(time);
        break;
      }
    }
    for(var i=0; i<pLength; i++){
      if((p.charCodeAt(i)>=32 && p.charCodeAt(i)<=47) || (p.charCodeAt(i)>=58 && p.charCodeAt(i)<=64) || (p.charCodeAt(i)>=91 && p.charCodeAt(i)<=96) || (p.charCodeAt(i)>=123 && p.charCodeAt(i)<=126)){
        time = time+33;
        console.log(time);
        break;
      }
    }
    time = Math.pow(time, pLength);
    time = time/10000000000;
    return time;
  }
});
