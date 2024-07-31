import { useState } from 'react'
import { useUser } from '../../context/UserContext.jsx';
import Layout from '../../components/Layout/Layout.jsx';
import Portfolio from '../../components/Portfolio/Portfolio.jsx';


const Home = () => {

  const { user, updateUser } = useUser();
  
  const [name, setName] = useState('');

  const handleName = (e) => {
    e.preventDefault();
    updateUser(name);
  }
  
  const hadleChange = (e) => {
    setName(e.target.value);
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
            onChange={hadleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
     ) : (
      <Layout>
        <Portfolio user={user} />
      </Layout>
    )}
    </div>
  )
}

export default Home