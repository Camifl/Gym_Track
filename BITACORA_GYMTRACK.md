# Bitácora de GymTrack

Esta bitácora nos ayuda a seguir el avance y a preparar la sustentación. La actualizaremos con lo que realmente hagamos y aprendamos.

## Etapas

| Etapa | Qué haremos | Cómo ayudará la IA | Estado |
| --- | --- | --- | --- |
| 1. Entorno | Preparar Node 24, instalar dependencias y abrir la app en Expo Go. | Explicar la configuración y ayudar a resolver errores. | Completada por indicación de la estudiante |
| 2. Navegación | Crear las cuatro pestañas y las pantallas de detalle. | Explicar cómo se conectan las pantallas y practicar la navegación. | Completada |
| 3. Plan y sesión | Mostrar la rutina semanal y marcar ejercicios realizados. | Explicar cómo se muestran los datos y se calcula el progreso. | Pendiente |
| 4. Catálogo | Mostrar los grupos musculares, buscar y consultar ejercicios. | Explicar la búsqueda, los filtros y los detalles. | Pendiente |
| 5. Perfil y medidas | Crear los formularios, validaciones y cálculo del IMC. | Explicar cómo se guardan y comprueban los datos. | Pendiente |
| 6. Revisión y entrega | Probar la app, completar el README, preparar el video y practicar la sustentación. | Revisar los resultados y hacer preguntas de práctica. | Pendiente |
| 7. Bonificaciones | Añadir mejoras opcionales si queda tiempo. | Explicar y ayudar a probar cada mejora. | Pendiente |

En cada etapa revisaremos el código, probaremos lo que funcione y practicaremos una explicación o un pequeño cambio. Las bonificaciones van después de los requisitos obligatorios.

## Registro de avances y uso de IA

### 24 de noviembre de 2026

- **Qué hicimos:** revisamos la guía y el proyecto, y organizamos las etapas.
- **Cómo ayudó la IA:** resumió los requisitos, identificó avances y pendientes y preparó esta bitácora. No implementó funciones de la app durante estas revisiones.
- **Estado en la primera revisión:** había datos y tipos preparados, con la navegación iniciada y las pantallas vacías.
- **Herramienta:** Codex de OpenAI. Modelo GPT-6.1 Terra.
- **Prompts importantes:** ver [PROMPTS_IA_GYMTRACK.md](./PROMPTS_IA_GYMTRACK.md). No guardaremos preguntas sencillas de aprendizaje.

### 24 de noviembre de 2026 — Entorno

- **Qué hicimos:** encontramos Node 24.16.0 instalado y la IA instaló las dependencias con esa versión.
- **Qué probamos:** TypeScript terminó sin errores. La estudiante informó que abrió la app y pudo navegar entre pestañas después de agregar títulos a las pantallas.
- **Cierre:** marcada como completada por indicación de la estudiante. Quedan sin confirmar la versión de Node usada al iniciar la app y la compatibilidad de Expo Go con SDK 57; lint se revisará más adelante.

### 24 de noviembre de 2026 — Navegación

- **Qué hicimos:** la estudiante agregó títulos a Inicio, Catálogo y Medidas, y configuró las pestañas.
- **Qué probamos:** la estudiante informó que pudo navegar entre ellas.
- **Avance posterior:** la estudiante creó la pantalla provisional de Perfil.
- **Detalle del día:** la estudiante informó que navegó a la pantalla con el parámetro y comprobó su título dinámico. La IA explicó cómo configurarlo.
- **Detalle de grupo:** la estudiante creó la pantalla y el enlace desde Catálogo, e informó que la prueba funcionó.
- **Detalle de ejercicio:** la estudiante creó la ruta y comunicó que la navegación funciona. También recuperó `index.tsx` para Inicio.
- **Validación del día:** la estudiante probó un día válido y uno inválido; se muestra el enfoque o una pantalla de error con enlace a Inicio. La IA revisó el código y TypeScript terminó sin errores.
- **Validación de grupo y ejercicio:** la estudiante informó que probó casos válidos e inválidos. La IA revisó las búsquedas y TypeScript terminó sin errores.
- **Pestañas:** la estudiante agregó iconos, corrigió los nombres de archivos y comunicó que la navegación funciona. La IA revisó la configuración y TypeScript terminó sin errores.
- **Cierre:** la estudiante informó que probó `router.push` correctamente. La IA revisó el código y TypeScript terminó sin errores. Lint queda pendiente para la revisión general.
- **Para sustentar:** explicar cómo `Tabs` agrupa las pantallas, cómo `Link` y `router.push` navegan, cómo se reciben y validan parámetros y cómo se configura el título con `Stack.Screen`.
- **Fuentes:** [navegación con Expo Router](https://docs.expo.dev/router/basics/navigation/), [rutas dinámicas](https://docs.expo.dev/router/basics/notation/) y [pestañas](https://docs.expo.dev/router/advanced/tabs/).
- **Siguiente etapa:** el plan y la sesión siguen pendientes. El botón de prueba de `router.push` permanece en Inicio y puede retirarse al empezar esa etapa.

### Para cada avance

- **Fecha y etapa:**
- **Qué hicimos y cómo ayudó la IA:**
- **Qué probamos y qué pasó:**
- **Qué aprendí para explicarlo:**
- **Prompt y fuente consultada:**
- **Qué falta:**

El README final también debe incluir la investigación y los demás entregables que pide la guía. Esta bitácora sirve de apoyo para prepararlos.
