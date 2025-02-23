import MediaForm from '@/components/upload-form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import React from 'react'

const SingleMedia = async ({params}) => {
    const id = params.id
    const media = await prisma.media.findUnique({
        where: {
            id: id
        }
    })
    if(!media){
        redirect("/")
    }
  return (
    <div>
        <div className='mx-auto max-w-screen-md'>
            <MediaForm media={media} />
        </div>
    </div>
  )
}

export default SingleMedia