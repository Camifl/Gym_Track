# Bitácora de GymTrack

Esta bitácora nos ayuda a seguir el avance y a preparar la sustentación. La actualizaremos con lo que realmente hagamos y aprendamos.

## Etapas

| Etapa | Qué haremos | Cómo ayudará la IA | Estado |
| --- | --- | --- | --- |
| 1. Entorno | Preparar Node 24, instalar dependencias y abrir la app en Expo Go. | Explicar la configuración y ayudar a resolver errores. | Completada por indicación de la estudiante |
| 2. Navegación | Crear las cuatro pestañas y las pantallas de detalle. | Explicar cómo se conectan las pantallas y practicar la navegación. | Completada |
| 3. Plan y sesión | Mostrar la rutina semanal y marcar ejercicios realizados. | Explicar cómo se muestran los datos y se calcula el progreso. | Completada |
| 4. Catálogo | Mostrar los grupos musculares, buscar y consultar ejercicios. | Explicar la búsqueda, los filtros y los detalles. | Completada según la revisión de la estudiante |
| 5. Perfil y medidas | Crear los formularios, validaciones y cálculo del IMC. | Explicar cómo se guardan y comprueban los datos. | Completada según la revisión de la estudiante |
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
- **Cierre:** la estudiante informó que probó `router.push` correctamente. La IA revisó el código y TypeScript terminó sin errores. Lint se configuró en la etapa 3.
- **Para sustentar:** explicar cómo `Tabs` agrupa las pantallas, cómo `Link` y `router.push` navegan, cómo se reciben y validan parámetros y cómo se configura el título con `Stack.Screen`.
- **Fuentes:** [navegación con Expo Router](https://docs.expo.dev/router/basics/navigation/), [rutas dinámicas](https://docs.expo.dev/router/basics/notation/) y [pestañas](https://docs.expo.dev/router/advanced/tabs/).
- **Al cierre de esta etapa** aún estaba en Inicio el botón de prueba de `router.push`.

### 24 de noviembre de 2026 — Plan y sesión

- **Qué hizo la IA:** implementó el plan semanal y el detalle diario (RF01, RF02 y RF06). Las marcas se guardan por día en `GymContext` mientras la app está abierta. Se añadieron comentarios en español para explicar las reglas.
- **Pruebas de la IA:** ocho pruebas con Node 24, TypeScript y lint sin errores. Expo exportó los paquetes para iOS, Android y web.
- **Prueba en el navegador:** se abrieron los seis días, se verificaron los bloques de tiempo, el cardio y el enlace a la ficha. El lunes pasó de 43 % a 29 % al desmarcar un ejercicio. El viernes siguió en 0 % y el lunes conservó sus marcas al regresar. Una ruta de día inválida mostró el enlace a Inicio.
- **Para sustentar:** explicar cómo el identificador del plan se busca en el catálogo, cómo se agrupan los ejercicios y por qué el progreso se calcula con los visibles. Probar `npm test` bajo Node 24.
- **Fuentes consultadas:** [guía de navegación de Expo Router](https://docs.expo.dev/router/basics/navigation/), [áreas seguras de Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/safe-area-context/) y [configuración de ESLint](https://docs.expo.dev/guides/using-eslint/).
- **Revisión de la estudiante:** confirmó el recorrido principal en Expo Go, ejecutó las pruebas con éxito y comprobó que un día inválido muestra la pantalla de error.
- **Ajuste de pruebas:** la IA reprodujo el error de carga de TypeScript con Node 22.16.0 y activó la opción de Node que permite importar archivos `.ts`. Después pasaron las ocho pruebas con Node 22.16.0 y 24.16.0. El proyecto indica Node 24 en `.nvmrc`, que se activa con `nvm use`.

### 24 de noviembre de 2026 — Catálogo y fichas

- **Qué hizo la IA:** implementó la cuadrícula de 11 grupos, la búsqueda por nombre y las fichas de ejercicio (RF03, RF04 y RF05). Los días asignados se calculan desde el plan. La ficha muestra un marcador cuando falta la imagen.
- **Pruebas de la IA:** 15 pruebas automáticas en Node 24, TypeScript y lint sin errores. Expo exportó iOS, Android y web. En el navegador se verificaron las dos columnas, las cuatro coincidencias de `extension`, la consulta al regresar, las fichas con y sin días y su apertura desde una sesión. También se comprobaron ambas rutas inválidas y el regreso a Catálogo.
- **Para sustentar:** explicar por qué `extension` coincide con Hiperextensiones y cómo se buscan los días por ID. El README contiene el recorrido de prueba y las fuentes de T6 y T7.
- **Revisión de la estudiante:** informó que realizó la revisión y que todo pasó correctamente.
- **Ilustraciones:** la IA generó 37 JPEG y los conectó por ID. Se comprobaron las 37 imágenes en el navegador abriendo cada ficha desde su grupo. Pasaron las 15 pruebas, TypeScript y lint. Expo exportó iOS, Android y web con las imágenes incluidas.

### 24 de noviembre de 2026 — Perfil y medidas

- **Qué hizo la IA.** Implementó RF07 y RF08 con formularios controlados, errores por campo e historial en `GymContext`. La estudiante eligió comparar el peso con el mes calendario anterior.
- **Qué se comprobó.** Pasaron 28 pruebas en Node 24, TypeScript y lint. Expo exportó iOS, Android y web. En el navegador se comprobaron los errores y el guardado en ambas pestañas, el historial ordenado, el mes duplicado, un salto de mes y los resultados de noviembre (**32,0 y −2,5 kg**) y diciembre (**31,5 y −1,5 kg**).
- **Ajuste de cálculo.** Se corrigieron dos casos de precisión y se añadieron pruebas. Con 64 kg y 1,60 m se muestra **IMC 25,0 · Sobrepeso**. Un aumento de 0,05 kg se muestra como **+0,1 kg** al presentar un decimal.
- **Para sustentar.** Explicar por qué se valida el texto antes de aplicar `Number()` y por qué se busca el mes calendario anterior en vez de usar la segunda fila del historial.
- **Revisión de la estudiante.** Informó que realizó las pruebas solicitadas y pasaron satisfactoriamente. La IA volvió a ejecutar las 28 pruebas, TypeScript y lint sin errores.

### Para cada avance

- **Fecha y etapa:**
- **Qué hicimos y cómo ayudó la IA:**
- **Qué probamos y qué pasó:**
- **Qué aprendí para explicarlo:**
- **Prompt y fuente consultada:**
- **Qué falta:**

El README final también debe incluir la investigación y los demás entregables que pide la guía. Esta bitácora sirve de apoyo para prepararlos.
