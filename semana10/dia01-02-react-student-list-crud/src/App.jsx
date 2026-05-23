import { useState } from "react"

const App = () => {
  const DEFAULT_STUDENTS = [
    {
      id: '1',
      name: 'Bulma',
      city: 'Chiclayo'
    },
    {
      id: '2',
      name: 'Goku',
      city: 'Trujillo'
    },
    {
      id: '2',
      name: 'Vegeta',
      city: 'Lima'
    }
  ]

  const [students, setStudents] = useState(DEFAULT_STUDENTS)

  return (
    <main>
      <h1>Student CRUD</h1>

      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
          />
        </label>

        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            required
          />
        </label>

        <div>
          <input
            type="submit"
            value="Save"
          />
          <input
            type="reset"
            value="Clear"
          />
        </div>
      </form>
    </main>
  )
}

export default App