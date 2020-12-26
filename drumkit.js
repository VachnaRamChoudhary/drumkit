

var noOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function ()
  {
    // var audio=new Audio("sounds/tom-"+1+".mp3");
    // audio.play();
    // console.log(this.innerHTML);
    

    makeSound(this.innerHTML);
    var key1=this.innerHTML.toLowerCase();
     buttonAnimation(key1);
    console.log(key1);

  });


}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);


})

function makeSound(key)
{
  switch (key) {
    case 'W':var audio=new Audio("sounds/crash.mp3");
    audio.play();
      break;
      case 'A':var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;
        case 'S':var audio=new Audio("sounds/snare.mp3");
        audio.play();
          break;
          case 'D':var audio=new Audio("sounds/tom-1.mp3");
          audio.play();
            break;
            case 'J':var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
              break;
              case 'K':var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
                break;
                case 'L':var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                  break;


                  case 'w':var audio=new Audio("sounds/crash.mp3");
                  audio.play();
                    break;
                    case 'a':var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                      break;
                      case 's':var audio=new Audio("sounds/snare.mp3");
                      audio.play();
                        break;
                        case 'd':var audio=new Audio("sounds/tom-1.mp3");
                        audio.play();
                          break;
                          case 'j':var audio=new Audio("sounds/tom-2.mp3");
                          audio.play();
                            break;
                            case 'k':var audio=new Audio("sounds/tom-3.mp3");
                            audio.play();
                              break;
                              case 'l':var audio=new Audio("sounds/tom-4.mp3");
                              audio.play();
                                break;
    default:
}
}

function buttonAnimation(currentkey)
{

  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){activeButton.classList.remove("pressed")},100);
}
