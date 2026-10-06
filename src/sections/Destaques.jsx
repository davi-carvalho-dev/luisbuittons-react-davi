import {produtos} from "../data/produtos";

export default function Destaques() {
    return (
        <section className="destaque-section" id="colecao">
            <div className="container">
                <div className="section-heading">
                    <span className="sub-title">Seleção Especial</span>
                    <h2>Produtos em Destaque</h2>
                    <p>Uma seleção das nossas peças mais desejadas, das coleções masculina e feminina.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {produtos.map((produto) => (
                        <div className="col" key={produto.id}>
                            <div className="card h-100 border-0 product-card">
                                <img className="card-img-top"
                                    src={produto.imagem}
                                    alt={produto.nome}
                                />
                                <div className="card-body text-center d-flex flex-column">
                                    <span className="text-muted small mb-1 text-uppercase">
                                        {produto.categoria}
                                    </span>
                                    <h3 className="card-title fs-6">{produto.nome}</h3>
                                    <p className="fw-bold mb-3 mt-auto">{produto.preco}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 