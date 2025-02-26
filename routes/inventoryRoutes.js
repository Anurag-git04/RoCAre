const express = require("express");
const { getInventory, updateInventory } = require("../controllers/inventoryController");

const router = express.Router();

router.get("/", getInventory);
router.put("/", updateInventory);

module.exports = router;
