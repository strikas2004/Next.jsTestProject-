import { connectToDatabase } from '../../mongodb';
import userData from "../../../modal/userModal"
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone } = body;
        console.log(body)

        const userExist = await userData.findOne({ email: email }).maxTimeMS(30000);

        if (userExist) {
            return NextResponse.json({
                message: "User Already Exists!",
                code:500
            });
        } else {
            const saveUserData = new userData({
                name,
                email,
                phoneNumber: phone,
            });
            const savedUser = await saveUserData.save();
            console.log('Data saved to MongoDB', saveUserData);

            return NextResponse.json({
                message: "User created successfully",
                data: savedUser,
                code:200
            });
        }
    } catch (error) {
        console.error('Error saving data to MongoDB:', error);
        return NextResponse.json({
            message: "Error in Data Saving",
        });
    }
}
