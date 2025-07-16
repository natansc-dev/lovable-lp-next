const ProblemSolution = () => {
  return (
    <section className="py-16 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-lg shadow-card border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-foreground mb-4">Modo antigo:</h3>
            <p className="text-muted-foreground text-lg">
              Você depende de um programador ou designer, gasta tempo com ferramentas complexas…
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-card border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-foreground mb-4">Novo jeito:</h3>
            <p className="text-muted-foreground text-lg">
              Você mesmo monta páginas modernas, rápidas e responsivas direto no Lovable, 
              com um processo visual simples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;