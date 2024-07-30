import { useState } from 'react'
import { useUser } from '../../context/UserContext.jsx';
import Layout from '../../components/Layout/Layout.jsx'


const Home = () => {

  const { name, setName } = useUser();


  return (
    <div>
      {!name ? (
        <form >
          <label htmlFor="name">Ingrese su nombre para poder ingresar</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </form>
     ) : (
      <Layout>
        <h1>{name}</h1> 
      </Layout>
    )}
    </div>
  )
}

export default Home