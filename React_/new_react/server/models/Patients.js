import { Schema, model } from 'mongoose';

const patientSchema = new Schema({
  name: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  problem: String,
  medication: String,
  symptoms: String,
  otherNotes: String,
});

const Patient = model('Patient', patientSchema);

export default Patient;