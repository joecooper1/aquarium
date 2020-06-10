import checkPlants from "../Plant-Utils/checkPlants";

export default function drawPlants(
  ctx,
  plantArray,
  winWidth,
  winHeight,
  redraw = true
) {
  console.log("render fruit");

  //Only redraw canvas if redraw is true
  if (redraw) {
    //Clear canvas
    ctx.clearRect(0, 0, winWidth, winHeight);

    //Loop through plants
    for (let i = 0; i < plantArray.length; i++) {
      //Const plant
      const plant = plantArray[i];
      //Set color based on nutrition, poison
      ctx.fillStyle = `rgba(0, 200, 0, 0.3)`;
      ctx.beginPath();
      ctx.arc(plant.x, plant.y, 20, 0, Math.PI * 2);
      ctx.fill();
      //Loop through fruit
      for (let j = 0; j < plant.fruit.length; j++) {
        //Const fruit
        const fruit = plant.fruit[j];
        //Draw fruit
        ctx.fillStyle = `rgb(0, 255, 0)`;
        ctx.beginPath();
        ctx.arc(fruit.x, fruit.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (plantArray.length > 0) {
    setTimeout(() => {
      const results = checkPlants(plantArray);
      const newPlantArray = results.plantArray;
      const redrawNext = results.redraw;
      drawPlants(ctx, newPlantArray, winWidth, winHeight, redrawNext);
    }, 5000);
  }
}
