const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
    newOrders: { type: Number, default: 0 },
    dailyStatus: {
        confirmed: { type: Number, default: 0 },
        packed: { type: Number, default: 0 },
        shipped: { type: Number, default: 0 },
        restock: { type: Number, default: 0 }
    },
    lowStockItems: { type: Number, default: 0 },
    itemsDispatched: { type: Number, default: 0 },
    itemsInStock: { type: Number, default: 0 }
});

module.exports = mongoose.model("Inventory", InventorySchema);
