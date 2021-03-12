// Set Screen Responsibility
const s = document.querySelector("#potrait-screen");
let w = innerWidth;
let h = innerHeight;
if(w >= 5/8 * h) {
  s.style.width = 5/8 * h + "px";
  s.style.height = h + "px";
} else {
  s.style.width = 100 + "vw";
  s.style.height = 8/5 * 100 + "vw";
}
window.onresize = ()=> {
  w = innerWidth;
  h = innerHeight;
  if(w >= 5/8 * h) {
    s.style.width = 5/8 * h + "px";
    s.style.height = h + "px";
  } else {
  s.style.width = 100 + "vw";
  s.style.height = 8/5 * 100 + "vw";
  }
};
// Set Loading Animation
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
window.onload = ()=> {
  const loading = document.querySelector(".loading");
  let i = 0;
  const myInterval = setInterval(()=> {
    loading.setAttribute("value", i);
    if(i >= 100) {
      clearInterval(myInterval);
      setTimeout(()=> {
        page1.style.display = "none";
        page2.style.display = "block";
      },500);
    }
    i+=0.2;
  },1);
}
// Set Play Button Clickable Then Show 3rd Page 
const playButton = document.querySelector("#play-button");
const page3 = document.querySelector("#page3");
let isLose = false;
let l = 100;
let m;
let clr;
playButton.onclick = ()=> {
  reset = false;
  isLose = false;
  score = 0;
  l = 100;
  m = 0.2;
  clr = 255;
  document.querySelector(".block").style.left = l + "%";
  document.querySelector(".score-box").style.display = "none";
  document.querySelector(".best-score-box").style.display = "none";
  document.querySelector("#back").style.display = "none";
  document.querySelector("#lose-notice").style.display = "none";
  document.querySelector("#notice").style.display = "block";
  setTimeout(()=> {
    audioPlayed();
    isOnAudioArea = true;
    page2.style.display = "none";
    page3.style.display = "block";
    const myInterval = setInterval(()=> {
      if(reset) clearInterval(myInterval);
      if(isGameStarted) {
        if(!isLose) {
          if(l < -10) l = 100;
          document.querySelector(".block").style.left = l + "%";
          document.querySelector("#player").style.backgroundColor = "rgb(255, 255, " + clr + ")";
          l-=m;
          m = 0.2 + (score/1000000);
          if(clr > 0) clr = 255 - (parseInt(score/50));
        }
      }
    },1);
  },500);
}
// Set Random Number to Jump
let a = document.querySelector(".first").innerHTML = Math.floor(Math.random()*10);
let b = document.querySelector(".second").innerHTML = Math.floor(Math.random()*10);
let c = document.querySelector(".third").innerHTML = Math.floor(Math.random()*10);
let d = document.querySelector(".fourth").innerHTML = Math.floor(Math.random()*10);
let number = [a,b,c,d];
let file = [document.querySelector(".box1"), document.querySelector(".box2"), document.querySelector(".box3"), document.querySelector(".box4")];
let [clickable1, clickable2, clickable3, clickable4] = [false, false, false, false];
let clickable = [clickable1, clickable2, clickable3, clickable4];
for(let i = 0; i < number.length; i++) {
  for(let j = 0; j < number.length; j++) {
    if(number[i] >= number[j]) {
      if(j == number.length-1) {
        clickable[i] = true;
        break;
      }
    } else {
      clickable[i] = false;
      break;
    }
  }
}
let isOnTheGround = true;
let isGameStarted = false;
for(let i = 0; i < 4; i++) {
  file[i].onmousedown = ()=> {
    if(clickable[i]) {
      if(isOnTheGround) {
        if(isLose) {
          l = 100;
          score = 0;
          m = 0.2;
          clr = 255;
        }
        isLose = false;
        isGameStarted = true;
        document.querySelector("#notice").style.display = "none";
        document.querySelector(".score-box").style.display = "block";
        document.querySelector(".best-score-box").style.display = "block";
        document.querySelector("#lose-notice").style.display = "none";
        document.querySelector("#back").style.display = "none";
        a = document.querySelector(".first").innerHTML = Math.floor(Math.random()*10);
        b = document.querySelector(".second").innerHTML = Math.floor(Math.random()*10);
        c = document.querySelector(".third").innerHTML = Math.floor(Math.random()*10);
        d = document.querySelector(".fourth").innerHTML = Math.floor(Math.random()*10);
        number = [a,b,c,d];
        for(let i = 0; i < number.length; i++) {
          for(let j = 0; j < number.length; j++) {
            if(number[i] >= number[j]) {
              if(j == number.length-1) {
                clickable[i] = true;
                break;
              }
            } else {
              clickable[i] = false;
              break;
            }
          }
        }
        const player = document.querySelector("#player");
        const h_player = parseInt(getComputedStyle(player).getPropertyValue("bottom"));
        let i = 0;
        let isGoDown = false;
        const myInterval = setInterval(()=> {
          isOnTheGround = false;
          if(i >= 50) isGoDown = true;
          if(i <= 0 && isGoDown) {
            clearInterval(myInterval);
            isOnTheGround = true;
          }
          player.style.bottom = i + "px";
          i += isGoDown ? -0.8 : i > 45 ? 0.2 : 0.8;
        },1);
        let j = 0;
        const myInterval2 = setInterval(()=> {
          if(j >= 180) clearInterval(myInterval2);
          player.style.transform = "rotate(" + j + "deg)";
          j+=1.4;
        },1);
      }
    }
  };
}
for(let i = 0; i < 4; i++) {
  file[i].ontouchstart = ()=> {
    if(clickable[i]) {
      if(isOnTheGround) {
        if(isLose) {
          l = 100;
          score = 0;
          m = 0.2;
          clr = 255;
        }
        isLose = false;
        isGameStarted = true;
        document.querySelector("#notice").style.display = "none";
        document.querySelector(".score-box").style.display = "block";
        document.querySelector(".best-score-box").style.display = "block";
        document.querySelector("#lose-notice").style.display = "none";
        document.querySelector("#back").style.display = "none";
        a = document.querySelector(".first").innerHTML = Math.floor(Math.random()*10);
        b = document.querySelector(".second").innerHTML = Math.floor(Math.random()*10);
        c = document.querySelector(".third").innerHTML = Math.floor(Math.random()*10);
        d = document.querySelector(".fourth").innerHTML = Math.floor(Math.random()*10);
        number = [a,b,c,d];
        for(let i = 0; i < number.length; i++) {
          for(let j = 0; j < number.length; j++) {
            if(number[i] >= number[j]) {
              if(j == number.length-1) {
                clickable[i] = true;
                break;
              }
            } else {
              clickable[i] = false;
              break;
            }
          }
        }
        const player = document.querySelector("#player");
        const h_player = parseInt(getComputedStyle(player).getPropertyValue("bottom"));
        let i = 0;
        let isGoDown = false;
        const myInterval = setInterval(()=> {
          isOnTheGround = false;
          if(i >= 50) isGoDown = true;
          if(i <= 0 && isGoDown) {
            clearInterval(myInterval);
            isOnTheGround = true;
          }
          player.style.bottom = i + "px";
          i += isGoDown ? -0.8 : i > 45 ? 0.2 : 0.8;
        },1);
        let j = 0;
        const myInterval2 = setInterval(()=> {
          if(j >= 180) clearInterval(myInterval2);
          player.style.transform = "rotate(" + j + "deg)";
          j+=1.4;
        },1);
      }
    }
  };
}
// Set Score
let score = 0;
let bestScore = 0;
const scoreInterval = setInterval(()=> {
  if(isGameStarted) {
    if(!isLose) {
      document.querySelector("#your-score").innerHTML = score;
      if(score < 999999999999999) score++;
      else {
        bestScore = "MAX SCORE";
        document.querySelector("#best-score").innerHTML = bestScore;
        score = 0;
      }
    } else {
      document.querySelector("#lose-notice").style.display = "block";
      document.querySelector("#back").style.display = "block";
      if(bestScore !== "MAX SCORE") {
        if(score > bestScore) bestScore = score;
        document.querySelector("#best-score").innerHTML = bestScore - 1;
      }
    }
  }
},50);
// Set Lose
let lose_number;
setInterval(()=> {
  if(isGameStarted) {
    lose_number = 20 / document.querySelector("#potrait-screen").offsetWidth * 100;
    if(l <= lose_number && l >= -3 && parseFloat(player.style.bottom) <= 15) {
      isLose = true;
    }
  }
},1);
// Set to Back to Menu
let reset = false;
document.querySelector("#back").onclick = ()=> {
  page2.style.display = "block";
  page3.style.display = "none";
  reset = true;
  isGameStarted = false;
  audioPaused();
  isOnAudioArea = false;
  document.getElementById("st1").currentTime = 0;
};
// Set Audio Function
let isOnAudioArea = true;
function audioPlayed() {
  document.getElementById("st1").play();
}
function audioPaused() {
  document.getElementById("st1").pause();
}
window.onblur = audioPaused;
window.onfocus = ()=> {
  if(isOnAudioArea) {
    audioPlayed();
  }
};