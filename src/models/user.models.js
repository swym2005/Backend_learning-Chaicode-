// Designing the user Schema. DB mein kya kya store hoga woh hai yeh.

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
        // Yeh jo profile icon hai uske liye hai.
    avatar: {
        type: {
           url: String, 
           localPath: String, 
        },
        // default jo greyish avatar hota uska hai default block
        default:{   //What if the user does not provide anything to tab yeh placeholder shit kaam aayega
            url: `https://placehold.co/200x200`,
            localPath: ""
        }
    },
    username: {
        type: String,
        // business logic 
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"] //koi agar provide ni karta password, to ese array form me likha hai to error msg humne jo diya hai woh print hoga.
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: Date
    },
    emailVerificationToken: {
        type: String
    },
    emailVerificationExpiry: {
        type: Date 
    }
},{
    timestamps: true,
},);


export const User = mongoose.model("User", userSchema);