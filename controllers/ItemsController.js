const items = require("../item");

const getItems = (_req, reply) => {
  reply.send(items);
};

const getItem = (req, reply) => {
  const { id } = req.params;
  reply.send(items.find((item) => item.id === id));
};

module.exports = {
  getItem,
  getItems,
};
