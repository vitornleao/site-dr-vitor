import React from "react";
import { createRoot } from "react-dom/client";
import { MessageCircle, ShieldCheck, Syringe, Target, HeartPulse, Waves, Activity, Stethoscope, Crosshair, ChevronRight } from "lucide-react";
import "./style.css";
import "./infiltracao.css";

const CLINIC_PHONE = "5562998180208"; // WhatsApp da Clínica Nara Brito: (62) 99818-0208

// CTA único: WhatsApp com mensagem pré-preenchida e identificação da origem (utm_source).
function whatsappUrl() {
  let origem = "";
  try {
    const src = (new URLSearchParams(window.location.search).get("utm_source") || "").toLowerCase();
    const nomes = { instagram: "Instagram", meta: "Instagram", facebook: "Instagram", google: "Google", bio: "link da bio", whatsapp: "WhatsApp" };
    if (src) origem = ` (origem: ${nomes[src] || src})`;
  } catch (e) {}
  const msg = `Olá! Vim pela página de infiltração guiada e gostaria de agendar uma avaliação.${origem}`;
  return `https://wa.me/${CLINIC_PHONE}?text=${encodeURIComponent(msg)}`;
}

const faq = [
  {
    q: "A infiltração dói?",
    a: "O procedimento é realizado com anestesia local quando necessário e costuma ser bem tolerado. A orientação sobre desconforto e cuidados é individual, feita na consulta.",
  },
  {
    q: "Quando a infiltração é indicada?",
    a: "A indicação é definida após avaliação clínica e de imagem, de forma individualizada — em geral quando as medidas iniciais não foram suficientes, em quadros como artrose, tendinopatias e bursites.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Depende do quadro e do procedimento escolhido. O plano, incluindo o número de aplicações e o acompanhamento, é definido na avaliação.",
  },
  {
    q: "Preciso de encaminhamento? Atende convênio?",
    a: "Não é preciso encaminhamento: basta agendar pelo WhatsApp. O atendimento é particular, com consultas personalizadas.",
  },
  {
    q: "Atende só joelho?",
    a: "O foco é o joelho, mas os procedimentos também são realizados em outras articulações, conforme avaliação.",
  },
];

function App() {
  const wa = whatsappUrl();

  return (
    <div className="page lp">
      <header className="header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/logo-header.png" alt="Logo Dr. Vitor Negreiro Leão" className="logo-header" />
            <div className="brand-text">
              <strong>Dr. Vitor Negreiro Leão</strong>
              <span>Ortopedia • Joelho • Dor</span>
            </div>
          </div>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary lp-header-cta">
            <MessageCircle size={16} /> Falar no WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">Infiltração guiada por ultrassom • Posse-GO</div>
              <h1>Tratamento da dor no joelho com precisão: infiltração guiada por ultrassom, quando indicada.</h1>
              <p>Avaliação especializada, ultrassom no consultório e procedimentos guiados por imagem — no joelho e em outras articulações — com acompanhamento individualizado.</p>

              <div className="actions">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MessageCircle size={18} /> Agendar avaliação pelo WhatsApp
                </a>
              </div>

              <div className="hero-trust">
                <span><ShieldCheck size={16} /> CRM-GO 22572</span>
                <span><ShieldCheck size={16} /> RQE 16089</span>
                <span><ShieldCheck size={16} /> Fellowship em Joelho • FIFA Medical Centre</span>
              </div>
            </div>

            <div className="hero-photo-card">
              <img src="/dr-vitor.png" alt="Dr. Vitor Negreiro Leão, ortopedista" className="hero-photo" />
              <div className="hero-photo-caption">
                <strong>Dr. Vitor Negreiro Leão</strong>
                <span>Ortopedia • Joelho • Dor</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Para quem é</p>
            <h2>Você pode se beneficiar de uma avaliação se…</h2>
            <div className="signals">
              <div className="card signal"><Activity /><p>Dor no joelho que persiste há semanas</p></div>
              <div className="card signal"><HeartPulse /><p>Artrose ou condropatia já diagnosticadas</p></div>
              <div className="card signal"><Stethoscope /><p>Tendinite ou bursite que não melhora</p></div>
              <div className="card signal"><Target /><p>Dor que limita caminhar, agachar ou treinar</p></div>
              <div className="card signal"><Crosshair /><p>Dor persistente em outra articulação</p></div>
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="container">
            <p className="section-kicker gold">Como funciona</p>
            <h2>Do primeiro contato ao acompanhamento.</h2>
            <div className="steps">
              <div className="step"><span className="step-n">01</span><strong>Avaliação</strong><p>Consulta e exame clínico detalhado.</p></div>
              <div className="step"><span className="step-n">02</span><strong>Diagnóstico por imagem</strong><p>Ultrassom dinâmico no consultório, quando indicado.</p></div>
              <div className="step"><span className="step-n">03</span><strong>Procedimento guiado</strong><p>Realizado apenas se houver indicação após a avaliação.</p></div>
              <div className="step"><span className="step-n">04</span><strong>Acompanhamento</strong><p>Reavaliação e plano individualizado de seguimento.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Precisão</p>
            <h2>Por que guiado por ultrassom?</h2>
            <div className="why-grid">
              <div className="credentials why-card">
                <p className="credentials-title"><Target size={18} /> Visualização em tempo real</p>
                <p>O ultrassom mostra a agulha e a estrutura durante a aplicação.</p>
              </div>
              <div className="credentials why-card">
                <p className="credentials-title"><Syringe size={18} /> Maior precisão</p>
                <p>A medicação é direcionada ao ponto avaliado, com controle do trajeto e da profundidade.</p>
              </div>
              <div className="credentials why-card">
                <p className="credentials-title"><ShieldCheck size={18} /> No consultório</p>
                <p>Realizado no próprio consultório, com anestesia local quando necessário, sem internação.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Procedimentos</p>
            <h2>O que pode ser realizado, conforme indicação.</h2>
            <div className="proc-grid">
              <div className="card proc-card"><Syringe /><h3>Infiltração com corticoide</h3><p>Aplicação de anti-inflamatório na articulação ou ao redor de tendões e bursas, guiada por ultrassom, quando indicada após avaliação.</p></div>
              <div className="card proc-card"><Activity /><h3>Viscossuplementação (ácido hialurônico)</h3><p>Aplicação intra-articular de ácido hialurônico, indicada em casos selecionados de artrose e condropatia.</p></div>
              <div className="card proc-card"><HeartPulse /><h3>Ortobiológicos — aspirado de medula óssea (BMA)</h3><p>Uso de concentrado celular obtido da própria medula óssea do paciente, em lesões articulares e tendíneas selecionadas, conforme indicação.</p></div>
              <div className="card proc-card"><Target /><h3>Bloqueios, hidrodissecção e agulhamento</h3><p>Procedimentos guiados por ultrassom para dor de origem nervosa, tendínea ou muscular, com indicação individualizada.</p></div>
              <div className="card proc-card"><Waves /><h3>Terapia por ondas de choque</h3><p>Tratamento não invasivo com ondas acústicas, indicado em tendinopatias e algumas dores crônicas.</p></div>
              <div className="card proc-card"><Syringe /><h3>Proloterapia</h3><p>Aplicação de solução que estimula a resposta de reparo em ligamentos e tendões, em casos selecionados.</p></div>
            </div>
            <div className="actions">
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle size={18} /> Agendar avaliação pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="section-kicker">Quem vai te atender</p>
            <h2>Dr. Vitor Negreiro Leão</h2>
            <div className="lp-doctor">
              <img src="/dr-vitor.png" alt="Dr. Vitor Negreiro Leão" />
              <div>
                <p>Ortopedista com foco em joelho e em tratamento conservador da dor, com formação em cirurgia do joelho e em ultrassonografia musculoesquelética.</p>
                <ul>
                  <li>Fellowship em Cirurgia do Joelho — Hospital HOME, Brasília-DF (FIFA Medical Centre of Excellence)</li>
                  <li>Pós-graduação em Ultrassonografia Musculoesquelética — CETRUS, São Paulo</li>
                  <li>Membro da SBOT e da SBCJ • CRM-GO 22572 • RQE 16089</li>
                </ul>
                <a href="/" className="lp-link">Conheça o site completo</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container">
            <p className="section-kicker">Dúvidas frequentes</p>
            <h2>Perguntas comuns antes de agendar</h2>
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

        <section className="section cta-section">
          <div className="container cta-card">
            <div>
              <p className="section-kicker gold">Agendamento</p>
              <h2>Dê o primeiro passo: uma avaliação para entender a sua dor.</h2>
              <p>Atendimento particular, com plano de acompanhamento individualizado. Clínica Nara Brito, Posse-GO.</p>
            </div>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-light">
              <MessageCircle size={18} /> Agendar pelo WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        <div>Dr. Vitor Negreiro Leão • CRM-GO 22572 • CRM-DF 25086 • RQE 16089</div>
        <div>Clínica Nara Brito — Rua 19 de Julho, Qd 26, Lt 10, Casa 02, Setor Augusto José Valente, Posse-GO</div>
        <div><a href="/">drvitornleao.com.br</a> • © {new Date().getFullYear()} Dr. Vitor Negreiro Leão</div>
      </footer>

      <a href={wa} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Agende pelo WhatsApp">
        <MessageCircle size={26} />
        <span>Agende no WhatsApp</span>
      </a>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
