var t;
var moon;
var bombs = [];
var smallPoint, largePoint;
var s = second();
var clicks = 0;


//var skylineHeight = windowHeight/2-40;
//var newSHeight = windowWidth*1530/2048;
//per cercare di non scrivere ogni volta la formula sulle stringhe di comando dello skyline ma se la applico non funziona//windowWidth*1530/2048

function preload() {
dresda = loadImage("assets/citta.png");
dresda2 = loadImage("assets/citta2.png");
dresda3 = loadImage("assets/citta3.png");
dresda4 = loadImage("assets/citta4.png");
dresda5 = loadImage("assets/citta5.png");
dresda6 = loadImage("assets/citta6.png");
dresda7 = loadImage("assets/citta7.png");
moon = loadImage("assets/moon.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    }


function draw() {

imageMode(CENTER);
//image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    
    if(bombs.length < 100) {
        //backgroundImage(dresda)
        image(dresda, windowWidth/2, windowHeight/2, windowWidth, windowWidth*1530/2048);

    }
  if( bombs.length > 100 ) {
        //backgroundImage(dresda)
        image(dresda2, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048)
        
    }
    
    if(bombs.length > 200) {
        //backgroundImage(dresda)
        image(dresda3, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    
    if(bombs.length > 300) {
        //backgroundImage(dresda)
        image(dresda4, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
     
    if(bombs.length > 400) {
        //backgroundImage(dresda)
        image(dresda5, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    
     if(bombs.length > 500) {
        //backgroundImage(dresda)
        image(dresda6, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
   
    if(bombs.length > 600) {
        //backgroundImage(dresda)
        image(dresda7, windowWidth/2, windowHeight/2,windowWidth, windowWidth*1530/2048);
    }
    //iterate on the array
  for(var i=0; i< bombs.length; i++) {
    
    // Increase the single bomb y position
    bombs[i].y+=5;
    
    // Create a new ellipse using the x and y properties of the bomb object
    ellipse(bombs[i].x, bombs[i].y, 4,10);
    
  if (bombs[i].y >= height ) { 
    fill(255,0,0)
    noStroke();
    ellipse(bombs[i].x, windowHeight, bombs[i].size);
    //bombs.splice(i,7);
    
   } else {
        fill(bombs[i].color);
        noStroke()
        
      }

  }
    
var s = second() + 3
image(moon,  width/6 + s, height/3 - s, 70, 70);


  noStroke();
  fill(255);
  textSize(20);
  text("Victims",1340 , 80);
  textSize(18);
 
  
    
  noStroke();
  fill(255);
  textSize(20);
  text("Time",1335,50);
  textSize(18);
  text(s,1310,50);
    
if (bombs.length > 650) {
        noStroke();
        fill(0, 0, 0);
        rect(0, 0, windowWidth, windowHeight);
        textSize(32);
        fill(250);
        textAlign(CENTER);
        text("Remember dresda", windowWidth / 2, windowHeight / 2);
    }

  //text(frameCount, width/2, height/2);
    if (frameCount > 100){ //cambiare il 100
        fill(5);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
        textSize(62);
    fill(255);
    textAlign(CENTER);
    text("REMEMBER DRESDA", width/2, height/2);
    t(0 ,1);
    }  
}

function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}


function mouseReleased() {
  
  // Create a new position
  var newx = random()*width;
  var newSize = random(2,10);
  var newColor;
    var myRandom = random(0,1);
    if (myRandom <= 0.5) {
        newColor = color('#E52B50');
    } else {
        newColor = color('#A51800');
    }
  // Create an object representing bomb properties.
  // object properties are defined by name : value
  // and are comma saeparated.
  var obj = {x: newx, y: 0, size: newSize, color: newColor};
  // The object is added to the array.
  bombs.push(obj);
 
    
    
    
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }



    