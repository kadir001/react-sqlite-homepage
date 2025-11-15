const express = require("express");
const router = express.Router();
const { hash, compare } = require("../utils/hash");

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hashed = hash(password);

  req.db.run(
    "INSERT INTO users(username, hashed_password) VALUES(?, ?)",
    [username, hashed],
    function (err) {
      if (err) return res.status(400).json({ error: "Gebruiker bestaat al" });
      res.json({ success: true });
    }
  );
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  req.db.get(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, row) => {
      if (!row) return res.status(400).json({ error: "Onjuiste gegevens" });

      const ok = compare(password, row.hashed_password);
      if (!ok) return res.status(400).json({ error: "Wachtwoord klopt niet" });

      res.json({ success: true, username });
    }
  );
});

module.exports = router;
