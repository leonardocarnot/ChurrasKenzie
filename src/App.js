import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from "./Routes";
import { GlobalStyle } from "./Styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <Routes />
    </div>
  );
}

export default App;
