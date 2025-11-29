import type { ImageMetadata } from "$lib/types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const response = await fetch("/api/images");

  if (!response.ok) {
    throw error(500, "이미지 목록을 불러오는데 실패했습니다");
  }

  const images: ImageMetadata[] = await response.json();

  return {
    images,
  };
};
