import Layout from "../Layout/Layout.jsx"
import { useState, useEffect } from 'react'

const Portfolio = ({ user }) => {
  
  const [ portfolio, setPorfolio ] = useState(null)

  useEffect(() => {
    fetch('/assets/portfolio.json')
      .then(response => response.json())
      .then(data => setPorfolio(data))
      .catch(error => console.error('Error cargando el JSON: ', error))
  }, [])

  return (
    <>
      <h1>Bienvenido {user} al Portfolio de Lucho</h1>

      

    </>

  )
}

export default Portfolio