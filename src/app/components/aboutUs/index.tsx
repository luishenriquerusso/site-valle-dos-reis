import Image from 'next/image'

export function AboutUs() {
    return (
        <div className="container mx-auto py-16 px-4 mb-16 min-h-96">
            <div className="flex flex-row items-center justify-center space-x-8">
                <div>
                    <Image
                        src="/images/banner/fachada-valle-dos-reis-cemiterio-e-crematorio-embu-das-artes-taboao-da-serra.jpg"
                        alt="Sobre Nós"
                        width={600}
                        height={400}
                        className="rounded-lg"
                    />
                </div>
                <div className="max-w-2xl space-y-6">
                    
                    <h2 className="text-2xl line font-bold text-gray-800">
                        Valle dos Reis
                    </h2>
                    <h3 className="text-1xl font-bold text-gray-800 mb-4">
                        Cemitério e Crematório
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        O Valle dos Reis é um cemitério e crematório dedicado a oferecer um local de descanso digno e sereno para seus entes queridos.
                        Com uma equipe compassiva e instalações modernas, estamos comprometidos em proporcionar conforto e apoio durante momentos difíceis.
                    </p>
                </div>
            </div>
        </div>
    )
}