import '../../styles/index.css'; 

function BackgroundImage({ imageUrl, altText, text }) {
    return (
        <div className='background__image'>
            <img src={imageUrl} alt={altText || "Paysage"} className='image-paysage' />
            {text && <p className='background-text'>{text}</p>}
        </div>
    )
}
export default BackgroundImage
