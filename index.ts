import fastify from "fastify";
import { type } from "os";
// const data = require("./data.json")
import * as data from "./data.json"
// import * as data from "./data.json"

const server = fastify();

server.register(require('@fastify/cors'), { 
  origin: "*"
});

server.get("/names", async (request, reply) => {
  let x: { name: string; }[] = []
  // data.map(ele=>{
  //   const d = {name: ele.name}
  //   x.push(d)
  // })
  // console.log(x);
  
  // console.log(x);
  console.log(Array.isArray(data));
  
  reply.code(200).send(data);
});
server.get("/data", async (request, reply) => {
  reply.code(200).send({ "data": data});
});

server.listen(process.env.PORT || 8080, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1); 
  }
  console.log(`Server listening at ${address}`);
});


