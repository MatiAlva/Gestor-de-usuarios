import { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import UseForm from './components/UseForm'

function App() {
  const [usuarios, setUsuarios] = useState([])
  

  const submit = usuario =>{
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }

  return (
    <div style={{ marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
           <UseForm submit = { submit }/>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(usuarios =>
              <li key={usuarios.email}>{`${usuarios.name} ${usuarios.lastname}: ${usuarios.email} `}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
    );
}

export default App;
