
// selecting keys
var key_list = Array.from(
   document.querySelectorAll(".key"));

// adding event listners 

key_list.forEach(key => {
  // console.log(key);
  key.addEventListener('click',playSound1)});
window.addEventListener('keydown',playSound2);



function playSound1(e){

  var dataKey = e.target.dataset.key;
  // console.log(dataKey);
  var audioEle = document.querySelector(`audio[data-key = "${dataKey}"]`);
  audioEle.play();
  animate(e.target);
}

function playSound2(e){
  // console.log(e.keyCode);
  var item = document.querySelector(`div[data-key = "${e.keyCode}"]`);
  console.log(item);
  if(item === null) return;
  var itemSound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  itemSound.play();
  animate(item);
}

function animate(e){
  e.classList.add('playing');
  setTimeout(()=>{
    e.classList.remove('playing');
  },200);
}
