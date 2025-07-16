import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Pronto para Criar Páginas que Vendem de Verdade?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Aprenda o método usado por agências e freelancers para gerar resultados reais com Lovable. 
          Comece agora mesmo!
        </p>
        <Button 
          size="lg" 
          className="bg-background text-foreground hover:bg-background/90 font-semibold"
        >
          Quero Aprender Agora
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;