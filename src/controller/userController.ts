const jwt = require('jsonwebtoken');
const express = require('express');
const Router = express.Router();
const zod = require('zod');
import {  User } from '../models/userModel';
import { Request, Response } from "express";

const signupBody = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
});

Router.post('/signup', async function (req: Request, res: Response) {
    const body = await req.body;

    const { success } = signupBody.safeParse(body);
   

    if (!success) {
        return res.status(401).json({
            msg: "Invalid inputs"
        });
    }



    const existUser = await User.findOne({
        email: body.email
    });

    if (existUser) {
        return res.status(401).json({
            msg: "User already exists"
        });
    }

    const newUser = await User.create({
        username: body.username,
        email: body.email,
        password: body.password,
    });

    const userId = newUser._id;
    const token = jwt.sign({
        userId
    }, process.env.JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    });
});

const signinBody = zod.object({
    email: zod.string().email(),
    password: zod.string()
});

Router.post('/signin', async function (req: Request, res: Response) {
  
    const { success } = signinBody.safeParse(await req.body);
    if (!success) {
        return res.status(401).json({
            msg: "Invalid Inputs"
        });
    }

    const existUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (!existUser) {
        return res.status(401).json({
            msg: "User does not exist"
        });
    }

   
    const token = jwt.sign({
        userId: existUser._id,
    }, process.env.JWT_SECRET);

    // Send the response once, with the token
    res.json({
        token: token,
    });
});



export = Router;
