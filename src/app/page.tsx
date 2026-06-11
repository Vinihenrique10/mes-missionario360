import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  const faqItems = [
    {
      question: "Como recebo o acesso?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com seus dados de login para acessar a área de membros exclusiva e baixar todos os materiais imediatamente.",
    },
    {
      question: "O material é enviado para minha casa?",
      answer: "Não. O Mês Missionário 360 é um infoproduto 100% digital. Você terá acesso aos PDFs, planilhas e links para os templates online, podendo imprimir o que desejar.",
    },
    {
      question: "A minha igreja é muito pequena. Isso vai funcionar?",
      answer: "Sim. A estrutura foi desenhada para focar em princípios de engajamento, não em volume inicial. Uma igreja de 30 membros com a estratégia correta levanta muito mais recursos do que uma de 300 membros desorganizada.",
    },
    {
      question: "Preciso entender de marketing para usar isso?",
      answer: "Não. O material já te guia no passo a passo prático, com lógica de oferta, roteiro e acompanhamento adaptados ao contexto real e à linguagem da igreja.",
    },
    {
      question: "Isso serve para campanha missionária e evento especial?",
      answer: "Serve para os dois. O método organiza a comunicação e a jornada da oferta, independentemente de ser missão, reforma, congresso ou ação social da congregação.",
    },
    {
      question: "Não vai parecer comercial demais para a igreja?",
      answer: "Não, porque a estrutura é construída para servir a visão espiritual da igreja, com clareza, propósito bíblico e condução sincera, sem manipulação de gatilhos puramente comerciais.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Você pode adquirir através de Cartão de Crédito (em até 6x), PIX (com aprovação imediata) ou Boleto Bancário.",
    },
  ];

  return (
    <div className="bg-sand text-charcoal bg-grain min-h-screen flex flex-col font-sans antialiased selection:bg-terracotta selection:text-bone">
      
      <main className="flex-grow">
        {/* BARRA SUPERIOR DE ANÚNCIO DE ALTO DESTAQUE */}
        <div className="w-full bg-forest py-4 px-6 text-center border-b border-forest/10">
          <p className="font-serif text-xs md:text-sm text-sand font-bold tracking-[0.12em] uppercase">
            Já ajudou igrejas a saírem da arrecadação imprevisível para campanhas muito mais organizadas e consistentes.
          </p>
        </div>

        {/* HERO SECTION */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-start">
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-forest leading-[1.05] mb-8 max-w-4xl">
            A sua igreja ainda vive o desespero das campanhas de última hora?
          </h1>

          <p className="font-sans text-base text-charcoal/80 mb-8 max-w-3xl leading-relaxed">
            Pare de sangrar o caixa de missões, esgotar a liderança e depender de ações improvisadas que geram pouco engajamento. Descubra o sistema previsível para transformar membros passivos em financiadores apaixonados pela obra, garantindo o sustento do campo sem estresse financeiro.
          </p>

          <div className="w-full max-w-3xl mb-10">
            <img 
              src="/image/mq8jqxcc-i49ad0.webp" 
              alt="Mês Missionário" 
              width={1024}
              height={1024}
              className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="flex justify-start mb-10">
            <a 
              href="#oferta"
              className="bg-terracotta hover:bg-terracotta/90 text-[#F5F2EA] font-sans font-bold py-4 px-8 text-sm md:text-base tracking-widest transition-colors duration-200 shadow-md rounded-[2px] flex items-center justify-center inline-block"
            >
              <span>QUERO ESTRUTURAR MISSÕES AGORA</span>
            </a>
          </div>

          <div className="w-full bg-[#EAE6DD] border-l-4 border-terracotta p-5 mb-10 rounded-[2px] max-w-3xl">
            <p className="font-sans text-xs md:text-sm text-charcoal/80 leading-relaxed font-semibold">
              ⚠️ Atenção: Oferta especial com 90% de desconto e 3 bônus exclusivos liberada apenas para as 50 primeiras igrejas deste lote.
            </p>
          </div>
        </section>

        {/* SEÇÃO DE DOR E TRANSIÇÃO */}
        <section className="py-20 px-6 md:px-12 bg-sand">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start w-full">
              <div className="md:col-span-7 pr-0 md:pr-8">
                <p className="font-sans text-xl text-charcoal/90 leading-relaxed mb-8">
                  Toda campanha começa com fé, mas termina em correria. E quando a arrecadação não bate, a pressão cai em cima da liderança, da equipe e de quem tá à frente da visão.
                </p>
                <p className="font-sans text-lg text-charcoal/80 leading-relaxed">
                  O Mês Missionário 360 fornece as ferramentas práticas e o roteiro exato para você parar de depender do apelo de improviso no altar e começar a conduzir a congregação com clareza.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center items-start bg-forest text-sand p-8 border border-forest rounded-[2px] shadow-sm">
                <span className="font-serif text-xs tracking-[0.2em] uppercase text-sand/60 mb-2">
                  O Próximo Passo
                </span>
                <h3 className="font-serif text-2xl font-bold leading-tight mb-4">
                  Estruture suas Missões
                </h3>
                <p className="font-sans text-sm text-sand/80 leading-relaxed mb-6">
                  Garanta o sustento do campo missionário com organização e tranquilidade teológica.
                </p>
                <a
                  href="#oferta"
                  className="w-full bg-terracotta text-bone font-sans font-bold text-sm tracking-wider uppercase py-4 px-6 text-center hover:bg-[#a04e2e] active:scale-[0.99] transition-all duration-300 rounded-[2px]"
                >
                  QUERO ESTRUTURAR MISSÕES AGORA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROMESSA ("O MÉTODO FUNCIONA MESMO QUE...") */}
        <section className="py-24 bg-bone border-y border-charcoal/10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest uppercase mb-12 tracking-tight">
              O MÉTODO FUNCIONA MESMO QUE...
            </h2>
            <div className="w-full mb-12">
              <img loading="lazy" decoding="async" src="/image/mq8k2x5v-tm7yjx.webp" alt="O método funciona mesmo que" className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10 object-cover" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {[
                "Você seja de uma igreja pequena com recursos limitados.",
                "Sua congregação tenha um histórico de baixo engajamento em ofertas.",
                "Você nunca tenha organizado um evento ou campanha estruturada antes.",
                "A sua equipe de missões seja composta apenas por você e poucos voluntários.",
                "O orçamento atual da igreja esteja apertado e não permita erros.",
                "A campanha já tenha começado ou você precise de clareza imediata para missões ou ações sociais.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start py-4 border-b border-charcoal/10"
                >
                  <span className="font-serif text-xl font-bold text-terracotta mr-4">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MECANISMO / O QUE É */}
        <section className="py-24 bg-forest text-sand px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-6">
                <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-4 block">
                  A Solução
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-6 leading-tight">
                  O QUE É O MÊS MISSIONÁRIO 360?
                </h2>
                <div className="w-full mb-8">
                  <img loading="lazy" decoding="async" src="/image/mq8k4f5h-gnnta7.webp" alt="O que é o Mês Missionário 360" className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10 object-cover" />
                </div>
                <p className="font-sans text-lg text-sand/80 leading-relaxed mb-6">
                  É o fim das feijoadas improvisadas e dos apelos desesperados no altar. O Mês Missionário 360 é um sistema completo, previsível e validado de engajamento e arrecadação.
                </p>
                <p className="font-sans text-base text-sand/70 leading-relaxed mb-8">
                  Ele entrega exatamente o que as grandes denominações fazem para levantar recursos abundantes, mastigado em um passo a passo simples de 4 semanas. Você terá acesso ao roteiro exato para educar, engajar e mobilizar sua igreja local a investir na expansão do Reino, sem que a liderança precise perder noites de sono na tesouraria.
                </p>
              </div>
              <div className="md:col-span-6 bg-[#213120] p-8 border border-sand/10 rounded-[2px]">
                <h3 className="font-serif text-xl font-bold uppercase mb-6 border-b border-sand/10 pb-4 text-terracotta">
                  Lógica do Método
                </h3>
                <ul className="space-y-6">
                  {[
                    "Estrutura pensada para realidade de igreja, não para empresa corporativa.",
                    "Dividido em 4 semanas com passo a passo prático e objetivo.",
                    "Foco em despertar e manter constância financeira sem manipulação.",
                    "Inclui guias, roteiros de altar e planilhas no mesmo fluxo.",
                    "Feito para equipes enxutas e rotinas ministeriais corridas.",
                  ].map((text, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-terracotta mt-2.5 mr-3 flex-shrink-0"></span>
                      <p className="font-sans text-sm md:text-base text-sand/90">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TABELA COMPARATIVA (CICLO DA FRUSTRAÇÃO VS NOVA REALIDADE) */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
              A Grande Mudança
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight">
              ESTE MÉTODO MUDA A SUA REALIDADE
            </h2>
            <div className="w-20 h-1 bg-terracotta mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-charcoal/20">
            {/* O CICLO DA FRUSTRAÇÃO */}
            <div className="bg-[#EAE6DD]/40 p-8 border-b md:border-b-0 md:border-r border-charcoal/20">
              <h3 className="font-serif text-xl font-bold text-[#8c301c] uppercase mb-8 pb-3 border-b border-charcoal/10">
                Como é a realidade sem o método
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Improvisação no Alvo",
                    desc: "Campanhas feitas \"em cima da hora\" que geram estresse extremo na liderança.",
                  },
                  {
                    title: "Escassez Financeira",
                    desc: "Caixas de missões vazios e o medo constante de ter que cortar o sustento do campo.",
                  },
                  {
                    title: "Pressão no Culto",
                    desc: "Membros frios que se sentem pressionados e desconfortáveis na hora da oferta.",
                  },
                  {
                    title: "Centralização de Tarefas",
                    desc: "Líderes de missões e pastores sobrecarregados fazendo tudo sozinhos.",
                  },
                  {
                    title: "Desordem Administrativa",
                    desc: "Desorganização financeira crônica e falta total de metas claras.",
                    image: "/image/mq8kpl2v-ql1rtc.webp"
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-serif text-sm font-bold text-charcoal/90 mb-1">
                      {idx + 1}. {item.title}
                    </span>
                    <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed pl-4">
                      {item.desc}
                    </p>
                    {item.image && (
                      <div className="mt-4 pl-4">
                        <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* A NOVA REALIDADE */}
            <div className="bg-forest/[0.03] p-8">
              <h3 className="font-serif text-xl font-bold text-forest uppercase mb-8 pb-3 border-b border-forest/10">
                Como será com o Mês Missionário 360
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    title: "Planejamento Maduro",
                    desc: "Planejamento estratégico de 4 semanas, estruturado de forma leve e tranquila.",
                  },
                  {
                    title: "Arrecadação Previsível",
                    desc: "Arrecadação previsível e abundante para manter a obra crescendo e novos campos abrindo.",
                  },
                  {
                    title: "Fidelidade e Amor",
                    desc: "Congregação engajada e apaixonada por missões, ofertando voluntariamente com alegria.",
                  },
                  {
                    title: "Equipe Engajada",
                    desc: "Equipe ministerial alinhada com um roteiro e checklists claros do que fazer.",
                  },
                  {
                    title: "Tesouraria em Paz",
                    desc: "Tesouraria com previsibilidade, clareza administrativa e metas alcançadas.",
                    image: "/image/mq8kpvmk-xv53fc.webp"
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="font-serif text-sm font-bold text-forest mb-1">
                      {idx + 1}. {item.title}
                    </span>
                    <p className="font-sans text-xs md:text-sm text-charcoal/80 leading-relaxed pl-4">
                      {item.desc}
                    </p>
                    {item.image && (
                      <div className="mt-4 pl-4">
                        <img loading="lazy" decoding="async" src={item.image} alt={item.title} className="w-full h-auto rounded-[2px] shadow-sm border border-forest/10" />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* O PASSO A PASSO EXATO DAS 4 SEMANAS */}
        <section className="py-24 bg-bone border-y border-charcoal/10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
                O Cronograma
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest uppercase tracking-tight">
                O PASSO A PASSO EXATO DAS 4 SEMANAS
              </h2>
              <p className="font-sans text-sm md:text-base text-charcoal/60 mt-2">
                O seu roteiro seguro para um engajamento inabalável:
              </p>
            </div>

            <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-charcoal/10">
              {[
                {
                  step: "01",
                  title: "1ª Semana: Despertamento",
                  desc: "Como preparar o solo, chamar a atenção da igreja e plantar a urgência da obra missionária.",
                  icon: "🌱",
                },
                {
                  step: "02",
                  title: "2ª Semana: Engajamento",
                  desc: "Estratégias para conectar emocionalmente a congregação com o campo, gerando pertencimento.",
                  icon: "🤝",
                },
                {
                  step: "03",
                  title: "3ª Semana: Mobilização",
                  desc: "O momento exato de apresentar a meta e mostrar como cada membro é uma peça vital no Reino.",
                  icon: "🧱",
                },
                {
                  step: "04",
                  title: "4ª Semana: Celebração (A Colheita)",
                  desc: "O roteiro do culto final de arrecadação para bater a meta financeira e honrar o Senhor com excelência.",
                  icon: "🌾",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-12 md:pl-16 group">
                  <div className="absolute left-0 top-0 w-8 h-8 bg-sand border-2 border-charcoal/20 flex items-center justify-center font-serif text-xs font-bold text-charcoal group-hover:border-forest transition-colors duration-300">
                    {item.step}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-5">
                      <h3 className="font-serif text-lg md:text-xl font-bold text-charcoal flex items-center gap-2">
                        <span>{item.icon}</span>
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:col-span-7">
                      <p className="font-sans text-sm md:text-base text-charcoal/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS (Seção mantida do antigo) */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
              Vantagens Práticas
            </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest uppercase mb-12 tracking-tight">
                8 Benefícios para Sua Liderança
              </h2>
              <div className="w-full mb-12">
                <img loading="lazy" decoding="async" src="/image/mq8kzd91-9z1vim.webp" alt="8 Benefícios para Sua Liderança" className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10 object-cover" />
              </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/10 border border-charcoal/10">
            {[
              {
                title: "Campanha com direção",
                desc: "Você para de jogar mensagens soltas e passa a conduzir a igreja com etapas claras.",
              },
              {
                title: "Menos pressão no altar",
                desc: "Sai o desespero de última hora e entra paz para liderar a igreja com foco espiritual.",
              },
              {
                title: "Páginas que fazem sentido",
                desc: "Você aprende a organizar a oferta com uma apresentação clara, limpa e objetiva.",
              },
              {
                title: "Roteiro pronto para usar",
                desc: "Em vez de começar do zero, você segue um cronograma que aquece e envolve.",
              },
              {
                title: "Mais união na visão",
                desc: "A igreja entende melhor o propósito e participa com muito mais convicção.",
              },
              {
                title: "Acompanhamento organizado",
                desc: "Você sabe o que fazer antes, durante e no pós-lançamento da campanha.",
              },
              {
                title: "Mais previsibilidade",
                desc: "Você deixa de depender de apelos soltos e trabalha com processo estruturado.",
              },
              {
                title: "Liderança mais segura",
                desc: "Você passa de líder reativo para alguém que comanda a oferta com autoridade.",
              },
            ].map((b, idx) => (
              <div key={idx} className="bg-sand p-6 flex flex-col justify-between hover:bg-bone transition-all duration-300">
                <h3 className="font-serif text-base font-bold text-forest mb-3 uppercase leading-snug">
                  {b.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* O QUE VOCÊ TERÁ EM MÃOS IMEDIATAMENTE */}
        <section className="py-24 bg-bone border-y border-charcoal/10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
                Conteúdo do Kit
              </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-12 tracking-tight text-forest">
                  O QUE VOCÊ TERÁ EM MÃOS IMEDIATAMENTE
                </h2>
                <div className="w-full mb-12">
                  <img loading="lazy" decoding="async" src="/image/mq8kcaq5-wjm6g9.webp" alt="O que você terá em mãos" className="w-full h-auto rounded-[2px] shadow-sm border border-charcoal/10 object-cover" />
                </div>
              <div className="w-20 h-1 bg-terracotta mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "O Manual do Mês Missionário 360",
                  desc: "O PDF completo detalhando toda a estratégia prática, sem rodeios ou enrolações.",
                  icon: "📖",
                },
                {
                  title: "Planner de Ação Prática",
                  desc: "Seu checklist semanal para garantir que nada passe despercebido em nenhuma fase.",
                  icon: "📅",
                },
                {
                  title: "Planilha de Gestão Financeira",
                  desc: "A ferramenta da tesouraria para mapear alvos, entradas e celebrar as metas alcançadas.",
                  icon: "📊",
                },
                {
                  title: "Devocional Missionário (30 Dias)",
                  desc: "Material de apoio espiritual pronto para aquecer o coração da igreja durante toda a campanha.",
                  icon: "🙏",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-sand p-6 border border-charcoal/10 rounded-[2px] flex flex-col justify-between hover:border-forest transition-colors duration-300">
                  <div>
                    <span className="text-3xl mb-4 block">{item.icon}</span>
                    <h3 className="font-serif text-base font-bold text-charcoal mb-2 uppercase leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BÔNUS EXCLUSIVOS DE AÇÃO RÁPIDA (Seção Adicional Estratégica) */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
              Pacote de Implementação
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight">
              BÔNUS EXCLUSIVOS DE AÇÃO RÁPIDA
            </h2>
            <p className="font-sans text-sm md:text-base text-charcoal/60 mt-2">
              Ao garantir sua cópia hoje, você não leva apenas o manual. Nós adicionamos o pacote completo de implementação para você não ter nenhum trabalho extra:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Pack 'Agência Cristã' de Criativos",
                originalVal: "R$ 297,00",
                desc: "Artes e templates de vídeos 100% editáveis no Canva para a sua campanha. Não gaste nada contratando designers.",
              },
              {
                num: "02",
                title: "Script de Ofertório 'Corações Abertos'",
                originalVal: "R$ 197,00",
                desc: "O roteiro exato, minuto a minuto, do que falar no altar para aumentar a arrecadação sem soar interesseiro ou pressionar os irmãos.",
              },
              {
                num: "03",
                title: "Dashboard de Previsibilidade Anual",
                originalVal: "R$ 97,00",
                desc: "A planilha premium para a tesouraria projetar o fluxo de caixa de missões o ano inteiro, evitando surpresas desagradáveis.",
              },
            ].map((bonus, idx) => (
              <div key={idx} className="bg-bone p-8 border border-charcoal/10 rounded-[2px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-serif text-2xl font-bold text-terracotta">
                      Bônus {bonus.num}
                    </span>
                    <span className="font-sans text-xs text-charcoal/40 line-through">
                      {bonus.originalVal}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest uppercase mb-4 leading-snug">
                    {bonus.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-charcoal/70 leading-relaxed">
                    {bonus.desc}
                  </p>
                </div>
                <div className="border-t border-charcoal/10 pt-4 mt-6">
                  <span className="font-sans text-[10px] tracking-wider uppercase text-forest font-bold">
                    Incluso Gratuitamente
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARA QUEM FOI DESENHADO */}
        <section className="py-24 bg-bone border-y border-charcoal/10 px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
                Perfil de Líderes
              </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase mb-12 tracking-tight text-forest">
                  Para Quem Foi Desenhado o Mês Missionário 360?
                </h2>
              <div className="w-20 h-1 bg-terracotta mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  role: "Pastores Presidentes e Locais",
                  desc: "Que precisam de paz mental sabendo que a obra está sendo financiada com excelência e previsibilidade.",
                  image: "/image/mq8le3fb-m5m4j2.webp",
                },
                {
                  role: "Líderes de Missões e Secretários",
                  desc: "Que estão cansados de trabalhar duro em campanhas que não geram resultados e frustram a equipe.",
                  image: "/image/mq8lebaa-ervyrx.webp",
                },
                {
                  role: "Tesoureiros e Administradores",
                  desc: "Que buscam organização financeira, clareza nas metas e previsibilidade no fluxo de caixa da congregação.",
                  image: "/image/mq8lfqnn-hzs44k.webp",
                },
              ].map((profile, idx) => (
                <div key={idx} className="bg-sand p-8 border border-charcoal/10 rounded-[2px] hover:border-forest transition-colors duration-300">
                  <div className="w-full mb-6">
                    <img loading="lazy" decoding="async" src={profile.image} alt={profile.role} className="w-full h-auto object-cover rounded-[2px] shadow-sm border border-charcoal/10" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal mb-3 uppercase leading-snug">
                    {profile.role}
                  </h3>
                  <p className="font-sans text-sm text-charcoal/70 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* SEÇÃO "PARA QUEM NÃO É" (MANTIDA DO ANTIGO) */}
            <div className="mt-16 border-t border-charcoal/10 pt-16 max-w-3xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-[#8c301c] uppercase mb-6 text-center">
                Para Quem NÃO É:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Quem acha que arrecadação organizada é falta de espiritualidade ou fé.",
                  "Quem não quer aplicar nenhum passo estruturado na prática.",
                  "Quem espera colher resultados sem implantar nenhuma estrutura.",
                  "Quem deseja apenas um roteiro comercial, sem propósito pastoral sincero.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-[#8c301c] mr-3 font-bold">✕</span>
                    <p className="font-sans text-sm text-charcoal/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL (Seção mantida do antigo) */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
              Relatos Reais
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal uppercase tracking-tight">
              Testemunhos da Liderança
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "A gente vivia no susto. Depois de organizar a campanha, tudo ficou mais claro e a igreja entendeu melhor a visão.",
                author: "Pr. Marcelo",
                role: "Pastor de igreja local",
              },
              {
                quote: "Antes era só apelo. Agora existe sequência, página e acompanhamento. A resposta da igreja melhorou muito.",
                author: "Ana Paula",
                role: "Líder de missões",
              },
              {
                quote: "Finalmente parei de depender de correr atrás do valor nos últimos dias. O processo ficou organizado.",
                author: "Roberto",
                role: "Presbítero e gestor de eventos",
              },
              {
                quote: "Mesmo com equipe pequena, conseguimos aplicar sem complicar. Foi prático demais.",
                author: "Débora",
                role: "Coordenadora de ministério",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bone p-8 border border-charcoal/10 rounded-[2px] flex flex-col justify-between"
              >
                <p className="font-serif italic text-base md:text-lg text-charcoal/90 leading-relaxed mb-6">
                  “{item.quote}”
                </p>
                <div className="border-t border-charcoal/10 pt-4">
                  <span className="font-serif text-sm font-bold text-forest block">
                    {item.author}
                  </span>
                  <span className="font-sans text-xs text-charcoal/60 uppercase tracking-wider font-semibold">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-sans text-base md:text-lg text-charcoal/80 font-medium">
              Junte-se a líderes que já estão saindo do improviso e organizando suas campanhas com mais clareza.
            </p>
          </div>
        </section>

        {/* PREÇO E OFERTA */}
        <section id="oferta" className="py-24 bg-charcoal text-sand px-6 md:px-12 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-serif text-sm tracking-[0.2em] text-terracotta font-bold uppercase mb-4 block">
              Investimento no Reino
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold uppercase text-bone mb-6">
              ADQUIRA A ESTRUTURA COMPLETA HOJE
            </h2>
            <p className="font-sans text-base md:text-lg text-sand/80 max-w-3xl mx-auto mb-12">
              Se você fosse contratar uma agência ou um consultor para criar todo este planejamento, artes e planilhas para a sua igreja, o investimento não seria menor que R$ 1.088,00. Mas hoje você terá acesso a tudo isso por uma fração do valor.
            </p>

            {/* BOX DE PREÇO */}
            <div className="bg-[#212220] border border-sand/10 max-w-md mx-auto p-8 mb-12 rounded-[2px] text-left">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-sans text-xs text-sand/60 tracking-wider uppercase font-semibold">
                  Valor Normal
                </span>
                <span className="font-sans text-sm text-sand/50 line-through">
                  R$ 1.088,00
                </span>
              </div>
              <div className="mb-6">
                <span className="font-sans text-xs text-terracotta tracking-wider uppercase font-bold block mb-1">
                  Acesso Imediato
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl font-extrabold text-bone">
                    R$ 27,00
                  </span>
                  <span className="font-sans text-xs text-sand/70">
                    à vista
                  </span>
                </div>
                <p className="font-sans text-xs text-sand/60 mt-1">
                  ou 6x de R$ 5,11 no cartão
                </p>
              </div>

              <div className="border-t border-sand/10 pt-4 mb-6">
                <p className="font-sans text-xs text-sand/70 leading-relaxed italic">
                  * Pagamento 100% seguro. Acesso imediato ao material e a todos os bônus após a confirmação.
                </p>
              </div>

              <a
                href="https://mm360.mycartpanda.com/checkout/210923064:1"
                className="w-full block bg-terracotta text-bone font-sans font-bold text-sm tracking-wider uppercase py-4 px-6 text-center hover:bg-[#a04e2e] active:scale-[0.99] transition-all duration-300 rounded-[2px]"
              >
                QUERO GARANTIR MINHA ESTRUTURA E OS BÔNUS AGORA
              </a>
            </div>

            <div className="mt-12">
              <p className="font-sans text-xs text-sand/50 italic">
                A oferta especial com 90% de desconto e 3 bônus exclusivos liberada apenas para as 50 primeiras igrejas deste lote.
              </p>
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
          <div className="border-2 border-forest p-8 md:p-12 bg-bone rounded-[2px] grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20">
            <div className="md:col-span-3 flex justify-center">
              <div className="w-28 h-28 md:w-32 md:h-32">
                <img loading="lazy" decoding="async" src="/image/mq8kf1mq-pncto4.webp" alt="Garantia Incondicional" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            </div>
            <div className="md:col-span-9">
              <span className="font-serif text-xs tracking-[0.2em] text-terracotta font-bold uppercase mb-2 block">
                Compromisso incondicional
              </span>
              <h3 className="font-serif text-2xl font-bold text-forest uppercase mb-3">
                GARANTIA DUPLA DO REINO: RISCO ZERO NAS SUAS COSTAS
              </h3>
              <p className="font-sans text-sm md:text-base text-charcoal/80 leading-relaxed mb-4">
                Você tem 7 dias de garantia incondicional. Acesse todo o material do Mês Missionário 360, baixe os bônus e as planilhas. Se por qualquer motivo você achar que o conteúdo não serve para a sua igreja, basta enviar um único e-mail e nós devolveremos 100% do seu dinheiro, sem perguntas e sem burocracia. O risco está inteiramente conosco. Sua paz está garantida.
              </p>
            </div>
          </div>

          {/* PERGUNTAS FREQUENTES (FAQ) */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl font-bold uppercase text-charcoal mb-10 text-center">
              Perguntas Frequentes
            </h2>
            <FAQAccordion items={faqItems} />
          </div>

          {/* CONCEITO E CTA FINAL */}
          <div className="border-t-2 border-charcoal/20 pt-16 text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-forest uppercase leading-tight mb-6">
              Você tem 2 caminhos: continuar improvisando ou estruturar suas ofertas para arrecadar com previsibilidade.
            </h3>
            <p className="font-serif italic text-lg text-charcoal/90 mb-4 font-semibold">
              {"\"A missão não pode depender do desespero de última hora. Chega de correr atrás do dinheiro no susto.\""}
            </p>
            <div className="mt-10">
              <a
                href="#oferta"
                className="inline-block bg-terracotta text-bone font-sans font-bold text-base tracking-wider uppercase py-5 px-10 text-center hover:bg-[#a04e2e] active:scale-[0.99] transition-all duration-300 rounded-[2px]"
              >
                SIM! QUERO O MÊS MISSIONÁRIO 360 PARA MINHA IGREJA
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-charcoal text-sand/40 border-t border-sand/5 py-12 px-6 md:px-12 text-center text-xs">
        <p className="mb-2">
          © {new Date().getFullYear()} Mês Missionário 360. Todos os direitos reservados.
        </p>
        <p className="max-w-md mx-auto text-[10px] leading-relaxed">
          Este material não tem vínculo com nenhuma denominação específica e é uma metodologia prática voltada à gestão de comunicação e captação de ofertas locais para fins de missões e caridade.
        </p>
      </footer>
    </div>
  );
}
