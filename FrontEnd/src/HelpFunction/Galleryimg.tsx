import "../Home/Galleryimgh.css";
/*פונקציה לגליירת תמונות */


export function GalleryimgH(props: { HomeImgArr: { src: string, title: string }[] }) {
    return (
        <div>
            {props.HomeImgArr.map((curr, i) => (
                <img key={i} src={curr.src} alt={curr.title} />
            ))}
        </div>
    )
}
