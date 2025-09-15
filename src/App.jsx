import React, { useState, useEffect } from 'react'
import { Rnd } from 'react-rnd'
import './styles.css'
import './responsive.css'
import AboutInfo from './AboutInfo'
import ProjectsIcon from './assets/images/projects.png'
import AboutIcon from './assets/images/about.png'
import SkillsIcon from './assets/images/skills.png'
import ContactIcon from './assets/images/contact.png'
import Avatar from './assets/images/gif.gif'
import AvatarTumbado from './assets/images/contactgif.gif'

import PixelBlast from './components/PixelBlast/PixelBlast'
import Squares from './components/Squares/Squares'

export default function App() {
  // Estado de qué ventanas están abiertas
  const [open, setOpen] = useState({
    about: false,
    projects: false,
    skills: false,
    contact: false,
  })

  // Abrir "Sobre mí" al iniciar
  useEffect(() => {
    setOpen((o) => ({ ...o, about: true }))
  }, [])

  // Estado para guardar el tamaño actual de la ventana
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  // Listener para detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Función que devuelve la posición inicial según el tamaño de pantalla
  const getResponsivePosition = (left, top) => {
    if (windowSize.width < 768) {
      // móvil
      return { x: 20, y: 100 }
    }
    if (windowSize.width < 1024) {
      // tablet 
      return { x: 190, y: 100 }
    }
    // escritorio → posición definida manualmente
    return { x: left, y: top }
  }

  // Renderiza una ventana
  const renderWindow = (key, title, content, pos) =>
    open[key] && (
      <Rnd
        default={getResponsivePosition(pos.left, pos.top, 600, 500)}
        dragHandleClassName="window-header"
        cancel=".close-btn"   // <- evita que la X sea draggable
        enableResizing={false}
      >
        <div className="custom-window">
          <div className="window-header">
            <span>{title}</span>
            <button
              className="close-btn"
              onClick={() => setOpen((o) => ({ ...o, [key]: false }))}
            >
              ✖
            </button>
          </div>
          <div className="window-content">{content}</div>
        </div>
      </Rnd>
    )

  return (
    <div className="desktop">
      {/* Ventana Sobre mí */}
      {renderWindow(
        'about',
        'Sobre mí',
        <div className="about-content">
          <Squares
            speed={0.3}
            squareSize={50}
            direction="diagonal"
            borderColor="#adadadff"
            hoverFillColor="#222"
          />
          <div className="about-header">
            <h2>&lt;Elias Steve&gt;</h2>
            <h3>Desarrollador Web</h3>
          </div>
          <div className="about-main">
            <div className="about-avatar">
              <img src={Avatar} alt="avatar" className="avatarGif" />
            </div>
            <AboutInfo />
          </div>
        </div>,
        { left: 450, top: 180 }
      )}

      {/* Iconos de escritorio */}
      <div className="icon-column">
        <div
          className="desktop-icon"
          onClick={() => setOpen((o) => ({ ...o, projects: true }))}
        >
          <img src={ProjectsIcon} alt="Proyectos" className="icon-img" />
          <div>Proyectos</div>
        </div>
        <div
          className="desktop-icon"
          onClick={() => setOpen((o) => ({ ...o, about: true }))}
        >
          <img src={AboutIcon} alt="about" className="icon-img" />
          <div>Sobre mí</div>
        </div>
        <div
          className="desktop-icon"
          onClick={() => setOpen((o) => ({ ...o, skills: true }))}
        >
          <img src={SkillsIcon} alt="Skills" className="icon-img" />
          <div>Skills</div>
        </div>
        <div
          className="desktop-icon"
          onClick={() => setOpen((o) => ({ ...o, contact: true }))}
        >
          <img src={ContactIcon} alt="Contacto" className="icon-img" />
          <div>Contacto</div>
        </div>
      </div>

      {/* Ventana de Proyectos */}
      {renderWindow('projects', 'Proyectos', <p>Mis proyectos...</p>, {
        left: 250,
        top: 150,
      })}

      {/* Ventana Skills */}
      {renderWindow(
        'skills',
        'Skills',
        <div className="skills-window">
          {/* Sección 1: Programación */}
          <div className="skills-section">
            <h3>💻 Programación & Bases de datos</h3>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>Java, PHP</li>
              <li>React, Angular, Node.js</li>
              <li>MySQL / SQL</li>
              <li>PL/SQL (Oracle)</li>
              <li>Linux / Máquinas virtuales</li>
            </ul>
          </div>

          {/* Sección 2: Herramientas */}
          <div className="skills-section">
            <h3>🛠 Herramientas</h3>
            <ul>
              <li>Photoshop</li>
              <li>Git / GitHub</li>
              <li>VS Code</li>
            </ul>
          </div>

          {/* Sección 3: Aptitudes */}
          <div className="skills-section">
            <h3>🌟 Aptitudes</h3>
            <ul>
              <li>Autosuficiencia</li>
              <li>Buenas prácticas</li>
              <li>Amigable</li>
              <li>Creatividad</li>
              <li>Trabajo en equipo</li>
              <li>Multitarea</li>
              <li>Capacidad de enfoque</li>
              <li>Organización</li>
              <li>Gestión del tiempo</li>
              <li>Resolución de problemas</li>
              <li>Adaptabilidad</li>
              <li>Responsabilidad</li>
              <li>Paciencia</li>
            </ul>
          </div>
        </div>,
        { left: 1100, top: 50 }
      )}

      {/* Ventana Contacto */}
      {renderWindow(
        'contact',
        'Contacto',
        <div className="contact-content">
          <PixelBlast
            variant="square"
            pixelSize={3}
            patternScale={5}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples={false}
            liquid={false}
            speed={0.6}
            edgeFade={0.25}
            color="#929292"
          />
          <div className="contact-avatar">
            <img
              src={AvatarTumbado}
              alt="avatar tumbado"
              className="avatarGif"
            />
          </div>

          <div className="contact-info">
            <p>
              <strong>Email:</strong>{' '}
              <a>eliascontacto3@gmail.com</a>
            </p>
            <p>
              <strong>Teléfono:</strong>{' '}
              <a>+34 662 47 38 39</a>
            </p>

            <div className="contact-buttons">
              <button
                onClick={() =>
                  (window.location.href = 'mailto:eliascontacto3@gmail.com')
                }
              >
                ✉️ Enviar correo
              </button>
              <button
                onClick={() =>
                  navigator.clipboard.writeText('+34662473839')
                }
              >
                📋 Copiar número
              </button>
            </div>
          </div>
        </div>,
        { left: 170, top: 300 }
      )}
    </div>
  )
}
