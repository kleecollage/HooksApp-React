import { memo } from "react";

interface Props {
  subTitle: string;
  callMyAPI: (myValue: string) => void;
}

export const MySubTitle = memo(({subTitle, callMyAPI}: Props ) => {
  console.log('My subtitle re-render')

  return (
    <>
      <h6 className="text-2xl font-bold">{subTitle}</h6>
      <button
      className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer"
      onClick={ () => callMyAPI(subTitle)}>
        Call function
      </button>
    </>
  )
})