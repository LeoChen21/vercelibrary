import MediaForm from '@/components/upload-form'
import MediaList from '@/components/media-list'
import Pagination from '@/components/pagination'
import SearchBar from '@/components/search-bar'
import { getMediaPages } from '@/lib/get-media'
import React from 'react'

const HomePage = async ({searchParams}) => {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await getMediaPages(query)
  return (
    <section>
      <div className='mx-auto max-w-screen-lg border rounded-xl'>
        <div className='grid grid-cols-1 md:grid-cols-8 gap-4'>
          <div className='col-span-1 md:col-span-2 p-4 border-r'>
            <div className='flex flex-col gap-2'>
              <p className='tracking-widest text-xs title-font text-primary font-medium'>Add Media</p>
              <MediaForm media={""}/>
            </div>
          </div>
          <div className='col-span-1 md:col-span-6 p-4'>
            <div className='flex flex-col gap-8'>
              <div>
                <h2 className='title-font text-lg font-medium text-gray-800'>Search</h2>
                <p className='tracking-widest text-xs title-font text-primary font-medium'>Search by title or url</p>
                <SearchBar />
              </div>
              <div>
                <MediaList query={query} currentPage={currentPage} />
              </div>
              <div className='flex justify-center items-center'>
                <Pagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage