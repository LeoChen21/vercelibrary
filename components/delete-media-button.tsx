'use client'
import React from 'react';
import { FiTrash } from 'react-icons/fi';
import toast, {Toaster} from 'react-hot-toast';
import { deleteMedia } from '@/lib/delete-media';

const DeleteMedia = ({ media }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      await deleteMedia(media.id);
      toast.success('Contact deleted successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error deleting media:', error);
      toast.error('Failed to delete media');
   
    }
  };

  return (
    <div>
          <form onSubmit={handleDelete}>
      <input type="hidden" id="id" name="id" defaultValue={media.id} />
      <button className="bg-red-500 text-white p-2 rounded border border-black" type="submit">
        <FiTrash className="h-5 w-5" />
      </button>

    </form>

    </div>
  );
};

export default DeleteMedia;