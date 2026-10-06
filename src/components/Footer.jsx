import { infoContato } from '../data/infoContato.js';
import { links } from '../data/links.js';

export default function Footer() {
    return (
        <footer className="footer-site">
            <div className="container py-5">
                <div className="row g-4 justify-content-between">
                    
                    {/* Coluna 1: Sobre a Marca */}
                    <div className="col-lg-4 col-md-6">
                        <h1 className="footer-logo mb-3">Luis Buittons</h1>
                        <p className="footer-desc">
                            A elegância em cada detalhe. Redefinindo o conceito de sofisticação e estilo com peças exclusivas.
                        </p>
                        
                    </div>

                    {/* Coluna 2: Navegação Principal */}
                    <div className="col-lg-3 col-md-6">
                      <h5 className="footer-title">Navegação</h5>
                      <ul className="footer-links">
                        {links.map((link) => (
                          <li key={link.href}>
                              <a href={link.href}>
                                  {link.name}
                              </a>
                          </li> 
                        ))}
                      </ul>

                    </div>
                    {/* Coluna 3: Institucional / Ajuda */}
                    <div className="col-lg-5 col-md-6">
                      <h5 className="footer-title">Contato</h5>
                        {infoContato.map((info) => (
                            <p key={info.titulo} className="footer-desc">
                                <i className={`fas ${info.icone}`}></i> {info.texto}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Linha Divisória e Copyright */}
                <div className="footer-bottom text-center pt-4 mt-5">
                    <p className="mb-0">
                        &copy; {new Date().getFullYear()} Luis Buittons. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
