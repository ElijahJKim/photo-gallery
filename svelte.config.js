import adapter from "@sveltejs/adapter-auto"; // 1. 어댑터 임포트
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */ // 2. 타입도 kit으로 변경
export default {
  // Svelte 컴파일 설정 (기존 내용)
  preprocess: vitePreprocess(),

  kit: {
    // 3. SvelteKit 설정을 위한 객체
    adapter: adapter(), // 4. 어댑터 지정
  },
};
