// import logo from './logo.svg';
import './App.css';
import OrderScreen from "./components/OrderScreen";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <h2>Fast-food Ordering Application</h2>
            <OrderScreen></OrderScreen>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
