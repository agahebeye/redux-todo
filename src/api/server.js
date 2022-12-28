import { createServer, Model, Factory } from "miragejs";

createServer({
  models: {
    todo: Model,
  },

  factories: {
    todo: Factory.extend({
      text(i) {
        return `Todo ${i}`;
      },
      done: false,
      color: false,
    }),
  },

  routes() {
    this.namespace = "api";

    this.get("/todos");
  },

  seeds(server) {
    server.createList("todo", 10);
  },
});
