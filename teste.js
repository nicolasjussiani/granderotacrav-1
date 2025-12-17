document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simula o processamento do formulário
    alert('Sua solicitação foi enviada com sucesso! Nicolas Giussani entrará em contato em breve. Obrigado pelo seu interesse.');
    
    // Aqui, na versão real, você enviaria os dados para um serviço de email ou CRM
    
    // Limpar o formulário (opcional)
    this.reset();
});