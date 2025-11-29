export interface ImageMetadata {
  id: number; // DB Primary Key
  title: string; // 사진 제목 (사용자 입력)
  description?: string; // 사진 설명 (선택 사항)
  s3Key: string; // AWS S3에 저장된 파일의 고유 경로/이름
  s3Url: string; // 이미지를 볼 수 있는 공개 URL
  uploadDate: string; // 업로드 시각
}
