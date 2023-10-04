export function BenefitsBanner(){
    return (
        <>
            <div class="flex md:flex-row flex-col border border-black">
                <div class="flex flex-col border border-black">
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
                <div class="grid grid-rows-2 grid-cols-2">
                    <div class="flex border border-black">
                        <div>imageplaceholder</div>
                        <h1 class="flex border border-black"></h1>
                        <h2 class="flex border border-black"></h2>
                    </div>
                    <div class="flex border border-black">
                        BOX 12
                    </div>
                    <div class="flex border border-black">
                        BOX 21
                    </div>
                    <div class="flex border border-black">
                        BOX 22
                    </div>
                </div>


            </div>
        </>
    );
}

export default BenefitsBanner;