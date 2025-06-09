// Crea la aplicación Vue
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            name: "Winston Curasi",
            title: "Ingeniero de Software Full Stack",
            description: "Ingeniero de Software con más de 7 años de experiencia en desarrollo Full Stack. Especializado en tecnologías como Python, Django, Odoo, Angular, Flutter y C#, enfocado en construir soluciones escalables que mejoran procesos empresariales y optimizan la experiencia del usuario.",
            experiences: [
                {
                    order: 1,
                    job_title: "Desarrollador Frontend",
                    job_date: "2024 - Presente",
                    job_company: "Baufest · BCP",
                    job_company_url: "https://baufest.com",
                    job_descriptions: [
                        { description: "Desarrollo de flujo alterno en login con biometría" },
                        { description: "Actualización de componentes UI/UX" },
                        { description: "Implementación de nuevas funcionalidades" },
                        { description: "Optimización de performance en 40%" }
                    ]

                }, {
                    order: 2,
                    job_title: "Ingeniero de Software",
                    job_date: "2022 - 2024",
                    job_company: "Inetum · RENIEC",
                    job_company_url: "https://www.inetum.com",
                    job_descriptions: [
                        { description: "Digitalización de certificados (nacimiento, defunción, matrimonio)" },
                        { description: "Arquitectura frontend con Angular" },
                        { description: "Integración con backend Java" },
                        { description: "Mejora de procesos en 60%" }
                    ]

                }, {
                    order: 3,
                    job_title: "Analista Programador",
                    job_date: "2019 - 2022",
                    job_company: "IntiTec",
                    job_company_url: "https://www.intitecperu.com",
                    job_descriptions: [
                        { description: "Desarrollo de ERP con Odoo (Python/JS)" },
                        { description: 'Creación de app móvil "Ratas" (Flutter)' },
                        { description: "Integración con Firebase/Firestore" },
                        { description: "Landing pages con Angular" }
                    ]

                }, {
                    order: 4,
                    job_title: "Full Stack Developer",
                    job_date: "2017 - 2018",
                    job_company: "Universidad Peruana Unión",
                    job_company_url: "https://upeu.edu.pe",
                    job_descriptions: [
                        { description: "Desarrollo de módulos de admisión y CRM (AngularJS)" },
                        { description: "Integración de Google Maps" },
                        { description: "Servicios web con Django Rest Framework" }
                    ]
                }],
            skills: [
                { order: 1, name: "Angular", level: "95%" },
                { order: 2, name: "TypeScript", level: "95%" },
                { order: 3, name: "JavaScript", level: "95%" },
                { order: 4, name: "Python", level: "90%" },
                { order: 5, name: "Odoo", level: "90%" },
                { order: 6, name: "Django", level: "70%" },
                { order: 7, name: "Flutter", level: "70%" },
                { order: 8, name: "Dart", level: "80%" },
                { order: 9, name: "Java", level: "50%" },
                { order: 10, name: "Firebase", level: "75%" },
                { order: 11, name: "Git", level: "90%" },
                { order: 12, name: "Docker", level: "60%" },
                { order: 13, name: "SQL", level: "70%" }
            ],
            projects: [
                {
                    title: "Aplicaciones de Autenticación (BCP)",
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80",
                    descriptions: [
                        "Migración del sistema de login único a una versión moderna de Angular.",
                        "Implementación de flujo alterno para acceso en caso de fallos de verificación biométrica.",
                        "Desarrollo de nuevas funcionalidades para la gestión de tarjetas frecuentes.",
                        "Mejoras de accesibilidad para compatibilidad con lectores de pantalla."
                    ],
                    techs: ["Angular", "Java"],
                    links: [
                        {
                            name: "Live",
                            href: "https://bcpzonasegura.viabcp.com/",
                            icon: "fas fa-external-link-alt"
                        },
                        // {
                        //     name: "Código",
                        //     href: "",
                        //     icon: "fab fa-github"
                        // }
                    ]
                },
                {
                    title: "Digitalización de Certificados (RENIEC)",
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    descriptions: [
                        "Desarrollo de módulos para la digitalización de certificados de nacimiento, defunción y matrimonio",
                        "Implementación de interfaz de usuario con Angular y consumo de servicios backend en Java.",
                        "Optimización de procesos administrativos mediante soluciones digitales personalizadas."
                    ],
                    techs: ["Angular", "Java"],
                    links: [
                        // {
                        //     name: "Live Demo",
                        //     href: "",
                        //     icon: "fas fa-external-link-alt"
                        // },
                        // {
                        //     name: "Código",
                        //     href: "",
                        //     icon: "fab fa-github"
                        // }
                    ]
                },
                {
                    title: "Desarrollo de Módulos ERP con Odoo",
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    descriptions: [
                        "Desarrollo de módulos a medida en Python para gestión de inventario, ventas, compras, POS, facturación y CRM",
                        "Creación de reportes personalizados usando QWeb y PostgreSQL",
                        "Implementación de interfaces de usuario dinámicas con JavaScript y XML",
                        "Integración de servicios RESTful en módulos Odoo personalizados"
                    ],
                    techs: ["Python", "Odoo Framework", "PostgreSQL", "JavaScript", "XML"],
                    links: [
                        {
                            name: "apps",
                            href: "https://apps.odoo.com/apps",
                            icon: "fas fa-external-link-alt"
                        },
                        // {
                        //     name: "Código",
                        //     href: "",
                        //     icon: "fab fa-github"
                        // }
                    ]
                },
                {
                    title: 'App "Ratas" - Gestión de Incidencias',
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    descriptions: [
                        "Geolocalización avanzada: Integración con Google Maps API para visualización geoespacial de reportes",
                        "Backend en tiempo real: Firebase Firestore para sincronización instantánea de incidencias",
                        "Notificaciones push: Sistema de alertas para nuevos reportes en zonas cercanas",
                    ],
                    techs: ["Flutter", "Firebase", "Google Maps", "Dart", "Push Notifications"],
                    links: [
                        {
                            name: "Play Store",
                            href: "https://play.google.com/store/apps/details?id=com.intitecperu.ratones&hl=es",
                            icon: "fab fa-google-play"
                        },
                        {
                            name: "App Store",
                            href: "https://apps.apple.com/pe/app/ratas/id1475677944",
                            icon: "fab fa-app-store"
                        }
                    ]
                },
                {
                    title: 'Landing Pages para Empresa Financiera Oh!',
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    descriptions: [
                        "Desarrollo en Angular con arquitectura modular para rápida iteración entre campañas",
                        "Formularios inteligentes con validación en tiempo real y conexión vía Web Services",
                        "Integraciones API con sistemas CRM y scoring crediticio",
                    ],
                    techs: ["Angular", "TypeScript", "REST API", "Analytics"],
                    links: [
                        {
                            name: "Live",
                            href: "https://tarjetaoh.pe/afiliacion-digital/",
                            icon: "fas fa-external-link-alt"
                        }
                    ]
                },
                {
                    title: 'Sistema de Gestión Académica',
                    subtitle: '',
                    background: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
                    descriptions: [
                        "Módulo de Admisión: Proceso completo desde postulación hasta matrícula con validación de documentos",
                        "CRM Estudiantil: Seguimiento de prospectos y conversión con funnel analytics",
                        "APIs REST: Diseño de servicios con Django Rest Framework para frontend Angular",
                    ],
                    techs: ["AngularJS", "Google Maps API", "Material Design", "Django", "Oracle"],
                    links: [
                        {
                            name: "Live",
                            href: "https://erp.upeu.edu.pe/login/#/upeu",
                            icon: "fas fa-external-link-alt"
                        }
                    ]
                }
            ],
            contacts: [
                {
                    title: "Email",
                    icon: "fas fa-envelope",
                    href: "mailto:winstoncurasi@email.com",
                    description: "winstoncurasi@gmail.com",
                    target: false
                },
                {
                    title: "Teléfono",
                    icon: "fas fa-phone-alt",
                    href: "tel:+51939556567",
                    description: "+51 939 556 567",
                    target: false
                },
                {
                    title: "LinkedIn",
                    icon: "fab fa-linkedin-in",
                    href: "https://www.linkedin.com/in/winstoncurasi/",
                    description: "linkedin.com/in/winstoncurasi",
                    target: true
                },
                {
                    title: "GitHub",
                    icon: "fab fa-github",
                    href: "https://github.com/winston07",
                    description: "github.com/winston07",
                    target: true
                }
            ]
        }
    }
});

// Monta la aplicación en el div#app
app.mount('#app');