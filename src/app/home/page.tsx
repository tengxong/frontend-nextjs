import FunctionComponent from '@/components/FunctionComponent'
import React from 'react'

export default function HomeView() {
  return <div className='text-pretty text-red-500 bg-fuchsia-500'>
    <FunctionComponent massage="this is the home page" />
  </div>
}
