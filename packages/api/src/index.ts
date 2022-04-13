import { eventDispatcher } from "@monorepo/core";

import fastify from "fastify";

const server = fastify();

server.get("/ping", () => {
  eventDispatcher("pingCalled");

  return Promise.resolve("pong\n");
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
