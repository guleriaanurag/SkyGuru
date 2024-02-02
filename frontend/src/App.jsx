import MainWrapper from "./components/MainWrapper";
import './App.css';
import 'react-tooltip/dist/react-tooltip.css';
import { LoadingContextProvider } from "./store/LoadingContext";

function App() {
  return (
    <LoadingContextProvider>
      <MainWrapper />
    </LoadingContextProvider>
  )
}

export default App
