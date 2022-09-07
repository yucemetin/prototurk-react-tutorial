import { createElement, Fragment } from "react";
// <Fragment></Fragment>  => <></>
import "./main.scss"

function App() {
  /*
    const h1 = createElement('h1', null, 'METİN YÜCE')
  
    return createElement('main', {
      className: 'test',
      id: 'main'
    }, h1)
  */

  function Button(props) {
    return <button>{props.abc}</button>
  }

  return (
    <>
      <label style={{ userSelect: "none" }} tabIndex="2" htmlFor="arama">Arama</label>
      <input type="text" id="arama" tabIndex="1" />
      <Button abc="deneme" />
    </>
  )
}

export default App;
