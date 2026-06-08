import React, { useState, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Button from '../components/ui/button';
import './testemunhos.css';

const Footer = lazy(() => import('../components/Footer'));

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
if (publicKey) {
    emailjs.init(publicKey);
}

interface CustomSelectProps {
    label: string;
    options: string[];
    value: string;
    placeholder?: string;
    error?: boolean;
    onChange: (val: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange, placeholder = "Selecione", error }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="campo">
            <label className="mb-2 block">{label}</label>
            <div className="selectcustomizado">
                <div
                    className={`selectbotao ${error ? '!border-red-500' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={!value ? "placeholder" : ""}>
                        {value || placeholder}
                    </span>
                    <svg viewBox="0 0 12 12" className={`seta ${isOpen ? 'aberto' : ''}`}>
                        <path fill="currentColor" d="M6 8L1 3h10z"></path>
                    </svg>
                </div>
                {isOpen && (
                    <div className="selectlista">
                        {options.map((opt) => (
                            <div
                                key={opt}
                                className="selectopcao"
                                onClick={() => {
                                    onChange(opt);
                                    setIsOpen(false);
                                }}
                            >
                                {opt}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const TestemunhosPage = () => {
    const [formData, setFormData] = useState({
        nome: '',
        testemunho: '',
        autorizacao: ''
    });
    const [errors, setErrors] = useState<Record<string, boolean>>({});
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const validateForm = () => {
        const newErrors: Record<string, boolean> = {};
        if (!formData.testemunho.trim() || formData.testemunho.trim().length < 100) newErrors.testemunho = true;
        if (!formData.autorizacao) newErrors.autorizacao = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
        if (e) e.preventDefault?.();

        if (!validateForm()) return;

        setIsLoading(true);

        const templateParams = {
            from_name: formData.nome.trim() || 'Anônimo',
            message: formData.testemunho,
            autorizacao: formData.autorizacao,
            timestamp: new Date().toLocaleString('pt-BR'),
            origin_page: 'Formulário de Testemunhos - Conferência Rios do Espírito',
            lead_id: Math.random().toString(36).substring(2, 9).toUpperCase(),
            year: new Date().getFullYear()
        };

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_TESTEMUNHOS_ID;
            const publicKeyEnv = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKeyEnv) {
                console.error('EmailJS credentials missing. Please check sua .env file.');
                alert('Erro na configuração do envio. Por favor, tente novamente mais tarde.');
                setIsLoading(false);
                return;
            }

            await emailjs.send(
                serviceId,
                templateId,
                templateParams
            );

            setIsSuccess(true);
            setFormData({
                nome: '',
                testemunho: '',
                autorizacao: ''
            });
        } catch (error: any) {
            console.error('Failed to send email:', error);
            const errorMessage = error?.text || 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.';
            alert(`Erro: ${errorMessage}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#F5F9FF] text-[var(--color-rvl-escuro)] selection:bg-[hsl(16_79%_54%)]/30 font-sf-pro transition-opacity duration-300">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] overflow-hidden">
                <div className="h-full bg-[radial-gradient(circle_at_top,_rgba(211,104,60,0.15),_transparent_65%)]"></div>
                <div className="absolute inset-x-0 bottom-0 h-[300px] bg-gradient-to-b from-transparent to-[#F5F9FF]"></div>
            </div>
            <div className="pointer-events-none absolute -left-10 top-40 h-[320px] w-[320px] rounded-full bg-[hsl(16_79%_54%)]/10 blur-[120px]"></div>

            <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[600px] overflow-hidden" aria-hidden="true">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 0",
                        maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
            `,
                        WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
            `,
                        maskComposite: "intersect",
                        WebkitMaskComposite: "source-in",
                    }}
                />
            </div>

            <main className="relative z-10">
                <section className="contact-section !pt-20 !pb-20">
                    <div className="quadro">
                        <div className="titulo">
                            <motion.button
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                onClick={() => window.history.back()}
                                className="mb-4 px-4 py-2 rounded-lg bg-[hsl(16_79%_54%)]/10 hover:bg-[hsl(16_79%_54%)]/20 text-[var(--color-rvl-escuro)] font-medium transition-colors duration-200 inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Voltar
                            </motion.button>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-center mb-3.5"
                            >
                                <img
                                    src="/assets/Logo  Horizontal Branca.svg"
                                    alt="Conferência Rios do Espírito"
                                    className="h-28 sm:h-40 opacity-90 object-contain"
                                    style={{ filter: 'brightness(0)' }}
                                />
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-center text-sm sm:text-base max-w-2xl mx-auto mb-8 font-medium"
                                style={{ color: '#000000' }}
                            >
                                Queremos ouvir o que Deus fez na sua vida através da Conferência Rios do Espírito. Seu testemunho pode inspirar outras pessoas e também poderá ser usado em nossos conteúdos (caso seja autorizado)
                            </motion.p>
                        </div>

                        <motion.form
                            variants={{
                                hidden: { opacity: 0 },
                                show: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.08
                                    }
                                }
                            }}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="campo">
                                <label htmlFor="nome">Nome (Opcional - Responda de forma anônima se preferir)</label>
                                <input
                                    type="text"
                                    id="nome"
                                    value={formData.nome}
                                    placeholder="Seu nome ou deixe em branco"
                                    className={errors.nome ? '!border-red-500' : ''}
                                    onChange={(e) => {
                                        handleChange('nome', e.target.value);
                                        if (errors.nome) setErrors(prev => ({ ...prev, nome: false }));
                                    }}
                                />
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="campo">
                                <label htmlFor="testemunho">
                                    <span className="block mb-2 font-bold text-[var(--cor-escuro)]">Compartilhe seu testemunho *</span>
                                    <span className="block text-sm font-normal text-gray-600 mb-1">
                                        • Como você estava ANTES de participar da conferência? (Tente ser específico: emocionalmente, espiritualmente ou em alguma área da sua vida)
                                    </span>
                                    <span className="block text-sm font-normal text-gray-600 mb-1">
                                        • Durante a conferência, teve algum momento marcante? (Pode ser uma palavra, um culto, uma experiência com Deus… descreva o que aconteceu)
                                    </span>
                                    <span className="block text-sm font-normal text-gray-600 mb-1">
                                        • O que MUDOU na sua vida depois da conferência? (Se possível, conte mudanças práticas — atitudes, decisões, direção, cura, etc.)
                                    </span>
                                    <span className="block text-sm font-normal text-gray-600 mb-3">
                                        • Se você pudesse resumir sua experiência, o que você falaria?
                                    </span>
                                </label>
                                <textarea
                                    id="testemunho"
                                    value={formData.testemunho}
                                    placeholder="Escreva seu testemunho aqui..."
                                    rows={8}
                                    style={{ overflow: 'hidden' }}
                                    className={errors.testemunho ? '!border-red-500' : ''}
                                    onChange={(e) => {
                                        e.target.style.height = 'auto';
                                        e.target.style.height = `${e.target.scrollHeight}px`;
                                        handleChange('testemunho', e.target.value);
                                        if (errors.testemunho && e.target.value.trim().length >= 100) setErrors(prev => ({ ...prev, testemunho: false }));
                                    }}
                                ></textarea>
                                {errors.testemunho && (
                                    <p className="text-red-500 text-sm mt-1 px-4">Seu testemunho deve ter no mínimo 100 caracteres.</p>
                                )}
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                <CustomSelect
                                    label="Você autoriza o uso do seu testemunho (texto, imagem e vídeo) para divulgação da Conferência Rios do Espírito em redes sociais, site e outros materiais? *"
                                    options={["Sim, autorizo!", "Não autorizo!"]}
                                    value={formData.autorizacao}
                                    placeholder="Selecione uma opção"
                                    error={errors.autorizacao}
                                    onChange={(val) => {
                                        handleChange('autorizacao', val);
                                        if (errors.autorizacao) setErrors(prev => ({ ...prev, autorizacao: false }));
                                    }}
                                />
                            </motion.div>

                            <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }} className="mt-8 flex justify-center w-fit mx-auto">
                                <Button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    loading={isLoading}
                                >
                                    {isLoading ? 'Enviando...' : 'Enviar Testemunho'}
                                </Button>
                            </motion.div>
                        </motion.form>
                    </div>

                    {isSuccess && (
                        <div className="modal-sucesso">
                            <motion.div
                                className="conteudo-sucesso"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            >
                                <div className="icone-sucesso">
                                    <div className="checkmark">
                                        <svg viewBox="0 0 52 52">
                                            <circle className="circle" cx="26" cy="26" r="25" fill="none" />
                                            <path className="check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                        </svg>
                                    </div>
                                </div>
                                <h2>Testemunho Recebido!</h2>
                                <p>Obrigado por compartilhar o que Deus fez na sua vida.</p>
                                <p className="subtexto">
                                    Seu testemunho <strong>edificará muitas outras vidas!</strong>
                                </p>
                                <button className="btn-inovetech-primary inline-flex items-center justify-center whitespace-nowrap rounded-full font-sf-pro font-medium tracking-tight h-[3.75rem] px-10 text-lg w-full sm:w-auto sm:min-w-[270px] mt-2" onClick={() => setIsSuccess(false)}>Fechar</button>
                            </motion.div>
                        </div>
                    )}

                </section>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default TestemunhosPage;
