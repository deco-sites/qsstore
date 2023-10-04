export function BenefitsBanner(){
    return (
        <>
            <div class="flex md:flex-row flex-col border border-black md:h-[600px] h-[1000px]">
                
                <div class="flex flex-col border border-black md:h-full h-[50%]">
                    <h1 class="flex border border-black">
                        Quiksilver
                    </h1>
                    <h2 class="flex border border-black">
                        Freedom Benefits
                    </h2>
                    <h3 class="flex flex-col border border-black">
                        <p>A aventura começa aqui!</p>
                        <p>Cadastre-se no clube e receba nossas promoções.</p>
                    </h3>
                    <button class="flex border border-black">Botão</button>
                </div>
                
                <div class="grid grid-rows-2 grid-cols-2 md:h-full h-[50%]">
                    <div class="flex border flex-col border-black justify-center">
                        <div class="flex h-[50%]" >
                        <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Shipping_icon_updated.svg" alt="" class=" flex border object-contain border-black">
                        </div>        
                        <div class="flex border flex-col border-black">
                        <h1 class="object-contain flex border border-black">Frete grátis</h1>
                        <h2 class="object-contain flex border border-black">Frete grátis nas compras acima de R$ 199,90.</h2>
                        </div>
                    </div>
                    
                    <div class="flex border flex-col border-black justify-center">
                        <div class="flex h-[50%]">
                        <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Bday_icon_updated.svg" alt="" class="flex border fill-current object-contain border-black">
                        </div>
                        <div class="flex border flex-col border-black">
                        <h1 class="object-contain flex border border-black">Bônus de Aniversariante</h1>
                        <h2 class="object-contain flex border border-black">Receba 25% off no mês do seu aniversário.</h2>
                        </div>
                    </div>
                    
                    <div class="flex border flex-col border-black justify-center">
                        <div class="flex h-[50%]">
                        <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Reward_icon_updated.svg" alt="" class="flex border fill-current object-contain border-black">
                        </div>
                        <div class="flex border flex-col border-black">
                            <h1 class="object-contain flex border border-black">Brindes especiais</h1>
                            <h2 class="object-contain flex border border-black">Fique por dentro das promoções que valem brindes especiais.</h2>
                        </div>
                    </div>

                    <div class="flex border flex-col border-black justify-center">
                        <div class="flex h-[50%]">
                        <img src="https://www.quiksilver.com.br/custom/content/themes/Quiksilver/Images/Exclusive_icon_updated.svg" alt="" class="flex border fill-current object-contain border-black">
                        </div>
                        <div class="flex border flex-col border-black">
                        <h1 class="object-contain flex border border-black">Ofertas exclusivas</h1>
                        <h2 class="object-contain flex border border-black">Receba no seu e-mail ofertas só para assinantes.</h2>
                        </div>      
                    </div>
                </div>


            </div>
        </>
    );
}

export default BenefitsBanner;