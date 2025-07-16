const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>contato@seudominio.com</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Garantia</h3>
            <p className="text-muted-foreground">
              7 dias de garantia incondicional
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>© 2025 Seu Curso</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;