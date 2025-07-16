'use client';

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Preciso saber design ou programação?",
      answer: "Não! O curso é totalmente visual e feito para iniciantes."
    },
    {
      question: "O Lovable é gratuito?",
      answer: "Sim, existe plano gratuito. Você pode usar para aplicar o método sem pagar nada pela ferramenta."
    },
    {
      question: "Vou conseguir criar páginas para clientes também?",
      answer: "Sim. Você pode aplicar o método para seu próprio negócio ou para vender como serviço."
    }
  ];

  return (
    <section id="duvidas" className="py-16 bg-surface-alt">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          FAQ
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-lg shadow-card overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">
                  P: {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <>
                  <div className="h-px bg-border mx-6"></div>
                  <div className="p-6 pt-4">
                    <p className="text-muted-foreground">
                      <strong>R:</strong> {faq.answer}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;