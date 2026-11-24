# GymTrack

**Integrante:** Camila Mena

GymTrack digitaliza la ficha de entrenamiento de un gimnasio. Desde la app puedes consultar el plan semanal, marcar ejercicios, explorar el catálogo y registrar tu perfil y medidas.

## Ejecutar la app

Requisitos: **Node.js 24 LTS** y **Expo Go compatible con SDK 57**.

```bash
git clone https://github.com/Camifl/Gym_Track.git
cd Gym_Track
nvm use
npm ci
npx expo start
```

Si falta Node 24, usa `nvm install`. Escanea el QR desde Expo Go en Android. Pulsa `w` en la terminal para abrir la versión web.

## Requisitos

| ID | Requisito | Estado |
| --- | --- | --- |
| RF01 | Plan de seis días con el día actual destacado | Cumplido |
| RF02 | Detalle diario con calentamientos y ejercicios agrupados | Cumplido |
| RF03 | Catálogo de 11 grupos musculares | Cumplido |
| RF04 | Búsqueda por nombre sin distinguir mayúsculas ni tildes | Cumplido |
| RF05 | Ficha de ejercicio con imagen, series, repeticiones y días asignados | Cumplido |
| RF06 | Registro de ejercicios y progreso por día | Cumplido |
| RF07 | Edición y validación del perfil | Cumplido |
| RF08 | Medidas mensuales con historial, IMC y cambio de peso | Cumplido |
| RNF01 | TypeScript en modo estricto | Cumplido |
| RNF02 | Apertura en Expo Go SDK 57 | Cumplido · Confirmado por la estudiante en Android |
| RNF03 | Áreas seguras, texto de 14 puntos y controles de 44 × 44 | Cumplido · Tamaños revisados en web; rotación y teclado comprobados por la estudiante en Android |
| RNF04 | Estructura del proyecto y pantallas de hasta 200 líneas | Cumplido |
| RNF05 | Historial con al menos ocho commits descriptivos | Cumplido |
| RNF06 | Cambios de pestaña en un segundo o menos en un teléfono de gama media | Parcial · Falta medir en un teléfono |
| RF09 | Bonificación · Avisos por lesión | Cumplido · Probado en web y confirmado por la estudiante en Expo Go |
| RF10 | Bonificación · Temporizador de descanso | No |
| RF11 | Bonificación · Persistencia al cerrar la app | No |

El perfil, el historial y el progreso se guardan en memoria durante el uso de la app.

## Capturas y verificación

Las capturas de **Inicio**, **Catálogo**, **Perfil** y **Medidas** se tomarán de la grabación en Android.

Consulta los ejemplos de prueba, el guion del video y la lista de entrega en la [hoja de verificación](docs/VERIFICACION.md).

## Bitácora de investigación

| Tema | Fuente | Aplicación en GymTrack |
| --- | --- | --- |
| T1 · Context | [React: useContext](https://react.dev/reference/react/useContext) | El [proveedor](context/GymContext.tsx) comparte el perfil, las medidas y el progreso. `useGym` comprueba que tiene un proveedor para detectar usos fuera de él. |
| T2 · Pestañas y rutas | [Expo Router](https://docs.expo.dev/versions/v57.0.0/sdk/router/) | El [layout de pestañas](app/%28tabs%29/_layout.tsx) organiza las cuatro secciones. En el [detalle de día](app/dia/%5Bdia%5D.tsx), `useLocalSearchParams` lee el parámetro que luego se valida contra el plan. |
| T3 · Efectos y limpieza | [React: useEffect](https://react.dev/reference/react/useEffect) | La limpieza de un efecto cancela recursos como un intervalo al salir. [Inicio](app/%28tabs%29/index.tsx) actualiza el día al volver a la pestaña con `useFocusEffect`. La limpieza de intervalos se investigó para la bonificación del temporizador. |
| T4 · Formularios | [React Native: TextInput](https://reactnative.dev/docs/0.86/textinput) | [FormField](components/FormField.tsx) muestra el error de cada entrada. En [Perfil](utils/profile.ts) se valida el texto antes de convertirlo porque `Number('')` devuelve cero. |
| T5 · Diseño adaptable | [React Native: useWindowDimensions](https://reactnative.dev/docs/0.86/usewindowdimensions) | El [catálogo](app/%28tabs%29/catalogo.tsx) reorganiza sus tarjetas con `flexWrap` al cambiar el ancho. Usa tres columnas por encima de 600 puntos. |
| T6 · Arreglos y tipos | [TypeScript: estrechamiento de tipos](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) | [Catálogo](utils/catalog.ts) filtra el plan por ID para encontrar los días asignados. La [búsqueda](utils/texto.ts) normaliza el texto antes de comparar los nombres. |
| T7 · Imágenes locales | [React Native: imágenes](https://reactnative.dev/docs/0.86/images) | El [mapa de imágenes](data/exerciseImages.ts) une cada ejercicio con un archivo local. Las rutas literales de `require` permiten a Metro incluir las imágenes al empaquetar la app. |

El [registro de avances](BITACORA_GYMTRACK.md) y el [registro de prompts](PROMPTS_IA_GYMTRACK.md) detallan la revisión y el apoyo de IA.

## Reflexión técnica

Se centralizaron el perfil, las medidas y el progreso en `GymContext` porque se usan en varias pantallas. Así, al volver a una pestaña se muestran los cambios de la sesión sin tener que pasar los datos por cada ruta.

Una dificultad fue aceptar medidas que se escriben con coma decimal. El formulario comprueba el formato del texto, reemplaza la coma por un punto para convertir el valor y luego verifica que esté en el rango permitido. Así acepta `1,75` y `1.75` y muestra un error para una entrada vacía o fuera de rango.

Se usó Codex de OpenAI para apoyar la planificación, la implementación, las pruebas y la documentación. Las ilustraciones de los ejercicios se generaron con IA. La bitácora distingue las comprobaciones automáticas y en navegador de las pruebas realizadas por la estudiante en Expo Go.
