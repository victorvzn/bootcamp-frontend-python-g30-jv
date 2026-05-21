import './Card.css'

function Card() {
  return (
    <div className="card" style={{ backgroundColor: 'yellow', padding: '4px' }}>
      <h1 className="title">Hola React!</h1>

      <p className="description">
        Estoy aprendiendo estilos en React
      </p>

      <button className="button">
        OK
      </button>
    </div>
  )
}

const App = () => {
  return (
    <Card />
  )
}

export default App