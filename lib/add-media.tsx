'use server'

import prisma from "./prisma"

export async function addMedia(eventData){
    try {
        const {title, url, type} = eventData
        const newMedia = await prisma.media.create({
            data: {
                title, url, type
            }
        })
        return newMedia
    } catch (error) {
        console.log("New Media Error " + error)
        
    }
}