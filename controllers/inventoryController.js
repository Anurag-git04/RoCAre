const Inventory = require("../models/Inventory");

// Get inventory data
exports.getInventory = async (req, res) => {
    try {
        const inventory = await Inventory.findOne();
        res.json(inventory);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Update inventory data
exports.updateInventory = async (req, res) => {
    try {
        let inventory = await Inventory.findOne();
        if (!inventory) {
            inventory = new Inventory();
        }
        Object.assign(inventory, req.body);
        await inventory.save();
        res.json({ message: "Inventory updated successfully", inventory });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
