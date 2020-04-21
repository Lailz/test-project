const fs = require("fs");

function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

function save(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("data.json", JSON.stringify(data, null, 2), err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

/**
 * Gets all cakes
 * @param None
 */
function getCakes() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

/**
 * Gets a specific cake by ID
 * @param {number} id - Accepts the ID of the specified cake.
 */
async function getCake(id) {
  const cakes = await getCakes();
  return cakes.find(cake => cake.id == id);
}
/**
 * Gets a random cake
 * @param None
 */
async function getRandomCake() {
  const cakes = await getCakes();
  const randNum = Math.floor(Math.random() * cakes.length);
  return cakes[randNum];
}

/**
 * Creates a new cake
 * @param {Object} newCake - Object containing info for new cake: the cake name, price and image
 */
async function createCake(newCake) {
  console.log("CAKE IN FUNCITONS", newCake);
  const cakes = await getCakes();

  newCake.id = generateRandomId();
  cakes.push(newCake);
  await save(cakes);
  return newCake;
}

/**
 * Updates a single cake
 * @param {Object} newCake - An object containing the changes to cake: name, price, image (all optional)
 */
async function updateCake(newCake) {
  const cakes = await getCakes();
  let cake = cakes.find(item => item.id == newCake.id);

  cake.name = newCake.name;
  cake.price = newCake.price;
  cake.image = newCake.image;

  await save(cakes);
}

/**
 * Deletes a single cake
 * @param {number} ID - Accepts cake to be deleted.
 */
async function deleteCake(cakeId) {
  let cakes = await getCakes();
  cakes = cakes.filter(item => item.id != cakeId);
  await save(cakes);
}

module.exports = {
  getCakes,
  getCake,
  createCake,
  updateCake,
  deleteCake,
  getRandomCake
};
