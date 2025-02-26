const mongoose = require('mongoose');

const ServiceRequestSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  serviceType: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  technicianAssigned: { type: String, default: null },
});

const ServiceRequest = mongoose.model('ServiceRequest', ServiceRequestSchema);
module.exports = ServiceRequest;