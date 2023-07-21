import React from 'react';

const Project = (props) => {
  return (
    <div className='flex flex-col bg-white rounded-lg overflow-hidden shadow-md'>
        <div className='w-full overflow-hidden'>
            <img src={props.project.img} alt="" className='w-full h-44' />
        </div>
        <div className='p-4 text-sm md:text-md'>
            <h2 className='text-lightblue md:text-lg uppercase font-semibold text-md py-2 border-b'>{props.project.name}</h2>
            <p className='font-roboto py-2'>{props.project.description}</p>
            <p className='font-roboto py-2'><span className=' font-bold'>Tools:</span>{' ' + props.project.tools}</p>
            <a href={props.project.link} className='text-lightblue hover:text-darkblue' >Link</a>
        </div>
    </div>
  )
}

export default Project