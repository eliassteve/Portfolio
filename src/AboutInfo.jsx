import { useState } from "react";
import { Typewriter } from 'react-simple-typewriter';

function AboutInfo() {
    const [page, setPage] = useState(1);

    const pages = [
        "👋 Bienvenido a mi espacio digital.\nAquí comparto mi pasión por el frontend y diseño web, mostrando cómo las ideas pueden transformarse en páginas web.",
        "Mi meta es seguir creciendo como profesional, uniendo tecnología y diseño para crear proyectos innovadores que ofrezcan la mejor experiencia al usuario."
    ];

    const prevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const nextPage = () => {
        if (page < pages.length) setPage(page + 1);
    };

    return (
        <div className="about-info-wrapper">
            {/* Caja de texto */}
            <div className="about-info">
                <Typewriter
                    key={page}
                    words={[pages[page - 1]]} 
                    typeSpeed={50}
                    cursor
                    cursorStyle="|"
                />
            </div>

            {/* Paginador retro con flechas */}
            <div className="about-paginator">
                <button className="page-btn" onClick={prevPage} disabled={page === 1}>
                    🡰
                </button>
                <button className="page-btn" onClick={nextPage} disabled={page === pages.length}>
                    🡲
                </button>
            </div>
        </div>
    );
}

export default AboutInfo;
