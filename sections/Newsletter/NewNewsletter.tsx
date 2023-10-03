
export interface Props{
  title: string;
  description: string;
}


export function NewNewsletter({title = "Apenas um título", description} : Props) {
  return (
    <div class="flex justify-center items-center bg-black h-[390px] w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="flex flex-col">
          <h1 class="text-white">{title}</h1>
          <p class="text-white">{description}</p>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default NewNewsletter;
