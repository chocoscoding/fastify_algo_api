import fastify from "fastify";
const cors = require('fastify-cors');
// const data = require("./data.json")
import * as data from "./data.json"

const server = fastify();

server.register(cors, { origin: ['http://localhost:3000','https://algo4all.vercel.app/'] });


server.get("/", async (request, reply) => {
  reply.code(200).send({ data});
});

server.listen(process.env.PORT || 8080, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});


