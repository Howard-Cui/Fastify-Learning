const items = require("../item");

// Item schema
const itemSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: itemSchema,
      },
    },
  },
};

const getItemOpts = {
  schema: {
    response: {
      200: itemSchema,
    },
  },
};

const itemRoutes = (fastify, _options, done) => {
  fastify.get("/items", getItemsOpts, (_req, reply) => {
    reply.send(items);
  });

  fastify.get("/items/:id", getItemOpts, (req, reply) => {
    const { id } = req.params;
    reply.send(items.find((item) => item.id === id));
  });

  done();
};

module.exports = itemRoutes;
