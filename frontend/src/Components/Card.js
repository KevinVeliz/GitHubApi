import React from 'react'
import { GithubUser } from '../Element/Api';

export const Card = () => {

  const user = GithubUser();

  return (
    <div className="mb-10">
        <div className="flex flex-row">
            <div className='basis-1/2'>
            <img src={user.avatar_url} alt="Profile" className="shadow-xl rounded-lg"/>
            </div>
            <div className='w-32 ml-5 mt-10'>
            <h1 className='text-2xl text-blue-500'>{user.name}</h1>
            <p className='text-lg mt-2' > {user.bio}</p>
            </div>

        </div>
    </div>
  )
}
