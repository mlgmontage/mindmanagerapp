const { Router } = require("express");
const router = Router();
const ds = require("../../connection");
const topicSchema = require("../model/topicSchema");

router.get("/", async (req, res) => {
  const topics = await ds.find({});
  res.json(topics);
});

router.post("/create", async (req, res) => {
  const body = req.body;

  if (!topicSchema.validate(body).errors) {
    body.Date = new Date().toISOString();
    const created = await ds.insert(body);
    res.json(created);
  } else {
    res.status(400).json(topicSchema.validate(body).errors.message);
  }
});

module.exports = router;
