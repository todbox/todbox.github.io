var count = 1
document.getElementById('beep').addEventListener('ended', function(){
   this.currentTime = 0;
   if(count <= 3){
      this.play();
   }
   count++;
}, false);
