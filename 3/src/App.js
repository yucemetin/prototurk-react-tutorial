import { forwardRef, useRef } from "react"

function Input(props, ref) {
  return <input type="text" ref={ref} {...props} />
}
Input = forwardRef(Input)

function App() {

  const inputRef = useRef()
  const onClickHandler = () => {
    inputRef.current.focus()
  }
  return (
    <div >
      <Input ref={inputRef} />
      <button onClick={() => onClickHandler()}>Focus</button>
    </div>
  );
}

export default App;
