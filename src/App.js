import Home from "./components/Home";
import Main from "./components/Main";
import { Provider } from "react-redux";
import Store from "./components/Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <div className="bg-gray-50 h-full md:h-screen">
        <Home />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
