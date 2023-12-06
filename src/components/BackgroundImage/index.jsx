import '../../styles/index.css'; 

function BackgroundImage({ imageUrl, altText, text }) {
    return (
        <section className='background__image'>
            <img src={imageUrl} alt={altText || "Paysage"} className='image-paysage' />
            {text && <p className='background-text'>{text}</p>}
        </section>
    )
}
export default BackgroundImage
