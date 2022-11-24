import mongoose from "mongoose";
var Schema = mongoose.Schema;

var customer = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  travellerCount: {
    type: Number,
    required: true,
  },
  currency: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

var Customer = mongoose.model("Customer", customer);

export default Customer;
