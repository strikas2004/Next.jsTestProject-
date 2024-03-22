import { connectToDatabase } from '../../mongodb';
import userData from "../../../modal/userModal";
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();

export async function PUT(request: NextRequest) {
    try {
        const body = await request.json();
        const { _id, date } = body;
        console.log("API HHHHIIIITTTT", body);

        // Find the user by _id
        const userExist = await userData.findOne({ _id });

        if (userExist) {
            // Convert string date to JavaScript Date object
            const scheduledTime = new Date(date);

            // Update the user's scheduledTime with writeConcern option
            const updateResult = await userData.updateOne({ _id }, { $set: { scheduledTime } }, { writeConcern: { w: 'majority' } });
            console.log("Update Result:", updateResult);

            return NextResponse.json({
                message: "User data updated successfully!",
                data: userExist, // You can return the updated user data if needed
                code: 200 // You can use appropriate status code here
            });
        } else {
            return NextResponse.json({
                message: "User not found",
                code: 404 // User not found status code
            });
        }
    } catch (error) {
        console.error('Error updating user data:', error);
        return NextResponse.json({
            message: "Error updating user data",
            code: 500 // Internal server error status code
        });
    }
}
