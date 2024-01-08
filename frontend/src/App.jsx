import Main from "./components/Main";
import {SpeedInsights} from '@vercel/speed-insights'
import './App.css';
import 'react-tooltip/dist/react-tooltip.css';

function App() {
  return (
    <>
      <Main />
      <SpeedInsights/>
    </>
  )
}

export default App
