export function Carrusel() {

    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-f26c5.appspot.com/o/nir3.webp?alt=media&token=a3af6a49-dcd0-4113-9d30-aa8ad7642e8a " height="700"  className="w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-f26c5.appspot.com/o/nir2.jpg?alt=media&token=1a52657b-a68f-4875-a9f4-b5b60bdedaac" height="700" className="w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotify-f26c5.appspot.com/o/nir1.jpg?alt=media&token=05ac8e26-18ae-47ed-ad35-479b5ea27020" height="700"  className="w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}