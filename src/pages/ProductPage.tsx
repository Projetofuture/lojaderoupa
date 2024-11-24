import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedType, setSelectedType] = useState('classic');

  const sizes = ['PP', 'P', 'M', 'G', 'GG', 'G1', 'G2', 'G3'];
  const types = [
    { id: 'classic', name: 'Classic', desc: '100% algodão' },
    { id: 'comfort', name: 'Confort', desc: '96% algodão 4% elastano' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
            alt="Product"
            className="w-full rounded-lg"
          />
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
                alt={`Thumbnail ${i + 1}`}
                className="w-full rounded-lg cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Camiseta Personalizada</h1>
          <div className="space-y-2">
            <p className="text-2xl font-semibold">R$ 79,90</p>
            <p className="text-gray-600">até 2x de R$ 39,95 sem juros</p>
          </div>

          {/* Type Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold">Selecione a opção de Camiseta:</h3>
            <div className="grid grid-cols-1 gap-4">
              {types.map((type) => (
                <button
                  key={type.id}
                  className={`p-4 border rounded-lg text-left ${
                    selectedType === type.id
                      ? 'border-black'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedType(type.id)}
                >
                  <p className="font-medium">{type.name}</p>
                  <p className="text-gray-600 text-sm">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold">Selecione o Tamanho:</h3>
            <div className="grid grid-cols-4 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`py-2 border rounded ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition">
            Comprar
          </button>

          {/* Shipping Calculator */}
          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Calcule o frete:</h3>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Digite seu CEP"
                className="flex-grow border rounded-lg px-4 py-2"
              />
              <button className="bg-gray-100 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                Calcular
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;