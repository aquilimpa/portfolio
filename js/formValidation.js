window.sendForm = function(formData) {
  const dados = {
    name: formData.get('nome-2'),
    lastname: formData.get('sobrenome-2'),
    email: formData.get('email-2'),
    ddd: formData.get('ddd-2'),
    phone: formData.get('tell-2'),
    enterprise: formData.get('empresa-2'),
    role: formData.get('cargo-2'),
    market: formData.get('mercado-2'),
    service: formData.get('servico-2'),
    message: formData.get('mensagem-2'),
    contact: formData.get('contato')
  };

  fetch('https://backend.lifters.me/items/lifters_leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })
    .then(async response => {
      if (!response.ok) {
        const responseText = await response.text();
        let errorMessage = 'Ocorreu um erro desconhecido.';
        if (responseText) {
          try {
            const errorResponse = JSON.parse(responseText);
            errorMessage = errorResponse.errors?.[0]?.message || errorMessage;
          } catch {
            errorMessage = responseText;
          }
        }
        throw new Error(errorMessage);
      }
      console.log('Formulário enviado com sucesso');
    })
    .catch(error => {
      console.error(`Erro: ${error.message}`);
    });
};
