import type { ImageMetadata } from "$lib/types";
import { json } from "@sveltejs/kit";

let DUMMY_IMAGES: ImageMetadata[] = [
  {
    id: 1,
    title: "첫 번째 이미지",
    description: "AWS 연결 테스트용 더미 이미지입니다.",
    s3Key: "test/key/1",
    s3Url: "/assets/ejkstudio.png",
    uploadDate: new Date().toISOString(),
  },
  {
    id: 2,
    title: "두 번째 이미지",
    description: "SvelteKit API 테스트 중.",
    s3Key: "test/key/2",
    s3Url: "/assets/haesu.png",
    uploadDate: new Date(Date.now() - 86400000).toISOString(), // 하루 전
  },
];

export async function GET() {
  return json(DUMMY_IMAGES);
}

export async function POST({ request }) {
  // 클라이언트에서 보낸 JSON 데이터를 받습니다.
  const newImageMetadata = await request.json();

  // ⚠️ 실제 DB 연결 시: 여기서 RDS에 데이터를 저장합니다.
  // 현재는 더미 데이터에 추가합니다. (재시작 시 사라짐)
  const newId = DUMMY_IMAGES.length + 1;
  const newImage: ImageMetadata = {
    ...newImageMetadata,
    id: newId,
    uploadDate: new Date().toISOString(),
    // S3Key/URL은 나중에 S3 업로드 로직에서 결정됩니다.
    s3Key: `new/image/${newId}`,
    s3Url: `https://via.placeholder.com/300/00FF00/FFFFFF?text=New+Image+${newId}`,
  };

  DUMMY_IMAGES.push(newImage);

  // 성공 메시지와 함께 생성된 이미지를 반환합니다.
  return json(newImage, { status: 201 }); // 201 Created 응답
}
