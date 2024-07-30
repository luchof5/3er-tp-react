import { useState } from 'react'
import { useUser } from '../../context/UserContext.jsx';
import Layout from '../../components/Layout/Layout.jsx'


const Home = () => {

  const { user, updateUser } = useUser();
  
  const [name, setName] = useState('');

  const handleName = (e) => {
    e.preventDefault();
    updateUser(name);
  }

  return (
    <div>
      {!user ? (
        <form onSubmit={handleName}>
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
          <button type="submit">Enviar</button>
        </form>
     ) : (
      <Layout>
        <h1>{user}</h1> 
      </Layout>
    )}
    </div>
  )
}

export default Home