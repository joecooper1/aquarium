import getRandomNum from "../utils/getRandomNum";

export default function checkPlants(plantArray) {
  //Set redraw to false to begin, change to true if anything needs redrawing
  let redraw = false;

  console.log("check plants");
  //Loop through plants
  for (let i = 0; i < plantArray.length; i++) {
    //Const plant
    const plant = plantArray[i];
    //If not enough fruit, add one
    if (plant.fruit.length < 5) {
      plant.fruit.push({});
      //Const fruit
      const fruit = plant.fruit[plant.fruit.length - 1];
      fruit.x = plant.x + getRandomNum(20);
      fruit.y = plant.y + getRandomNum(20);
      redraw = true;
    }
  }

  return { plantArray, redraw };
}
