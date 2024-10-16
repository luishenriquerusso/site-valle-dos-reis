import { FaTree, FaUmbrellaBeach, FaFireAlt, FaHeadset, FaCalendarAlt, FaHeart } from 'react-icons/fa'

export function Features() {
    return (
        <div className="container mx-auto py-16 px-4 mb-16 min-h-96">
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaTree className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Ambiente Tranquilo</h3>
                    <p className="text-gray-600">Um local sereno para homenagear e recordar seus entes queridos.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaFireAlt className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Serviços de Cremação</h3>
                    <p className="text-gray-600">Oferecemos opções de cremação.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaHeadset className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
                    <p className="text-gray-600">Nossa equipe está disponível a qualquer momento para auxiliá-lo.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaCalendarAlt className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Planejamento Antecipado</h3>
                    <p className="text-gray-600">Ajudamos no planejamento funeral para sua tranquilidade futura.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaHeart className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Cerimônias Personalizadas</h3>
                    <p className="text-gray-600">Organizamos cerimônias únicas que honram a memória do seu ente querido.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaUmbrellaBeach className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Jardins Memoriais</h3>
                    <p className="text-gray-600">Belos jardins para reflexão e lembrança em um ambiente natural.</p>
                </div>
            </div>
        </div>
    )
}
