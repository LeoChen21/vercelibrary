'use server'
import prisma from "./prisma"
export async function deleteMedia(eventData){
    try {
        const id = eventData
        const deletemedia = await prisma.media.delete({
            where: {
                id: id
            }
        })
        return deletemedia
    } catch (error) {
        console.log("Error deleting.. " + error)
    }
}