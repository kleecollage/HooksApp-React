import { appRouter } from "@/09-useContext/router/app.router"
import { RouterProvider } from "react-router"

export const ProfessionalApp = () => {
  return (
    <div className="bg-gradient">
      <RouterProvider router={appRouter} />
    </div>
  )
}
