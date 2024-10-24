import { FaLeaf, FaCoffee, FaPhone, FaCalculator, FaShieldAlt, FaWheelchair } from 'react-icons/fa'

export function Features() {
    return (
        <div className="container mx-auto py-16 px-4 mb-16 min-h-96">
       
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaLeaf className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Sustentabilidade</h3>
                    <p className="text-gray-600">Seguimos normas sustentáveis e nos preocupamos com o meio ambiente.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaCoffee className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Lanchonete</h3>
                    <p className="text-gray-600">Oferecemos uma lanchonete para sua comodidade.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaPhone className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Central do Cliente</h3>
                    <p className="text-gray-600">Agilidade atravez de nossos canais de atendimento.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaCalculator className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Condições e Parcelamentos</h3>
                    <p className="text-gray-600">As melhores condições, venha conversar conosco.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaShieldAlt className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Segurança 24Horas</h3>
                    <p className="text-gray-600">Grupo Siga cuidando de você!</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <FaWheelchair className="mx-auto mb-4 text-4xl text-[#ae9668]" />
                    <h3 className="text-xl font-semibold mb-2">Acessibilidade</h3>
                    <p className="text-gray-600">A atenção e conforto que você precisa.</p>
                </div>
            </div>
        </div>
    )
}
