import { Schema, model, Document } from 'mongoose';

export interface IFeaturedWork extends Document {
  image: string;
  metadataimage: string;
  title : string ;
  description : string 
  mobileViewImages: string[];
  laptopViewImages: string[];
  brandImages: string[];
  imageType: string;
  websiteUrl:string ;
}

const featuredWorkSchema = new Schema<IFeaturedWork>({
  image: { type: String, required: true },
  metadataimage:{type : String , required : true },
  title : {type : String , required:true},
  description: { type: String, required: true },
  mobileViewImages: { type: [String], default: [] },
  laptopViewImages: { type: [String], default: [] },
  brandImages: { type: [String], default: [] },
  imageType: { type: String, required: true },
  websiteUrl:{type : String , required:true}

}, {
  timestamps: true
});

export default model<IFeaturedWork>('FeaturedWork', featuredWorkSchema);
