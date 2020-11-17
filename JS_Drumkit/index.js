var list_of_sounds = ["a","s","d","f","g","h","j","k","l"];

$("body").keypress(function (e) { 
    if(list_of_sounds.includes(e.key)){
        var id = "#"+e.key;
        addAnimation(id);
        addSound(id);
    }
});

$(".key").click(function (e) { 
    e.preventDefault();
    var id = "#"+$(this).attr("id");
    addSound(id);
});

function addAnimation(id){
    $(id).addClass("playing");
    setTimeout(function(){
        $(id).removeClass("playing");
    },100);
}

function addSound(id) {
    var adress = id + " span";
    var sound_file = $(adress).html().toLocaleLowerCase() + ".wav";
    var audio = new Audio("sounds/"+sound_file);
    audio.play();
  }