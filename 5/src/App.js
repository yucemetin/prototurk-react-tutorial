import React, { useState } from "react"

function App() {

  const genders = ["Kadın", "Erkek"]

  const languages = [
    { key: 1, value: "Java" },
    { key: 2, value: "Go" },
    { key: 3, value: "ReactJs" },
    { key: 4, value: "NextJs" },
  ]

  const movieList = [
    { key: 1, value: "Batman" },
    { key: 2, value: "Iron Man" },
    { key: 3, value: "Avatar" },
    { key: 4, value: "Tenet" },
    { key: 5, value: "Recep İvedik" },
  ]

  const levels = [
    { key: 1, level: "beginner", value: "Beginner" },
    { key: 2, level: "jr_developer", value: "Jr.Developer" },
    { key: 3, level: "sr_developer", value: "Sr.Developer" }
  ]

  const [name, setName] = useState("")
  const [car, setCar] = useState("")
  const [gender, setGender] = useState("")
  const [language, setLanguage] = useState("")
  const [movies, setMovies] = useState([2, 4])
  const [rule, setRule] = useState(false)
  const [rules, setRules] = useState([
    { key: 1, value: "Sözleşme 1", checked: true },
    { key: 2, value: "Sözleşme 2", checked: false },
    { key: 3, value: "Sözleşme 3", checked: false }
  ])
  const [radio, setRadio] = useState("")

  const checkRule = (key, checked) => {
    setRules(rules => rules.map(rule => {
      if (rule.key === key) {
        rule.checked = checked
      }
      return rule
    }))
  }

  const allTrue = rules.every(rule => rule.checked)

  const selectedMovies = movies && movieList.filter(movie => movies.includes(movie.key))
  return (
    <>
      <button onClick={() => setName("metin")}>Değiştir</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {name}
      <hr />
      <select value={car} onChange={e => setCar(e.target.value)}>
        <option value="">Arabalar</option>
        <option value="Audi">Audi</option>
        <option value="Mercedes">Mercedes</option>
        <option value="BMW">BMW</option>
      </select><br />
      {car}
      <hr />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        {genders.map((gender, index) => (
          <option key={index} value={index}>{gender}</option>
        ))}
      </select><br />
      {genders[gender]}
      <hr />
      <select value={language} onChange={e => setLanguage(e.target.value)}>
        <option value="">Diller</option>
        {languages.map((language) => (
          <option key={language.key} value={language.key}>{language.value}</option>
        ))}
      </select>
      <pre>
        {JSON.stringify(languages.find(lang => lang.key === +language), null, 2)}
      </pre>
      <hr />
      <select value={movies} multiple={true} onChange={e => setMovies([...e.target.selectedOptions].map(m => +m.value))}>
        <option value="">Filmler</option>
        {
          movieList.map(mov => (
            <option key={mov.key} value={mov.key}>{mov.value}</option>
          ))
        }
      </select><br />
      <pre>{JSON.stringify(selectedMovies, null, 2)}</pre>
      <hr />
      <label>
        <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
        Sözleşmeyi kabul ediyorum.
      </label>
      <button disabled={!rule}>Devam Et</button>
      <hr />
      {rules.map(rule => (
        <label key={rule.key}>
          <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} />
          {rule.value}
        </label>
      ))}
      <pre>{JSON.stringify(rules, null, 2)}</pre>
      <button disabled={!allTrue}>Devam Et</button>
      <hr />

      {levels.map(l => (
        <label key={l.key}>
          <input type="radio" value={l.level} checked={l.level === radio} onChange={e => setRadio(e.target.value)} />
          {l.value}
        </label>
      ))} <br />
      {radio}

    </>
  );
}

export default App;
