<script lang="ts">
    // 💡 +page.ts에서 반환된 데이터(images)를 받기 위한 필수 구문
    export let data; 

    // data 객체에서 images 배열을 추출하여 사용합니다.
    const { images } = data;
</script>

<h2>갤러리 ({images.length}장)</h2>

<div class="gallery-grid">
    {#each images as img (img.id)}
        <div class="image-card">
            <a href={`/images/${img.id}`}>
                <img src={img.s3Url} alt={img.title} />
            </a>
            <div class="details">
                <h3>{img.title}</h3>
                <p class="date">업로드: {new Date(img.uploadDate).toLocaleDateString()}</p>
            </div>
        </div>
    {/each}
</div>

<style>
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        padding: 20px 0;
    }
    .image-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .image-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
    .details {
        padding: 10px;
    }
    .date {
        font-size: 0.8em;
        color: #666;
    }
</style>