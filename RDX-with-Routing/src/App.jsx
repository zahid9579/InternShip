import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo/Todo";
import { Provider } from "react-redux";
import { store } from "./App/store";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
