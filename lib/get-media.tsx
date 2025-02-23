'use server'
import prisma from "./prisma";

const ITEMS_PER_PAGE = 5;

export const getMedias = async (query, currentPage) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const medias = await prisma.media.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    return medias;
  } catch (error) {
    console.error("Error fetching medias:", error);
    throw new Error("Failed to fetch media data");
  }
};

export const getMediaPages = async (query) => {
  try {
    const mediasCount = await prisma.media.count({
      where: {
        OR: [
          {
            title: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const totalPages = Math.ceil(Number(mediasCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error counting medias:", error);
    throw new Error("Failed to fetch media data");
  }
};