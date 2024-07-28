

import { Router } from 'express';
import { getTestimonials, getTestimonialById, createTestimonial, updateTestimonial, deleteTestimonial } from '../controller/testinomialController';

const router: Router = Router();

// GET all testimonials
router.get('/', getTestimonials);

// GET a single testimonial by ID
router.get('/:id', getTestimonialById);

// POST a new testimonial
router.post('/', createTestimonial);

// PUT (update) a testimonial by ID
router.put('/:id', updateTestimonial);

// DELETE a testimonial by ID
router.delete('/:id', deleteTestimonial);

export = router;
