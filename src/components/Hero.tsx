import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-surface-alt py-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Crie Páginas de Vendas Profissionais Usando Apenas o Lovable
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Aprenda a montar páginas incríveis que convertem, sem precisar de designers ou programadores. 
              Método passo a passo testado e validado por agências.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-semibold">
                Quero Aprender
              </Button>
              <Button variant="ghost" size="lg" className="font-semibold">
                Ver Página Criada com o Método
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg shadow-card flex items-center justify-center">
              <div className="text-muted-foreground text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/20 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-6 4h6m2-8V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-2M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </div>
                <p className="text-sm">Vídeo Demonstração 16:9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;