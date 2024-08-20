import { Router } from "express";
import zod from "zod";

export const userRouter = Router();

const signupSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    name: zod.string().optional(),
})

const signinSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})

userRouter.post("/signup", (req, res) => {
    const success = signupSchema.safeParse(req.body);
    if (!success) {
        res.status(400).json({
            message: "Invalid Inputs"
        })
    }

    const { email, password, name } = req.body;
    

})

userRouter.post("signin", (req, res) => {

})