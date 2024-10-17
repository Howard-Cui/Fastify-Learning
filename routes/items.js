const { getItem, getItems } = require("../controllers/ItemsController");

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
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: itemSchema,
    },
  },
  handler: getItem,
};

const itemRoutes = (fastify, _options, done) => {
  fastify.get("/items", getItemsOpts);

  fastify.get("/items/:id", getItemOpts);

  done();
};

module.exports = itemRoutes;
