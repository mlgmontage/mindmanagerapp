import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} exact />
      <Route path="/:parent" component={Main} />
    </BrowserRouter>
  );
}

export default App;
