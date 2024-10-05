import heroImg from '../images/hero-img.png'

export default function HeroImg() {
    return (
        <div className="hero-img-container">
            <img src={heroImg} className="hero-img" alt="Frame of Images" />
        </div>
    )
}