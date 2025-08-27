import { Card, Button } from 'flowbite-react';
import { 
    FaSteam, 
    FaTwitter, 
    FaYoutube, 
    FaReddit, 
    FaInstagram, 
    FaGlobe, 
    FaFacebook,
    FaFire
} from 'react-icons/fa';
import dota2Img from "../assets/dota2.jpg";

export default function Contact() {
    const socialLinks = [
        {
            game: "Dota 2",
            links: [
                { platform: "Steam", url: "https://store.steampowered.com/app/570/Dota_2/", icon: FaSteam, color: "bg-gray-700 hover:bg-gray-600" },
                { platform: "Twitter", url: "https://twitter.com/dota2", icon: FaTwitter, color: "bg-blue-500 hover:bg-blue-400" },
                { platform: "YouTube", url: "https://www.youtube.com/user/dota2", icon: FaYoutube, color: "bg-red-600 hover:bg-red-500" },
                { platform: "Reddit", url: "https://www.reddit.com/r/DotA2/", icon: FaReddit, color: "bg-orange-600 hover:bg-orange-500" }
            ]
        },
        {
            game: "Elden Ring",
            links: [
                { platform: "Steam", url: "https://store.steampowered.com/app/1245620/ELDEN_RING/", icon: FaSteam, color: "bg-gray-700 hover:bg-gray-600" },
                { platform: "Twitter", url: "https://twitter.com/eldenring", icon: FaTwitter, color: "bg-blue-500 hover:bg-blue-400" },
                { platform: "YouTube", url: "https://www.youtube.com/channel/UCF-jZ7CGa2m9nTIvgUUx_bQ", icon: FaYoutube, color: "bg-red-600 hover:bg-red-500" },
                { platform: "Instagram", url: "https://www.instagram.com/eldenring/", icon: FaInstagram, color: "bg-pink-600 hover:bg-pink-500" }
            ]
        },
        {
            game: "Hollow Knight",
            links: [
                { platform: "Steam", url: "https://store.steampowered.com/app/367520/Hollow_Knight/", icon: FaSteam, color: "bg-gray-700 hover:bg-gray-600" },
                { platform: "Twitter", url: "https://twitter.com/teamcherryau", icon: FaTwitter, color: "bg-blue-500 hover:bg-blue-400" },
                { platform: "Website", url: "https://www.hollowknight.com/", icon: FaGlobe, color: "bg-green-600 hover:bg-green-500" },
                { platform: "Reddit", url: "https://www.reddit.com/r/HollowKnight/", icon: FaReddit, color: "bg-orange-600 hover:bg-orange-500" }
            ]
        },
        {
            game: "World of Warcraft",
            links: [
                { platform: "Battle.net", url: "https://worldofwarcraft.blizzard.com/", icon: FaFire, color: "bg-blue-800 hover:bg-blue-700" },
                { platform: "Twitter", url: "https://twitter.com/warcraft", icon: FaTwitter, color: "bg-blue-500 hover:bg-blue-400" },
                { platform: "YouTube", url: "https://www.youtube.com/user/WorldofWarcraft", icon: FaYoutube, color: "bg-red-600 hover:bg-red-500" },
                { platform: "Facebook", url: "https://www.facebook.com/Warcraft", icon: FaFacebook, color: "bg-blue-700 hover:bg-blue-600" }
            ]
        }
    ];

    return (
        <main 
            className="min-h-screen bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage: `url(${dota2Img})`
            }}
        >
            <div className="absolute inset-0 bg-black/75"></div>
            
            <div className="relative z-10">
                <section className="py-16">
                    <div className="max-w-6xl px-4 mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Síguenos
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Mantente conectado con las comunidades oficiales de tus juegos favoritos
                        </p>
                    </div>
                </section>

                <section className="py-8">
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {socialLinks.map((gameData, index) => (
                                <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                                            {gameData.game}
                                        </h2>
                                        <div className="grid grid-cols-2 gap-4">
                                            {gameData.links.map((link, linkIndex) => {
                                                const IconComponent = link.icon;
                                                return (
                                                    <a
                                                        key={linkIndex}
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 ${link.color}`}
                                                    >
                                                        <IconComponent className="text-xl" />
                                                        {link.platform}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>               
            </div>
        </main>
    );
}
