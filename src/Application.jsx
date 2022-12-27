import { Header } from "./components/Header";
import { TodoList } from "./components/todos/TodoList";
import { Footer } from "./components/Footer";

export function Application() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux todos</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}
