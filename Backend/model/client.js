const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^[0-9]{10}$/.test(v);
                },
                message: (props) => `${props.value} is not a valid contact number!`,
            },
        },

        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        pet_category: {
            type: String,
            enum: ["cat", "dog", "horse", "fish", "rabbit"],
            required: true,
        },
        pet_age: {
            type: Number,
            required: true,
        },
        pet_gender: {
            type: String,
            enum: ["male", "female", "other"],
            required: true,
        },
        breed: {
            type: String,
            required: true,
        },
        disease_suffering: {
            type: String,
            required: true,
        },
        veterinary_appointment: {
            type: Date,
            required: true,
        },
    },
    {
        versionKey: false,
    }
);

const ClientModel = mongoose.model("Client", clientSchema);

module.exports = {
    ClientModel,
};
