$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(250, 600, 50, 120, "blue");
createPlatform(100, 700, 50, 75, "red");
createPlatform(400, 600, 50, 75, "lime");
createPlatform(800, 500, 50, 100, "yellow");
createPlatform(1100, 450, 50, 100, "orange");
createPlatform(600, 500, 50, 150, "purple");
createPlatform(950, 500, 50, 100, "green");

    // TODO 3 - Create Collectables
createCollectable ("steve", 250, 550, 1, 0.7 )
createCollectable ("diamond", 800, 300, 1, 0 )
createCollectable ("steve", 400, 600, 1, 0.7 )
    
    // TODO 4 - Create Cannons
createCannon("bottom", 600, 2000); 
createCannon("right", 400, 2500);
createCannon("bottom", 1400, 2000);     
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
