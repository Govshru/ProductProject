import User from "@/models/user";
import connectToDatabase from "@/lib/db";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";


export async function POST(request){
    try{
         connectToDatabase();
        const{email,password}=await request.json()
        const userExistense=await User.findOne({email})
        if(!userExistense){
            return NextResponse.json({message:"User not existed"})
        }

        const checkPassword= await bcrypt.compare(password,userExistense.password)
        if(!checkPassword){
            return NextResponse.json({error:"Wrong Password "})

        }

        return NextResponse.json({message:"Login Successfully"})

    }catch (err){
        return NextResponse.json({eror:"Error in Server",status:500})

    }
}