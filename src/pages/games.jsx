import { Carousel, Button, Card } from 'flowbite-react';
import dota2Img from "../assets/dota_heros.png";
import eldenRingImg from "../assets/ER_fondo.jpg";
import hollowKnightImg from "../assets/HN_solo.jpg";
import wowImg from "../assets/wow_fondo_2.jpg";
import fondo from "../assets/wow_fondo.jpg";

export default function Games() {
    const games = [
        {
            title: "Dota 2",
            description: "MOBA competitivo de 5v5 con una enorme variedad de héroes y estrategia profunda.",
            url: "https://www.dota2.com",
            video: "https://www.youtube.com/embed/SmnqsdeHFT0",
            image: dota2Img
        },
        {
            title: "Elden Ring",
            description: "Acción RPG en un mundo abierto desafiante creado por FromSoftware.",
            url: "https://en.bandainamcoent.eu/elden-ring/elden-ring",
            video: "https://www.youtube.com/embed/E3Huy2cdih0",
            image: eldenRingImg
        },
        {
            title: "Hollow Knight",
            description: "Metroidvania atmosférico con un arte hermoso, exploración intrincada y combate preciso.",
            url: "https://www.hollowknight.com/",
            video: "https://www.youtube.com/embed/UAO2urG23S4",
            image: hollowKnightImg
        },
        {
            title: "World of Warcraft",
            description: "MMORPG legendario con vastas regiones, bandas y una comunidad global activa.",
            url: "https://worldofwarcraft.blizzard.com/",
            video: "https://www.youtube.com/embed/vlVSJ0AvZe0",
            image: wowImg
        }
    ];

    return (
        <main 
            className="min-h-screen bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage: `url(${fondo})`
            }}
        >
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10">
            <section className="min-h-screen flex items-center">
                <div className="max-w-7xl px-4 py-8 mx-auto w-full">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Descubre juegos increíbles
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Explora algunos de los títulos más populares: información, enlaces oficiales y videos.
                        </p>
                    </div>
                    <div className="h-[70vh] max-h-[600px] w-full">
                        <Carousel 
                            slide={true}
                            slideInterval={2000}
                            indicators={true}
                            leftControl="❮"
                            rightControl="❯"
                            pauseOnHover={false}
                            className="h-full"
                        >
                            {games.map((game, index) => (
                                <div key={index} className="relative flex h-full items-center justify-center">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute bottom-8 left-4 text-white">
                                        <h3 className="text-xl font-bold bg-black/50 px-3 py-1 rounded">
                                            {game.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-7xl px-4 mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12">
                    {games.map((game, index) => (
                        <Card key={index} className="w-full bg-white/10 backdrop-blur border-white/20">
                            <div className="mb-6">
                                <iframe
                                    className="w-full h-80 lg:h-96 rounded-lg shadow-lg"
                                    src={game.video}
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-2">
                                <h5 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                    {game.title}
                                </h5>
                                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                                    {game.description}
                                </p>
                                <Button 
                                    href={game.url} 
                                    target="_blank"
                                    size="lg"
                                    color="light"
                                    className="w-full text-xl"
                                >
                                    Visitar página oficial
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
            </div>
        </main>
    )
}