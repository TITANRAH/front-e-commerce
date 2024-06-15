import React from 'react'

interface Props {
    taste: string;
    origin: string;
}

function TasteOrigin(props: Props) {

    const {taste, origin} = props
  return (
   
    <div className="flex justify-between itmes-center gap-3">
    <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
      {taste}
    </p>
    <p className="px-2 py-1 text-white bg-yellow-900 rounded-full w-fit">
      {origin}
    </p>
  </div>
  )
}

export default TasteOrigin