import {ApiResponse} from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
// Commented part is the harder job. And we have added the next for handling the error.
/*
const healthCheck = async (req,res,next) => {
    const user = await getUserFromDB();
try {
    res.status(200).json(new ApiResponse(200, {message:"Server is running"}));
} 
catch (error) {
    next(err);
}
}
*/

const healthCheck = asyncHandler(async (req,res) => {
    res.status(200).json(new ApiResponse(200, {message: "Server is running"}))
})

export { healthCheck };