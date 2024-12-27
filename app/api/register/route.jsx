import User from "@/models/user";
import connectToDatabase from "@/lib/db";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";


export async function POST(request){
    try{
         connectToDatabase();
        const{name,email,password}=await request.json()
        const userExistense=await User.findOne({email})
        if(userExistense){
            return NextResponse.json({message:"User  already exixted"})
        }

        const hashpassword= await bcrypt.hash(password,10)
        const newUser=new User({
            name,
            email,password:hashpassword
        })

        await newUser.save()
        return NextResponse.json({message:"Sigup successfully " , status:201})

    }catch (err){
        return NextResponse.json({eror:"Error in Server",status:500})

    }
}