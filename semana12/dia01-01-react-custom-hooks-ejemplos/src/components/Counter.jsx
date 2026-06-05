import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>Counter</h3>

      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <strong>{count}</strong>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default Counter


// const Counter = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <h3>Counter</h3>

//       <div>
//         <button onClick={() => setCount(count - 1)}>-</button>
//         <strong>{count}</strong>
//         <button onClick={() => setCount(count + 1)}>+</button>
//       </div>
//     </div>
//   )
// }

// export default Counter