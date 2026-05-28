import { useEffect, useState } from "react"

import { fetchStudents, createStudent, getStudentById } from "./services/students"

// useEffect, nos ayuda a controlar el ciclo de vida de un componente.
// Creación, actualización y eliminación DEL COMPONENTE.

const App = () => {
  const [students, setStudents] = useState([])
  const [contador, setContador] = useState(0)

  // useEffect(Función, dependencias)
  useEffect(() => {
    console.log('CICLO DE VIDA: CREACIÓN y ACTUALIZACIÓN')
  }, [contador]) // Se ejecuta el useEffect al cargar el conponente la primera vez

  useEffect(() => {
    console.log('LA PRIMERA VEZ')
    fetchStudents() // Devuelve una promesa
      .then(data => setStudents(data))
  }, []) // Este useEffect se ejecuta si o si la primera vez

  const [form, setForm] = useState({
    id: '',
    name: '',
    city: ''
  })

  const handleSave = async (event) => {
    event.preventDefault() // Evitamos que la página se actualice

    // isNew
    const newStudent = {
      name: form.name,
      city: form.city,
    }

    const response = await createStudent(newStudent)

    console.log(response)

    const dataStudents = await fetchStudents()

    setStudents(dataStudents)

    setForm({
      id: '',
      name: '',
      city: ''
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleRead = async (id) => {
    // TODO: Implementar el llamado al endpoint student para que actualice el formulario con los datos del estudiante con su id.

    const dataStudent = await getStudentById(id)

    setForm(dataStudent)
  }

  return (
    <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center text-slate-700 font-bold mb-4">Student CRUD</h1>

      <form
        className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg border"
        onSubmit={handleSave}
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
            required
            onChange={handleChange}
            value={form.name}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
            required
            onChange={handleChange}
            value={form.city}
          />
        </label>

        <div className="flex gap-4">
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center cursor-pointer"
            type="submit"
            value="Save"
          />
          <input
            className="bg-green-700 text-white hover:bg-green-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
            type="reset"
            value="Clear"
          />
        </div>
      </form>

      <pre>{JSON.stringify(form)}</pre>

      <h2 className="text-center text-slate-700 font-bold my-4">Student list</h2>

      <section className="mt-4 flex flex-col gap-2">
        <div
          className="flex justify-between items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg font-semibold"
        >
          <div className="text-left">Name</div>
          <div className="text-left">City</div>
          <div className="flex gap-2">Actions</div>
        </div>
        {students.map(student => {
          return (
            <div
              key={student.id}
              className="flex justify-between items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border"
            >
              <div className="text-left">{student.name}</div>
              <div className="text-left">{student.city}</div>
              <div className="flex gap-2">
                <button onClick={() => handleRead(student.id)}>✏</button>
                <button>❌</button>
              </div>
            </div>
          )
        })}
      </section>

      <button className="border p-4" onClick={() => setContador(contador + 1)}>+1: {contador}</button>
    </main>
  )
}

export default App