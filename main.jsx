import React from "react";
import { createRoot } from "react-dom/client";
import { CalendarDays, MapPin, MessageCircle, Stethoscope, Activity, UserRound, ChevronRight } from "lucide-react";
import "./style.css";

const whatsappClinica = "https://wa.me/message/VQ5TYYTEYKVLA1";
const instagram = "https://www.instagram.com/drvitornleao";

function App() {
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
            <a href="#contato">Contato</a>
          </nav>

          <a href={whatsappClinica} className="btn btn-primary">Agendar consulta</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">Ortopedia especializada</div>
              <h1>Tratamento individualizado para dor no joelho, lesões esportivas e saúde musculoesquelética.</h1>
              <p>
                Médico ortopedista com formação em cirurgia do joelho e pós-graduado em ultrassonografia musculoesquelética. Atua com foco no tratamento conservador e cirúrgico de lesões articulares, utilizando a ultrassonografia musculoesquelética como ferramenta complementar de diagnóstico e acompanhamento clínico.
              </p>
              <div className="actions">
                <a href={whatsappClinica} className="btn btn-primary">
                  <MessageCircle size={18} /> Agendar pelo WhatsApp
                </a>
                <a href={instagram} className="btn btn-secondary">
                  Instagram
                </a>
              </div>
            </div>

            <div className="hero-photo-card">
              <img src="/logo-footer.png" alt="Logo Dr. Vitor Negreiro Leão" className="hero-photo" />
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <div className="container about-grid">
            <div className="about-photo-wrap">
              <img src="/dr-vitor.png" alt="Dr. Vitor Negreiro Leão" className="about-photo" />
            </div>
            <div className="card">
              <p className="section-kicker">Sobre o médico</p>
              <h2>Sobre o Dr. Vitor</h2>
              <p>Médico ortopedista com formação em cirurgia do joelho e pós-graduado em ultrassonografia musculoesquelética.</p>
              <p>Atua com foco no tratamento conservador e cirúrgico de lesões articulares, com ênfase em dor no joelho, lesões esportivas e desgaste articular.</p>
              <p>Utiliza a ultrassonografia musculoesquelética como ferramenta complementar para diagnóstico mais preciso e acompanhamento clínico mais eficiente.</p>
              <p>Seu objetivo é oferecer um tratamento individualizado, baseado na causa da dor e nas necessidades de cada paciente, buscando redução da dor, melhora da função e retorno seguro às atividades do dia a dia e esportivas.</p>

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
                <p>Avaliação de condropatia, artrose, dor anterior, sobrecarga articular e limitações funcionais.</p>
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
                <p><strong>WhatsApp:</strong> (62) 99818-0208</p>
                <a href={whatsappClinica} className="link-action">
                  Agendar na Clínica <ChevronRight size={16} />
                </a>
              </div>

              <div className="card location-card">
                <CalendarDays className="icon-gold" />
                <h3>Hospital CMO</h3>
                <p>Rua Nazário Ribeiro, Quadra 23, Lote 05, Setor Augusto José Valente I, Posse-GO, 73900-000.</p>
                <p><strong>Contato do Hospital CMO:</strong> (62) 99828-8727</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="section-kicker gold">Agendamento</p>
              <h2>Dê o próximo passo para investigar sua dor com segurança.</h2>
              <p>Entre em contato para verificar disponibilidade de agenda e escolher o melhor local de atendimento.</p>
            </div>
            <a href={whatsappClinica} className="btn btn-light">
              <MessageCircle size={18} /> Agendar na Clínica
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <img src="/logo-footer.png" alt="Logo Dr. Vitor Negreiro Leão" />
        <p>Instagram: <a href={instagram}>@drvitornleao</a></p>
        <p>© {new Date().getFullYear()} Dr. Vitor Negreiro Leão. CRM-GO 22572 • CRM-DF 25086</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
