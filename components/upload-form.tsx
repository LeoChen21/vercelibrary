'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {yupResolver} from "@hookform/resolvers/yup"
import * as Yup from "yup"
import {Toast, Toaster, toast} from "react-hot-toast"
import { addMedia } from '@/lib/add-media'
import { updateMedia } from '@/lib/update-media'

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  url: Yup.string().url("Invalid URL").required("URL is required"),
  type: Yup.string().required("Type is required")
})

const MediaForm = ({media}) => {
  const {handleSubmit, control, reset, formState} = useForm({
    resolver: yupResolver(schema),
    defaultValues: media ? {title: media.title, url: media.url} : {}
  })

  const {errors, isSubmitting} = formState
  const onSubmit = async (data) => {
    try {
      if(media){
        await updateMedia({id: media.id, ...data});
        toast.success("Media Updated")
        window.location.reload()
      } else{
        await addMedia(data);
        toast.success("New media added")
        window.location.reload()
      }
      reset()
    } catch (error) {
        toast.error("Error submitting form" + error)
        console.log("Error " + error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}> 
        <div>
          <span>Title</span>
          <Controller
            name='title'
            control={control}
            render={({field}) => (
              <input
                {...field}
                className='w-full border rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none shadow-outline'
              />
            )}
          />
          {errors.title && <span className='text-red-600'>{errors.title.message}</span>}
          <span>URL</span>
          <Controller
            name='url'
            control={control}
            render={({field}) => (
              <input
                {...field} 
                className='w-full border rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none shadow-outline'
              />
            )}
          />
          {errors.url && <span className='text-red-600'>{errors.url.message}</span>}
          <span>Type</span>
          <Controller
            name='type'
            control={control}
            render={({field}) => (
              <input
                {...field} 
                className='w-full border rounded-md py-2 px-3 text-gray-800 leading-tight focus:outline-none shadow-outline'
              />
            )}
          />
          {errors.type && <span className='text-red-600'>{errors.type.message}</span>}
        </div>
            <button
            className={`mt-2 w-full bg-primary rounded-md py-2 px-3 text-white ${isSubmitting ? 'opacity-50 cursor-not-allowed': ""}`}
            disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : "Submit"}
            </button>
      </form>
      <Toaster position='top-center'/>
    </div>
  )
}

export default MediaForm