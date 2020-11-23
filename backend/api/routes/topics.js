const { Router } = require("express");
const router = Router();
const ds = require("../../connection");

router.get("/", async (req, res) => {
  const topics = await ds.find({});
  res.json(topics);
});

module.exports = router;
