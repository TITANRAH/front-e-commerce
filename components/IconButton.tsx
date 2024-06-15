import { cn } from '@/lib/utils';
import React from 'react'

interface Props{
onClick: () => void;
icon: React.ReactElement;
className?: string;
}

function IconButton(props: Props) {

    const {onClick, icon, className} = props
  return (
    <button 
     onClick={onClick}
     className={cn('rounded-full flex items-center bg-white shadow-md p-2 hover:scale-110 transition', className)}>
            {icon}
    </button>
  )
}

export default IconButton