class ContactComponent extends HTMLElement {
  constructor() {
  super();
  this.shadow = this.attachShadow({ mode: 'open' });


    const cssGlobal = new URL('../css/global.css', import.meta.url).href;
    const template = document.createElement('template');
    template.innerHTML = `
      <link rel="stylesheet" href="${cssGlobal}">
      <link rel="stylesheet" type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css" />
      <link rel="stylesheet" type="text/css"
      href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css" />
      <section id="contact" class="section__container  bg__contact ">
      <div class="section_content section_content--horizontal  section_content--contact fade-in-left-normal">
        <div class="section__container-title section__container-title--contact">
          <h1 class="section__title start"> <span class="orange">—</span> <span data-i18n="contact"></span></h1>
          <h1 class="section__title--large start">
            <span data-i18n="contact_title_start"></span>
            <span class="orange" data-i18n="contact_title_end"></span>
          </h1>
          <p class="section__text  mgbt start" data-i18n="contact_sub_title"></p>

          <div class="hidden">
            <h1 class="start">
              <span class="cidade__title">Lifters - João Pessoa / PB - Brasil</span>
              <p class="endereco__title start">R. Fernando Luiz Henriques Dos Santos, 1271 - Jardim
                Oceania, João Pessoa - PB, 58037-051</p>
              <a class="gosht__button" target="_blank" href="">
                <span data-i18n="learn_more">
                </span>
                <i class="ph ph-arrow-right"></i>
              </a>
            </h1>
            <h1 class="start">
              <span class="cidade__title">Lifters - Campina grande / PB - Brasil</span>
              <p class="endereco__title start">R. Vidal de Negreiros, 231 - Centro, Campina Grande - PB,
                58400-263</p>
              <a class="gosht__button" target="_blank" href="">
                <span data-i18n="learn_more"></span>
                <i class="ph ph-arrow-right"></i>
              </a>
            </h1>
          </div>
        </div>
        <!-- form -->
        <div class="media contact__form fade-in-normal">
          <form class="form" id="contact-form-2" novalidate action="#" method="POST">
            <div class="form__row">
              <div class="form__group">
                <label for="nome" class="form__label" data-i18n="form_name"></label>
                <input type="text" id="nome-2" name="nome-2" class="form__input" placeholder="Ex: Sr. Carlos" required>
                <span class="form__error" id="error-nome-2"></span>
              </div>
              <div class="form__group">
                <label for="sobrenome" class="form__label" data-i18n="form_lastname"></label>
                <input type="text" id="sobrenome-2" name="sobrenome-2" class="form__input" placeholder="Ex: Victor">
              </div>
            </div>
            <div class="form__row">
              <div class="form__group">
                <label for="email" class="form__label" data-i18n="form_email"></label>
                <input type="email" id="email-2" name="email-2" class="form__input" placeholder="Ex: email@email.com" required>
                <span class="form__error" id="error-email-2"></span>
              </div>
              <div class="form__group">
                <label for="telefone" class="form__label" data-i18n="form_tell"></label>
                <div class="form__phone">
                  <input type="text" id="ddd-2" name="ddd-2" class="form__input form__input--ddd" placeholder="011" required>
                  <input type="text" id="tell-2" name="tell-2" class="form__input form__input--tel" placeholder="000000000000" required>
                </div>
                <span class="form__error" id="error-tell-2"></span>
                <span class="form__error" id="error-ddd-2"></span>
              </div>
            </div>
            <div class="form__row">
              <div class="form__group">
                <label for="empresa" class="form__label" data-i18n="form_company"></label>
                <input type="text" id="empresa-2" name="empresa-2" class="form__input" placeholder="Ex: Nome da empresa">
              </div>
              <div class="form__group">
                <label for="cargo" class="form__label" data-i18n="form_position"></label>
                <input type="text" id="cargo-2" name="cargo-2" class="form__input" placeholder="Ex: Cargo atual">
              </div>
            </div>
            <div class="form__row">
              <div class="form__group">
                <label for="mercado" class="form__label" data-i18n="form_market"></label>
                <select id="mercado-2" name="mercado-2">
                  <option>Selecione uma opção</option>
                </select>
                <span class="form__error" id="error-mercado-2"></span>
              </div>
              <div class="form__group">
                <label for="servico" class="form__label" data-i18n="form_service"></label>
                <select id="servico-2" name="servico-2" required>
                  <option>Selecione uma opção</option>
                </select>
                <span class="form__error" id="error-servico-2"></span>
              </div>
            </div>
            <div class="form__group">
              <label for="mensagem" class="form__label" data-i18n="form_message"></label>
              <textarea id="mensagem-2" name="mensagem-2" class="form__textarea" placeholder="Digite sua mensagem" rows="3"
                required></textarea>
              <span class="form__error" id="error-mensagem-2"></span>
            </div>
            <div class="form__group">
              <p class="form__label" data-i18n="form_preference"></p>
              <div class="from_radio--position">
                <label class="form__radio">
                  <input type="radio" name="contato" value="whatsapp">
                  <span data-i18n="form_whats"></span>
                </label>
                <label class="form__radio">
                  <input type="radio" name="contato" value="email">
                  <span data-i18n="form_mail"></span>
                </label>
                <span class="form__error" id="error-contato-2"></span>
              </div>
            </div>
            <p class="form__privacidade mgbt">
              <span data-i18n="form_politic"></span>
              <a href="#" class="form__link"><span data-i18n="form_politic_link"></span></a>.
            </p>
            <div class="contact_submit mgbt">
              <button type="submit" class="btn__primary" data-i18n="form_submit"></button>
            </div>
          </form>
        </div>
        <div class="show__mobile ">
          <h1 class="mgbt">
            <span class="cidade__title">Lifters - João Pessoa / PB - Brasil</span>
            <p class="endereco__title ">R. Fernando Luiz Henriques Dos Santos, 1271 <br> Jardim
              Oceania, João Pessoa - PB, 58037-051</p>
            <a class="gosht__button" target="_blank" href="">
              <span data-i18n="learn_more">
              </span>
              <i class="ph ph-arrow-right"></i>
            </a>
          </h1>
          <h1>
            <span class="cidade__title">Lifters - Campina grande / PB - Brasil</span>
            <p class="endereco__title">R. Vidal de Negreiros, 231 - Centro, <br> Campina Grande - PB,
              58400-263</p>
            <a class="gosht__button" target="_blank" href="">
              <span data-i18n="learn_more"></span>
              <i class="ph ph-arrow-right"></i>
            </a>
          </h1>
        </div>

      </div>
    </section>
    `;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

connectedCallback() {
    const form = this.shadow.getElementById('contact-form-2');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const formData = new FormData(form);
        window.sendForm(formData);
      });
    }
  }
}

customElements.define('contact-component', ContactComponent);
