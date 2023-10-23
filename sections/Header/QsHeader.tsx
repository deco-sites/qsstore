export function QsHeader () {
    return (
        <>
       <div class="flex h-16 w-full ">
          <div class=" flex w-48 ">
          <div class=" flex cursor-pointer pl-5">
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
      
        <div class="">
          <ul class="flex p-0">
            <li class="px-3.5">
              <div class="h-16 cursor-pointer px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Novidades</div>
            </li>
            <li class="px-3.5">
              <div class="h-16 cursor-pointer px-3.5 py-3.5 text-center font-semibold text-blue-600 md:text-red-600">Masculino</div>
            </li>
            <li class="px-3.5">
              <div class="h-16 cursor-pointer px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Surf</div>
            </li>
            <li class="px-3.5">
              <div class="whitespace-nowrap h-16 cursor-pointer px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Infantil e Juvenil</div>
            </li>
            <li class="px-3.5">
              <div class="h-16 cursor-pointer px-3.5 py-3.5 font-semibold text-blue-600 md:text-red-600">Outlet</div>
            </li>
          </ul>
        </div>
        <div class="flex items-center w-2 ">
          <input class="w-[120px] h-[32px]  p-2 cursor-pointer border border-black placeholder:" />
        </div>
        
        <div class="w-24 justify-center flex ">
          <svg class="h-16 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 306.1 388.4"><path d="M281.4 73.4h-51.9C227.7 32.8 193.9-.2 153-.2S78.3 32.7 76.5 73.3H23.7L-.1 388.2H306v-1L281.4 73.4zM153 16.4c31.8 0 58.3 25.5 60 57H93c1.7-31.5 28.2-57 60-57zM17.9 371.6L39.4 89.9h37v54.5h16.5V89.9h120.2v54.5h16.5V89.9h37.9l21.4 281.7h-271z"/></svg>
        </div>
      </div>
     </>
    );
}

export default QsHeader;