import { Card } from 'flowbite-react';
import dota2Img from "/dota_heros_pentagonos.png";
import eldenRingImg from "/ER_fondo_2.jpg";
import hollowKnightImg from "/HN_2.jpg";
import wowImg from "/wow_fondo.jpg";

export default function News() {
    const news = [
        {
          id: 1,
          title: "Hollow Knight: Silksong ya tiene fecha y genera récords",
          summary: "Se lanza oficialmente el 4 de septiembre de 2025 y ya bate récords de jugadores concurrentes en Steam.",
          content: "Team Cherry confirmó la fecha de lanzamiento de Silksong para el 4 de septiembre de 2025, disponible en PC, Xbox, PlayStation y Nintendo Switch, incluyendo Game Pass desde el día de lanzamiento. El anterior Hollow Knight marcó un nuevo pico histórico de jugadores concurrentes en Steam tras el anuncio. Además, ya hubo speedruns del demo en Gamescom, y el equipo desarrollador adelantó planes ambiciosos de DLC post-lanzamiento. :contentReference[oaicite:0]{index=0}",
          image: hollowKnightImg,
          category: "Indie",
          date: "2025-08-27",
          author: "Team Cherry Updates"
        },
        {
          id: 2,
          title: "Dota 2 rumbo a TI 14: parche, meta y novedades",
          summary: "Valve lanzó el parche 7.39d; Shadow Shaman domina el meta y Gaimin Gladiators se retira del torneo.",
          content: "El parche 7.39d ya está activo, con ajustes importantes y contenido nuevo. En el escenario competitivo, Shadow Shaman se ha convertido en el pick dominante en múltiples torneos, mientras que Gaimin Gladiators anunció su retirada de The International 2025 a solo dos semanas del evento. :contentReference[oaicite:1]{index=1}",
          image: dota2Img,
          category: "Esports",
          date: "2025-08-24",
          author: "Dota 2 News"
        },
        {
          id: 3,
          title: "Elden Ring supera los 10 millones de DLC vendidos",
          summary: "El DLC Shadow of the Erdtree alcanza más de 10 millones de unidades vendidas, mientras el spin-off Nightreign supera los 5 millones.",
          content: "El DLC 'Shadow of the Erdtree' ha superado los 10 millones de unidades vendidas desde su lanzamiento en junio de 2024. Además, el juego independiente 'Elden Ring Nightreign' alcanzó los 5 millones tras su estreno en mayo de este año. :contentReference[oaicite:2]{index=2}",
          image: eldenRingImg,
          category: "RPG",
          date: "2025-08-24",
          author: "FromSoftware Milestones"
        },
        {
          id: 4,
          title: "World of Warcraft: Midnight revela nuevas funciones",
          summary: "Blizzard presentó la expansión Midnight con housing, una nueva raza, y la tercera especialización del Cazador de Demonios.",
          content: "En Gamescom 2025 Blizzard reveló la expansión 'Midnight' para WoW, que llegará en 2026. Introduce la tan esperada función de housing, una nueva raza (Haranir), una nueva especialización para Cazador de Demonios llamada 'Devourer', además de nuevas zonas, mazmorras y entornos visuales impresionantes. :contentReference[oaicite:3]{index=3}",
          image: wowImg,
          category: "MMORPG",
          date: "2025-08-26",
          author: "Blizzard News"
        }
      ];

    return (
        <main 
            className="min-h-screen bg-cover bg-center bg-fixed relative"
            style={{
                backgroundImage: `url(${hollowKnightImg})`
            }}
        >
            <div className="absolute inset-0 bg-black/80"></div>
            
            <div className="relative z-10">
                <section className="py-16">
                    <div className="max-w-7xl px-4 mx-auto text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Gaming News
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Las últimas noticias del mundo gaming. Mantente al día con todo lo que está pasando.
                        </p>
                    </div>
                </section>

                <section className="py-8">
                    <div className="max-w-7xl px-4 mx-auto">
                        <Card className="mb-12 bg-white/10 backdrop-blur border-white/20">
                            <div className="grid lg:grid-cols-2 gap-8">
                                <img
                                    src={news[0].image}
                                    alt={news[0].title}
                                    className="w-full h-80 object-cover rounded-lg"
                                />
                                <div className="p-4">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-gray-300">{news[0].date}</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-4">
                                        {news[0].title}
                                    </h2>
                                    <p className="text-lg text-gray-200 mb-6">
                                        {news[0].content}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-400">Por {news[0].author}</span>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.slice(1).map((article) => (
                                <Card key={article.id} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                    <div className="p-2">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-sm text-gray-400">{article.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-200 mb-4">
                                            {article.summary}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-400">{article.author}</span>
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
