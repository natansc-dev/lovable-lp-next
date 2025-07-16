import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-semibold text-xl">
          Logo
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
          <a href="#conteudo" className="text-foreground hover:text-primary transition-colors">Conteúdo</a>
          <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">Benefícios</a>
          <a href="#preco" className="text-foreground hover:text-primary transition-colors">Preço</a>
          <a href="#duvidas" className="text-foreground hover:text-primary transition-colors">Dúvidas</a>
        </div>
        
        <Button className="font-semibold">
          Quero Aprender
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;