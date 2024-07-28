// src/models/Testimonials.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  role: string;
  feedback: string;
  image: string;
}

const testimonialSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model<ITestimonial>('Testimonial', testimonialSchema);
