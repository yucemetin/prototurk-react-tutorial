import "./App.css"
import { Title } from "./Component"
import "./index.css"
import Tailwind from "./Tailwind"

function App() {
  const className = process.env.NODE_ENV === "production" ? "info production" : "info development"
  return (
    <>
      <Title>DENEME</Title>
      <Title theme="dark">DENEME</Title>
      <Tailwind/>
      <h1>{process.env.REACT_APP_API_URL}</h1>
      <div className={className}>
        <h3>{process.env.NODE_ENV}</h3>
        <img src="/logo512.png" alt="" />
      </div>
    </>


  );
}

export default App;
