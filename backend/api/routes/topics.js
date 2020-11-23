const { Router } = require("express");
const router = Router();
const ds = require("../../connection");
const topicSchema = require("../model/topicSchema");

router.get("/", async (req, res) => {
  const topics = await ds.find({});
  res.json(topics);
});

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const topics = await ds.find({ parent: _id });
  res.json(topics);
});

router.post("/create", async (req, res) => {
  const body = req.body;

  if (!topicSchema.validate(body).error) {
    body.Date = new Date().toISOString();
    const created = await ds.insert(body);
    res.json(created);
  } else {
    res.status(400).json(topicSchema.validate(body).error.message);
  }
});

module.exports = router;
