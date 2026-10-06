import { useState } from 'react'
import { infoContato } from '../data/infoContato'

export default function Contato() {
  // Guarda o texto da mensagem para o contador de caracteres
  const [mensagem, setMensagem] = useState('')

  // Impede o recarregamento da página e confirma o envio
  function enviarFormulario(e) {
    e.preventDefault()
    alert('Mensagem enviada! Retornaremos em até 7 dias úteis.')
    e.target.reset()
    setMensagem('')
  }

  return (
    <section id="contato">
      {/* Banner da página de contato: o H1 original virou H2 */}
      <div className="contato-hero">
        <span className="sub-title">Fale Conosco</span>
        <h2>Estamos aqui para atender você</h2>
        <p>Dúvidas, sugestões ou pedidos especiais: nossa equipe responde com o mesmo cuidado de cada peça.</p>
      </div>

      <div className="contato-section">
        <div className="container">
          <div className="row g-5">

            {/* Informações: mesmo array usado no Footer */}
            <div className="col-lg-5">
              <div className="lista-informacoes">
                {infoContato.map((info) => (
                  <div className="item-informacao mostrar" key={info.titulo}>
                    <i className={`fa-solid ${info.icone}`}></i>
                    <div>
                      <h3>{info.titulo}</h3>
                      <p>{info.texto}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mapa-contato mostrar">
                <iframe
                  src="https://www.google.com/maps?q=Rio%20de%20Janeiro%20Centro&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da loja"
                ></iframe>
              </div>
            </div>

            {/* Formulário: vira a chamada final da Landing */}
            <div className="col-lg-7">
              <div className="cartao-formulario">
                <h3>Envie sua mensagem</h3>
                <p className="texto-boas-vindas">Retornamos em até 7 dias úteis.</p>

                <form onSubmit={enviarFormulario}>
                  <div className="row g-3">
                    <div className="col-md-6 campo">
                      <label htmlFor="campo-nome" className="form-label">Nome</label>
                      <input type="text" className="form-control" id="campo-nome" placeholder="Seu nome" required />
                    </div>

                    <div className="col-md-6 campo">
                      <label htmlFor="campo-email" className="form-label">E-mail</label>
                      <input type="email" className="form-control" id="campo-email" placeholder="seuemail@exemplo.com" required />
                    </div>

                    <div className="col-12 campo">
                      <label htmlFor="campo-assunto" className="form-label">Assunto</label>
                      <select className="form-select" id="campo-assunto" defaultValue="" required>
                        <option value="" disabled>Selecione um assunto</option>
                        <option value="duvida">Dúvida sobre produto</option>
                        <option value="pedido">Acompanhamento de pedido</option>
                        <option value="troca">Troca ou devolução</option>
                        <option value="outro">Outro assunto</option>
                      </select>
                    </div>

                    <div className="col-12 campo">
                      <label htmlFor="campo-mensagem" className="form-label">Mensagem</label>
                      <textarea
                        className="form-control"
                        id="campo-mensagem"
                        rows={5}
                        maxLength={500}
                        placeholder="Escreva sua mensagem..."
                        required
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                      ></textarea>
                      {/* Atualiza sozinho a cada letra digitada */}
                      <div className="contador-caracteres">{mensagem.length}/500</div>
                    </div>
                  </div>

                  <button type="submit" className="botao-enviar">
                    Enviar mensagem <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}