const express = require("express");
const { ClientModel } = require("../model/client");
const bcrypt = require("bcrypt");

const clientRouter = express.Router();

// client booking route and sent the email 

const nodemailer = require("nodemailer");

// Set up transporter for sending emails

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "chauhanrohit716@gmail.com",
        pass: "aihdxunhyyjycqrv",
    },
});

clientRouter.post("/details", async (req, res) => {
    const {
        name,
        contact,
        email,
        address,
        pet_category,
        pet_age,
        pet_gender,
        breed,
        disease_suffering,
        veterinary_appointment
    } = req.body;

    try {

        const client = new ClientModel({
            name,
            contact,
            email,
            address,
            pet_category,
            pet_age,
            pet_gender,
            breed,
            disease_suffering,
            veterinary_appointment
        });

        await client.save();

        // Send email to the client

        const appointmentDate = new Date(veterinary_appointment);
        const formattedDate = appointmentDate.toLocaleDateString();
        const formattedDay = appointmentDate.toLocaleDateString('en-US', { weekday: 'long' });

        const clientEmailData = {
            from: "chauhanrohit716@gmail.com",
            to: email,
            subject: "Appointment Confirmation",
            text: "Thank you for booking the appointment.",
            html: `<p>Thank you for booking the appointment.</p>
         <p>Your appointment is scheduled on: ${formattedDay}, ${formattedDate}</p>`,
        };

        transporter.sendMail(clientEmailData, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });

        res.status(200).send({ msg: "Client registered successfully!" });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});


// client show the appointment


clientRouter.get("/", async (req, res) => {
    try {
        const user = await ClientModel.find()
        res.status(200).send({ msg: user })
    } catch (error) {
        res.status(400).send({ msg: error.message })

    }
})


// client update the appointment and sent the email 

clientRouter.patch("/update/:clientId", async (req, res) => {
    const clientId = req.params.clientId;
    const payload = req.body;

    try {
        await ClientModel.findByIdAndUpdate({ _id: clientId }, payload);

        // Fetch the updated client data
        const updatedClient = await ClientModel.findById(clientId);

        // Send email to the client
        const clientEmailData = {
            from: "chauhanrohit716@gmail.com",
            to: updatedClient.email,
            subject: "Appointment Update",
            text: "Your appointment has been updated.",
            html: `<p>Your appointment details have been updated.</p>
              <p>New appointment date: ${updatedClient.veterinary_appointment}</p>`,
        };

        transporter.sendMail(clientEmailData, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });

        res.status(200).send({ msg: "Client updated successfully!" });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
});



// client delete the appointment 

clientRouter.delete("/delete/:clientId", async (req, res) => {
    const clientId = req.params.clientId;

    try {
        await ClientModel.findByIdAndDelete({ _id: clientId })
        res.status(200).send({ "msg": "client deleted appointment Succesfuly!" })
    } catch (error) {
        res.status(400).send({ "msg": "error.message" })
    }
})




module.exports = {
    clientRouter
};
