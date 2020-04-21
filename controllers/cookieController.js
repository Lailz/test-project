const cakes = require("../cakes");

exports.cookie_list = async (req, res) => {
  try {
    const allCakes = await cakes.getCakes();
    res.json(allCakes);
  } catch (error) {
    console.log("Error while fetching cakes", error);
  }
};

exports.cookie_detail = async (req, res) => {
  try {
    const { cakeId } = req.params;
    const cake = await cakes.getCake(cakeId);
    res.json(cake);
  } catch (error) {
    console.log("Error while fetching cake", error);
  }
};

exports.cookie_create = async (req, res) => {
  try {
    const newCake = await cakes.createCake(req.body);
    res.status(201).json(newCake);
  } catch (error) {
    console.log("Error while creating a new cake", error);
  }
};

exports.cookie_update = async (req, res) => {
  const cake = req.body;
  try {
    const _cake = await cakes.getCake(req.params.cakeId);
    _cake.name = cake.name;
    _cake.price = cake.price;
    _cake.image = cake.image;
    await cakes.updateCake(_cake);
    res.status(204).end(); //for put request, the convention is to simply not send anything back. So we basically send back a status code to indicate that the update went as expected
    // we use .end() to end the response or basically the app will be stuck which simply tells Express that we're done
  } catch (error) {
    console.log("Error while updating a cake!", error);
    // res.status(400).json({ message: "Error while updating a cake!" });
  }
};

exports.cookie_delete = async (req, res) => {
  try {
    // const cake = await cakes.getCake(req.params.cakeId);
    await cakes.deleteCake(req.params.cakeId);
    res.status(204).end();
  } catch (error) {
    console.log("Error while deleting a cake!", error);
    // res.status(400).json({ message: "Quote Not Found!" });
  }
};
