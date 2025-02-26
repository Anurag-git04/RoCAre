const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serviceRequestRoutes = require('./routes/ServiceRequest'); 
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
// Corrected file name

const app = express();
app.use(express.json());
app.use(cors());


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/service_requests', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/service-requests', serviceRequestRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/inventory", inventoryRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});