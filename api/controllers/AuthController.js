const User = require("../models/User");
const crypto = require("crypto");

class AuthController {
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
      const hash = crypto.createHash("sha256").update(password).digest("hex");
      if (user.password !== hash) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
      const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
      const payload = Buffer.from(
        JSON.stringify({ id: user._id.toString(), iat: Math.floor(Date.now() / 1000) })
      ).toString("base64url");
      const signature = crypto
        .createHmac("sha256", process.env.JWT_SECRET || "secret")
        .update(`${header}.${payload}`)
        .digest("base64url");
      const token = `${header}.${payload}.${signature}`;
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: "Error en el servidor" });
    }
  }
}

module.exports = new AuthController();
