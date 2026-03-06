import { MySubTitle } from "@/06-memos/ui/MySubTitle"
import { MyTitle } from "@/06-memos/ui/MyTitle"
import { useCallback, useState } from "react"

// No need to memo because no re-render happend out the function
// const handleAPICallOutside = (myValue: string) => {
//   console.log('Call to my API' + myValue);
// };

export const MemoHook = () => {
  const [title, setTitle] = useState('Hello')
  const [subTitle, setSubTitle] = useState('World')
  const handleAPICall = useCallback( () => {
    console.log('Call to my API - ', subTitle);
  }, [subTitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white"> Memo App </h1>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={handleAPICall} />

      <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={ () => setTitle('Hi, ' + new Date().getTime())} >
        Change title
      </button>

      <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={ () => setSubTitle('uwu')} >
        Change subtitle
      </button>
    </div>
  )
}
