import { Request, Response } from 'express';
import FeaturedWork, { IFeaturedWork } from '../models/featureModel';

// Create new featured work
export const createFeaturedWork = async (req: Request, res: Response) => {
  const { image,metadataimage , title , description, mobileViewImages, laptopViewImages, brandImages, imageType , websiteUrl } = req.body;

  try {
    const newFeaturedWork: IFeaturedWork = new FeaturedWork({
      image,
      metadataimage ,
      title ,
      description,
      mobileViewImages,
      laptopViewImages,
      brandImages,
      imageType,
      websiteUrl 
    });

    await newFeaturedWork.save();
    res.status(201).json(newFeaturedWork);
  } catch (error) {
    res.status(500).json({ message: 'Error creating featured work', error });
  }
};

// Get all featured works
export const getFeaturedWorks = async (req: Request, res: Response) => {
  try {
    const featuredWorks = await FeaturedWork.find();
    res.status(200).json(featuredWorks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured works', error });
  }
};

// Get featured work by ID
export const getFeaturedWorkById = async (req: Request, res: Response) => {
  try {
    const featuredWork = await FeaturedWork.findById(req.params.id);
    if (!featuredWork) {
      return res.status(404).json({ message: 'Featured work not found' });
    }
    res.status(200).json(featuredWork);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured work', error });
  }
};

// Update featured work by ID
export const updateFeaturedWork = async (req: Request, res: Response) => {
  const { image, metadataimage , title ,description, mobileViewImages, laptopViewImages, brandImages, imageType ,websiteUrl} = req.body;

  try {
    const updatedFeaturedWork = await FeaturedWork.findByIdAndUpdate(
      req.params.id,
      { image, metadataimage ,title , description, mobileViewImages, laptopViewImages, brandImages, imageType ,websiteUrl},
      { new: true }
    );

    if (!updatedFeaturedWork) {
      return res.status(404).json({ message: 'Featured work not found' });
    }

    res.status(200).json(updatedFeaturedWork);
  } catch (error) {
    res.status(500).json({ message: 'Error updating featured work', error });
  }
};

// Delete featured work by ID
export const deleteFeaturedWork = async (req: Request, res: Response) => {
  try {
    const deletedFeaturedWork = await FeaturedWork.findByIdAndDelete(req.params.id);
    if (!deletedFeaturedWork) {
      return res.status(404).json({ message: 'Featured work not found' });
    }
    res.status(200).json({ message: 'Featured work deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting featured work', error });
  }
};
