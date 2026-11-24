# Verificación y entrega de GymTrack

## Comprobación antes de grabar

Usa Node.js 24 y la versión de Expo Go compatible con SDK 57. Ejecuta `npm test`, `npx tsc --noEmit` y `npx expo lint`. Luego inicia la app con `npx expo start` y abre el QR en tu Android.

- Abre Inicio, Catálogo, Perfil y Medidas en vertical y horizontal con la rotación automática activa. En Catálogo, espera dos columnas si el ancho es de 600 puntos o menos y tres si lo supera. Comprueba que los controles y textos se vean completos y que las barras del sistema no cubran el contenido.
- En Perfil y Medidas, intenta guardar con el teclado abierto. Comprueba los mensajes de validación debajo de los campos y que puedas llegar al botón al desplazar la pantalla.
- Para medir el cambio entre pestañas, anota el modelo del teléfono y graba la pantalla con la opción de mostrar toques activada, si está disponible. Toca cada pestaña varias veces y espera a que su contenido aparezca antes de tocar la siguiente. En la grabación, mide desde que se ve el toque hasta que se muestra el contenido de destino. El criterio es un segundo o menos en un teléfono de gama media. El resultado es una estimación que depende de la grabación; anota los tiempos visibles y deja el criterio pendiente si no se distingue el toque o no se conoce el modelo.

## Guion del video

Abre la app desde cero para comenzar con los datos de ejemplo. En Android, abre los ajustes rápidos y pulsa **Grabar pantalla**. Usa la orientación vertical y deja cada pestaña sin mover durante unos segundos para extraer las capturas. Si grabas voz, usa frases cortas en español.

| Tiempo objetivo | Qué hacer y qué debe verse |
| --- | --- |
| 0:00–1:05 · Inicio y sesión | Muestra los seis días y el destacado del día actual. Abre **Lunes**, muestra el calentamiento inicial, los ejercicios agrupados con series y repeticiones y el calentamiento final. Marca tres ejercicios para llegar a **3 de 7 · 43 %**. |
| 1:05–2:00 · Catálogo | Muestra la cuadrícula y abre **Pecho**. Vuelve y busca `extension` sin tilde para mostrar cuatro coincidencias. Abre **Hiperextensiones** y muestra la imagen, el grupo, las series, las repeticiones y los días asignados. |
| 2:00–2:50 · Perfil | Muestra los campos y prueba guardar con la edad `13`. Corrige a `42`, guarda y confirma la alerta. Usa los datos de ejemplo. |
| 2:50–4:30 · Medidas | Muestra **IMC 32,0 · Obesidad grado I · −2,5 kg**. Registra `2026-12` con los datos de abajo. Al guardar debe quedar primero con **IMC 31,5 y −1,5 kg** frente a noviembre. |

**Datos de diciembre.** Estatura `1,75` m, peso `96,5` kg. Perímetros en cm: hombro `118`, brazo `33`, antebrazo `28`, pecho `108`, abdomen `101`, cadera `106`, pierna `58` y pantorrilla `38`.

Para una pasada de prueba, intenta guardar esos datos con `2026-11` y confirma que el duplicado se rechaza. Si registras `2027-02` sin enero, debe aparecer **Sin registro del mes anterior**. En web también se pueden abrir rutas inválidas como `/grupo/inventado` y `/ejercicio/pec-99` para comprobar el regreso a Catálogo.

Al terminar, pasa el archivo original para editar el video y extraer las cuatro capturas. El MP4 final debe durar **menos de 5 minutos** y cubrir RF01–RF08. [Grabación de pantalla en Android](https://support.google.com/android/answer/9075928?hl=es)

## Demostración de RF09

1. Abre **Perfil → Lesiones por grupo muscular**. Con los datos de ejemplo, **Pierna** y **Lumbar** están marcados. En **Inicio → Lunes**, **Media prensa 45°** muestra un aviso y **Press banca plano** aparece sin aviso.
2. En **Catálogo → Pierna**, comprueba los avisos de la lista. Busca `extension` y abre **Hiperextensiones**. El aviso de Lumbar se ve tanto en el resultado como en la ficha.
3. En Perfil, desmarca **Pierna**, marca **Pecho** y pon `13` en Edad. Intenta guardar. Comprueba que aparece el error y que los avisos del lunes siguen reflejando el perfil guardado. Regresa a Perfil, corrige la edad a `42` y guarda. En Lunes el aviso pasa de **Media prensa 45°** a **Press banca plano**. El aviso de Lumbar sigue visible.
4. Desmarca todos los grupos y guarda. Los avisos desaparecen y puedes seguir marcando ejercicios y abriendo sus fichas. En Android, repite el guardado de Perfil con el teclado abierto en vertical y horizontal.

Para la sustentación, explica cómo se lee el grupo de cada ejercicio y por qué los avisos cambian solo después de guardar un perfil válido.

## Lista de entrega

- [ ] Revisar la app en Android y registrar el resultado en la bitácora.
- [ ] Revisar el MP4 y las cuatro capturas. Subir el video a Google Drive y verificar que el docente tenga acceso de lector. [Permisos de Google Drive](https://support.google.com/drive/answer/7166529?hl=es)
- [ ] Verificar el repositorio público, los commits, el README en español, las capturas y la reflexión de hasta 300 palabras.
- [ ] Confirmar que `v1.0` apunte al commit revisado y esté disponible en GitHub.
- [ ] Entregar en Moodle el enlace al repositorio, el README con su reflexión y el enlace al video. La guía indica que la entrega cierra el **25 de noviembre de 2026 a las 23:59**.

Para preparar la sustentación, practica abrir la app, explicar cómo se calcula el progreso o cómo se valida una medida y hacer un cambio pequeño, como agregar un ejercicio al catálogo.
