import React from 'react'
import FiltersOrigin from './FiltersOrigin'

interface Props {
  setFilterOrigin: (origin: string) => void;
}

function FiltersControlsCategory(props:Props) {

  const {setFilterOrigin} = props
  return (
    <div className='sm:w-[350px] sm:mt-5'>
        <FiltersOrigin setFilterOrigin= {setFilterOrigin}/>
    </div>
  )
}

export default FiltersControlsCategory