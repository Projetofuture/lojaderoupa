import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-black">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Hero"
            className="w-full h-full object-cover opacity-75"
          />
        </div>
        <div className="relative flex flex-col items-start justify-center h-full px-8 max-w-7xl mx-auto text-white">
          <h1 className="text-6xl font-bold mb-4">BAS QUE TE</h1>
          <p className="text-xl mb-8">NOVAS ESTAMPAS!</p>
          <Link
            to="/lancamentos"
            className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Ver agora!
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Frete Grátis</h3>
            <p className="text-gray-600">Em compras acima de R$199</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Troca sem burocracia</h3>
            <p className="text-gray-600">Satisfação garantida</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Pagamento Seguro</h3>
            <p className="text-gray-600">Todas as formas de pagamento</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/category/masculino" className="relative group">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
                alt="Masculino"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">MASCULINO</h2>
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Ver coleção</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/category/feminino" className="relative group">
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95"
                alt="Feminino"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-white text-center">
                  <h2 className="text-4xl font-bold mb-4">FEMININO</h2>
                  <div className="flex items-center justify-center">
                    <span className="mr-2">Ver coleção</span>
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;