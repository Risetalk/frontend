import  jwt  from "jsonwebtoken";
import { serialize } from "cookie"

export default function loginHandler (req, res) { 
    try {
    const { email } = req?.body?.user;
    const token =  jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60  * 24 * 30,
        email,
    }, "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")

    const serialized = serialize("myTokenName", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 30,
        path: "/"
    }) 
    //
    res.setHeader("Set-Cookie", serialized);
    return res.json("login router")
    } catch (error) {
        return res.status(401).json({error: "Invalid"})
    }
    
}


