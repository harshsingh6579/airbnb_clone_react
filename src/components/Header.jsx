import logo from '../images/logo.png'

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="logo-img" alt="Logo" />
        </header>
    )
}