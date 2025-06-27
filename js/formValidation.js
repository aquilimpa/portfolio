function validarFormulario(form, scope) {
  let isValid = true;

  // Ajusta o sufixo para pegar os IDs certos do form
  const suffix = form.id.includes('-2') ? '-2' : '';

  const fields = [
    { id: `nome${suffix}`, name: 'Nome' },
    { id: `email${suffix}`, name: 'E-mail' },
    { id: `ddd${suffix}`, name: 'DDD' },
    { id: `tell${suffix}`, name: 'Telefone' },
    { id: `mensagem${suffix}`, name: 'Mensagem' }
  ];

  fields.forEach(({ id, name }) => {
    const input = scope.getElementById(id);
    const error = scope.getElementById(`error-${id}`);

    if (!input || !input.value.trim()) {
      if (error) error.textContent = `O campo ${name} é obrigatório.`;
      isValid = false;
    } else if (error) {
      error.textContent = '';
    }
  });

  if (isValid) {
    alert('Formulário enviado com sucesso!');
    form.reset();
  }

  return isValid;
}

// Listener para formulários fora do web component
document.querySelectorAll('form:not(#contact-form-2)').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const scope = form.getRootNode();
    // validarFormulario(form, scope);
    const formData = new FormData(form);
    sendForm(formData);
  });
});

function sendForm(formData) {
  
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
    headers: {
      'Content-Type': 'application/json',
    },
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
      // alert('Mensagem enviada com sucesso!'); //Aqui pode por um modal de informe pro usuario
      contactForm.reset();
    })
    .catch(error => {
      // alert(`Erro: ${error.message}`); // Aqui informa o erro nisso
    });
}
