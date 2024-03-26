import { connectToDatabase } from '../../mongodb';
import userData from "../../../modal/userModal";
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");
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
            const updatedUser = await userData.findOne({ _id });

            try {
                // console.log("HIOIH",updatedUser);
                const scheduledTime = new Date(updatedUser.scheduledTime);
                const Time = scheduledTime.toLocaleString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                });
                await sendEmail(userExist.email, 'AppointMent Booked', `Name:${updatedUser.name}\nProvided Phone Number :${updatedUser.phoneNumber}\nScheduled Time:${Time}`);

            } catch (error) {
                console.log("Error in Sending Mail....")
            }

            return NextResponse.json({
                message: "User data updated successfully!",
                data: userExist,
                code: 200
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
async function sendEmail(email: any, subject: any, text: any) {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: 'smtp.gmail.com',
        port: 465,
        secure: false,
        auth: {
            user: 'vinayakgadgoli16@gmail.com',
            pass: 'hgan azwa ktfb gckb'
        }
    });

    // Email message options
    const mailOptions = {
        from: 'vinayakgadgoli16@gmail.com',
        cc: 'vinayakgadgoli16@gmail.com',
        to: email,
        subject: subject,
        text: text
    };

    // Send email
    const may = await transporter.sendMail(mailOptions);
    console.log(may);
}