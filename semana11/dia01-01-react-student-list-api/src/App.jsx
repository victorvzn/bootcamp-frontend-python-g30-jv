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
  const [form, setForm] = useState({
    id: '',
    name: '',
    city: ''
  })

  const handleSave = (event) => {
    event.preventDefault() // Evitamos que la página se actualice

    // isNew
    const newStudent = {
      name: form.name,
      city: form.city,
      id: crypto.randomUUID()
    }

    const updatedStudens = [...students, newStudent]

    setStudents(updatedStudens)

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

  return (
    <main class="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-3">
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
            class="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center cursor-pointer"
            type="submit"
            value="Save"
          />
          <input
            class="bg-green-700 text-white hover:bg-green-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
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
                <button>✏</button>
                <button>❌</button>
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App