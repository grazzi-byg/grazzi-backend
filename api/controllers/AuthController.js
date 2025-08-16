const AdminUser = require("../models/AdminUser");
const CryptoJS = require("crypto-js");

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await AdminUser.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const hash = CryptoJS.SHA256(password).toString();
      if (user.password !== hash) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = base64url(
        JSON.stringify({
          id: user._id.toString(),
          role: user.role,
          iat: Math.floor(Date.now() / 1000),
        })
      );
      const signature = CryptoJS.HmacSHA256(
        `${header}.${payload}`,
        process.env.JWT_SECRET || "secret"
      )
        .toString(CryptoJS.enc.Base64)
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
      const token = `${header}.${payload}.${signature}`;
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  }
}

function base64url(str) {
  return Buffer.from(str)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

module.exports = new AuthController();
