import { UserContextProvider } from "@/09-useContext/context/UserContext"
import { appRouter } from "@/09-useContext/router/app.router"
import { RouterProvider } from "react-router"

export const ProfessionalApp = () => {
  return (
    <UserContextProvider>
      <div className="bg-gradient">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  )
}
