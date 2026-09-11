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
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(250, 600, 50, 120, "blue");
    createPlatform(100, 700, 50, 75, "red");
    createPlatform(400, 600, 50, 75, "lime");
    createPlatform(800, 500, 50, 100, "yellow");
    createPlatform(1100, 500, 50, 100, "orange");
    createPlatform(600, 500, 50, 150, "purple");
    createPlatform(950, 550, 50, 100, "green");
    createPlatform(1200, 420, 50, 30, "blue");
    createPlatform(1250, 500, 50, 75, "yellow");
    createPlatform(1000, 290, 50, 30, "red");

    // TODO 3 - Create Collectables
    createCollectable("star", 250, 500, 1, 0.7);
    createCollectable("star2", 800, 300, 1, 0);
    createCollectable("star3", 400, 500, 1, 0.7);
    createCollectable("star4", 1000, 270);
    createCollectable("star5", 1280, 470, 20, 0.5);

    // TODO 4 - Create Cannons
    createCannon("bottom", 600, 2000);
    createCannon("bottom", 1200, 3500);
    createCannon("bottom", 1400, 2000);
    createCannon("right", 300, 1500);
    createCannon("left", 350, 6000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
