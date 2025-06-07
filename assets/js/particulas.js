document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ff88"
            },
            "shape": {
                "type": "char",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "character": {
                    "value": ["{", "}", "[", "]", "(", ")", "<", ">", ";", "=", "+", "-", "*", "/"],
                    "font": "monospace",
                    "style": "",
                    "weight": "400"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 12,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00b3ff",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Efecto de consola
    const consoleText = [
        "> npm init portfolio\n",
        "✔ Inicializando repositorio\n",
        "✔ Configurando dependencias\n",
        "> Instalando: Angular@latest\n",
        "> Instalando: TypeScript@4.0\n",
        "> Instalando: RxJS@7.0\n",
        "✔ Todas las dependencias instaladas\n\n",
        "> Iniciando servidor de desarrollo...\n",
        "✔ Compilación completada en 1.2s\n",
        "✔ Aplicación lista en http://localhost:4200\n\n",
        "> Bienvenido al portafolio de [Winston]\n",
        "> Desarrollador Full Stack Developer\n"
    ];

    let line = 0;
    let char = 0;
    let output = '';
    const consoleOutput = document.getElementById('consoleOutput');
    const typingSpeed = 30;
    const lineDelay = 500;

    function typeWriter() {
        if (line < consoleText.length) {
            if (char < consoleText[line].length) {
                output += consoleText[line].charAt(char);
                consoleOutput.innerHTML = output;
                consoleOutput.parentElement.scrollTop = consoleOutput.parentElement.scrollHeight;
                char++;
                setTimeout(typeWriter, typingSpeed);
                
            } else {
                output += '<br>';
                char = 0;
                line++;
                setTimeout(typeWriter, lineDelay);
            }
        } else {
            // Reiniciar la animación después de un tiempo
            setTimeout(() => {
                line = 0;
                char = 0;
                output = '';
                consoleOutput.innerHTML = '';
                typeWriter();
            }, 10000);
        }
    }

    // Iniciar el efecto de escritura
    setTimeout(typeWriter, 2000);

    // Animación de barras de habilidades
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.transform = `scaleX(${width})`;
        });
    }

    // Observer para animaciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Efecto hover 3D en tarjetas de experiencia
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'all 0.5s ease';
            card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    });
});