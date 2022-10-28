// let btns= document.querySelectorALL("button");
// function handleclick(a)
// {
//     alert(`${a} is click`)
// }
// for(let i=0;i<btns.lenght;i++)
// {
//     btns[i].addE
// }





//not using "button" because it will add on al the button in our wed needed or no
let buttons=document.querySelectorAll(".drum"); 
for(let i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function ()
    {
       var buttonInnerHtml=this.innerHTML;
       switch (buttonInnerHtml) {
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
       
    })
}
document.addEventListener("keydown",function(event)
{
    console.log(event.key);
    console.log(this.event);
    // alert("keypress ocuur")
    var buttonInnerHtml=event.key;
       switch (buttonInnerHtml) {
        case "w":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
    
})



// if(this.innerHTML==="w")
// {
//     var audio=new Audio('sounds/crash.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==='a')
// {
//     var audio=new Audio('sounds/kick-bass.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==="s")
// {
//     var audio=new Audio('sounds/snare.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==="d")
// {
//     var audio=new Audio('sounds/tom-1.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==="j")
// {
//     var audio=new Audio('sounds/tom-2.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==="k")
// {
//     var audio=new Audio('sounds/tom-3.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }
// if(this.innerHTML==="l")
// {
//     var audio=new Audio('sounds/tom-4.mp3');
//     audio.play();
//     console.log(this.innerHTML);
// }