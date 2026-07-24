import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { CalendarDays, MapPin, MessageCircle, Stethoscope, Activity, UserRound, ChevronRight, Menu, X, GraduationCap, ShieldCheck } from "lucide-react";
import "./style.css";

const whatsappClinica = "https://wa.me/message/VQ5TYYTEYKVLA1";
const instagram = "https://www.instagram.com/drvitornleao";

const faq = [
  {
    q: "Quando devo procurar um ortopedista de joelho?",
    a: "Dor persistente, inchaço, estalos com dor, sensação de falseio, travamento ou limitação para caminhar, agachar ou praticar esporte são sinais de que vale a avaliação especializada.",
  },
  {
    q: "Preciso levar exames na primeira consulta?",
    a: "Se você já tiver exames de imagem recentes (raio-X, ultrassom ou ressonância), leve-os. Caso não tenha, a conduta é definida na consulta a partir da avaliação clínica.",
  },
  {
    q: "O atendimento é particular ou por convênio?",
    a: "O atendimento é exclusivamente particular, com consultas personalizadas e planos de acompanhamento individualizados, pensados para o melhor cuidado de cada paciente.",
  },
  {
    q: "Como funciona a ultrassonografia musculoesquelética?",
    a: "É um exame dinâmico, realizado no consultório quando indicado, para avaliar tendões, músculos, bursas e articulações em tempo real, ajudando no diagnóstico e no acompanhamento.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo-header.png" alt="Logo Dr. Vitor Negreiro Leão" className="logo-header" />
            <div className="brand-text">
              <strong>Dr. Vitor Negreiro Leão</strong>
              <span>Ortopedia • Joelho • @drvitornleao</span>
            </div>
          </div>

          <nav className="nav">
            <a href="#sobre">Sobre</a>
            <a href="#atuacao">Atuação</a>
            <a href="#locais">Atendimento</a>
            <a href="#faq">Dúvidas</a>
            <a href="#contato">Contato</a>
          </nav>

          <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-header-cta">Agende sua consulta</a>

          <button className="menu-toggle" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <a href="#sobre" onClick={closeMenu}>Sobre</a>
            <a href="#atuacao" onClick={closeMenu}>Atuação</a>
            <a href="#locais" onClick={closeMenu}>Atendimento</a>
            <a href="#faq" onClick={closeMenu}>Dúvidas</a>
            <a href="#contato" onClick={closeMenu}>Contato</a>
            <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={closeMenu}>Agende sua consulta</a>
          </div>
        )}
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">Ortopedia especializada</div>
              <h1>Tratamento especializado para dor no joelho, lesões esportivas e desgaste articular.</h1>
              <p>Ortopedista com foco em joelho, diagnóstico preciso e tratamento individualizado para retorno seguro às atividades.</p>

              <div className="actions">
                <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MessageCircle size={18} /> Agende sua consulta
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Ver conteúdo no Instagram
                </a>
              </div>

              <div className="hero-trust">
                <span><ShieldCheck size={16} /> CRM-GO 22572</span>
                <span><ShieldCheck size={16} /> TEOT 18877</span>
                <span><ShieldCheck size={16} /> RQE 16089</span>
              </div>
            </div>

            <div className="hero-photo-card">
              <img src="/dr-vitor.png" alt="Dr. Vitor Negreiro Leão, ortopedista" className="hero-photo" />
              <div className="hero-photo-caption">
                <strong>Dr. Vitor Negreiro Leão</strong>
                <span>Ortopedia • Joelho</span>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <div className="about-photo-wrap">
              <img src="/logo-footer.png" alt="Selo Dr. Vitor Negreiro Leão" className="about-photo about-seal" />
            </div>

            <div className="card">
              <p className="section-kicker">Sobre o médico</p>
              <h2>Sobre o Dr. Vitor</h2>

              <p>Médico ortopedista com fellowship em cirurgia do joelho e pós-graduação em ultrassonografia musculoesquelética.</p>
              <p>Atua no diagnóstico, tratamento e acompanhamento de dores e lesões musculoesqueléticas, com foco especial em joelho, lesões esportivas, condropatias, artrose e alterações meniscais.</p>
              <p>Atendimento com foco em diagnóstico preciso e condução individualizada, priorizando recuperação da função, alívio da dor e retorno seguro às atividades.</p>

              <div className="credentials">
                <p className="credentials-title"><GraduationCap size={18} /> Formação e títulos</p>
                <ul>
                  <li>Graduação em Medicina — Universidade Atenas, Paracatu-MG</li>
                  <li>Residência em Ortopedia e Traumatologia — Hospital Regional do Gama, DF</li>
                  <li><strong>Fellowship em Cirurgia do Joelho — Hospital HOME, Brasília-DF</strong> (FIFA Medical Centre of Excellence)</li>
                  <li>Pós-graduação em Ultrassonografia Musculoesquelética — CETRUS, São Paulo</li>
                  <li>Membro da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)</li>
                  <li>Membro da Sociedade Brasileira de Cirurgia do Joelho (SBCJ)</li>
                </ul>
              </div>

              <div className="info-grid">
                <div><span>CRM-GO</span><strong>22572</strong></div>
                <div><span>TEOT</span><strong>18877</strong></div>
                <div><span>RQE</span><strong>16089</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section id="atuacao" className="section dark-section">
          <div className="container">
            <p className="section-kicker gold">Áreas de atuação</p>
            <h2>Cuidado especializado para diferentes causas de dor e limitação funcional.</h2>

            <div className="service-grid">
              <div className="service-card">
                <Activity />
                <h3>Dor no joelho</h3>
                <p>Avaliação de dor no joelho, condropatia, artrose, sobrecarga articular, alterações meniscais e limitações funcionais.</p>
              </div>

              <div className="service-card">
                <Stethoscope />
                <h3>Lesões esportivas</h3>
                <p>Investigação e manejo de lesões ligamentares, meniscais, tendíneas e retorno progressivo às atividades.</p>
              </div>

              <div className="service-card">
                <UserRound />
                <h3>Ultrassonografia MSK</h3>
                <p>Exame dinâmico para avaliação de tendões, músculos, bursas, articulações e partes moles, quando indicado.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="locais" className="section">
          <div className="container">
            <p className="section-kicker">Atendimento</p>
            <h2>Locais de atendimento</h2>

            <div className="location-grid">
              <div className="card location-card">
                <MapPin className="icon-gold" />
                <h3>Clínica Nara Brito</h3>
                <p>Rua 19 de Julho, Qd 26, Lt 10, Casa 02, S/N, Setor Augusto José Valente, Posse-GO, 73900-000.</p>
                <p><strong>WhatsApp para agendamento:</strong> (62) 99818-0208</p>
                <div className="map-wrap">
                  <iframe
                    title="Mapa Clínica Nara Brito"
                    src="https://www.google.com/maps?q=-14.089316,-46.363125&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="link-action">
                  Agende sua consulta <ChevronRight size={16} />
                </a>
              </div>

              <div className="card location-card">
                <CalendarDays className="icon-gold" />
                <h3>Hospital CMO</h3>
                <p>Rua Nazário Ribeiro, Quadra 23, Lote 05, Setor Augusto José Valente I, Posse-GO, 73900-000.</p>
                <p><strong>Contato do Hospital CMO:</strong> (62) 99828-8727</p>
                <div className="map-wrap">
                  <iframe
                    title="Mapa Hospital CMO"
                    src="https://www.google.com/maps?q=Rua+Naz%C3%A1rio+Ribeiro+Quadra+23+Setor+Augusto+Jos%C3%A9+Valente+Posse+GO+73900-000&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2>Perguntas comuns antes da consulta</h2>

            <div className="faq-list">
              {faq.map((item, i) => (
                <details className="faq-item" key={i}>
                  <summary>{item.q}<ChevronRight size={18} /></summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="section-kicker gold">Agendamento</p>
              <h2>Dê o próximo passo para investigar sua dor com segurança.</h2>
              <p>Para agendamentos, entre em contato pelo WhatsApp da Clínica Nara Brito.</p>
            </div>

            <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <MessageCircle size={18} /> Agende sua consulta
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src="/logo-footer.png" alt="Logo Dr. Vitor Negreiro Leão" />
        <p>Instagram: <a href={instagram} target="_blank" rel="noopener noreferrer">@drvitornleao</a></p>
        <p>© {new Date().getFullYear()} Dr. Vitor Negreiro Leão. CRM-GO 22572 • CRM-DF 25086</p>
      </footer>

      <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Agende pelo WhatsApp">
        <MessageCircle size={26} />
        <span>Agende no WhatsApp</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
