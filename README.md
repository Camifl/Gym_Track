# GymTrack

Aplicación móvil de entrenamiento hecha con Expo Router y TypeScript. Permite consultar el plan semanal, marcar el progreso de una sesión, explorar el catálogo de ejercicios, editar el perfil y registrar medidas mensuales.

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

### Perfil y medidas en Expo Go

1. En **Perfil**, borra el nombre, escribe `13` en la edad y pulsa **Guardar perfil**. Deben aparecer dos errores bajo sus campos. Escribe un nombre y una edad válida. Guarda, confirma la alerta y vuelve desde otra pestaña para comprobar los cambios.
2. En **Medidas**, con los datos iniciales, verifica **IMC 32,0**, **Obesidad grado I** y **−2,5 kg** frente a `2026-10`.
3. Llena el formulario con mes `2026-11`, estatura `1,75` y peso `96,5`. Usa estos perímetros en orden: hombro `118`, brazo `33`, antebrazo `28`, pecho `108`, abdomen `101`, cadera `106`, pierna `58` y pantorrilla `38`. Pulsa **Guardar medidas** con el teclado abierto. Debe aparecer el error de mes duplicado y conservarse los valores.
4. Cambia solo el mes a `2026-12` y guarda. El formulario debe quedar vacío y diciembre aparecer primero en el historial, con **IMC 31,5** y **−1,5 kg** frente a noviembre en el resumen. Cambia de pestaña y vuelve para comprobar que el registro sigue ahí.
5. Para verificar un salto, registra `2027-02` con los mismos valores sin guardar enero. El resumen debe mostrar **Sin registro del mes anterior**.

Los cambios de perfil y medidas se guardan en memoria durante el uso de la app. Al reiniciarla se cargan los datos iniciales.

## Bitácora de investigación

| Tema | Fuentes | Qué aprendimos y dónde se aplicó |
| --- | --- | --- |
| T4 · Formularios controlados | [TextInput](https://reactnative.dev/docs/0.86/textinput), [manejo del teclado en Expo](https://docs.expo.dev/guides/keyboard-handling/), [Alert](https://reactnative.dev/docs/0.86/alert) | `value` y `onChangeText` sincronizan la entrada con un borrador local. Al guardar se valida el texto antes de llamar a `Number()` para que un campo vacío se distinga de cero. [FormField](components/FormField.tsx) muestra los errores bajo cada campo y [FormScreen](components/FormScreen.tsx) comparte el manejo del teclado. |
| T6 · Arreglos y tipos | [Estrechamiento en TypeScript](https://www.typescriptlang.org/docs/handbook/2/narrowing.html), [normalización de texto](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.normalize) | La búsqueda normaliza la consulta y cada nombre antes de usar `includes` en [utils/texto.ts](utils/texto.ts). En [utils/catalog.ts](utils/catalog.ts) se valida el parámetro de ruta antes de buscar y se filtra el plan por el ID del ejercicio para obtener sus días. |
| T7 · Imágenes locales | [Imágenes en React Native](https://reactnative.dev/docs/0.86/images) | Metro necesita conocer la ruta literal de un `require` para incluir el archivo local. [El mapa de imágenes](data/exerciseImages.ts) conecta los JPEG de [la carpeta de ejercicios](assets/images/ejercicios/) con el ID que recibe la ficha. |

El [registro de avances](BITACORA_GYMTRACK.md) y el [registro de prompts](PROMPTS_IA_GYMTRACK.md) documentan el aporte de IA y las verificaciones de cada etapa.
