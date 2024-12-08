import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Vinos',
    lastName:  'del Valle',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'RUC: 221185544662', // e.g., 'Frontend Developer'
    avatar:    '/images/etiqueta.png',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Jr. Ayacucho 315 ', 'Guadalupe - La Libertad']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Suscribete a {person.firstName} del Valle para recibir ofertas.</>,
    description: <>Suscribete para tener acceso a las más exclusivas ofertas de vinos en el Valle Jequetepeque.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Inicio',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Vinos del Valle</>,
    subline: <>Vinos del Valle ofrece vinos únicos que reflejan tradición, pasión y autenticidad. Cada botella captura los sabores del valle, brindando una experiencia sensorial para momentos inolvidables.</>
}

const about = {
    label: 'Sobre nosotros',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Nuestra historia',
        description: <>Vinos del Valle nació del amor por la tierra y la pasión por el arte del vino. Inspirados en la rica tradición vinícola de nuestro valle, comenzamos como un pequeño proyecto familiar, cultivando viñedos con dedicación y respeto por la naturaleza. Con el tiempo, perfeccionamos nuestras técnicas, combinando métodos tradicionales con innovación moderna para crear vinos únicos. Cada botella refleja la esencia de nuestro origen: suelos fértiles, un clima generoso y manos apasionadas que trabajan en armonía. Hoy, Vinos del Valle se enorgullece de compartir con el mundo no solo vinos excepcionales, sino también una historia de esfuerzo, tradición y amor por lo auténtico.</>
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Planeamiento estratégico',
        skills: [
            {
                title: 'Misión',
                description: <>Elaborar vinos excepcionales que representen la riqueza de nuestro valle, respetando el medio ambiente y fortaleciendo la tradición vinícola, mientras creamos experiencias inolvidables para nuestros clientes.</>,
                images: []
            },
            {
                title: 'Visión',
                description: <>Ser reconocidos como una marca líder en la producción de vinos de calidad, destacando por nuestra autenticidad, innovación y compromiso con la sostenibilidad, llevando el sabor del valle a todo el mundo.</>,
                images: []
            },
            {
                title: 'Objetivos',
                description: 
                <>1. Garantizar la producción de vinos de alta calidad que reflejen nuestra identidad y tradición.
                2. Promover prácticas sostenibles en el cultivo y producción de vinos.
                3. Expandir nuestra presencia en mercados locales e internacionales.
                4. Fortalecer la relación con nuestros clientes a través de experiencias únicas y productos innovadores.
                5. Impulsar la economía local colaborando con productores y artesanos de la región.</>,
                images: []
            },
            {
                title: 'Política de Calidad',
                description: <>En Vinos del Valle, nos comprometemos a ofrecer productos que cumplan con los más altos estándares de calidad, utilizando procesos sostenibles y priorizando la satisfacción de nuestros clientes. Valoramos la tradición vinícola, la innovación y el respeto por el medio ambiente, trabajando continuamente para superar las expectativas de quienes confían en nuestra marca.</>,
                images: []
            }
        ]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Línea de tiempo',
        experiences: [
            {
                company: 'Lluvia de ideas',
                timeframe: '2020',
                role: 'Surgió como una idea de grupo de estudios de la UNT VJ.',
                achievements: [
                    <>Necesidad de un negocio.</>,
                    <>Necesidad de aprovechar la materia prima de la zona.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/grupo01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Implementación del proceso',
                timeframe: '2021',
                role: 'Implementamos el proceso de producción de vino a escala pequeña.',
                achievements: [
                    <>Se implementó equipos gracias a un concurso.</>,
                    <>Se implemento un plan HACCP.</>
                ],
                images: [ {
                    src: '/images/projects/project-01/proceso01.jpg',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                },
                {
                    src: '/images/projects/project-01/proceso02.jpg',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                },
                {
                    src: '/images/projects/project-01/proceso03.jpg',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                } 
            ]
            }
            ,
            {
                company: 'Inscripción en Sunat y Sunarp',
                timeframe: '2023',
                role: 'Se inscribió formalmente la empresa en Sunat y Sunarp.',
                achievements: [
                    <>Declaramos la marca ante Sunarp.</>,
                    <>Inscribimos la empresa ante Sunat.</>
                ],
                images: [{
                    src: '/images/projects/project-01/inscribir01.jpg',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                },
                {
                    src: '/images/projects/project-01/inscribir02.jpg',
                    alt: 'Once UI Project',
                    width: 16,
                    height: 9
                }]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Socios',
        institutions: [
            {
                name: 'Juan Diego Rojas Fermin',
                description: <>Estudiante de Ingenieria Agroindustrial - UNT VJ.</>,
            },
            {
                name: 'Leslie Lisset Gallardo Mendoza',
                description: <>Estudiante de Ingenieria Agroindustrial - UNT VJ.</>,
            },
            {
                name: 'Erik Joel Quispe Sanchez',
                description: <>Estudiante de Ingenieria Agroindustrial - UNT VJ.</>,
            },
            {
                name: 'Paula Nicolle Chavez Abanto',
                description: <>Estudiante de Ingenieria Agroindustrial - UNT VJ.</>,
            }

        ]
    }
    
}

const blog = {
    label: 'Catálogo',
    title: 'Catalogo de productos',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Elaboración de vinos',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: '',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };