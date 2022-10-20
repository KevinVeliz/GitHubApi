import React from 'react'
import { GithubUserRepos } from '../Element/Api';



export const Grid = () => {
    const repos = GithubUserRepos();
    return (
        <div className='text-3xl'> 
            <h1 className=''> PROYECTOS </h1>
        <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr className='text-sm'>
                    <th className='w-20 p-3 text-xl'>
                        No.
                    </th>
                    <th className='w-96 p-3 text-xl'>
                        Nombre
                    </th>
                    <th className='w-96 p-3 text-xl'>
                        URL
                    </th>
                </tr>
            </thead>

            <tbody>
                {repos.map((repositories,index) => (
                <tr className='txt-sm'>

                        <td className='p-2 text-xl whitespace-nowrap font-bold text-blue-500 '>
                            {index+1+'.'}
                        </td>
                        <td className='p-2 text-xl text-gray-700 whitespace-nowrap'>
                            {repositories.name}
                        </td>

                        <td className='p-2 text-xl text-gray-700 whitespace-nowrap '>
                        <a href={repositories.html_url} className='bg-green-200 rounded-xl bg-opacity-50 px-5 py-1'> GitHub </a>
                        </td>
                </tr>
))}
            </tbody>
        </table>


        </div>
    )
}
