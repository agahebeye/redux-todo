/* eslint-disable no-unused-vars */

import {
  createServer,
  Model,
  Factory,
  hasMany,
  RestSerializer,
} from "miragejs";

const IdSerializer = RestSerializer.extend({
  serializeIds: "always",
});

createServer({
  routes() {
    this.namespace = "api";
    this.timing = 2000;

    this.resource("todos");
    this.resource("lists");

    const server = this;

    this.post("/todos", function (schema, req) {
      const data = this.normalizedRequestAttrs();

      if (data.text === "error") {
        throw new Error("Could not save the todo!");
      }

      const result = server.create("todo", data);
      return result;
    });
  },
  models: {
    todo: Model.extend({}),
    list: Model.extend({
      todos: hasMany(),
    }),
  },
  factories: {
    todo: Factory.extend({
      id() {
        return Math.random().toString().substring(2, 9);
      },
      text(i) {
        return `todo #${i}`;
      },
      done() {
        return false;
      },
      color() {
        return "";
      },
    }),
  },
  serializers: {
    todo: IdSerializer,
    list: IdSerializer,
  },
  seeds(server) {
    server.createList("todo", 3);
  },
});
