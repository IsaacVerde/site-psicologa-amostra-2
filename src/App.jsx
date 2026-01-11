import React, { useState } from 'react';
import { Menu, X, Instagram, Linkedin, Mail, Phone, Check, Brain, Users, BookOpen, Target, MessageCircle, Heart, TrendingUp } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('pacientes');

  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      {/* --- HEADER --- */}
      <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-primary">
            Dra.<span className="text-secondary">Psicóloga</span>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-gray-600 font-medium font-rounded">
            <a href="#inicio" className="hover:text-secondary transition">Início</a>
            <a href="#servicos" className="hover:text-secondary transition">Serviços</a>
            <a href="#sobre" className="hover:text-secondary transition">Sobre</a>
            <a href="#contato" className="hover:text-secondary transition">Contato</a>
          </nav>

          <button className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-rounded font-semibold hover:bg-opacity-90 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Agendar Consulta
          </button>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 shadow-lg font-rounded">
            <a href="#inicio" className="text-gray-700">Início</a>
            <a href="#servicos" className="text-gray-700">Serviços</a>
            <a href="#sobre" className="text-gray-700">Sobre</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full w-full">Agendar Consulta</button>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-bold tracking-widest text-sm uppercase font-rounded">Psicologia & Consultoria</span>
            <h1 className="text-5xl md:text-6xl leading-tight font-serif text-primary">
              Psicologia com <span className="text-secondary italic">Visão Integrada</span> e Estratégia
            </h1>
            <p className="text-lg text-gray-600 max-w-lg font-rounded leading-relaxed">
              Atendimento Clínico, Projetos Sociais e Consultoria de Marketing para psicólogos que desejam construir uma carreira de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 font-rounded font-medium">
              <button className="border border-gray-300 px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <span>📅</span> Agendar Terapia
              </button>
              <button className="bg-primary text-white px-8 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition shadow-md">
                <span>✨</span> Consultoria para Psicólogos
              </button>
            </div>
          </div>

          <div className="relative flex justify-center py-10">
             {/* Efeito Moldura Orgânica */}
            <div className="relative w-[320px] h-[350px] md:w-[400px] md:h-[450px]">
                {/* Fundo Bege Girado */}
                <div className="absolute inset-0 bg-[#F5F0EB] rounded-[3rem_2rem_3rem_2rem] rotate-6 shadow-sm"></div>
                
                {/* Container da Imagem */}
                <div className="absolute inset-0 bg-[#E3DACE] rounded-[2rem_3rem_2rem_3rem] -rotate-3 overflow-hidden flex items-center justify-center shadow-inner">
                     <span className="text-6xl text-secondary font-serif opacity-50">Foto</span>
                     {/* <img src="/tua-foto.jpg" alt="Dra Psicóloga" className="w-full h-full object-cover" /> */}
                </div>

                {/* CRP Badge Flutuante */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex flex-col items-center z-10">
                    <span className="font-serif text-2xl font-bold text-primary leading-none">CRP</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-rounded font-bold">Registrada</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ÁREAS DE ATUAÇÃO (MOVIDO PARA CÁ) --- */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6 font-serif text-primary">Minhas Áreas de Atuação</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-rounded text-lg">Uma abordagem multidisciplinar completa.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Brain size={28} />, title: "Psicologia Clínica", text: "Terapia individual com foco em bem-estar." },
              { icon: <Users size={28} />, title: "Psicologia Social", text: "Projetos de impacto e intervenção." },
              { icon: <BookOpen size={28} />, title: "Psicologia Educacional", text: "Apoio ao desenvolvimento cognitivo." },
              { icon: <Target size={28} />, title: "Consultoria Marketing", text: "Mentoria para psicólogos.", highlight: true }
            ].map((service, idx) => (
              <div key={idx} className={`p-8 rounded-3xl transition text-center group border border-transparent ${service.highlight ? 'bg-surface border-secondary/20' : 'bg-gray-50 hover:bg-surface hover:border-secondary/10'}`}>
                <div className="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center text-secondary mb-6 shadow-sm group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-primary">{service.title}</h3>
                <p className="font-rounded text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOBRE (Trajetória) --- */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Foto/Moldura Esquerda */}
          <div className="relative flex justify-center md:justify-end pr-8">
             <div className="w-[320px] h-[550px] bg-surface rounded-[2rem] rotate-2 flex items-center justify-center relative shadow-lg transition-transform hover:rotate-0 duration-500">
                 <div className="absolute inset-3 border border-secondary/20 rounded-[1.8rem]"></div>
                 <div className="text-center opacity-40">
                    <span className="block text-6xl font-serif text-secondary mb-2">P</span>
                    <span className="text-sm font-rounded tracking-widest uppercase">Foto Profissional</span>
                 </div>
                 {/* <img src="/tua-foto-sobre.jpg" className="absolute inset-0 w-full h-full object-cover rounded-[2rem]" /> */}
             </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-secondary text-sm uppercase tracking-widest font-bold font-rounded">Sobre Mim</span>
              <h2 className="text-4xl font-serif text-primary mt-2">Trajetória de Dedicação à Psicologia</h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed font-rounded text-lg">
              <p>Com mais de uma década de experiência, construí minha carreira integrando diferentes áreas da psicologia para oferecer um atendimento verdadeiramente multidisciplinar.</p>
              <p>Minha formação acadêmica sólida, aliada à vivência prática, permite compreender as nuances de cada pessoa.</p>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-surface p-6 rounded-2xl flex gap-5 hover:bg-[#efe6dd] transition duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg font-serif">Formação Acadêmica</h4>
                  <p className="font-rounded text-gray-600">Mestrado em Psicologia Clínica e especializações em diversas áreas.</p>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="bg-surface p-6 rounded-2xl flex gap-5 hover:bg-[#efe6dd] transition duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <Target size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg font-serif">Experiência Profissional</h4>
                  <p className="font-rounded text-gray-600">Mais de 10 anos atuando em clínica, organizações e projetos sociais.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface p-6 rounded-2xl flex gap-5 hover:bg-[#efe6dd] transition duration-300">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shrink-0 shadow-sm">
                  <Heart size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1 text-lg font-serif">Abordagem Humanizada</h4>
                  <p className="font-rounded text-gray-600">Escuta ativa e acolhimento para cada pessoa que busca meu trabalho.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARA QUEM É (TABS) --- */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-secondary text-sm uppercase tracking-widest font-bold font-rounded">Para quem é</span>
            <h2 className="text-4xl mt-3 font-serif text-primary">Encontre o Caminho Certo Para Você</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4"></div>
          </div>

          <div className="flex justify-center mb-0">
            <div className="flex w-full max-w-4xl bg-white rounded-t-xl overflow-hidden border-b border-gray-100">
              <button 
                onClick={() => setActiveTab('pacientes')}
                className={`flex-1 py-5 flex items-center justify-center gap-3 transition-all duration-300 font-rounded font-semibold text-lg
                  ${activeTab === 'pacientes' 
                    ? 'bg-primary text-white shadow-inner' 
                    : 'bg-white text-gray-500 hover:bg-gray-50'}`}
              >
                <Heart size={20} className={activeTab === 'pacientes' ? 'fill-current' : ''} />
                Pacientes
              </button>
              <button 
                onClick={() => setActiveTab('psicologos')}
                className={`flex-1 py-5 flex items-center justify-center gap-3 transition-all duration-300 font-rounded font-semibold text-lg
                  ${activeTab === 'psicologos' 
                    ? 'bg-primary text-white shadow-inner' 
                    : 'bg-white text-gray-500 hover:bg-gray-50'}`}
              >
                <TrendingUp size={20} />
                Psicólogos
              </button>
            </div>
          </div>

          <div className={`bg-white rounded-b-2xl rounded-tr-2xl p-8 md:p-14 shadow-sm max-w-4xl mx-auto border transition-all duration-500
             ${activeTab === 'psicologos' ? 'border-secondary/40' : 'border-gray-100'}`}>
             
             {activeTab === 'pacientes' ? (
               <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                 <div>
                   <h3 className="text-3xl font-serif text-primary mb-4">Você Merece Acolhimento e Transformação</h3>
                   <p className="text-gray-600 mb-8 font-rounded leading-relaxed">
                     Se você está passando por um momento difícil, sente que precisa de apoio emocional ou deseja se conhecer melhor, a psicoterapia pode ser o caminho para uma vida mais equilibrada e significativa.
                   </p>
                   <ul className="space-y-4 font-rounded text-gray-700">
                     {[
                       'Ansiedade e estresse do dia a dia',
                       'Dificuldades nos relacionamentos',
                       'Autoconhecimento e desenvolvimento pessoal',
                       'Transições de vida e carreira',
                       'Luto e perdas emocionais'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="mt-1 text-secondary"><Check size={18} strokeWidth={3} /></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                   <button className="mt-10 bg-primary text-white px-8 py-3 rounded-md font-rounded font-semibold flex items-center gap-2 hover:bg-opacity-90 transition shadow-lg hover:shadow-xl">
                     <Heart size={18} className="fill-current" /> Agendar Primeira Sessão
                   </button>
                 </div>

                 <div className="flex justify-center relative py-10">
                   <div className="relative w-72 h-72">
                      <div className="absolute inset-0 bg-[#F5F0EB] rounded-full flex items-center justify-center">
                        <Heart size={80} className="text-[#C5A47E]" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E6E8EB] rounded-full flex items-center justify-center shadow-lg border-4 border-white backdrop-blur-sm bg-opacity-80">
                         <span className="text-primary font-bold font-serif text-xl">Bem-estar</span>
                      </div>
                   </div>
                 </div>
               </div>
             ) : (
               <div className="grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
                 <div>
                   <h3 className="text-3xl font-serif text-primary mb-4">Transforme sua Carreira em Sucesso</h3>
                   <p className="text-gray-600 mb-8 font-rounded leading-relaxed">
                     Você se formou, tem conhecimento técnico, mas sente dificuldade em atrair clientes e se posicionar no mercado? Minha consultoria ajuda psicólogos a construírem uma marca forte e sustentável.
                   </p>
                   <ul className="space-y-4 font-rounded text-gray-700">
                     {[
                       'Dificuldade em conseguir novos pacientes',
                       'Insegurança com precificação de serviços',
                       'Presença digital fraca ou inexistente',
                       'Falta de estratégia de marketing',
                       'Desejo de se especializar em um nicho'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-3">
                         <span className="mt-1 text-secondary"><Check size={18} strokeWidth={3} /></span>
                         {item}
                       </li>
                     ))}
                   </ul>
                   <button className="mt-10 bg-primary text-white px-8 py-3 rounded-md font-rounded font-semibold flex items-center gap-2 hover:bg-opacity-90 transition shadow-lg hover:shadow-xl">
                     <TrendingUp size={18} /> Conhecer a Consultoria
                   </button>
                 </div>

                 <div className="flex justify-center relative py-10">
                   <div className="relative w-72 h-72">
                      <div className="absolute inset-0 bg-[#F5F0EB] rounded-full flex items-center justify-center">
                        <TrendingUp size={80} className="text-[#C5A47E]" strokeWidth={1.5} />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#e8dccf] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                         <span className="text-[#967D60] font-bold font-serif text-xl">Crescimento</span>
                      </div>
                   </div>
                 </div>
               </div>
             )}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-primary text-white pt-20 pb-10" id="contato">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-2xl font-serif font-bold mb-6">Dra. Psicóloga</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-rounded">
              Psicologia Clínica, Social e Educacional. Consultoria de Marketing para Psicólogos.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary cursor-pointer transition">
                <Linkedin size={20} />
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 font-serif">Links Rápidos</h5>
            <ul className="space-y-3 text-sm text-gray-400 font-rounded">
              <li><a href="#" className="hover:text-secondary">Sobre Mim</a></li>
              <li><a href="#" className="hover:text-secondary">Serviços</a></li>
              <li><a href="#" className="hover:text-secondary">Para Pacientes</a></li>
              <li><a href="#" className="hover:text-secondary">Para Psicólogos</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h5 className="font-bold mb-6 font-serif">Contato</h5>
            <div className="space-y-4 text-gray-400 text-sm font-rounded">
              <div className="flex items-center gap-3">
                <Mail size={18} /> contato@psicologa.com.br
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} /> (11) 99999-9999
              </div>
              <div className="flex items-center gap-3">
                 <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span> Atendimentos Online e Presenciais
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-500 font-rounded">
          <p>© 2026 Todos os direitos reservados.</p>
          <p>CRP XX/XXXXX</p>
        </div>
      </footer>

      {/* FAB WhatsApp */}
      <a href="#" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50">
        <MessageCircle size={24} />
      </a>

    </div>
  );
}

export default App;