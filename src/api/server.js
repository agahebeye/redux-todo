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
    //this.timing = 2000

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
      id(i) {
        return Number(i);
      },
      text(i) {
        return `todo #${i}`;
      },
      completed() {
        return false;
      },
      color() {
        return "";
      },
    }),
  },
  serializers: {
    todo: IdSerializer.extend({
      serialize(object, request) {
        const numerifyId = (todo) => {
          todo.id = Number(todo.id);
        };
        let json = IdSerializer.prototype.serialize.apply(this, arguments);

        if (json.todo) {
          numerifyId(json.todo);
        } else if (json.todos) {
          json.todos.forEach(numerifyId);
        }

        return json;
      },
    }),
    list: IdSerializer,
  },
  seeds(server) {
    // server.createList("todo", 5);
  },
});
