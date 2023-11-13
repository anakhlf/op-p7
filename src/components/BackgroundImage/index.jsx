import Imagebackground from '../../assets/images/background_header.png'
import '../../styles/index.css'; 


function BackgroundImage() {
    return (
        <div className='background__image'>
            {<img src={Imagebackground} alt="Paysage" className='image-paysage' />}
            <p className='background-text'>Chez vous, partout et ailleurs</p>
        </div>
    )
}
export default BackgroundImage

// props balancer image de fonds en props