const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  req.db.all("SELECT * FROM posts ORDER BY id DESC", [], (err, rows) => {
    res.json(rows);
  });
});

router.post("/", (req, res) => {
  const { author, content } = req.body;

  req.db.run(
    "INSERT INTO posts(author, content, created_at) VALUES(?, ?, datetime('now'))",
    [author, content],
    function (err) {
      res.json({ id: this.lastID, author, content });
    }
  );
});

module.exports = router;
