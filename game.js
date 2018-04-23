//set up one time deals
// make the canvas
var canvas = document.createElement("canvas");
canvas.width = "1000";
canvas.height = "500";
canvas.style.outline = "1px black solid";
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
//set some vars for gamestate
var enemies = [];
var enemy_spawn_rate = 100;
var enemy_rate = enemy_spawn_rate;
var bullets = [];
var keys = [];
var spacebar = false;
// create and load image objects for use later
var start_screen_img = new Image();
start_screen_img.src = "res/chars/background.png";
var player_image = new Image();
player_image.src = "res/chars/character.png";
var enemy_image = new Image();
enemy_image.src = "res/chars/missile-54.png";
var background = new Image();
background.src = "res/chars/bg.png";
var bullet_image = new Image();
bullet_image.src = "res/chars/bullet.png";
var robot = new Image();
robot.src = "res/chars/robot.png";
//load audio
var snd = new Audio("shoot.wav"); // buffers automatically when created

// OBJECTS

// player object
var player = {
    x: 10,
    y: 200,
    score: 0,
    speed: 10,
    draw: function () {
        ctx.drawImage(player_image, player.x, player.y);
    }
};
//scoreboard object
var scoreboard = {
    x: 12,
    y: 28,
    score: window.player.score,
    draw: function () {
        ctx.font = "24 Arial-Bold";
        ctx.fillText(String("Score: " + window.player.score), this.x, this.y);
    }
};
// enemy object
function Enemy(speed, health, image) {
    this.x = Math.floor(Math.random() * 200) + 1100;
    this.y = Math.floor(Math.random() * 400);
    this.speed = speed;
    this.health = health;
    this.image = image;
    this.alive = true;
    this.draw = function () {
        ctx.drawImage(image, this.x, this.y);
        if (this.x > -50) {
            this.x -= this.speed;
        } else {
            // so it stops updating this one.
            if (window.player.score !== 0) {
            window.player.score -= 10;
            }
            this.alive = false;
        }
    };
}
function Bullet(speed, health, image) {
    this.x = window.player.x + 50;
    this.y = window.player.y + 2;
    this.speed = speed;
    this.health = health;
    this.image = image;
    this.alive = true;
    this.draw = function () {
        ctx.drawImage(image, this.x, this.y);
        if (this.x < 1050) {
            this.x += this.speed;
        } else {
            //so it stops updating this one.
            this.alive = false;
        }
    };
}

// FUNCTIONS
function makeBullet(speed, health, image, num) {
    for (i = 0; i !== num; i += 1) {
        window["Bullet_" + i] = new Bullet(speed, health, image);
        bullets.push(window["Bullet_" + i]);
    }
}
function drawAllBullets() {
    for (i = 0; i < bullets.length; i += 1) {
        if (bullets[i].alive) {
            bullets[i].draw();
        } else {
            bullets.splice(i, 1);
        }
    }
}
function makeEnemy(speed, health, image, num) {
    for (i = 0; i !== num; i += 1) {
        window["Enemy_" + i] = new Enemy(speed, health, image);
        enemies.push(window["Enemy_" + i]);
    }
}
function drawAllEnemies() {
    for (i = 0; i < enemies.length; i += 1) {
        if (enemies[i].alive) {
            enemies[i].draw();
        } else {
            enemies.splice(i, 1);
        }
    }
}
function checkCollision() {
    for (i = 0; i < bullets.length; i += 1) {
        for (a = 0; a < enemies.length; a += 1) {
            if (bullets[i].x < enemies[a].x + 50  && bullets[i].x + 5  > enemies[a].x &&
		bullets[i].y < enemies[a].y + 128 && bullets[i].y + 5 > enemies[a].y) {
                enemies[a].alive = false;
                bullets[i].alive = false;
                player.score += 5;
            }
        }
    }
}
function startGame() {
    ctx.drawImage(start_screen_img, 0, 0);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.font = "25px Courier";
    var count = 10000; //as long as its high it doesnt matter
    //blink count times
    timer = setInterval(function () {
        count -= 1;
        if (count % 2 === 1) {
            ctx.drawImage(start_screen_img, 0, 0);
        } else {
            ctx.fillText("Press Spacebar", 400, 400);
        }
        if (count === 0) {
            clearInterval(timer);
        }
        if (spacebar) {
            clearInterval(timer);
            count = 0;
            ctx.drawImage(start_screen_img, 0, 0);
            ctx.fillText("Starting Game", 400, 400);
            setTimeout(update, 1000);
            spacebar = false;
        }
    }, 500);
    //end blink
}
function draw() {
    // This function draws everything
    player.draw();
    scoreboard.draw();
    if (enemy_rate === 0) {
        makeEnemy(2, 2, robot, 3);
        enemy_rate = enemy_spawn_rate;
    } else {
        enemy_rate -= 1;
    }
    drawAllEnemies();
    drawAllBullets();
}
function update() {
    //debugging
    
    //console.log(keys);
    
    //END debugging
    // The logic
    if (keys[38]) {
        if (player.y > 5) {
            player.y -= player.speed;
        }
    }
    if (keys[40]) {
        if (player.y < 390) {
            player.y += player.speed;
        }
    }
    if (spacebar) {
        makeBullet(5, 1, bullet_image, 1);
        snd.play();
        spacebar = false;
    }
    // End logic
    
    //The graphics rendering
    ctx.clearRect(0, 0, 1000, 500);
    ctx.drawImage(background, 0, 0);
    draw();
    checkCollision();
    setTimeout(update, 1000 / 50);
}
document.addEventListener("keydown", function (key) {
    keys[key.keyCode] = true;
});
document.addEventListener("keyup", function (key) {
    keys[key.keyCode] = false;
});
document.addEventListener("keypress", function (key) {
    if (key.keyCode === 32) {
        spacebar = true;
    }
});
startGame();
