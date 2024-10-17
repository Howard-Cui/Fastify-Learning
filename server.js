const fastify = require("fastify")({
  logger: true,
});
const PORT = 5000;

fastify.register(require("./routes/items"));

(async () => {
  try {
    fastify.listen({
      port: PORT,
    });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
})();
