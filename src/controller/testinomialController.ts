

import { Request, Response } from 'express';
import Testimonial, { ITestimonial } from '../models/testinomialModel';

// Get all testimonials
export const getTestimonials = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonials: ITestimonial[] = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Get a single testimonial by ID
export const getTestimonialById = async (req: Request, res: Response): Promise<void> => {
  try {
    const testimonial: ITestimonial | null = await Testimonial.findById(req.params.id);
    if (!testimonial)
    res.status(404).json({ message: 'Testimonial not found' });
    else
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

// Create a new testimonial
export const createTestimonial = async (req: Request, res: Response): Promise<void> => {
  const { name, role, feedback, image } = req.body;

  try {
    const newTestimonial = new Testimonial({
      name,
      role,
      feedback,
      image,
    });

    const savedTestimonial: ITestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Update an existing testimonial
export const updateTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedTestimonial: ITestimonial | null = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if(!updateTestimonial){
      res.status(404).json({ message: 'Testimonial not found' });
    }
    else
    res.status(200).json(updatedTestimonial);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

// Delete a testimonial
export const deleteTestimonial = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedTestimonial: ITestimonial | null = await Testimonial.findByIdAndDelete(req.params.id);
    if (!deletedTestimonial) 
     res.status(404).json({ message: 'Testimonial not found' });
    else
    res.status(200).json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
