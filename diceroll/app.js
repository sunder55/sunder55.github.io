let total = 0;
const winning_score = 7;
let btn1=document.getElementById('btn1');
let btn2=document.getElementById('btn2');

//function for player one
function data() {
  let p1_score = 0;
  btn1.disabled=true;
  btn2.disabled=false;
  let p1_score_element = document.getElementById("p1_score");
  p1_score = parseInt(document.getElementById("p1_score").innerHTML);

  if (p1_score > winning_score) {
    let value_over = p1_score - winning_score;
    let temp_score = winning_score - value_over;
    p1_score_element.innerHTML = temp_score;
  } else if (p1_score===winning_score) {
    alert("player one is winner");
    btn1.disabled=true;
    btn2.disabled=true;
  } else {
    let rand_score = Math.floor(Math.random() * 6 + 1);

    //dice
    document.getElementById("dice_num").innerHTML = rand_score;

    //player score
    p1_score += rand_score;
    p1_score_element.innerHTML = p1_score;
  }
}

// function for player 2
function data2() {
       btn1.disabled=false;
      btn2.disabled=true;

  let p2_score = 0;

  let p2_score_element = document.getElementById("p2_score");
  p2_score = parseInt(document.getElementById("p2_score").innerHTML);

  if (p2_score > winning_score) {
    let value_over = p2_score - winning_score;
    let temp_score = winning_score - value_over;
    p2_score_element.innerHTML = temp_score;
  } else if (p2_score === winning_score) {
    alert("player two is winner");
    btn1.disabled=true;
    btn2.disabled=true;
  } else {
    let rand_score = Math.floor(Math.random() * 6 + 1);

    //dice
    document.getElementById("dice_num").innerHTML = rand_score;

    //player score
    p2_score += rand_score;
    p2_score_element.innerHTML = p2_score;
  }
}

//function for reset button;
function reset() {
  document.getElementById("p1_score").innerHTML = 0;
  document.getElementById("p2_score").innerHTML = 0;
  document.getElementById("dice_num").innerHTML = "?";
  btn1.disabled=false;
  btn2.disabled=true;
}
