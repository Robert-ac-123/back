import { useState } from "react";


export default function App() {
  const [nombre, setNombre] = useState("")
  const [personaje, setPersonaje] = useState(null)

  async function buscarPersonaje() {
    const response = await fetch(`http://localhost:3000/personajes/${nombre.toLowerCase().trim()}`)
    const data = await response.json()
    setPersonaje(data)
  }

  return (
    <div>
      <h1>MIS PERSONAJES</h1>
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre((e.target.value))}  //parseINT convierte cualquier el string a número
      />

      <button onClick={buscarPersonaje}>Buscar</button>
      {
      personaje && personaje.name && (
        <div>
          <img 
          src={personaje.images?.mihoyo_icon || personaje.images?.icon} 
          alt={personaje.name} 
        />
        <h2>{personaje.name} - {personaje.title}</h2>
        <p>Vision/Gnosis: {personaje.elementText}</p>
        <p>Arma Asignada: {personaje.weaponText}</p>
        <p>Rareza: {personaje.rarity}</p>
        <p>Cumpleaños: {personaje.birthday}</p>
        <p>{personaje.description}</p>
      </div>
      )
      }

    </div>
  )
}