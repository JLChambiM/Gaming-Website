import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleVerMas = () => {
    navigate('/games');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="relative overflow-hidden group">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/dota2.jpg)`,
              backgroundColor: '#1a1a2e'
            }}
          />
          <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Dota 2
            </h1>
            <Button 
              color="gray"
              className="w-fit !bg-transparent !border-2 !border-white hover:!bg-white hover:!text-gray-900 transition-all duration-300"
              size="lg"
              onClick={handleVerMas}
            >
              VER MÁS
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-rows-2">
          <div className="relative overflow-hidden group">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/wow.jpg)`,
                backgroundColor: '#2d2d44'
              }}
            />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                World of Warcraft
              </h2>
              <Button 
                color="gray"
                className="w-fit !bg-transparent !border-2 !border-white hover:!bg-white hover:!text-gray-900 transition-all duration-300"
                size="md"
                onClick={handleVerMas}
              >
                VER MÁS
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/HollowKnight.jpg)`,
                  backgroundColor: '#1a1a2e'
                }}
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                  Hollow Knight
                </h3>
                <Button 
                  color="gray"
                  className="w-fit !bg-transparent !border-2 !border-white hover:!bg-white hover:!text-gray-900 transition-all duration-300"
                  size="sm"
                  onClick={handleVerMas}
                >
                  VER MÁS
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                style={{ 
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(src/assets/EldenRing.jpg)`,
                  backgroundColor: '#2d2d44' 
                }}
              />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
                <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">
                    Elden Ring
                </h3>
                <Button 
                  color="gray"
                  className="w-fit !bg-transparent !border-2 !border-white hover:!bg-white hover:!text-gray-900 transition-all duration-300"
                  size="sm"
                  onClick={handleVerMas}
                >
                  VER MÁS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
