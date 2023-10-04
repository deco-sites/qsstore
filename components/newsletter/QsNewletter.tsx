export interface Props{
    title: string;
    description: string;
}

const  defaultTitle = 'Novidades e Promoções!';
const  defaulDescription = 'Cadastre-se agora e receba todas as novidades e promoções exclusivas da Quiksilver!';

export function QsNewsletter({title = defaultTitle, description = defaulDescription} : Props) {
  return (
    <>
      <div 
        class="font-hurme block h-[360px] w-full items-center justify-center bg-black 
              px-[5%] md:h-[390px]">
        <div 
          class="flex h-full min-w-[80%] flex-col items-center justify-center gap-4 p-6 text-white md:bg-[#181818]">
          <h1 
            class="text-center text-3xl font-extrabold uppercase md:text-4xl">
              {title}
          </h1>
          <h2 
            class="text-center text-sm md:text-base">
              {description}
          </h2>
          <div 
            class="flex flex-col items-center justify-evenly gap-4 pt-10 md:flex-row">
               
            <input type="text"
                  placeholder="Digite seu e-mail"
                  class="min-h-[45px] border border-solid border-white 
                        bg-[#ffffff99] px-[10px] py-0 text-black placeholder:text-gray-600" />

            <button 
                class="min-h-[40px] border border-solid border-white 
                  px-10 hover:bg-white hover:text-black">Cadastre-se</button>
          </div>
        </div>
      </div>
    </>
  );
}
  
export default QsNewsletter;
  