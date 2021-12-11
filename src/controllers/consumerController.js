const consumerService = require('../services/consumerService');

async function store(req, res) {
  try {
    const consumer = await consumerService.store(req.body);
    if (consumer.error) return res.status(consumer.code).json({ message: consumer.error });
    return res.status(201).json(consumer);
  } catch {
    return null;
  }
}

async function index(_req, res) {
  try {
    const consumers = await consumerService.index();
    return res.status(200).json(consumers);
  } catch {
    return null;
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const consumers = await consumerService.show(id);
    if (consumers.error) return res.status(consumers.code).json({ message: consumers.error })
    return res.status(200).json(consumers);
  } catch {
    return null;
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const consumer = await consumerService.update(id, req.body);
    if (consumer.error) return res.status(consumer.code).json({ message: consumer.error });
    return res.status(200).json(consumer);
  } catch {
    return null;
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const consumers = await consumerService.remove(id);
    if (consumers.error) return res.status(consumers.code).json({ message: consumers.error })
    return res.status(204).json(consumers);
  } catch {
    return null;
  }
}

module.exports = {
  store,
  index,
  show,
  update,
  remove,
}