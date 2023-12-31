
export function QsFooter() {
  return (
    <>
      <div class="flex h-[500px] w-full flex-col items-center justify-center bg-[#181818] text-[#ffffff] md:p-[30px] md:pt-12">
        <div class="flex h-[150px] w-full justify-center md:hidden">
          <div class="flex w-[50%] flex-col items-center justify-center gap-3 border border-gray-600">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.1 187.1" class="h-[40px] w-[40px]">
                <g>
                  <path fill="white" d="M59.5,187.1l-3.4-8.4C51.9,168,43.7,154.8,35,140.9C18.6,114.5,0,84.6,0,59.5C0,26.7,26.7,0,59.5,0   s59.5,26.7,59.5,59.5c0,25.1-18.6,55-35,81.4c-8.7,14-16.9,27.2-21.2,37.8L59.5,187.1z M59.5,7.4C30.7,7.4,7.3,30.8,7.3,59.5   c0,23,18,51.9,33.9,77.4c7,11.2,13.6,21.9,18.4,31.5c4.7-9.5,11.4-20.3,18.4-31.5c15.9-25.5,33.9-54.4,33.9-77.4   C111.8,30.8,88.3,7.4,59.5,7.4z M59.5,91.1c-17.4,0-31.6-14.2-31.6-31.6s14.2-31.6,31.6-31.6s31.6,14.2,31.6,31.6   S76.9,91.1,59.5,91.1z M59.5,35.3c-13.4,0-24.3,10.9-24.3,24.2s10.9,24.2,24.3,24.2s24.3-10.9,24.3-24.2S72.9,35.3,59.5,35.3z" />
                </g>
              </svg>
            </div>
            <h1>Encontre uma loja</h1>
          </div>
          <div class="flex w-[50%] flex-col items-center justify-center gap-3 border border-gray-600">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.6 212.6" class="h-[40px] w-[40px]">
                <g>
                  <polygon points="114.8,155.5 114.8,155.5 114.8,155.5 &#9;" />
                  <g>
                    <rect x="85.4" y="44.2" width="58.7" height="7" style="fill: rgb(255, 255, 255);" />
                    <rect x="57.4" y="110.2" width="114.8" height="7" style="fill: rgb(255, 255, 255);" />
                    <rect x="57.4" y="77.2" width="114.8" height="7" style="fill: rgb(255, 255, 255);" />
                  </g>
                  <g>
                    <polygon points="0,0 0,162.5 59.4,162.5 59.4,155.5 7,155.5 7,7 222.6,7 222.6,155.5 129.2,155.5 129.2,155.5 54.2,206.8 &#10;&#9;&#9;&#9;58.1,212.6 131.4,162.5 229.6,162.5 229.6,0 &#9;&#9;" style="fill: rgb(255, 255, 255);" />
                  </g>
                </g>
              </svg>
            </div>
            <h1>Entre em contato</h1>
          </div>
        </div>

        <div class="flex w-[100%] items-center justify-center border-b-[1px] border-gray-600 md:h-[400px] md:items-start md:justify-between md:px-[50px]">
          <div class="md:flex md:flex-col md:items-start md:justify-start md:gap-4">
            <h3 class="hidden text-sm font-medium uppercase tracking-widest md:flex">Encontre a Loja mais próxima</h3>
            <div class="hidden h-[45px] w-[240px] items-center border border-gray-500 md:flex">
              <input type="" class="h-[45px] w-[200px] bg-inherit p-3 text-sm font-thin outline-none placeholder:text-gray-500" placeholder="Cidade ou CEP" />

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.1 187.1" class="right-0 h-[30px] w-[30px] items-center justify-center">
                <g>
                  <path fill="white" d="M59.5,187.1l-3.4-8.4C51.9,168,43.7,154.8,35,140.9C18.6,114.5,0,84.6,0,59.5C0,26.7,26.7,0,59.5,0   s59.5,26.7,59.5,59.5c0,25.1-18.6,55-35,81.4c-8.7,14-16.9,27.2-21.2,37.8L59.5,187.1z M59.5,7.4C30.7,7.4,7.3,30.8,7.3,59.5   c0,23,18,51.9,33.9,77.4c7,11.2,13.6,21.9,18.4,31.5c4.7-9.5,11.4-20.3,18.4-31.5c15.9-25.5,33.9-54.4,33.9-77.4   C111.8,30.8,88.3,7.4,59.5,7.4z M59.5,91.1c-17.4,0-31.6-14.2-31.6-31.6s14.2-31.6,31.6-31.6s31.6,14.2,31.6,31.6   S76.9,91.1,59.5,91.1z M59.5,35.3c-13.4,0-24.3,10.9-24.3,24.2s10.9,24.2,24.3,24.2s24.3-10.9,24.3-24.2S72.9,35.3,59.5,35.3z" />
                </g>
              </svg>
            </div>
            <h3 class="mt-10 hidden text-sm font-medium uppercase tracking-widest md:flex">QUIKSILVER NAS REDES</h3>

            <div class="flex my-[50px] items-center justify-center md:my-0 md:gap-3 md:px-2">
              <a class="flex" href="https://www.instagram.com/quiksilverbrasil/?hl=pt-br">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-[40px] w-[50px]" viewBox="0 0 170.1 170.1">
                  <g>
                    <path fill="white" d="M112.4,24H57.7C39.1,24,24,39.1,24,57.7v54.7c0,18.6,15.1,33.7,33.7,33.7h54.7c18.6,0,33.7-15.1,33.7-33.7   V57.7C146,39.1,130.9,24,112.4,24z M135.2,112.4c0,12.6-10.2,22.8-22.8,22.8H57.7c-12.6,0-22.8-10.2-22.8-22.8V57.7   c0-12.6,10.2-22.8,22.8-22.8h54.7c12.6,0,22.8,10.2,22.8,22.8L135.2,112.4L135.2,112.4z" />
                    <path fill="white" d="M85,53.6c-17.3,0-31.4,14.1-31.4,31.4c0,17.3,14.1,31.4,31.4,31.4s31.4-14.1,31.4-31.4   C116.5,67.7,102.4,53.6,85,53.6z M85,105.6c-11.4,0-20.6-9.2-20.6-20.6c0-11.4,9.2-20.6,20.6-20.6s20.6,9.2,20.6,20.6   C105.6,96.4,96.4,105.6,85,105.6z" />
                    <path fill="white" d="M117.8,44.4c-2.1,0-4.1,0.8-5.6,2.3c-1.5,1.5-2.3,3.5-2.3,5.6c0,2.1,0.9,4.1,2.3,5.6c1.5,1.5,3.5,2.3,5.6,2.3   c2.1,0,4.1-0.9,5.6-2.3c1.5-1.5,2.3-3.5,2.3-5.6c0-2.1-0.8-4.1-2.3-5.6C121.9,45.3,119.9,44.4,117.8,44.4z" />
                  </g>
                </svg>
              </a>
              <a class="" href="https://youtube.com/channel/UCF3T6A4_3aDIRDm3ciI9hkQ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.1 170.1" class="h-[40px] w-[50px]">
                  <g>
                    <g>
                      <path fill="white" d="M142.9,87.5c-0.7-3.2-2.3-5.9-4.7-8c-2.4-2.2-5.2-3.4-8.3-3.8C120.1,74.6,105.1,74,85,74    c-20,0-35,0.5-44.9,1.6c-3.2,0.4-6,1.6-8.3,3.8c-2.4,2.2-3.9,4.8-4.7,8c-1.4,6.3-2.1,15.7-2.1,28.3c0,12.8,0.7,22.3,2.1,28.3    c0.7,3.2,2.3,5.9,4.7,8c2.4,2.2,5.2,3.4,8.3,3.7C50,157,65,157.6,85,157.6c20,0,35-0.6,44.9-1.7c3.1-0.3,5.9-1.6,8.3-3.7    c2.4-2.2,3.9-4.8,4.7-8c1.4-6.3,2.1-15.7,2.1-28.3C145,103,144.3,93.5,142.9,87.5z M59.3,95.6h-8.7v46.1h-8.1V95.6H34V88h25.3    L59.3,95.6L59.3,95.6z M81.2,141.7h-7.2v-4.4c-2.9,3.3-5.7,4.9-8.3,4.9c-2.5,0-4-1-4.7-3c-0.4-1.3-0.6-3.3-0.6-5.9v-31.7h7.2v29.5    c0,1.7,0,2.7,0.1,2.8c0.2,1.1,0.7,1.7,1.7,1.7c1.5,0,3-1.1,4.6-3.4v-30.6h7.2L81.2,141.7L81.2,141.7z M108.7,129.7    c0,3.9-0.2,6.6-0.7,8.1c-0.9,3-2.8,4.5-5.8,4.5c-2.6,0-5.1-1.5-7.5-4.5v3.9h-7.2V88h7.2v17.6c2.3-2.9,4.8-4.4,7.5-4.4    c2.9,0,4.8,1.5,5.8,4.5c0.5,1.4,0.7,4.1,0.7,8V129.7z M136.1,123.1h-14.5v7c0,3.7,1.2,5.6,3.7,5.6c1.8,0,2.9-1,3.2-2.9    c0.1-0.5,0.2-2.2,0.2-4.9h7.4v1.1c0,2.6-0.1,4.2-0.2,4.7c-0.2,1.5-0.7,2.9-1.7,4.4c-1.9,2.9-4.9,4.3-8.7,4.3    c-3.7,0-6.6-1.4-8.7-4.1c-1.6-2-2.3-5.1-2.3-9.4v-14c0-4.3,0.8-7.4,2.3-9.4c2.1-2.8,5-4.1,8.7-4.1c3.6,0,6.5,1.4,8.6,4.1    c1.5,2,2.2,5.1,2.2,9.4L136.1,123.1L136.1,123.1z" />
                      <path fill="white" d="M98.3,107.8c-1.2,0-2.5,0.6-3.6,1.8V134c1.2,1.2,2.4,1.8,3.6,1.8c2.1,0,3.2-1.8,3.2-5.4v-17.1    C101.5,109.6,100.4,107.8,98.3,107.8z" />
                      <path fill="white" d="M125.2,107.8c-2.4,0-3.6,1.8-3.6,5.5v3.7h7.3v-3.7C128.9,109.6,127.6,107.8,125.2,107.8z" />
                      <path fill="white" d="M54.6,44.8v21.9h8.1V44.8l9.8-32.3h-8.3l-5.5,21.3L53,12.5h-8.6c1.5,4.5,3.3,9.6,5.3,15.1    C52.2,35.1,53.8,40.8,54.6,44.8z" />
                      <path fill="white" d="M83.3,67.3c3.7,0,6.6-1.4,8.6-4.1c1.5-2,2.3-5.2,2.3-9.6V39.4c0-4.3-0.8-7.5-2.3-9.5c-2-2.8-4.9-4.1-8.6-4.1    c-3.6,0-6.5,1.4-8.5,4.1c-1.5,2-2.3,5.2-2.3,9.5v14.2c0,4.3,0.8,7.5,2.3,9.6C76.9,65.9,79.7,67.3,83.3,67.3z M79.9,38    c0-3.7,1.2-5.6,3.5-5.6c2.3,0,3.5,1.9,3.5,5.6v17c0,3.8-1.2,5.7-3.5,5.7c-2.3,0-3.5-1.9-3.5-5.7V38z" />
                      <path fill="white" d="M105.6,67.3c2.7,0,5.5-1.7,8.3-5v4.5h7.4V26.3H114v30.9c-1.6,2.3-3.2,3.5-4.6,3.5c-1,0-1.5-0.6-1.7-1.8    c-0.1-0.1-0.1-1.1-0.1-2.8V26.3h-7.4v31.9c0,2.8,0.2,4.8,0.6,6.1C101.5,66.3,103.1,67.3,105.6,67.3z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a class="" href="https://www.facebook.com/quiksilverbr">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.1 170.1" class="h-[40px] w-[50px]">
                  <path fill="white" d="M52.2,89.6h15.2v62.6c0,1.2,1,2.2,2.2,2.2h25.8c1.2,0,2.2-1,2.2-2.2V89.9h17.5c1.1,0,2.1-0.9,2.2-2l2.7-23.1  c0.1-0.6-0.1-1.3-0.6-1.7c-0.4-0.5-1-0.7-1.7-0.7H97.7V47.9c0-4.4,2.3-6.6,7-6.6c0.7,0,13.2,0,13.2,0c1.2,0,2.2-1,2.2-2.2V17.9  c0-1.2-1-2.2-2.2-2.2H99.7c-0.1,0-0.4,0-0.8,0c-3.2,0-14.1,0.6-22.8,8.6c-9.6,8.8-8.3,19.4-7.9,21.2v16.9h-16c-1.2,0-2.2,1-2.2,2.2  v22.8C50,88.6,51,89.6,52.2,89.6z" />
                </svg>
              </a>
            </div>
          </div>
          <div class="hidden flex-col md:flex">
            <h3 class="mb-4 hidden text-sm font-medium uppercase tracking-widest md:flex">Atendimento ao Consumidor</h3>
            <ul class="flex flex-col gap-2 text-xs font-light">
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/status-pedido-quiksilver" title="Status do Pedido" target="">Status do Pedido</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/tabela-de-medidas-quiksilver" title="Tabela de Medidas" target="">Tabela de Medidas</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/entregas-quiksilver" title="Entregas" target="">Entregas</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/trocas-devolucoes-quiksilver" title="Trocas e Devoluções" target="">Trocas e Devoluções</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/como-comprar-quiksilver" title="Como Comprar" target="">Como Comprar</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/perguntas-frequentes-quiksilver" title="Perguntas Frequentes" target="">Perguntas Frequentes</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/pagamentos-e-seguranca-quiksilver" title="Pagamentos e Segurança" target="">Pagamentos e Segurança</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/termos-e-condicoes-quiksilver" title="Termos e Condições" target="">Termos e Condições</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/politica-privacidade-quiksilver" title="Política de Privacidade" target="">Política de Privacidade</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/assistencia-tecnica-quiksilver" title="Garantia / Assistência Técnica" target="">Garantia / Assistência Técnica</a></li>
              <li class="hover:text-gray-600"><a href="/fale-conosco" title="Fale Conosco" target="">Fale Conosco</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/atendimento-consumidor-quiksilver/cupons-promocionais-e-descontos-quiksilver" title="Cupons Promocionais e Descontos" target="">Cupons Promocionais e Descontos</a></li>
            </ul>
          </div>
          <div class="hidden flex-col md:flex">
            <h3 class="mb-4 hidden text-sm font-medium uppercase tracking-widest md:flex">Boardriders Inc.</h3>
            <ul class="flex flex-col gap-2 text-xs font-light">
              <li class="hover:text-gray-600"><a href="https://www.quiksilver.com.br/seja-um-franqueado" title="Seja um Franqueado" target="_blank">Seja um Franqueado</a></li>
              <li class="hover:text-gray-600"><a href="/atletas" title="Quiksilver" target="">Atletas Quiksilver</a></li>
              <li class="hover:text-gray-600"><a href="/comunidade" title="Quiksilver" target="">Blog</a></li>
              <li class="hover:text-gray-600"><a href="/conteudo/boardriders-inc/institucional-quiksilver" title="Institucional" target="">Institucional</a></li>
            </ul>
          </div>
        </div>
        <div class="flex w-full flex-col items-center md:m-0 md:h-[50px] md:flex-row md:justify-between md:gap-[50px] md:p-0">
          <div>
            <a href="http:global.quiksilver.com?geo=none" class="flex items-center justify-center gap-2 p-7 text-sm font-semibold md:p-0" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <p class="text-center">Escolha sua região</p>
            </a>
          </div>

          <div class="flex m-0 h-[55px] w-[55px] items-center justify-center">
            <a href="https://www.quiksilver.com.br/" class="">
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Calque_1" class="h-[50px] w-[50px] transition-all hover:h-[55px] hover:w-[55px]" viewBox="0 0 734.2 388.4">
                <g>
                  <path fill="white" d="M734.2,388.3H40.9c-23.8,0-40.6-20-40.9-39.1V193.8c29.8,0,56.6-14.3,66.3-21.3c61.8-44.2,113.2-130.3,179-158.3   C264.6,6,302.1-7.3,349.3,5l56.5,56.3c0,0-29.5-13.9-73.3-13.9c-49.1,0-143.9,40.5-143.9,146.3c0,85.2,58.7,145.1,155.1,145.1   h340.9L734.2,388.3z" />
                  <path fill="white" d="M338.3,196.3c-3.6,3.5-1.7,7.6,3,7.5h39.1l27.5-23.3c5.8-5.7,11.3-4.6,11.3,1.5v46.4c-0.1,7.4,6.4,7.4,10.3,2.4l28.6-27   h37.5c3-0.1,5.1-3.9,1.1-7.8l-67.7-66.6c-4.8-4.9-15.3-4.9-19.9,0C407.5,131,338.3,196.3,338.3,196.3 M654.2,308.7H336.4   c-36,0-84.2-17.2-98.8-50.7c0,0,142.9-145.8,149.8-152.7c17.1-17,47.6-17,62.4,0L654.2,308.7z" />
                </g>
              </svg>
            </a>
          </div>

          <div class="flex mx-5 mb-6 mt-3 flex-col items-center justify-center text-sm font-light md:m-0 md:items-start md:text-xs">
            <div class="flex items-center justify-center text-center">
              <a href="/conteudo/atendimento-consumidor-quiksilver/politica-privacidade-quiksilver" title="Política de Privacidade" target="" class="border-r border-r-gray-500 pr-1 hover:underline md:hover:no-underline">Política de Privacidade </a>

              <a href="/conteudo/atendimento-consumidor-quiksilver/termos-e-condicoes-quiksilver" title="Termos e Condições" target="" class="pl-1 hover:underline md:hover:no-underline"> Termos e Condições</a>
            </div>
            <div class="justify-center text-center md:text-left">
              <p class="">Copyright © Quiksilver 2023, Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
    </div>
  </>
  );
}

export default QsFooter;
