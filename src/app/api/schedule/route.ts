import { connectToDatabase } from '../../mongodb';
import userData from "../../../modal/userModal";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

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
            // Send email to the user
            // await sendEmail(userExist.email, 'AppointMent Booked', 'Test Appontment Booked');


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
// async function sendEmail(email: any, subject: any, text: any) {

//     const transporter = nodemailer.createTransport({
//         host: 'smtp.example.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: 'strikas20044@gmail.com',
//             pass: 'Sumit@2004'
//         }
//     });

//     // Email message options
//     const mailOptions = {
//         from: 'strikas20044@gmail.com',
//         to: email,
//         subject: subject,
//         text: text
//     };

//     // Send email
//    const may = await transporter.sendMail(mailOptions);
//    console.log(may);
// }