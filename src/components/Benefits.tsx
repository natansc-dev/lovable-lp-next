const Benefits = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Economize Tempo e Dinheiro",
      description: "Crie páginas profissionais sem depender de terceiros"
    },
    {
      icon: "📈",
      title: "Layouts que Convertem",
      description: "Estrutura validada com foco em vendas"
    },
    {
      icon: "👁️",
      title: "100% Visual",
      description: "Sem código, sem complicação"
    },
    {
      icon: "🎯",
      title: "Aprenda com Casos Reais",
      description: "Aulas práticas com exemplos prontos e reutilizáveis"
    }
  ];

  return (
    <section id="beneficios" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Benefícios Principais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-primary/20 rounded border-2 border-primary"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;