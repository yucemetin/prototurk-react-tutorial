import { /*createElement, Fragment, */ useState } from "react";
import Button from "./components/Button"
import Tab from "./components/Tab"
// <Fragment></Fragment>  => <></>
import "./index.css"

function App() {
  /*
    const h1 = createElement('h1', null, 'METİN YÜCE')
  
    return createElement('main', {
      className: 'test',
      id: 'main'
    }, h1)
  */
  /*
function Button(props) {
  return <button>{props.abc}</button>
}
*/

  const [active, setActive] = useState(0)
  const onclickEvent = () => {
    setActive(active === 2 ? 0 : active + 1)
  }
  return (
    <>
      <button className="bg-red-500 text-white m-2 rounded-lg p-1"
        onClick={() => onclickEvent()}>
        aktif tabı değiştir
      </button>
      <div style={{ padding: "20px" }}>
        <Tab isActive={active} setActive={setActive}>
          <Tab.Panel title="Profil">1. panel</Tab.Panel>
          <Tab.Panel title="Hakkımda">2. panel</Tab.Panel>
          <Tab.Panel title="İletişim">3. panel</Tab.Panel>
        </Tab>
      </div>
      <div style={{ padding: "20px" }}>
        <Button text="Buton Örneği" />
        <Button text="Buton Örneği" variant="danger" />
        <Button text="Buton Örneği" variant="success" />
        <Button text="Buton Örneği" variant="warning" />
      </div>

      <label style={{ userSelect: "none" }} tabIndex="2" htmlFor="arama">Arama</label>
      <input type="text" id="arama" tabIndex="1" />
    </>
  )
}

export default App;
