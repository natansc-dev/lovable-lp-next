const HowItWorks = () => {
  const steps = [
    "Você acessa a área de membros com todas as aulas gravadas",
    "Aprende a lógica por trás de uma boa página de vendas",
    "Replica os modelos dentro do Lovable",
    "Personaliza e publica sua landing page em poucos cliques"
  ];

  return (
    <section id="conteudo" className="py-16 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Como Funciona
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card p-6 rounded-lg shadow-card text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-foreground">
                  {step}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;