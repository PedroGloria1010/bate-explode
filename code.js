var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["562a2a8e-aff4-4ba4-bca7-e0b9f73e7061","94cd6709-1ee5-4d1e-81fe-b31258db8a69"],"propsByKey":{"562a2a8e-aff4-4ba4-bca7-e0b9f73e7061":{"name":"game over","sourceUrl":null,"frameSize":{"x":512,"y":301},"frameCount":2,"looping":true,"frameDelay":12,"version":"3EaibVWxngyUIBWOTDZcnvthA5nP1Qf7","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":602},"rootRelativePath":"assets/562a2a8e-aff4-4ba4-bca7-e0b9f73e7061.png"},"94cd6709-1ee5-4d1e-81fe-b31258db8a69":{"name":"ganhou","sourceUrl":"assets/v3/animations/jCP7Z-QRp-8hR2H320wAAc4ltIVe2imF6A4matKRG2w/94cd6709-1ee5-4d1e-81fe-b31258db8a69.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"MlpsGD3IwpBmTlnX1M2DU2jwPrOmxrx7","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/jCP7Z-QRp-8hR2H320wAAc4ltIVe2imF6A4matKRG2w/94cd6709-1ee5-4d1e-81fe-b31258db8a69.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pontos = 0;
var gameState = "serve";
var bloco1 = createSprite(25, 50, 50, 50);
var bloco2 = createSprite(75, 50, 50, 50);
var bloco3 = createSprite(125, 50, 50, 50);
var bloco4 = createSprite(175, 50, 50, 50);
var bloco5 = createSprite(225, 50, 50, 50);
var bloco6 = createSprite(275, 50, 50, 50);
var bloco7 = createSprite(325, 50, 50, 50);
var bloco8 = createSprite(375, 50, 50, 50);
var bloco22 = createSprite(75, 100, 50, 50);
var bloco11 = createSprite(25, 100, 50, 50);
var bloco33 = createSprite(125, 100, 50, 50);
var bloco44 = createSprite(175, 100, 50, 50);
var bloco55 = createSprite(225, 100, 50, 50);
var bloco66 = createSprite(275, 100, 50, 50);
var bloco77 = createSprite(325, 100, 50, 50);
var bloco88 = createSprite(375, 100, 50, 50);
bloco1.shapeColor = "blue";
bloco2.shapeColor = "red";
bloco3.shapeColor = "blue";
bloco4.shapeColor = "red";
bloco5.shapeColor = "blue";
bloco6.shapeColor = "red";
bloco7.shapeColor = "blue";
bloco8.shapeColor = "red";
bloco11.shapeColor = "red";
bloco22.shapeColor = "blue";
bloco33.shapeColor = "red";
bloco44.shapeColor = "blue";
bloco55.shapeColor = "red";
bloco66.shapeColor = "blue";
bloco77.shapeColor = "red";
bloco88.shapeColor = "blue";
var jogador = createSprite(200, 370, 100, 10);
var bola = createSprite(200, 200, 10, 10);
createEdgeSprites();
playSound("assets/category_background/eerie_beginnings.mp3", true);
bola.velocityX = 4;
bola.velocityY = 4;
function draw() {
 background("white");
 
 
 if (gameState == "serve") {
    text("Precione ESPAÇO para continuar.", 100, 200);
    if (keyDown("Space")) {
      bola.velocityX = randomNumber(-9, 9);
      bola.velocityY = randomNumber(-9, 9);
      gameState = "play";
    }
  }
 
 if (gameState == "play") {
    bola.bounceOff(topEdge);
    bola.bounceOff(leftEdge);
    bola.bounceOff(rightEdge);
    bola.bounceOff(jogador);
    if (bola.isTouching(bloco88)) {
      pontos = pontos+100;
      bloco88.destroy();
    }
    if (bola.isTouching(bloco77)) {
      bloco77.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco66)) {
      bloco66.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco55)) {
      bloco55.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco44)) {
      bloco44.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco33)) {
      bloco33.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco22)) {
      bloco22.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco11)) {
      bloco11.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco8)) {
      bloco8.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco7)) {
      bloco7.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco6)) {
      bloco6.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco5)) {
      bloco5.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco4)) {
      bloco4.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco3)) {
      bloco3.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco2)) {
      bloco2.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bloco1)) {
      bloco1.destroy();
      pontos = pontos+100;
    }
    if (bola.isTouching(bottomEdge)) {
      gameState = "end";
    }
    jogador.x = World.mouseX;
    drawSprites();
    text("Score: "+pontos, 10, 15);
    if (pontos == 1600) {
      gameState = "win";
      bola.x = 200;
      bola.y = 200;
    }
  }
 
 
  if (gameState== "win") {
    var fundo1 = createSprite(200, 200);
    fundo1.setAnimation("ganhou");
    fundo1.height = 400;
    fundo1.width = 400;
    pontos = 0;
    if (keyDown("Space")) {
      gameState = "server";
    }
  }
 
 
 if (gameState=="end") {
    var fundo = createSprite(200, 200);
    fundo.setAnimation("game over");
    fundo.height = 400;
    fundo.width = 400;
    pontos = 0;
    if (keyDown("Space")) {
      gameState = "server";
    }
  }
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
