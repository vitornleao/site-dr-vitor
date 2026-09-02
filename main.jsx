import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { CalendarDays, MapPin, MessageCircle, Stethoscope, Activity, ChevronRight, Menu, X, GraduationCap, ShieldCheck, Syringe, Target, HeartPulse, Waves } from "lucide-react";
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
  {
    q: "O que é uma infiltração guiada por ultrassom?",
    a: "É a aplicação de medicamento na articulação ou ao redor de tendões e bursas com o auxílio do ultrassom, que permite visualizar a agulha e a estrutura em tempo real, aumentando a precisão do procedimento.",
  },
  {
    q: "Quando a infiltração é indicada?",
    a: "A indicação é definida após avaliação clínica e de imagem, de forma individualizada. Costuma ser considerada em quadros como artrose, tendinopatias e bursites, quando as medidas iniciais não são suficientes.",
  },
  {
    q: "Como é o procedimento? Preciso de preparo ou repouso?",
    a: "É realizado no consultório, com anestesia local quando necessário, e costuma ser rápido. As orientações de preparo e de cuidados após o procedimento são passadas na consulta, conforme cada caso.",
  },
  {
    q: "O atendimento é só para joelho?",
    a: "O foco é o joelho, mas os procedimentos também são realizados em outras articulações, conforme avaliação.",
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
            <a href="#dor">Dor</a>
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
            <a href="#dor" onClick={closeMenu}>Dor</a>
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
              <div className="badge">Ortopedia • Joelho • Dor</div>
              <h1>Tratamento especializado para dor no joelho, lesões esportivas e desgaste articular.</h1>
              <p>Ortopedista com foco em joelho, diagnóstico preciso e tratamento individualizado — incluindo tratamento conservador da dor e infiltrações guiadas por ultrassom, no joelho e em outras articulações, quando indicadas.</p>

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
                <HeartPulse />
                <h3>Tratamento conservador da dor</h3>
                <p>Abordagem que prioriza opções não cirúrgicas — medicação, reabilitação, ajuste de carga e procedimentos guiados quando indicados — com acompanhamento individualizado.</p>
              </div>

              <div className="service-card">
                <Syringe />
                <h3>Infiltrações guiadas por ultrassom</h3>
                <p>Corticoide, ácido hialurônico, ortobiológicos e bloqueios aplicados com guia de imagem em tempo real, no joelho e em outras articulações.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="dor" className="section">
          <div className="container">
            <p className="section-kicker">Tratamento conservador da dor</p>
            <h2>Tratar a dor com precisão, priorizando o caminho conservador.</h2>
            <p className="dor-intro">A conduta começa pela avaliação clínica e pelo ultrassom musculoesquelético. A partir do diagnóstico, são consideradas as opções conservadoras — medicação, reabilitação e ajuste de carga — e, quando indicado, procedimentos guiados por imagem, sempre com acompanhamento. O foco é o joelho, mas os procedimentos também são realizados em outras articulações, conforme avaliação.</p>

            <div className="steps">
              <div className="step"><span className="step-n">01</span><strong>Avaliação</strong><p>Consulta e exame clínico detalhado.</p></div>
              <div className="step"><span className="step-n">02</span><strong>Diagnóstico por imagem</strong><p>Ultrassom dinâmico no consultório, quando indicado.</p></div>
              <div className="step"><span className="step-n">03</span><strong>Procedimento guiado</strong><p>Realizado apenas se houver indicação após a avaliação.</p></div>
              <div className="step"><span className="step-n">04</span><strong>Acompanhamento</strong><p>Reavaliação e plano individualizado de seguimento.</p></div>
            </div>

            <div className="proc-grid">
              <div className="card proc-card"><Syringe /><h3>Infiltração com corticoide</h3><p>Aplicação de anti-inflamatório na articulação ou ao redor de tendões e bursas, guiada por ultrassom, quando indicada após avaliação.</p></div>
              <div className="card proc-card"><Activity /><h3>Viscossuplementação (ácido hialurônico)</h3><p>Aplicação intra-articular de ácido hialurônico, indicada em casos selecionados de artrose e condropatia.</p></div>
              <div className="card proc-card"><HeartPulse /><h3>Ortobiológicos — aspirado de medula óssea (BMA)</h3><p>Uso de concentrado celular obtido da própria medula óssea do paciente, em lesões articulares e tendíneas selecionadas, conforme indicação.</p></div>
              <div className="card proc-card"><Target /><h3>Bloqueios, hidrodissecção e agulhamento</h3><p>Procedimentos guiados por ultrassom para dor de origem nervosa, tendínea ou muscular, com indicação individualizada.</p></div>
              <div className="card proc-card"><Waves /><h3>Terapia por ondas de choque</h3><p>Tratamento não invasivo com ondas acústicas, indicado em tendinopatias e algumas dores crônicas.</p></div>
              <div className="card proc-card"><Syringe /><h3>Proloterapia</h3><p>Aplicação de solução que estimula a resposta de reparo em ligamentos e tendões, em casos selecionados.</p></div>
            </div>

            <div className="credentials dor-callout">
              <p className="credentials-title"><Target size={18} /> Guiado por ultrassom</p>
              <p className="callout-text">Nos procedimentos com agulha, a guia por ultrassom permite visualizar a agulha e a estrutura em tempo real, aumentando a precisão da aplicação.</p>
            </div>

            <div className="actions">
              <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle size={18} /> Agende sua avaliação
              </a>
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
