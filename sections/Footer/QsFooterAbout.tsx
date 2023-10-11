import { useState } from "https://esm.sh/preact@10.15.1/compat";


export function QsFooterAbout() {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <>   
      <div class="h-[170px] bg-[#0102020] flex flex-col items-center justify-center py-[30px] px-[30px]">
        <div class="relative h-[100px] overflow-hidden">
          <p class = 'leading-loose text-[11px] text-[#505050] my-[12px] font-normal'>
            Como a marca de surf mais icônica que foi pioneira em gerações de progresso e inovação, a Quiksilver vem oferecendo o melhor dos melhores para surfistas em todo o mundo desde 1969. O que começou como uma empresa simplesmente enraizada no estilo de vida do surf, evoluiu para uma marca influente que oferece alta moda de qualidade para quem procura desempenho e conforto no mundo dos esportes de aventura. A extensão da Quiksilver nas categorias de esqui e snowboard foi uma parte natural do crescimento da marca e continuamos a ser uma das principais marcas de snowboard representadas nas montanhas, ano após ano. Na Quiksilver, inovamos para inspirar e, se nossos produtos puderem facilitar seu estilo de vida em busca de aventura, faremos nosso trabalho corretamente.
          </p>
          <strong class = 'text-xs text-[#505050] font-semibold py-[20px]'>SEU ESTILO DE VIDA SURF COMEÇA AQUI</strong>
          <p class = 'leading-loose text-[11px] text-[#505050] my-[12px] font-normal'>
            Do mar ao mar brilhante, e todas as montanhas entre elas, as roupas, os sapatos e os acessórios da Quiksilver vão mantê-lo totalmente coberto e preparado para enfrentar qualquer aventura. Ficamos à frente das tendências para que em cada estação possamos lançar produtos que não apenas satisfaçam suas necessidades de moda, mas que desempenhem um papel inovador em sua vida diária. Incorporamos os mais recentes tecidos e recursos técnicos a cada um de nossos produtos, para que você possa continuar a todo vapor em qualquer jornada de cada dia. Nossas roupas são projetadas para serem elegantes e funcionais, e nossos sapatos e acessórios adicionam o acabamento certo a qualquer roupa que você usar de manhã. Não importa se você está indo para a praia ou para as montanhas, a Quiksilver sabe exatamente o que você precisa para se vestir confortavelmente.
          </p>
          <strong class = 'text-xs text-[#505050] font-semibold py-[20px]'>QUIKSILVER: SURFAR É NOSSA PAIXÃO, A SURFWEAR É NOSSO NEGÓCIO</strong>
          <p class = 'leading-loose text-[11px] text-[#505050] my-[12px] font-normal'>
            Se você procura roupas de surf, a Quiksilver é o lugar pereito para fazer compras. Por quê? Porque desde que projetamos o primeiro par de boardshorts, descobrimos que temos um talento para projetar roupas de surf que são feitas para atuar tanto na água quanto no seu dia a dia. Quando se trata de surfar, há tantos caminhos diferentes, que você pode seguir, quer esteja interessado em competir ou simplesmente remar para a adrenalina diária, a Quiksilver tem roupas de surf que podem acomodar todos os níveis de atletas. Nós atendemos tanto aos longboarders quanto aos shortboarders, provando que mesmo que não sejamos todos surfistas de ondas grandes, nossos produtos de alto desempenho são capazes de levar suas habilidades a alturas impensáveis.
          </p>
          <p class = 'leading-loose text-[11px] text-[#505050] my-[12px] font-normal'>
            Quando se trata do lado técnico do surf, a Quiksilver não tem escassez de roupas de mergulho de desempenho que o manterão confortável em uma variedade de condições de água. De springsuits de clima quente a wetsuits neoprene de clima frio, a experiência de nossos designers brilha na qualidade de nossos projetos. Quando se trata de equipamentos técnicos de surf e acessórios para surf, dedicamos o tempo necessário à nossa pesquisa para que possamos integrar com confiança novos recursos de design em cada um de nossos produtos para melhorar a funcionalidade e o desempenho. A inovação está na vanguarda do nosso processo de design e, como surfistas, somos capazes de trazer um nível mais alto de conhecimento para a prancheta do que nossos concorrentes. O surf é um esporte técnico, e nosso compromisso em fornecer produtos de alta qualidade para facilitar seu tempo na água é o que nos diferencia na programação.
          </p>
          <p class = 'leading-loose text-[11px] text-[#505050] my-[12px] font-normal'>
            Você quer saber como é se comportar da melhor maneira possível na água? Pegue sua prancha de surf ou longboard e vá em frente. A equipe de surf da Quiksilver possui alguns dos melhores surfistas - e eles chegaram onde estão hoje, com muito trabalho e comprometimento. Assim como estamos comprometidos em fornecer a eles equipamentos e roupas de surf de melhor qualidade, nossa equipe de surfistas está empenhada em ampliar os limites do que é possível a cada vez que eles chegam em suas pranchas de surf. Na Quiksilver, adoramos ver a comunidade global do surf se unir para continuar progredindo no esporte e nos sentimos honrados todos os anos por patrocinar algumas das maiores competições de surf do mundo. Para nós, surfar não é apenas produto, mas sim criar peças de desempenho que ajudam a destacar as incríveis habilidades que nossos atletas têm a oferecer. O surf está no centro do nosso DNA e continuamos a buscar os melhores talentos a cada ano.
          </p>
          <div class="absolute bottom-0 left-0 right-0 h-[30%] w-full overflow-hidden bg-gradient-to-t from-white opacity-100"></div>
        </div>

    
        <button class="w-[30px] h-[30px]" onClick={toggleClass}> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" class="h-[30px] w-[30px]">
            <g>
              <g>
                <g>
                  <path fill="#010202" d="M15,0C6.7,0,0,6.7,0,15s6.7,15,15,15s15-6.7,15-15S23.3,0,15,0z M15,28.6C7.5,28.6,1.4,22.5,1.4,15     S7.5,1.4,15,1.4S28.6,7.5,28.6,15S22.5,28.6,15,28.6z"/>
                </g>
              </g>
            </g>
            <g>
              <g>
                <rect x="14.3" y="9" fill="#010202" class={`${active ? 'hidden fill-red-600' : 'fill-blue-600'}`} width="1.4" height="12"/>
                <rect x="9" y="14.3" fill="#010202" width="12" height="1.4"/>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
  
  export default QsFooterAbout;
  