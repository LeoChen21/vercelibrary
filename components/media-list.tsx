import React from 'react'

import { getMedias } from '@/lib/get-media'
import Link from 'next/link'
import DeleteMedia from './delete-media-button'


const MediaList = async ({query, currentPage}) => {
  const medias = await getMedias(query, currentPage)
  return (
    <table className="w-full text-sm text-left text-gray-500">
    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
      <tr>
        <th className="py-3 px-6">Title</th>
        <th className="py-3 px-6">URL</th>
        <th className="py-3 px-6">Type</th>
        <th className="py-3 px-6 text-center">Actions</th>
      </tr>
    </thead>
    <tbody>
    {medias.map((media, index) => (
          <tr key={media.id} className="bg-white border-b">
            <td className="py-3 px-6">{media.title}</td>
            <td className="py-3 px-6">
              <a href={media.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {media.url}
              </a>
            </td>
            <td className="py-3 px-6">{media.type}</td>
            <td className="flex items-center justify-center gap-1 py-3">  
             
              <Link className='cursor-pointer' href={`/${media.id}`}>Update</Link>
             <DeleteMedia media={media}/>
            </td>
          </tr>
        ))}
    </tbody>
    </table>
  )
}

export default MediaList