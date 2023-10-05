//export { default } from '$store/components/ui/BenefitsBanner.tsx'

export function BenefitsBanner(){
    return (
        <>
            <div class="flex h-[1000px] flex-col justify-center bg-[#e3e3e3] px-10 pt-[15%] md:h-[600px] md:flex-row md:justify-start md:py-[15%]">
                <div class="flex ml-0 mr-[100px] h-[30%] w-full flex-col items-start gap-4 md:h-full md:w-[50%]">
                    <h1 class="text-left text-sm font-bold uppercase">Quiksilver</h1>
                    <h2 class="my-2 text-2xl font-extrabold capitalize md:my-0">Freedom Benefits</h2>
                    <div class="flex flex-col gap-2 text-sm">
                        <p>A aventura começa aqui!</p>
                        <p>Cadastre-se no clube e receba nossas promoções.</p>
                    </div>
                    <button class="flex mr-10 w-full max-w-[350px] justify-center bg-[#181818] hover:bg-[#333] py-2 text-center text-sm font-medium text-white">Cadastre-se Agora!</button>
                </div>

                <div class="grid h-[60%] w-full grid-cols-2 grid-rows-2 gap-2 p-3 md:h-full md:w-[50%] md:gap-20">
                    <div class="flex flex-col justify-center">
                        <div class="flex h-[40%] md:h-full">
                            <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Shipping_icon_updated.svg" alt="" class="flex object-contain" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="flex object-contain text-sm font-bold">Frete grátis</h1>
                            <h2 class="flex object-contain text-sm">Frete grátis nas compras acima de R$ 199,90.</h2>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center">
                        <div class="flex h-[40%] md:h-full">
                            <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Bday_icon_updated.svg" alt="" class="flex fill-current object-contain" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="flex object-contain text-sm font-bold">Bônus de Aniversariante</h1>
                            <h2 class="flex object-contain text-sm">Receba 25% off no mês do seu aniversário.</h2>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center md:mt-8 lg:mt-0">
                        <div class="flex h-[40%] md:h-full">
                            <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Reward_icon_updated.svg" alt="" class="flex fill-current object-contain" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="flex object-contain text-sm font-bold">Brindes especiais</h1>
                            <h2 class="flex object-contain text-sm">Fique por dentro das promoções que valem brindes especiais.</h2>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center">
                        <div class="flex h-[40%] md:h-full">
                            <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Exclusive_icon_updated.svg" alt="" class="flex fill-current object-contain" />
                        </div>
                        <div class="flex flex-col">
                            <h1 class="flex object-contain text-sm font-bold">Ofertas exclusivas</h1>
                            <h2 class="flex object-contain text-sm">Receba no seu e-mail ofertas só para assinantes.</h2>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}


export default BenefitsBanner;