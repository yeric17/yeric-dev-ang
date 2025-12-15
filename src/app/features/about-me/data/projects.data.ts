import { Project } from "../models/project.model";

export const projects: Project[] = [
  {
    name: 'Aplicación móvil para servicios de transporte y seguridad',
    description: 'Aplicación móvil desarrollada con Ionic y Angular que permite a los usuarios solicitar servicios de transporte y seguridad de manera rápida y segura. Incluye funcionalidades como geolocalización en tiempo real, notificaciones push.\n\nSe realizaron las siguientes tareas:\n\n- Diseño de la interfaz en Figma.\n- Desarrollo del frontend con Ionic y Angular.\n- Integración con servicios de backend para gestión de usuarios y solicitudes.\n- Pruebas y optimización para asegurar un rendimiento óptimo en dispositivos móviles.',
    technologies: ['Angular', 'Ionic', 'TypeScript', 'Figma'],
    images: [
      'images/portfolio/dsg-app/1.png',
      'images/portfolio/dsg-app/2.png',
      'images/portfolio/dsg-app/3.png',
      'images/portfolio/dsg-app/4.png',
      'images/portfolio/dsg-app/5.png',
      'images/portfolio/dsg-app/6.png',
      'images/portfolio/dsg-app/7.png',
      'images/portfolio/dsg-app/8.png',
      'images/portfolio/dsg-app/9.png',
    ]
  }
];
