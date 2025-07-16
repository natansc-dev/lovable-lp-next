import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "R$97",
      features: [
        "Acesso por 7 dias",
        "Estrutura base",
        "Suporte por e-mail"
      ],
      popular: false
    },
    {
      name: "Completo",
      price: "R$197",
      features: [
        "Acesso vitalício",
        "Templates prontos",
        "Suporte via WhatsApp"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "R$397",
      features: [
        "Acesso vitalício",
        "Sessão 1:1",
        "Consultoria de Copy",
        "Grupo fechado"
      ],
      popular: false
    }
  ];

  return (
    <section id="preco" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Preços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card p-8 rounded-lg shadow-card relative ${
                plan.popular ? 'border-t-4 border-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais vendido
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-6">
                  {plan.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold ${
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Escolher Plano
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;