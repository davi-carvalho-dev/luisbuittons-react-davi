import {beneficios} from '../data/beneficios.js';

export default function Beneficios() {
    return (
        <section className="sub-bar py-3" id="beneficios">
            <div className="container text-center">
                <div className="row g-3">
                    {beneficios.map((beneficio) => (
                        <div className="col-md-4" key={beneficio.texto}>
                            <p className="mb-0 text-uppercase small tracking-wide">
                                <i className={`fa-solid ${beneficio.icone} me-2`}></i>
                                {beneficio.texto}
                            </p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
}