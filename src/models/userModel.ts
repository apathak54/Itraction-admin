import mongoose, {  Model, ObjectId } from "mongoose";

export interface IUser {
    _id? : ObjectId, 
    username: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema<IUser>(
    {   
        username: {
            type: String,
            required: true,
            trim: true,
           
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique:true
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },

    },
    {
       
        timestamps: true,
    }
);

export const User: Model<IUser> = mongoose.model<IUser>('Itraction_User', UserSchema);

