const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const serviceRequestRoutes = require('./routes/serviceRequests');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/service_requests', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/service-requests', serviceRequestRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});