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
          {/* Left Panel - Add Media */}
          <div className='col-span-1 md:col-span-2 p-4 border-r'>
            <div className='flex flex-col gap-2'>
              <p className='tracking-widest text-xs title-font text-primary font-medium'>Add Media</p>
              <MediaForm media={""} />
            </div>
            {/* GitHub Link */}
            <div className='mt-4 flex items-center gap-2'>
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" 
                  d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.34.724-4.043-1.61-4.043-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.204.083 1.838 1.237 1.838 1.237 1.07 1.832 2.809 1.302 3.495.997.108-.776.417-1.302.76-1.602-2.665-.3-5.466-1.33-5.466-5.93 0-1.31.465-2.382 1.236-3.222-.135-.303-.54-1.522.104-3.176 0 0 1.01-.323 3.3 1.23a11.527 11.527 0 0 1 3.003-.404c1.018.005 2.042.138 3.003.404 2.29-1.553 3.298-1.23 3.298-1.23.646 1.654.24 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.627-5.475 5.92.43.37.823 1.11.823 2.24v3.32c0 .323.188.693.8.576C20.565 22.093 24 17.594 24 12.297 24 5.67 18.627.297 12 .297Z">
                </path>
              </svg>
              <a href="https://github.com/LeoChen21/vercelibrary" target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline">
                View on GitHub
              </a>
            </div>
          </div>

          {/* Right Panel - Search & Media List */}
          <div className='col-span-1 md:col-span-6 p-4'>
            <div className='flex flex-col gap-8'>
              <div>
                <h2 className='title-font text-lg font-medium text-gray-800'>Search</h2>
                <p className='tracking-widest text-xs title-font text-primary font-medium'>Search by title or URL</p>
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