import fastify from "fastify";
import { type } from "os";
// const data = require("./data.json")
import data from "./data.json"
// import * as data from "./data.json"

const server = fastify();

server.register(require('@fastify/cors'), { 
  origin: "*"
});

server.get("/names", async (request, reply) => {
  let x: { name: string; }[] = []

  for (let index = 0; index < data.length; index++) {
    const c = data[index].name.split('-').splice(1).join('-')
    const d = {name: c.charAt(0).toUpperCase() + c.slice(1)}
    x.push(d)
  }
  
  reply.code(200).send(x);
});
server.get("/data", async (request, reply) => {
  const { name } = request.query as { name: string};
  reply.code(200).send({ "data": getone(name)});
});

server.listen(process.env.PORT || 8080, "0.0.0.0", (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1); 
  }
  console.log(`Server listening at ${address}`);
});

const getone = (name: string)=>{
  let xmain: any = []
  for(let i: number = 0; i < data.length; i++){
    const a1: string = data[i].name.split('-').splice(1).join('-');
    const a2: string = a1.charAt(0).toUpperCase() + a1.slice(1);
    if(a2 === name){
     const x = data[i]
       xmain = x
    } 
  }
  return xmain

}


