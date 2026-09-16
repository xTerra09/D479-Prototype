window.onscroll = function(){scrollDown()};
function scrollDown(){
    if (document.body.scrollTop > 100){
        document.getElementById("navBar").style.top = '0';
    }
    else {
      document.getElementById("navBar").style.top = '-20px';
  }
}