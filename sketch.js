var player1,player1leftcrouch,player1rightcrouch,player1leftjump,player1rightjump,player1rightkick,player1leftkick,player1move_l_left,player1move_l_right,
player1leftnorm,player1rightnorm,player1leftpunch,player1rightpunch,player1move_r_left,player1_r_right
var player2,player2leftcrouch,player2rightcrouch,player2leftjump,player2rightjump,player2rightkick,player2leftkick,player2move_1_left,player2move_l_right,
player2leftnorm,player2rightnorm,player2leftpunch,player2rightpunch,player2move_r_left,player2_r_right
var healthlevel1=2;
var healthlevel2=2;
var PLAY=1;
var END=0;
var gameState=PLAY;
var bmode1=0;
var bmode2=0;






function preload (){
  
  BG = loadImage("arena.jpg");

  // Player 1 Images for Left Side

  Player1_LS_anim_norm = loadAnimation("Images/Player1/Left/Norm/0.png","Images/Player1/Left/Norm/1.png",
  "Images/Player1/Left/Norm/2.png","Images/Player1/Left/Norm/3.png","Images/Player1/Left/Norm/4.png",
  "Images/Player1/Left/Norm/5.png","Images/Player1/Left/Norm/6.png","Images/Player1/Left/Norm/7.png",
  "Images/Player1/Left/Norm/8.png","Images/Player1/Left/Norm/9.png");

  Player1_LS_anim_move_right = loadAnimation("Images/Player1/Left/Move_right/0.png",
  "Images/Player1/Left/Move_right/1.png","Images/Player1/Left/Move_right/2.png",
  "Images/Player1/Left/Move_right/3.png","Images/Player1/Left/Move_right/4.png",
  "Images/Player1/Left/Move_right/5.png","Images/Player1/Left/Move_right/6.png",
  "Images/Player1/Left/Move_right/7.png","Images/Player1/Left/Move_right/8.png");

  Player1_LS_anim_move_left = loadAnimation("Images/Player1/Left/Move_left/0.png",
  "Images/Player1/Left/Move_left/1.png","Images/Player1/Left/Move_left/2.png",
  "Images/Player1/Left/Move_left/3.png","Images/Player1/Left/Move_left/4.png",
  "Images/Player1/Left/Move_left/5.png","Images/Player1/Left/Move_left/6.png",
  "Images/Player1/Left/Move_left/7.png","Images/Player1/Left/Move_left/8.png");

  Player1_LS_anim_jump = loadAnimation("Images/Player1/Left/Jump/0.png",
  "Images/Player1/Left/Jump/1.png","Images/Player1/Left/Jump/2.png","Images/Player1/Left/Jump/3.png",
  "Images/Player1/Left/Jump/4.png");

  Player1_LS_anim_punch = loadAnimation("Images/Player1/Left/Punch/0.png","Images/Player1/Left/Punch/1.png",
  "Images/Player1/Left/Punch/2.png","Images/Player1/Left/Punch/3.png","Images/Player1/Left/Punch/4.png");

  Player1_LS_anim_kick = loadAnimation("Images/Player1/Left/Kick/0.png","Images/Player1/Left/Kick/1.png",
  "Images/Player1/Left/Kick/2.png","Images/Player1/Left/Kick/3.png","Images/Player1/Left/Kick/4.png",
  "Images/Player1/Left/Kick/5.png");

  Player1_LS_anim_crouch = loadAnimation("Images/Player1/Left/Crouch/0.png","Images/Player1/Left/Crouch/1.png",
  "Images/Player1/Left/Crouch/2.png");

  Player1_LS_crouch_still = loadAnimation("Images/Player1/Left/Crouch/2.png");

  Player1_LS_block_still = loadAnimation("Images/Block/Player1/Left/2.png");

  Player1_LS_lose_still = loadAnimation("Images/Lose/Player1/Left/8.png");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("Images/Player1/Right/Norm/0.png","Images/Player1/Right/Norm/1.png",
  "Images/Player1/Right/Norm/2.png","Images/Player1/Right/Norm/3.png","Images/Player1/Right/Norm/4.png",
  "Images/Player1/Right/Norm/5.png","Images/Player1/Right/Norm/6.png","Images/Player1/Right/Norm/7.png",
  "Images/Player1/Right/Norm/8.png");

  Player1_RS_anim_move_right = loadAnimation("Images/Player1/Right/Move_right/0.png",
  "Images/Player1/Right/Move_right/1.png","Images/Player1/Right/Move_right/2.png",
  "Images/Player1/Right/Move_right/3.png","Images/Player1/Right/Move_right/4.png",
  "Images/Player1/Right/Move_right/5.png","Images/Player1/Right/Move_right/6.png",
  "Images/Player1/Right/Move_right/7.png","Images/Player1/Right/Move_right/8.png");

  Player1_RS_anim_move_left = loadAnimation("Images/Player1/Right/Move_left/0.png",
  "Images/Player1/Right/Move_left/1.png","Images/Player1/Right/Move_left/2.png",
  "Images/Player1/Right/Move_left/2.png","Images/Player1/Right/Move_left/4.png",
  "Images/Player1/Right/Move_left/5.png","Images/Player1/Right/Move_left/6.png",
  "Images/Player1/Right/Move_left/7.png","Images/Player1/Right/Move_left/8.png");

  Player1_RS_anim_jump = loadAnimation("Images/Player1/Right/Jump/0.png",
  "Images/Player1/Right/Jump/1.png","Images/Player1/Right/Jump/2.png","Images/Player1/Right/Jump/3.png",
  "Images/Player1/Right/Jump/4.png");

  Player1_RS_anim_punch = loadAnimation("Images/Player1/Right/Punch/0.png","Images/Player1/Right/Punch/1.png",
  "Images/Player1/Right/Punch/2.png","Images/Player1/Right/Punch/3.png","Images/Player1/Right/Punch/4.png");

  Player1_RS_anim_kick = loadAnimation("Images/Player1/Right/Kick/0.png","Images/Player1/Right/Kick/1.png",
  "Images/Player1/Right/Kick/2.png","Images/Player1/Right/Kick/3.png","Images/Player1/Right/Kick/4.png",
  "Images/Player1/Right/Kick/5.png");

  Player1_RS_anim_crouch = loadAnimation("Images/Player1/Right/Crouch/0.png","Images/Player1/Right/Crouch/1.png",
  "Images/Player1/Right/Crouch/2.png");

  Player1_RS_crouch_still = loadAnimation("Images/Player1/Right/Crouch/2.png");

  Player1_RS_lose_still = loadAnimation("Images/Lose/Player1/Right/8.png");

  Player1_RS_block_still = loadAnimation("Images/Block/Player1/Right/2.png");

  Player1_win = loadAnimation("Images/Win/Player1/0.png","Images/Win/Player1/1.png","Images/Win/Player1/2.png",
  "Images/Win/Player1/3.png","Images/Win/Player1/4.png","Images/Win/Player1/5.png","Images/Win/Player1/6.png",
  "Images/Win/Player1/7.png","Images/Win/Player1/8.png","Images/Win/Player1/9.png");

  Player1_win_still = loadAnimation("Images/Win/Player1/9.png");


  // Player 2 Images for Left Side

  Player2_LS_anim_norm = loadAnimation("Images/Player2/Left/Norm/0.png","Images/Player2/Left/Norm/1.png",
  "Images/Player2/Left/Norm/2.png","Images/Player2/Left/Norm/3.png","Images/Player2/Left/Norm/4.png",
  "Images/Player2/Left/Norm/5.png","Images/Player2/Left/Norm/6.png","Images/Player2/Left/Norm/7.png",
  "Images/Player2/Left/Norm/8.png");

  Player2_LS_anim_move_right = loadAnimation("Images/Player2/Left/Move_right/0.png",
  "Images/Player2/Left/Move_right/1.png","Images/Player2/Left/Move_right/2.png",
  "Images/Player2/Left/Move_right/3.png","Images/Player2/Left/Move_right/4.png",
  "Images/Player2/Left/Move_right/5.png","Images/Player2/Left/Move_right/6.png",
  "Images/Player2/Left/Move_right/7.png","Images/Player2/Left/Move_right/8.png");

  Player2_LS_anim_move_left = loadAnimation("Images/Player2/Left/Move_left/0.png",
  "Images/Player2/Left/Move_left/1.png","Images/Player2/Left/Move_left/2.png",
  "Images/Player2/Left/Move_left/3.png","Images/Player2/Left/Move_left/4.png",
  "Images/Player2/Left/Move_left/5.png","Images/Player2/Left/Move_left/6.png",
  "Images/Player2/Left/Move_left/7.png","Images/Player2/Left/Move_left/8.png");

  Player2_LS_anim_jump = loadAnimation("Images/Player2/Left/Jump/0.png",
  "Images/Player2/Left/Jump/1.png","Images/Player2/Left/Jump/2.png","Images/Player2/Left/Jump/3.png",
  "Images/Player2/Left/Jump/4.png");

  Player2_LS_anim_punch = loadAnimation("Images/Player2/Left/Punch/0.png","Images/Player2/Left/Punch/1.png",
  "Images/Player2/Left/Punch/2.png","Images/Player2/Left/Punch/3.png","Images/Player2/Left/Punch/4.png");

  Player2_LS_anim_kick = loadAnimation("Images/Player2/Left/Kick/0.png","Images/Player2/Left/Kick/1.png",
  "Images/Player2/Left/Kick/2.png","Images/Player2/Left/Kick/3.png","Images/Player2/Left/Kick/4.png",
  "Images/Player2/Left/Kick/5.png");

  Player2_LS_anim_crouch = loadAnimation("Images/Player2/Left/Crouch/0.png","Images/Player2/Left/Crouch/1.png",
  "Images/Player2/Left/Crouch/2.png");

  Player2_LS_crouch_still = loadAnimation("Images/Player2/Left/Crouch/2.png");

  Player2_LS_block_still = loadAnimation("Images/Block/Player2/Left/2.png");

  Player2_LS_lose_still = loadAnimation("Images/Lose/Player2/Left/7.png");

  // Player 2 Images for Right Side

  Player2_RS_anim_norm = loadAnimation("Images/Player2/Right/Norm/0.png","Images/Player2/Right/Norm/1.png",
  "Images/Player2/Right/Norm/2.png","Images/Player2/Right/Norm/3.png","Images/Player2/Right/Norm/4.png",
  "Images/Player2/Right/Norm/5.png","Images/Player2/Right/Norm/6.png","Images/Player2/Right/Norm/7.png",
  "Images/Player2/Right/Norm/8.png");

  Player2_RS_anim_move_right = loadAnimation("Images/Player2/Right/Move_right/0.png",
  "Images/Player2/Right/Move_right/1.png","Images/Player2/Right/Move_right/2.png",
  "Images/Player2/Right/Move_right/3.png","Images/Player2/Right/Move_right/4.png",
  "Images/Player2/Right/Move_right/5.png","Images/Player2/Right/Move_right/6.png",
  "Images/Player2/Right/Move_right/7.png","Images/Player2/Right/Move_right/8.png");

  Player2_RS_anim_move_left = loadAnimation("Images/Player2/Right/Move_left/0.png",
  "Images/Player2/Right/Move_left/1.png","Images/Player2/Right/Move_left/2.png",
  "Images/Player2/Right/Move_left/2.png","Images/Player2/Right/Move_left/4.png",
  "Images/Player2/Right/Move_left/5.png","Images/Player2/Right/Move_left/6.png",
  "Images/Player2/Right/Move_left/7.png","Images/Player2/Right/Move_left/8.png");

  Player2_RS_anim_jump = loadAnimation("Images/Player2/Right/Jump/0.png",
  "Images/Player2/Right/Jump/1.png","Images/Player2/Right/Jump/2.png","Images/Player2/Right/Jump/3.png",
  "Images/Player2/Right/Jump/4.png");

  Player2_RS_anim_punch = loadAnimation("Images/Player2/Right/Punch/0.png","Images/Player2/Right/Punch/1.png",
  "Images/Player2/Right/Punch/2.png","Images/Player2/Right/Punch/3.png","Images/Player2/Right/Punch/4.png");

  Player2_RS_anim_kick = loadAnimation("Images/Player2/Right/Kick/0.png","Images/Player2/Right/Kick/1.png",
  "Images/Player2/Right/Kick/2.png","Images/Player2/Right/Kick/3.png","Images/Player2/Right/Kick/4.png",
  "Images/Player2/Right/Kick/5.png");

  Player2_RS_anim_crouch = loadAnimation("Images/Player2/Right/Crouch/0.png","Images/Player2/Right/Crouch/1.png",
  "Images/Player2/Right/Crouch/2.png");

  Player2_RS_crouch_still = loadAnimation("Images/Player2/Right/Crouch/2.png");

  Player2_RS_block_still = loadAnimation("Images/Block/Player2/Right/2.png");

  Player2_RS_lose_still = loadAnimation("Images/Lose/Player2/Right/7.png");

  Player2_win = loadAnimation("Images/Win/Player2/0.png","Images/Win/Player2/1.png","Images/Win/Player2/2.png",
  "Images/Win/Player2/3.png","Images/Win/Player2/4.png","Images/Win/Player2/5.png","Images/Win/Player2/6.png",
  "Images/Win/Player2/7.png","Images/Win/Player2/8.png","Images/Win/Player2/9.png");
}
function setup(){
createCanvas(windowWidth,windowHeight)
Player1=createSprite(400,windowHeight-40,50,50);
Player1.addAnimation("win1",Player1_win);
Player1.addAnimation("win1_still",Player1_win_still);

//LEFT SIDE
Player1.addAnimation("normal_ls_1",Player1_LS_anim_norm);
Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
Player1.addAnimation("left_Ls_1",Player1_LS_anim_move_left);
Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
Player1.addAnimation("left_LS_1",Player1_LS_anim_move_left);
Player1.addAnimation("jump_LS_1",Player1_LS_anim_jump);
Player1.addAnimation("punch_LS_1",Player1_LS_anim_punch);
Player1.addAnimation("kick_LS_1",Player1_LS_anim_kick);
Player1.addAnimation("crouch_LS_1",Player1_LS_anim_crouch);
Player1.addAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
Player1.addAnimation("block_LS_still_1",Player1_LS_block_still);
Player1.addAnimation("lose_LS_still_1",Player1_LS_lose_still);
// Right Side
Player1.addAnimation("Normal_RS_1",Player1_RS_anim_norm);
Player1.addAnimation("right_RS_1",Player1_RS_anim_move_right);
Player1.addAnimation("left_RS_1",Player1_RS_anim_move_left);
Player1.addAnimation("jump_RS_1",Player1_RS_anim_jump);
Player1.addAnimation("punch_RS_1",Player1_RS_anim_punch);
Player1.addAnimation("kick_RS_1",Player1_RS_anim_kick);
Player1.addAnimation("crouch_RS_1",Player1_RS_anim_crouch);
Player1.addAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
Player1.addAnimation("block_RS_still_1",Player1_RS_block_still);
Player1.addAnimation("lose_RS_still_1",Player1_RS_lose_still);

Player1.scale = 2;

// Player 2
Player2 = createSprite(windowWidth-400, windowHeight-40, 50, 50);
Player2.addAnimation("win2",Player2_win);
    // Left Side
    Player2.addAnimation("Normal_LS_2",Player2_LS_anim_norm);
    Player2.addAnimation("right_LS_2",Player2_LS_anim_move_right);
    Player2.addAnimation("left_LS_2",Player2_LS_anim_move_left);
    Player2.addAnimation("jump_LS_2",Player2_LS_anim_jump);
    Player2.addAnimation("punch_LS_2",Player2_LS_anim_punch);
    Player2.addAnimation("kick_LS_2",Player2_LS_anim_kick);
    Player2.addAnimation("crouch_LS_2",Player2_LS_anim_crouch);
    Player2.addAnimation("crouch_still_LS_2",Player2_LS_crouch_still);
    Player2.addAnimation("block_LS_still_2",Player2_LS_block_still);
    Player2.addAnimation("lose_LS_still_2",Player2_LS_lose_still);
    // Right Side
    Player2.addAnimation("Normal_RS_2",Player2_RS_anim_norm);
    Player2.addAnimation("right_RS_2",Player2_RS_anim_move_right);
    Player2.addAnimation("left_RS_2",Player2_RS_anim_move_left);
    Player2.addAnimation("jump_RS_2",Player2_RS_anim_jump);
    Player2.addAnimation("punch_RS_2",Player2_RS_anim_punch);
    Player2.addAnimation("kick_RS_2",Player2_RS_anim_kick);
    Player2.addAnimation("crouch_RS_2",Player2_RS_anim_crouch);
    Player2.addAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
    Player2.addAnimation("block_RS_still_2",Player2_RS_block_still);
    Player2.addAnimation("lose_RS_still_2",Player2_RS_lose_still);
Player2.scale = 2;

  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth+50,15);
  invisibleGround.visible = false;

}
function draw(){
background(BG);
if(gameState===PLAY){
  
    // Function for right movement of player 1
    if(keyDown("D")){
      Player1.x += 6;
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("right_LS_1",Player1_LS_anim_move_right);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("right_RS_1",Player1_RS_anim_move_right);
      }
    }else {
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("Normal_LS_1",Player1_LS_anim_norm);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("Normal_RS_1",Player1_RS_anim_norm);
      }
    }

     // Function for right movement of player 2
     if(keyDown("R")){
      Player2.x += 6;
      if(Player2.x<Player1.x) {
        Player2.changeAnimation("right_LS_2",Player2_LS_anim_move_right);
      }else if(Player2.x>Player1.x) {
        Player2.changeAnimation("right_RS_2",Player2_RS_anim_move_right);
      }
    }else {
      if(Player2.x<Player1.x) {
        Player2.changeAnimation("Normal_LS_2",Player2_LS_anim_norm);
      }else if(Player2.x>Player1.x) {
        Player2.changeAnimation("Normal_RS_2",Player2_RS_anim_norm);
      }
    }



      //function for left movement of player 1


  if(keyDown("S")){
    Player1.x+=6;
    if(Player1.x<Player2.x){
      Player1.changeAnimation("left_LS_1",Player1_LS_anim_move_left);
    }else if(Player1.x>Player2.x){
      Player1.changeAnimation("left_RS_1",Player1_RS_anim_move_left);
    }
  }

   //function for left movement of player 2


   if(keyDown("L")){
    Player2.x+=6;
    if(Player2.x<Player1.x){
      Player2.changeAnimation("left_LS_2",Player2_LS_anim_move_left);
    }else if(Player2.x>Player1.x){
      Player1.changeAnimation("left_RS_2",Player2_RS_anim_move_left);
    }
    
  }
 // Function for jumping of player 1


 if(keyDown("A") && Player1.y > invisibleGround.y-150) {
  Player1.velocityY = -15;
  if(Player1.x<Player2.x) {
    Player1.changeAnimation("jump_LS_1",Player1_LS_anim_jump);
  }else if(Player1.x>Player2.x) {
    Player1.changeAnimation("jump_RS_1",Player1_RS_anim_jump);
  }
}
 // Function for jumping of player 2
 

if(keyDown("J") && Player2.y > invisibleGround.y-130) {
  Player2.velocityY = -15;
  if(Player2.x<Player1.x) {
    Player2.changeAnimation("jump_LS_2",Player2_LS_anim_jump);
  }else if(Player2.x>Player1.x) {
    Player2.changeAnimation("jump_RS_2",Player2_RS_anim_jump);
  }
}

   // Function for crouching of Player 1


   if(keyDown("Q") && Player1.y > invisibleGround.y-150) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("crouch_LS_1",Player1_LS_anim_crouch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("crouch_RS_1",Player1_RS_anim_crouch);
    }
    if(Player1.y>invisibleGround.y-99) {
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
      }
    }
  }
 
   // Function for crouching of Player 2


   if(keyDown("H") && Player2.y > invisibleGround.y-150) {
    if(Player2.x<Player1.x) {
      Player2.changeAnimation("crouch_LS_2",Player2_LS_anim_crouch);
    }else if(Player2.x>Player1.x) {
      Player2.changeAnimation("crouch_RS_2",Player2_RS_anim_crouch);
    }
    if(Player2.y>invisibleGround.y-99) {
      if(Player2.x<Player1.x) {
        Player1.changeAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      }else if(Player2.x>Player1.x) {
        Player2.changeAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
      }
    }
  }
 

   
  // Function for punching of player 1


  if(keyDown("X")) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("punch_LS_1",Player1_LS_anim_punch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("punch_RS_1",Player1_RS_anim_punch);
    }
    if(Player1.isTouching(Player2) && bmode2 !== 1) {
      healthlevel2.x += 0.5;
    }
  }
  if(keyWentUp("x")){
    Player1.changeAnimation("normal_ls_1",Player1_LS_anim_norm);
  }

    
  // Function for punching of player 2


  if(keyDown("P")) {
    if(Player2.x<Player1.x) {
      Player2.changeAnimation("punch_LS_2",Player2_LS_anim_punch);
    }else if(Player2.x>Player1.x) {
      Player2.changeAnimation("punch_RS_2",Player2_RS_anim_punch);
    }
    if(Player1.isTouching(Player2) && bmode1 !== 1) {
      healthlevel2.x += 0.5;
    }
  }

    // Function for kicking of player 1


    if(keyDown("C")) {
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("kick_LS_1",Player1_LS_anim_kick);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("kick_RS_1",Player1_RS_anim_kick);
      }
      if(Player1.isTouching(Player2) && bmode2 !== 1) {
        //healthLevel2.x += 0.5;
      } 
    }
    // Function for kicking of player 1


    if(keyDown("K")) {
      if(Player2.x<Player1.x) {
        Player2.changeAnimation("kick_LS_2",Player2_LS_anim_kick);
      }else if(Player2.x>Player1.x) {
        Player2.changeAnimation("kick_RS_2",Player2_RS_anim_kick);
      }
      if(Player2.isTouching(Player1) && bmode1 !== 1) {
        //healthLevel1.x += 0.5;
      } 
    }


}


if(gameState===END){


  
}
if(Player1.x<0) {
  Player1.x = windowWidth;
}else if(Player1.x>windowWidth) {
  Player1.x = 0;
}

if(Player2.x<0) {
  Player2.x = windowWidth;
}else if(Player2.x>windowWidth) {
  Player2.x = 0;
}

  // collision
  Player1.collide(invisibleGround);
  Player2.collide(invisibleGround);
  fill ("Blue");
  rect(windowWidth-200,50,healthlevel1*100,20);
  
  fill ("red");
  rect(windowWidth-500,50,healthlevel2*100,20);
drawSprites();


}
