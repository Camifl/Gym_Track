# GymTrack

Aplicación móvil de entrenamiento hecha con Expo Router y TypeScript. Permite consultar el plan semanal, marcar el progreso de una sesión y explorar el catálogo de ejercicios.

## Ejecutar la app

El laboratorio usa Node 24 y Expo SDK 57. Desde la carpeta del proyecto:

```bash
nvm use
npm ci
npx expo start
```

Si aún no tienes Node 24, ejecuta `nvm install` para instalar la versión indicada en `.nvmrc`. Abre el código QR con Expo Go compatible con SDK 57. Para usar el navegador, pulsa `w` en la terminal de Expo.

## Comprobaciones

```bash
npm test
npx tsc --noEmit
npx expo lint
```

Para revisar el catálogo:

1. Abre **Catálogo**. Deben aparecer 11 grupos musculares en dos columnas. En **Pecho** deben aparecer Press banca plano, Vuelos, Crossover y Peck deck.
2. Busca `extension` y luego `  EXTENSIÓN  `. Ambas consultas deben mostrar cuatro resultados, incluido **Hiperextensiones**. Abre su ficha y vuelve. La consulta y sus resultados deben seguir visibles. Una consulta sin coincidencias muestra un mensaje y al borrar el texto vuelven los grupos.
3. Abre **Press banca plano** desde Pecho y desde **Inicio → Lunes → Ver ficha**. Debe mostrar la ilustración del press, **4 × 12**, **Lunes** y **Viernes**. **Crossover** debe mostrar su propia imagen y **Sin días asignados**.
4. En la vista web de Expo, abre `/grupo/inventado` y `/ejercicio/pec-99`. Cada pantalla debe mostrar el error correspondiente y ofrecer volver con **Ir al catálogo**.

Para comprobar el progreso, abre **Inicio → Lunes** y marca tres ejercicios. Debe mostrar **3 de 7 completados · 43 %**.

## Bitácora de investigación

| Tema | Fuentes | Qué aprendimos y dónde se aplicó |
| --- | --- | --- |
| T6 · Arreglos y tipos | [Estrechamiento en TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [normalización de texto](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.normalize) | La búsqueda normaliza la consulta y cada nombre antes de usar `includes` en [utils/texto.ts](utils/texto.ts). En [utils/catalog.ts](utils/catalog.ts) se valida el parámetro de ruta antes de buscar y se filtra el plan por el ID del ejercicio para obtener sus días. |
| T7 · Imágenes locales | [Imágenes en React Native](https://reactnative.dev/docs/0.86/images) | Metro necesita conocer la ruta literal de un `require` para incluir el archivo local. [El mapa de imágenes](data/exerciseImages.ts) conecta los JPEG de [la carpeta de ejercicios](assets/images/ejercicios/) con el ID que recibe la ficha. |

El [registro de avances](BITACORA_GYMTRACK.md) y el [registro de prompts](PROMPTS_IA_GYMTRACK.md) documentan el aporte de IA y las verificaciones de cada etapa.
