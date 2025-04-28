import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/apiError.js";


const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, username, password } = req.body;
    console.log("email:", email);

    if(
        [fullname, email, username, password].some((field) => 
        field?.trim() === "")
    )
    {
        throw new ApiError("Please fill all fields", 400);
    }
    const existedUser = User.findOne({
        $or: [{ email }, { username }],
        
    })
    if(existedUser) {
        throw new ApiError("Email or username already exists", 400);
    }
});

export { registerUser, };  