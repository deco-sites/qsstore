export function QsHeader () {
    return (
        <>
        <div class="flex h-16 w-full border border-black">
        <div class="mr-auto flex w-52 border border-black">
          <div class="mr-auto flex cursor-pointer border border-black pl-5">
            <svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 35" fill="#11100e">
              <g id="Camada_2" data-name="Camada 2">
                <g id="Camada_1-2" data-name="Camada 1">
                  <g id="svg2">
                    <g id="g10">
                      <g id="g12">
                        <g id="g56-4-8"><path id="path58-0-0" class="cls-1" d="M65 35H3.62A3.65 3.65 0 010 31.47v-14a10.87 10.87 0 005.87-1.92c5.47-4 10-11.75 15.85-14.27a13.87 13.87 0 019.22-.84l5 5.08a16.42 16.42 0 00-6.5-1.25c-4.34 0-12.74 3.65-12.74 13.19 0 7.69 5.2 13.07 13.73 13.07h30.18z" /></g>
                        <g id="g60-1-2"><path id="path62-7-4" class="cls-1" d="M57.92 27.82H29.78c-3.19 0-7.46-1.56-8.74-4.57 0 0 12.65-13.14 13.26-13.76a3.89 3.89 0 015.53 0zM30 17.7c-.32.31-.15.68.27.67h3.46l2.44-2.1c.5-.51 1-.42 1 .13v4.18c0 .66.57.66.92.23l2.54-2.44h3.27c.25 0 .44-.36.08-.71l-6-6a1.35 1.35 0 00-1.77 0L30 17.7" /></g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      
        <div class="border border-red-500">
          <ul class="flex justify-center p-0">
            <li class="px-3.5">
              <div class="text-xs[1.4rem] h-16 cursor-pointer border border-green-500 px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Novidades</div>
            </li>
            <li class="px-3.5">
              <div class="text-xs[1.4rem] h-16 cursor-pointer border border-green-500 px-3.5 py-3.5 text-center font-semibold text-blue-600 md:text-red-600">Masculino</div>
            </li>
            <li class="px-3.5">
              <div class="text-xs[1.4rem] h-16 cursor-pointer border border-green-500 px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Surf</div>
            </li>
            <li class="px-3.5">
              <div class="text-x h-16 cursor-pointer border border-green-500 px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Infantil e Juvenil</div>
            </li>
            <li class="px-3.5">
              <div class="text-xs[1.4rem] h-16 cursor-pointer border border-green-500 px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Outlet</div>
            </li>
          </ul>
        </div>
        <input type="text" autocomplete="off" placeholder="Procurar" class="relative cursor-pointer " />
        <div class="w-[102.75px] border border-green-600"></div>
      </div>
     </>
    );
}

export default QsHeader;