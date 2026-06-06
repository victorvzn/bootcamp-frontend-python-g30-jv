import { Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <div>
      <h1>LayoutBase</h1>

      <Outlet />
    </div>
  )
}

export default LayoutBase