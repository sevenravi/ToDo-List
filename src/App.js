import "./App.css";
import Header from "./components/header";
import { Todos } from "./components/todos";
import { AddTodo } from "./components/AddTodo";
import Footer from "./components/footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import About from "./about";

function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i'm on delete", todo);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("i'm adding this todo", title, desc);
    let SNo;
    if (todos.length === 0) {
      SNo = 0;
    } else {
      SNo = todos[todos.length - 1].SNo + 1;
    }

    const mytodo = {
      SNo: SNo,
      title: title,
      desc: desc,
    };
    settodos([...todos, mytodo]);
    console.log(mytodo);
  };

  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My todo List" searchBar={false} />

          <Switch>
             <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}>
        </Route>

          <Route exact path="/about">
            <About />
          </Route>
            </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
