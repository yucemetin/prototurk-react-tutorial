import "./App.css"

function App() {
  const className = process.env.NODE_ENV === "production" ? "info production" : "info development"
  return (

    <div className={className}>
      <h3>{process.env.NODE_ENV}</h3>
      <img src="/logo512.png" alt="" />
    </div>

  );
}

export default App;
