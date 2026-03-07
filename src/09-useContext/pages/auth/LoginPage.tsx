import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({userId});

    const result = login(+userId);
    console.log(result);

    if (!result) {
      toast.error('User not found');
      return;
    }

    navigation('/profile');
  }

  return (
    <div className="flex flex-col item-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />

      <form
      className="flex flex-col gap-2 my-10"
      onSubmit={ (event) => handleSubmit(event)}
      >
        <input
        type="number"
        placeholder="ID user"
        value={userId}
        onChange={ (event) => setUserId(event.target.value) }/>
        <Button type='submit'>Login</Button>
      </form>

      <Link to={'/about'}>
        <Button variant='ghost'>Back to home page</Button>
      </Link>

    </div>
  )
}
