# 🌿 Natural Shine Spa

**Peluquería Sostenible Especializada en Tratamientos Capilares Naturales**

Este proyecto es una aplicación web de una sola página (SPA) desarrollada con **Angular 20** para presentar los servicios de Natural Shine, una peluquería sostenible comprometida con la belleza natural y el cuidado del medio ambiente.

---

## 📋 Descripción del Proyecto

Natural Shine nace del sueño de tres estudiantes del **Ciclo Formativo de Grado Medio en Peluquería y Cosmética Capilar** del Colegio Purísima Concepción y Santa María Micaela. Este proyecto presenta un salón de belleza donde la salud capilar, la belleza y la sostenibilidad van de la mano.

### Características Principales

✅ **100% Natural**: Productos certificados orgánicos sin químicos tóxicos  
✅ **Diseño Femenino Elegante**: Paleta de colores tierra naturales con tipografía premium  
✅ **Totalmente Responsive**: Diseño mobile-first adaptable a todos los dispositivos  
✅ **Animaciones Suaves**: Efectos de scroll reveal y transiciones profesionales  
✅ **Formulario de Reservas**: Sistema de reservas con validación reactiva  

---

## 🎨 Diseño y Estética

### Paleta de Colores
- **Verde Tierra**: `#2D5016`, `#4A7C2C`, `#90A583`
- **Dorado Natural**: `#C9A963`
- **Crema**: `#F7F4EF`
- **Marrón Tierra**: `#8B6F47`

### Tipografía
- **Títulos**: Cormorant Garamond (elegante serif)
- **Texto**: Montserrat (moderna sans-serif)

### Principios de Diseño
- Curvas suaves y bordes redondeados
- Sombras sutiles para profundidad
- Formas orgánicas y naturales
- Gradientes suaves
- Efectos glassmorphism

---

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Angular CLI (versión 20)

### Instalación

1. **Instalar dependencias**:
```bash
npm install
```

2. **Iniciar servidor de desarrollo**:
```bash
npm start
```
o
```bash
ng serve
```

3. **Abrir en el navegador**:
Navega a `http://localhost:4200/`

### Compilar para Producción

```bash
ng build
```

Los archivos compilados se generarán en el directorio `dist/`.

---

## 📁 Estructura del Proyecto

```
natural-shine-spa/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Navegación sticky con scroll effect
│   │   │   ├── hero/            # Hero section con CTA buttons
│   │   │   ├── features/        # 6 razones para elegir Natural Shine
│   │   │   ├── services/        # 3 tratamientos principales
│   │   │   ├── about/           # Historia y equipo
│   │   │   ├── booking/         # Formulario de reservas
│   │   │   ├── contact/         # Información de contacto
│   │   │   └── footer/          # Pie de página completo
│   │   ├── app.ts               # Componente principal
│   │   ├── app.html             # Template principal
│   │   └── app.scss             # Estilos del componente principal
│   ├── styles.scss              # Estilos globales
│   └── index.html               # Página HTML principal
├── angular.json                 # Configuración de Angular
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

---

## 🌟 Secciones de la Aplicación

### 1. **Header** (Navegación)
- Logo con gradiente
- Menú de navegación con scroll suave
- Botón CTA "Reserva tu cita"
- Menú hamburguesa responsive en móvil
- Efecto sticky con cambio de estilo al hacer scroll

### 2. **Hero** (Sección Principal)
- Imagen de fondo con overlay
- Título y subtítulo impactantes
- Dos botones de llamada a la acción
- 4 badges visuales con glassmorphism

### 3. **Features** (6 Razones)
- Grid de 3 columnas (responsive)
- Tarjetas con iconos grandes
- Efectos hover suaves
- Información sobre productos naturales, sostenibilidad y beneficios

### 4. **Services** (Tratamientos)
- **Queratina Vegetal** (€120 - 3h)
- **Taninoplastia** (€140 - 3.5h)
- **Tratamiento Intensivo** (€80 - 2h)
- Tarjetas con imágenes, pricing y lista de beneficios
- Botones de reserva

### 5. **About** (Sobre Nosotros)
- Historia de Natural Shine
- Equipo de 3 fundadoras con fotos circulares
- Estadísticas animadas (100% natural, 0% tóxicos, etc.)

### 6. **Booking** (Reservas)
- Formulario reactivo con validación
- Campos: nombre, email, teléfono, servicio, fecha, hora
- Validación en tiempo real
- Alert de confirmación al enviar
- **Nota**: Solo frontend, no envía datos reales

### 7. **Contact** (Contacto)
- Información de contacto (dirección, teléfono, email, horario)
- Redes sociales
- Cómo llegar (metro, autobús, parking)
- Mapa de Google Maps embebido

### 8. **Footer**
- 4 columnas con información
- Enlaces rápidos
- Servicios
- Contacto
- Iconos de redes sociales
- Copyright y enlaces legales

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 20
- **Lenguaje**: TypeScript 5.6
- **Estilos**: SCSS (Sass)
- **Formularios**: Reactive Forms
- **Componentes**: Standalone Components (sin módulos)
- **Tipografía**: Google Fonts (Cormorant Garamond + Montserrat)

---

## 📱 Responsive Design

El proyecto está optimizado para los siguientes breakpoints:

- **Mobile**: hasta 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1024px+

---

## ✨ Características Especiales

### Navegación Suave
Todos los enlaces de navegación utilizan scroll suave entre secciones.

### Validación de Formularios
El formulario de reservas incluye:
- Validación de email
- Validación de teléfono (9 dígitos)
- Campos requeridos
- Mensajes de error personalizados

### Animaciones
- Fade in up en elementos
- Hover effects en tarjetas
- Transiciones suaves en botones
- Efectos de escala en imágenes

### SEO Optimizado
- Meta tags descriptivas
- Títulos semánticos
- Estructura HTML5 semántica
- Alt texts en imágenes

---

## 🎓 Contexto Académico

**Proyecto**: Intermodular 2025/2026  
**Ciclo Formativo**: Grado Medio en Peluquería y Cosmética Capilar  
**Centro**: Colegio Purísima Concepción y Santa María Micaela  

Este proyecto es una demostración para presentación académica. No tiene backend real ni funcionalidades de procesamiento de datos.

---

## 🌿 Equipo Natural Shine

- **Zuleyka Zamora** - Fundadora y Especialista en Alisados Naturales
- **Ana María Castro** - Co-fundadora y Experta en Tratamientos Capilares
- **Nai Valencia** - Co-fundadora y Especialista en Sostenibilidad

---

## 📞 Información de Contacto (Ficticia)

- **Dirección**: Calle de la Sostenibilidad, 25, 28001 Madrid, España
- **Teléfono**: +34 912 345 678
- **Email**: info@naturalshine.es
- **Horario**: Lun-Vie: 9:00-20:00 | Sáb: 10:00-18:00 | Dom: Cerrado

---

## 📝 Notas Importantes

⚠️ **Este es un proyecto de demostración**:
- El formulario de reservas **NO envía datos reales**
- Solo muestra un alert de confirmación
- Las imágenes son de Unsplash (placeholders)
- Los datos de contacto son ficticios
- No hay integración con backend

---

## 🤝 Contribuciones

Este es un proyecto académico cerrado. No se aceptan contribuciones externas.

---

## 📄 Licencia

© 2026 Natural Shine. Todos los derechos reservados.  
Proyecto educativo - Uso académico exclusivamente.

---

## 🙏 Agradecimientos

- **Google Fonts** por las tipografías Cormorant Garamond y Montserrat
- **Unsplash** por las imágenes de alta calidad
- **Angular Team** por el excelente framework
- **Profesores y tutores** del ciclo formativo

---

¡Gracias por visitar Natural Shine! 🌿✨
