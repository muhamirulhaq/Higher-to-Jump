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
  document.getElementById("rule").style.fontSize = 5.5 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("play-button").style.fontSize = 20 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("math-dash").style.fontSize = 11 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("game-developer").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("email").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("github").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("property1").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("property2").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("property3").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.querySelector(".info-heading").style.fontSize = 9 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("play-button").onmouseover = ()=> {
    document.getElementById("play-button").style.fontSize = 24 / 100 * document.getElementById("rule").offsetWidth + "px";
  };
  document.getElementById("play-button").onmouseout = ()=> {
    document.getElementById("play-button").style.fontSize = 20 / 100 * document.getElementById("rule").offsetWidth + "px";
  };
};
// Set Loading Animation
const page2 = document.querySelector("#page2");
let audio1Loaded = false;
let audio2Loaded = false;
document.getElementById("st1").load();
document.getElementById("st2").load();
document.getElementById("st1").onprogress = ()=> {
  audio1Loaded = true;
}
document.getElementById("st2").onprogress = ()=> {
  audio2Loaded = true;
}
window.onload = ()=> {
  const load_interval = setInterval(()=> {
    if(audio1Loaded && audio2Loaded) {
      clearInterval(load_interval);
      document.getElementById("simple-loading").style.display = "none";
      document.getElementById("potrait-screen").style.display = "block";
      document.getElementById("rule").style.fontSize = 5.5 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("play-button").style.fontSize = 20 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("math-dash").style.fontSize = 11 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("game-developer").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("email").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("github").style.fontSize = 5 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("property1").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("property2").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("property3").style.fontSize = 6 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.querySelector(".info-heading").style.fontSize = 9 / 100 * document.getElementById("rule").offsetWidth + "px";
      document.getElementById("play-button").onmouseover = ()=> {
        if(!isPopupDisplayed) {
          document.getElementById("play-button").style.fontSize = 24 / 100 * document.getElementById("rule").offsetWidth + "px";
        }
      };
      document.getElementById("play-button").onmouseout = ()=> {
        if(!isPopupDisplayed) {
          document.getElementById("play-button").style.fontSize = 20 / 100 * document.getElementById("rule").offsetWidth + "px";
        }
      };
      animationForTitle();
      speakerDisplayed();
      displayInfo();
    }
  },1);
}
// Set Play Button Clickable Then Show 3rd Page 
const playButton = document.querySelector("#play-button");
const page3 = document.querySelector("#page3");
let isLose;
let l = 100;
let m;
let clr, clr2, clr3;
let current_score, current_score_2, current_score_3, current_score_4, current_score_5;
playButton.onclick = ()=> {
  if(!isPopupDisplayed) {
  reset = false;
  isLose = false;
  score = 0;
  l = 100;
  m = 0.2;
  clr = 255;
  clr2 = 255;
  clr3 = 255;
  document.querySelector("#player").style.backgroundColor = "rgb(255, 255, " + clr + ")";
  document.querySelector(".block").style.left = l + "%";
  document.querySelector(".score-box").style.display = "none";
  document.querySelector(".best-score-box").style.display = "none";
  document.querySelector("#back").style.display = "none";
  document.querySelector("#lose-notice").style.display = "none";
  document.querySelector("#notice").style.display = "block";
  setTimeout(()=> {
    document.getElementById("math-dash").style.transform = "translateY(-300px)";
    document.getElementById("rule").style.opacity = 0;
    document.getElementById("play-button").style.transform = "translate(-50%, -50%) scale(0, 0)";
    document.getElementById("speaker").style.transform = "translate(-50%, -50%) scale(0, 0)";
    document.getElementById("player-accessorise").style.transform = "translate(-50%, -50%) scale(0, 0)";
    percent_data = [50, -150, -280, 180, -410, 310];
    distance_data = [-100, 100, 100, -100, 100, -100];
    let j = 0;
    for(let i = 2; i <= 7; i++) {
      document.getElementById("player" + i + "-accessorise").style.display = "none";
      document.getElementById("player" + i + "-accessorise").style.transform = "translate(" + percent_data[j] + "%, -50%) translateX(" + distance_data[j] + "%)";
      j++;
    }
    document.querySelector(".my-info").style.transform = "scale(0, 0)";
    audioPlayed();
    document.getElementById("st2").pause();
    document.getElementById("st2").currentTime = 0;
    isOnAudioArea = true;
    isAccessoriseDisplayed = false;
    page2.style.display = "none";
    page3.style.display = "block";
    const myInterval = setInterval(()=> {
      if(reset) clearInterval(myInterval);
      if(isGameStarted) {
        if(!isLose) {
          if(l < -10) l = 100;
          document.querySelector(".block").style.left = l + "%";
          document.querySelector("#player").style.backgroundColor = "rgb(" + clr2 + ", " + clr3 + ", " + clr + ")";
          if(!isBlur) {
            l-=m;
            m = 0.2 + (score/1000000);
            if(clr > 0 && clr2 > 0 && clr3 > 0) {
              current_score = score;
              clr = 255 - (parseInt(score/10));
            } else if(clr2 > 0 && clr3 > 0) {
              current_score_2 = score;
              clr2 = 255 - (parseInt((score - current_score)/15));
            } else if(clr < 255 && clr2 < 255) {
              current_score_3 = score;
              clr = 0 + (parseInt((score - current_score_2)/20));
            } else if(clr3 > 0) {
              current_score_4 = score;
              clr3 = 255 - (parseInt((score - current_score_3)/25));
            } else if(clr2 < 255) {
              current_score_5 = score;
              clr2 = 0 + (parseInt((score - current_score_4)/30));
            } else if(clr > 0) {
              clr = 255 - (parseInt((score - current_score_5)/35));
            }
          }
        }
      }
    },1);
  },500);
  }
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
const eyeball = document.querySelector("#player .eyeball");
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
          clr2 = 255;
          clr3 = 255;
        }
        isLose = false;
        isGameStarted = true;
        hasBlinks = false;
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
        eyeball.style.height = "1px";
        let i = 0;
        let isGoDown = false;
        const myInterval = setInterval(()=> {
          isOnTheGround = false;
          if(i >= 50) isGoDown = true;
          if(i <= 0 && isGoDown) {
            clearInterval(myInterval);
            isOnTheGround = true;
            eyeball.style.height = "5px";
          }
          player.style.bottom = i + "px";
          if(!isBlur) i += isGoDown ? -0.8 : i > 45 ? 0.2 : 0.8;
        },1);
        let j = 0;
        const myInterval2 = setInterval(()=> {
          if(j >= 360) clearInterval(myInterval2);
          player.style.transform = "rotate(" + j + "deg)";
          if(!isBlur) j+=2.5;
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
          clr2 = 255;
          clr3 = 255;
        }
        isLose = false;
        isGameStarted = true;
        hasBlinks = false;
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
        eyeball.style.height = "1px";
        let i = 0;
        let isGoDown = false;
        const myInterval = setInterval(()=> {
          isOnTheGround = false;
          if(i >= 50) isGoDown = true;
          if(i <= 0 && isGoDown) {
            clearInterval(myInterval);
            isOnTheGround = true;
            eyeball.style.height = "5px";
          }
          player.style.bottom = i + "px";
          if(!isBlur) i += isGoDown ? -0.8 : i > 45 ? 0.2 : 0.8;
        },1);
        let j = 0;
        const myInterval2 = setInterval(()=> {
          if(j >= 360) clearInterval(myInterval2);
          player.style.transform = "rotate(" + j + "deg)";
          if(!isBlur) j+=2.5;
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
      if(!isBlur) {
        if(score < 999999999999999) score++;
        else {
          bestScore = "MAX SCORE";
          document.querySelector("#best-score").innerHTML = bestScore;
          score = 0;
        }
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
      if(!hasBlinks) blinkedEye();
    }
  }
},1);
// Set to Back to Menu
let reset = false;
let percent_data;
let distance_data;
document.querySelector("#back").onclick = ()=> {
  page2.style.display = "block";
  page3.style.display = "none";        
  document.getElementById("play-button").style.fontSize = 20 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("rule").style.fontSize = 5.5 / 100 * document.getElementById("rule").offsetWidth + "px";
  document.getElementById("math-dash").style.fontSize = 11 / 100 * document.getElementById("rule").offsetWidth + "px";
  reset = true;
  isGameStarted = false;
  hasBlinks = false;
  audioPaused();
  if(!isAudioMuted) document.getElementById("st2").play();
  isOnAudioArea = false;
  document.getElementById("st1").currentTime = 0;
  animationForTitle();
  speakerDisplayed();
  document.querySelector(".hotels").style.transform = "translateX(0%)";
  getIntervalForBlink();
  percent_data = [50, -150, -280, 180, -410, 310];
  distance_data = [-100, 100, 100, -100, 100, -100];
  let j = 0;
  for(let i = 2; i <= 7; i++) {
    document.getElementById("player" + i + "-accessorise").style.display = "none";
    document.getElementById("player" + i + "-accessorise").style.transform = "translate(" + percent_data[j] + "%, -50%) translateX(" + distance_data[j] + "%)";
    j++;
  }
  document.getElementById("player-accessorise").style.transform = "translate(-50%, -50%) scale(0, 0)";
  document.querySelector(".my-info").style.transform = "scale(0, 0)";
  displayInfo();
};
// Set Audio Function
let isOnAudioArea;
let isBlur = false;
function audioPlayed() {
  if(!isAudioMuted) {
    document.getElementById("st1").load();
    document.getElementById("st1").play();
  }
}
function audioPaused() {
  document.getElementById("st1").pause();
  document.getElementById("st2").pause();
}
window.onblur = ()=> {
  isBlur = true;
  audioPaused();
};
window.onfocus = ()=> {
  if(isOnAudioArea) {
    audioPlayed();
  } else {
    if(!isAudioMuted) {
      document.getElementById("st2").load();
      document.getElementById("st2").play();
    }
  }
  isBlur = false;
};
function animationForTitle() {
  let i = -300;
  let j = 0.1;
  const interval = setInterval(()=> {
    document.getElementById("math-dash").style.transform = "translateY(" + i + "px)";
    i+=j;
    j+=0.01;
    if(i >= 0) {
      clearInterval(interval);
      animationForRule();
    }
  },1);
}
function animationForRule() {
  let i = 0;
  const interval = setInterval(()=> {
    document.getElementById("rule").style.opacity = i;
    i+=0.01;
    if(i >= 1) {
      clearInterval(interval);
      animationForPlayButton();
    }
  },1);
}
function animationForPlayButton() {
  let i = 0;
  const interval = setInterval(()=> {
    document.getElementById("play-button").style.transform = "translate(-50%, -50%) scale(" + i + ", " + i + ")";
    i+=0.02;
    if(i >= 1) {
      clearInterval(interval);
      setTimeout(()=> {
        accessoriseDisplayed();
      },1000);
    }
  },1);
}
let hasBlinks = false;
function blinkedEye() {
  hasBlinks = true;
  eyeball.style.height = "1px";
  setTimeout(()=> {
    eyeball.style.height = "5px";
  },500);
}
const hotelsLoop = function() {
  let i = 0;
  let j = 0.05;
  const interval = setInterval(()=> {
    if(isGameStarted) {
      if(!isLose) {
        document.querySelector(".hotels").style.transform = "translateX(" + i + "%)";
        if(!isBlur) {
          i-=j;
          j = 0.05 + (score / 1000000);
        }
        if(i <= -100) i = 0;
      } else i = 0;
    }
  },1);
}();
let isAudioMuted = true;
function muter() {
  isAudioMuted = false;
}
document.getElementById("speaker").onclick = ()=> {
  if(!isPopupDisplayed) {
    if(document.querySelector("#speaker .line-muter").style.display === "none") {
      document.querySelector("#speaker .line-muter").style.display = "block";
      isAudioMuted = true;
      document.getElementById("st2").muted = true;
    } else {
      document.querySelector("#speaker .line-muter").style.display = "none";
      isAudioMuted = false;
      document.getElementById("st2").muted = false;
      document.getElementById("st2").play();
    }
  }
};
function speakerDisplayed() {
  let i = 0;
  const interval = setInterval(()=> {
    document.getElementById("speaker").style.transform = "translate(-50%, -50%) scale(" + i + ", " + i + ")";
    i+=0.02;
    if(i >= 1) clearInterval(interval);
  },1);
}
function accessoriseDisplayed() {
  let i = 0;
  const interval = setInterval(()=> {
    document.getElementById("player-accessorise").style.transform = "translate(-50%, -50%) scale(" + i + ", " + i + ")";
    i+=0.05;
    if(i >= 1) {
      clearInterval(interval);
      isAccessoriseDisplayed = true;
      sideFadeIn(document.getElementById("player2-accessorise"), -100, true, 50);
      sideFadeIn(document.getElementById("player3-accessorise"), 100, false, -150);
      setTimeout(()=> {
        sideFadeIn(document.getElementById("player4-accessorise"), 100, false, -280);
        sideFadeIn(document.getElementById("player5-accessorise"), -100, true, 180);
        setTimeout(()=> {
          sideFadeIn(document.getElementById("player6-accessorise"), 100, false, -410);
          sideFadeIn(document.getElementById("player7-accessorise"), -100, true, 310);
        },150);
      },150);
    }
  },1);
}
function accessoriseBlinked() {
  document.getElementById("eyeball-accessorise-1").style.height = "5%";
  document.getElementById("eyeball-accessorise-2").style.height = "5%";
  setTimeout(()=> {
    document.getElementById("eyeball-accessorise-1").style.height = "35%";
    document.getElementById("eyeball-accessorise-2").style.height = "35%";
    setTimeout(()=> {
      document.getElementById("eyeball-accessorise-1").style.height = "5%";
      document.getElementById("eyeball-accessorise-2").style.height = "5%";
      setTimeout(()=> {
        document.getElementById("eyeball-accessorise-1").style.height = "35%";
        document.getElementById("eyeball-accessorise-2").style.height = "35%";
      },200);
    },100);
  },200);
}
let isAccessoriseDisplayed = false;
function getIntervalForBlink() {
  const blink_interval = setInterval(()=> {
    if(isAccessoriseDisplayed) {
      accessoriseBlinked();
    }
    if(isGameStarted) clearInterval(blink_interval);
  },4800);
}
getIntervalForBlink();
function sideFadeIn(element, i, toRight, x_percentage) {
  element.style.display = "block";
  const interval = setInterval(()=> {
    element.style.transform = "translate(" + x_percentage + "%, -50%) translateX(" + i + "%)";
    i += toRight ? 4 : -4;
    if((toRight && i > 0) || (!toRight && i < 0)) clearInterval(interval);
  },1);
}
let isPopupDisplayed = false;
document.querySelector(".my-info").onclick = ()=> {
  isPopupDisplayed = true;
  document.querySelector(".info-popup").style.display = "block";
  document.getElementById("page2").style.filter = "brightness(50%)";
};
document.querySelector(".close").onclick = ()=> {
  setTimeout(()=> {
    isPopupDisplayed = false;
    document.querySelector(".info-popup").style.display = "none";
    document.getElementById("page2").style.filter = "brightness(100%)";
  },50);
};
function displayInfo() {
  let i = 0;
  const interval = setInterval(()=> {
    document.querySelector(".my-info").style.transform = "scale(" + i + ", " + i + ")";
    i+=0.05;
    if(i >= 1) clearInterval(interval);
  },1);
}