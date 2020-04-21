const express = require("express");
const router = express.Router();

// Controllers
const cookieController = require("../controllers/cookieController");

router.get("/", cookieController.cookie_list);

router.get("/:cakeId", cookieController.cookie_detail);

router.post("/", cookieController.cookie_create);

router.put("/:cakeId", cookieController.cookie_update);

router.delete("/:cakeId", cookieController.cookie_delete);

module.exports = router;
