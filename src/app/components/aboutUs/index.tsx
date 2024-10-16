import Image from 'next/image'
import { FaLeaf, FaHeart, FaHandHoldingHeart } from 'react-icons/fa'
import Link from 'next/link'

export function AboutUs() {
    return (
        <div className="container mx-auto bg-slate-100 py-16 px-4 mb-16 min-h-96">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
                <div className="mb-8 md:hidden">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">
                        Valle dos Reis
                    </h2>
                    <h3 className="text-2xl font-bold text-gray-800 text-center italic">
                        Cemitério e Crematório
                    </h3>
                    <p className="text-sm font-bold text-gray-800 mb-4 text-center">
                        <i>Oferecendo acolhimento nos momentos mais difíceis.</i>
                    </p>
                    <hr className="border-t-2 border-[#ae9668] w-1/4 mx-auto"/>
                </div>
                <div className="mb-8 w-full md:w-auto">
                    <Image
                        src="/images/banner/fachada-valle-dos-reis-cemiterio-e-crematorio-embu-das-artes-taboao-da-serra.jpg"
                        alt="Sobre Nós"
                        width={600}
                        height={400}
                        className="rounded-lg w-full md:w-auto shadow-lg"
                    />
                </div>
                <div className="max-w-2xl space-y-6">
                    <div className="hidden md:block">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Valle dos Reis
                        </h2>
                        <h3 className="text-2xl font-bold text-gray-800 italic">
                            Cemitério e Crematório
                        </h3>
                        <p className="text-sm text-gray-800 mb-4">
                            <i>Oferecendo acolhimento nos momentos mais difíceis.</i>
                        </p>
                        <hr className="border-t-2 border-[#ae9668] w-1/4"/>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left pr-4">
                        O <span className="font-semibold">Valle dos Reis</span> é um cemitério e crematório dedicado a oferecer um local de <br/> descanso digno e sereno para seus entes queridos.
                        <br/>
                        Com uma equipe compassiva e instalações modernas, estamos comprometidos em <br/> proporcionar conforto e apoio durante momentos difíceis.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-8 text-[#ae9668]">
                        <div className="flex flex-col items-center">
                            <FaLeaf size={24} />
                            <span className="text-xs mt-2">Ambiente Sereno</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHeart size={24} />
                            <span className="text-xs mt-2">Cuidado Compassivo</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaHandHoldingHeart size={24} />
                            <span className="text-xs mt-2">Suporte Integral</span>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <Link href="/servicos" className="text-[#ae9668] hover:underline">
                            Saiba mais sobre nossos serviços →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
