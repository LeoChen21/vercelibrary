'use server'

import prisma from "./prisma"

export async function updateMedia(eventData){
    try {
        const {id, title, url, type} = eventData
        const adjMedia = await prisma.media.update({
            where:{
                id: id
            },
            data: {
                title, url, type          
            }
        })
        return adjMedia
    } catch (error) {
        console.log("Update Media Error " + error)
        throw new Error("Error Updating " + error)
        
    }
}