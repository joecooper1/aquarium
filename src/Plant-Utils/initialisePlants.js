import getRandomNum from "../utils/getRandomNum";

export default function intialisePlants(setPlantArray, dimensions) {
    console.log('initialise plants');
  //Initialise new array
  const plantArray = [];

  //Get height and width
  const { height, width } = dimensions;

  //Create n number of plants
  const n = 20;
  for (let i = 0; i < n; i++) {
    //Initialise plant
    const plant = {};
    //Give each plant a random x and y value, within height and width
    plant.x = width * 0.1 + Math.random() * width * 0.8;
    plant.y = height * 0.1 + Math.random() * height * 0.8;
    //Give plant a fruit property, and set it to an array
    plant.fruit = [];
    //Give each plant /two/ fruit
    for (let i = 0; i < 2; i++) {
      //Initialise fruit
      const fruit = {};
      //Give fruit and x and y value, relative to the plants x and y value
      fruit.x = plant.x + getRandomNum(20);
      fruit.y = plant.y + getRandomNum(20);
      //Push fruit to fruit array
      plant.fruit.push(fruit);
    }
    //Space here to add nutrition level, poison level, etc...

    //Push plant to plant array
    plantArray.push(plant);
  }

  //Return plantarray
  return setPlantArray(plantArray);
}
