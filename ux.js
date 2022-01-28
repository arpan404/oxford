var i = 0;
var missiontxtTitle = 'Our Mission'; 
var speed = 120; 
function ourMissionWriter() {
  if (i < missiontxtTitle.length) {
    document.getElementById("mission-text").innerHTML += missiontxtTitle.charAt(i);
    i++;
    setTimeout(ourMissionWriter, speed);
  }
}

var j = 0;
var msgSpeed = 50;
var messageTitle = "Messages"
function messageTitleLoader(){
    if (j < messageTitle.length) {
        document.getElementById("message-text").innerHTML += messageTitle.charAt(j);
        j++;
        setTimeout(messageTitleLoader, msgSpeed);
    }
}

var lastScrollTop;
header = document.getElementById('navbar');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
header.style.top='-80px';
}
else{
header.style.top='0';
}
lastScrollTop = scrollTop;
});

var msgBox = document.querySelector("#user-message");
msgBox.onclick = maxLeng;
function maxLeng(){
    msgBox.maxLength = "1000";
    if((msgBox.value) != "" && (msgBox.value != " ")){
        msgBox.style.height = "auto";
        msgBox.style.height = msgBox.scrollHeight + 'px';
        msgBox.style.overflow = "scroll";
    }
}
msgBox.addEventListener('input', autoResize, false);
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + "px";
    this.style.maxHeight = "200px";
    this.style.overflowY ="scroll";
}