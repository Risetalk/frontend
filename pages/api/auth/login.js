import { serialize } from "cookie";

export default function loginHandler(req, res) {
  try {
    const token = req.body;
    const obj = Object.keys(token)[0]
    const serialized = serialize("myTokenName", obj, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    return res.json("login router");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}