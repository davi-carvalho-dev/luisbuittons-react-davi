
import { links } from '../data/links.js';

export default function Navbar(){
    return(
        <header className="header">
        <div className="header-grid">
            <span className="logo">
                <a href="#inicio">Luis Buittons</a>
            </span>
            <nav className="nav">
                <div className="nav-links">
                    <ul>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    
    )
}