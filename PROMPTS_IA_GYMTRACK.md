# Prompts importantes de IA

Aquí guardaremos solo los prompts que hayan influido de forma importante en el proyecto: decisiones, planificación, creación o modificación de funciones, o solución de problemas. Las preguntas simples para entender conceptos no necesitan anotarse.

## 24 de noviembre de 2026 — Organización del proyecto

**Herramienta:** Codex de OpenAI. **Modelo registrado en la sesión:** GPT-6.1 Terra.

### Revisión inicial

> Tengo el siguiente trabajo para realizar con el apoyo de la IA, dame un resumen corto y entendible de qué debo hacer y cómo debo hacerlo; además revisa lo que tengo actualmente y evalúa qué tal está, si está bien y cómo continuar.

**Resultado:** se revisaron las instrucciones del laboratorio y el estado inicial del proyecto. La IA señaló que ya estaban los tipos y datos, pero faltaban las pantallas y funciones principales.

### Plan por etapas y sustentación

> Define el proyecto por etapas pequeñas, dime cómo puedes asistirme en cada una de ellas para poder sustentarlo, ten un registro de eso.

**Resultado:** se organizó el trabajo en etapas y se creó una bitácora sencilla para registrar avances y preparar la sustentación.

### Revisión del avance

> Revisa nuevamente los cambios actuales y verifica si están bien y cómo continuar.

**Resultado:** se identificó que el proveedor estaba conectado, pero los archivos de navegación y pantallas seguían vacíos; también quedaron pendientes la instalación y las comprobaciones.

## 24 de noviembre de 2026 — Entorno y navegación

**Herramienta:** Codex de OpenAI. **Modelo:** según el registro de esta sesión, GPT-6.1 Terra.

### Preparación del entorno

> Empecemos con la etapa 1, guiame paso a paso en el desarrollo y comprobacion de esta etapa para completarla correctamente.

**Resultado:** la IA identificó Node 24 instalado, instaló las dependencias y comprobó TypeScript. La estudiante informó que abrió la app y navegó en Expo Go. Las versiones usadas en esa prueba no quedaron confirmadas.

### Rutas y encabezados

> Listo, ya hice la prueba y navega correctamente a la pantalla de dia, se envia correctamente el parametro 'Lunes', pero en el header junto a la flecha de regreso dice dia/[dia] eso porque es?

**Resultado:** la IA explicó el título predeterminado y cómo usar `Stack.Screen` para mostrar el parámetro. La estudiante informó que lo aplicó y funcionó.

### Validación de rutas

> Ya aplique la misma idea para grupos y ejercicio, lo valide y funciona como se espera, revisalo y dime si podemos continuar

**Resultado:** la IA revisó las búsquedas y pantallas de error; TypeScript pasó. La estudiante realizó las pruebas de navegación y de valores inválidos.

### Iconos y verificación

> Hice la prueba y las pestañas muestran la pantalla correcta, lo unico es que no tienen icono en el navbar, como podemos continuar??

**Resultado:** la IA propuso configurar iconos con la biblioteca permitida por la guía. La estudiante los agregó y comunicó que las pestañas funcionaban.

### Cierre de navegación

> Quiero completar primero la etapa 2 antes de continuar con la 3, que me hace falta

**Resultado:** la IA identificó la prueba pendiente de `router.push` y explicó cómo realizarla. La estudiante informó que funcionó; la IA comprobó TypeScript.

## 24 de noviembre de 2026 — Plan semanal y sesión diaria

**Herramienta:** Codex de OpenAI. **Modelo de implementación:** GPT-6.2 Sol.

> Para la etapa 3 quiero que la desarrolles tu solo bajo mi supervision, crea un plan y quiero que uses la guia del laboratorio para que la desarrolles correctamente, como se espera, agrega las validaciones y pruebas necesarias para verificar que todo funcione correctamente, ademas de comentarios en español para entender lo realizado, no cometas errores y si tienes alguna pregunta antes de continuar hazmelo saber, se cuidadoso e investiga lo que consideres necesario. Cuando finalices, explicame los cambios que realizaste, porque lo hiciste y como puedo probarlos para validar que todo este correcto.

**Resultado:** la IA preparó el plan de RF01, RF02 y RF06. La estudiante pidió ejecutarlo en un segundo mensaje. Codex implementó las pantallas y la lógica, escribió las pruebas y verificó el recorrido en el navegador.

### Diagnóstico de las pruebas

> Hice el recorrido que sugieres y funciono correctamente, no he probado el de un dia invalido porque no se como, ademas corri los tests y me sale que fallaron, ayudame revisando eso para poder continuar

**Resultado:** la estudiante confirmó el recorrido principal en Expo Go. Codex reprodujo el error al cargar TypeScript con Node 22.16.0, ajustó el comando y comprobó que las ocho pruebas pasan con Node 22.16.0 y 24.16.0. La estudiante volvió a ejecutar las pruebas con éxito y confirmó que la ruta inválida muestra la pantalla de error.

## 24 de noviembre de 2026 — Catálogo y fichas de ejercicios

**Herramienta:** Codex de OpenAI. **Modelo de implementación:** GPT-6.2 Sol.

> Ya con esta etapa finalizada, quiero que te encargues de la siguiente etapa 4 tu solo, crea un plan para el correcto desarrollo de esta etapa, recuerda usar la guia del laboratorio, seguir las instrucciones bajo mi supervision, no cometas errores, si tienes alguna duda antes de empezar hazmela saber, investiga lo que consideres necesario y verifica que todo funcione antes de entregarme cualquier resultado, tambien, explicame los cambios que hiciste, porque los hiciste y como puedo probarlos, actualiza la documentacion que sea necesaria y agrega comentarios en español donde sea necesario entender algo importante.

**Resultado:** la estudiante pidió ejecutar el plan en un segundo mensaje. Codex implementó RF03, RF04 y RF05, añadió siete pruebas y comprobó el recorrido en el navegador. Se actualizaron el README y la bitácora. La estudiante informó después que realizó la revisión y pasó correctamente.

## 24 de noviembre de 2026 — Ilustraciones del catálogo

**Herramienta:** generación de imágenes integrada de OpenAI.

> Puedes crear las imagenes y agregarlas en la carpeta correspondiente, ademas de validar que se muestren para el grupo correspondiente

**Resultado:** se generó una imagen por ejercicio y se vinculó cada archivo JPEG a su ID en el catálogo.

<details>
<summary>Prompts de generación</summary>

Para `pec-01` se usó este prompt:

> Use case: scientific-educational. Single raster illustration for GymTrack's exercise detail screen, exercise pec-01 Press banca plano. One adult lifter in navy T-shirt and slate shorts lies back on a completely horizontal gym bench under a straight loaded barbell, using an overhand grip just wider than shoulders; elbows bent, bar hovering at mid-chest, both feet flat on the floor; show bench, bar, weight plates, support rack and whole body clearly, side three-quarter view. Clean semi-realistic 3D instructional illustration with soft gray studio lighting, matte navy and slate, light gray neutral background, centered landscape framing with margins. No text, arrows, numbers, logos, watermarks, or other people. The recognizable equipment and correct pose matter more than elaborate styling.

Para los demás ejercicios se usó el siguiente texto, seguido de la descripción de cada imagen:

> Use case: scientific-educational. Single image for the exercise detail card in the GymTrack mobile app. Clean semi-realistic 3D exercise illustration on a plain light gray studio background with soft grounded shadows, matte navy athletic shirt and slate shorts, professional gym equipment in dark gray, clear landscape frame with space around the relevant body and equipment. Show one adult only. Show only the exercise described, with credible anatomy and equipment, no repetition panels. No text, lettering, labels, arrows, logos or watermark.

- Exercise pie-01: 45-degree sled leg press. Action and framing: Side three-quarter view, seated and reclined at the bottom of a 45-degree plate-loaded sled, with shoulders and hips supported by padded seat, both shoes planted on the slanted footplate above the hips, legs around ninety degrees at the knees. Distinguish this from a horizontal leg press or hack squat.
- Exercise pie-02: seated leg extension. Action and framing: Seated on a dedicated leg extension machine, back supported, shin roller on the front of both lower shins just above the ankles, raising shins forward almost horizontal while thighs remain on the seat. Show padded roller and pivot at knee.
- Exercise pie-03: dumbbell walking lunge. Action and framing: Bottom of a forward lunge, forward foot planted and rear heel raised, rear knee hovering near the floor and front knee bent, upright torso, one dumbbell hanging at each side. Show the feet clearly in profile.
- Exercise pie-04: lying machine hamstring curl. Action and framing: Face-down on a prone hamstring curl machine with torso and thighs touching the padded bench and knees flexed, feet rising behind, a single roller directly behind both ankles. Clear side view.
- Exercise pie-05: seated calf raise. Action and framing: Dedicated seated plate-loaded calf raise machine, knees bent roughly 90 degrees, padded lever across lower thighs, forefeet supported on a narrow elevated edge with heels raised clear of the floor. Clear side angle.
- Exercise pec-02: flat dumbbell chest fly. Action and framing: Lying face-up on a horizontal bench, a dumbbell in each hand, arms spread out laterally roughly at shoulder level with elbows slightly bent, feet on the floor. Three-quarter angle from the head so the wide fly position and separate dumbbells are clear.
- Exercise pec-03: standing cable crossover. Action and framing: Between two clearly separate high pulleys, a D-handle held in each hand, pulling both handles forward and down until the hands nearly meet in front of the lower chest, elbows softly bent and balanced split stance. Cables taut from handles back outward to the two pulley towers.
- Exercise pec-04: seated pec deck fly. Action and framing: Seated upright against a pec deck's backrest, using a butterfly fly machine with two forearm pads, upper arms to sides around shoulder height and elbows bent 90 degrees, forearms pressing inward on pads. Show both pivoting arms attached to the machine, no dumbbells.
- Exercise tri-01: two-hand overhead dumbbell triceps extension. Action and framing: Seated upright on a flat bench, a single dumbbell supported overhead by both hands, elbows bent and upper arms pointing up, dumbbell lowered directly behind the head. Use side three-quarter view for clear separation of weight and head.
- Exercise tri-02: cable triceps pressdown. Action and framing: Standing facing a high pulley with a short straight attachment, upper arms close to torso, elbows straightened so handle is held in front of thighs. Cable visibly connects from center of handle to high pulley. Clear side three-quarter view.
- Exercise tri-03: single-arm dumbbell triceps kickback. Action and framing: One hand and same-side knee supported on a flat bench, other foot planted on floor, torso leaned forward near horizontal. Working upper arm close to torso and forearm extended backward in line with it, holding one dumbbell. Side view.
- Exercise tri-04: parallel-bar triceps dip. Action and framing: One person suspended between waist-height parallel bars with hands pressing down on the two separate bars, feet off the floor, torso upright with elbows bent back at around 90 degrees. Show the dip station and both bars clearly. No bench dips.
- Exercise esp-01: overhand pull-up from a hanging bar. Action and framing: An adult hanging from an overhead straight pull-up bar with both hands overhand, hands wider than shoulders, halfway up with bent elbows pulling downward, feet suspended; show the entire person from overhead bar to feet.
- Exercise esp-02: behind-neck lat pulldown. Action and framing: Seated under a lat-pulldown machine with knees secured under pads, back to the viewer at a slight angle so the long, straight cable bar is visibly behind the head near the top of the shoulders, hands wide, elbows bent downward, cable taut above. Show exercise identity with controlled range.
- Exercise esp-03: seated low cable row. Action and framing: Sitting on the bench of a low pulley row station, feet braced on footplates, knees slightly bent, neutral upright torso, both hands holding a small V-handle close to the lower ribs with elbows back. Taut cable connects to a low pulley directly forward.
- Exercise esp-04: front lat pulldown to the chest. Action and framing: Seated at a high pulley machine with thighs under the pad, wide overhand grip pulling the long straight bar in front of the face down toward the upper chest, elbows down. Cable taut vertically above the center of the bar. Front-side view so the front-of-body position is unmistakable.
- Exercise hom-01: seated dumbbell shoulder press. Action and framing: Seated upright against the vertical back pad of a bench, one dumbbell held in each hand at ear height with forearms vertical and elbows out to sides, about to press overhead. Front three-quarter view, entire seated body visible.
- Exercise hom-02: standing dumbbell lateral raise. Action and framing: Standing facing camera at slight angle with one dumbbell in each hand and both arms raised straight out sideways almost to shoulder height, softly bent elbows, neutral wrists and steady torso. Both dumbbells visible at opposite sides.
- Exercise hom-03: standing dumbbell front raise. Action and framing: Side three-quarter angle of standing athlete with one dumbbell in each hand, holding both arms up forward directly in front of the body at shoulder height with elbows soft and palms facing down. Both arms project forward, no lateral raise.
- Exercise hom-04: close-grip barbell upright row. Action and framing: Standing with a single barbell and both hands close together on it in an overhand grip, bar near upper abdomen, elbows pointing out and a little higher than the hands. Front three-quarter angle, bar close to the body. No pulling above shoulder height.
- Exercise hom-05: bent-over dumbbell rear-delt fly. Action and framing: Side three-quarter rear view, standing with knees softly bent and hips hinged until torso leans forward, dumbbells raised laterally out to each side in a wide rear-delt fly with elbows softly bent and spine neutral. Emphasize the hinged torso and rear-facing angle.
- Exercise bic-01: standing barbell biceps curl. Action and framing: Standing upright holding one straight barbell with palms facing up, elbows close to ribs and forearms raising the bar to waist-to-chest height. Both hands hold that same bar and torso stays upright.
- Exercise bic-02: alternating standing dumbbell curl. Action and framing: Standing with a dumbbell in each hand, one elbow flexed with palm facing the shoulder and the other arm clearly lowered by the side holding the other dumbbell. Show both hands and the contrasting positions.
- Exercise bic-03: EZ-bar preacher curl. Action and framing: Seated at a preacher bench that has a sloping support pad under both upper arms, holding a short visibly angled EZ curl bar with both palms up, elbows flexing while upper arms stay against the angled pad.
- Exercise bic-04: dumbbell hammer curl. Action and framing: Standing holding two dumbbells in a neutral hammer grip, palms facing each other and thumbs facing up, elbows bent about 90 degrees and close to the torso. Clearly distinguish parallel end-on dumbbell orientations and neutral wrists from palms-up curls.
- Exercise abd-01: supine leg raise on an exercise mat. Action and framing: Lying face-up on a thin floor mat with head, torso and hands supported on the ground, both legs together and raised about 60 degrees with knees nearly straight, no equipment. Full body in side view.
- Exercise abd-02: standing dumbbell side bend with two dumbbells. Action and framing: Front three-quarter view, standing with both feet planted hip-width and a dumbbell hanging in each hand. Torso bends gently to one side in the frontal plane; one dumbbell lowers alongside that thigh. No rotation or simultaneous forward bend.
- Exercise abd-03: seated ab crunch machine. Action and framing: Seated at a dedicated selectorized abdominal crunch machine using the padded shoulder or chest lever with handles by shoulders, torso gently rounded forward and hips seated, feet secured on foot supports. Show the distinct crunch station and supported position.
- Exercise cad-01: seated hip abduction machine. Action and framing: Front three-quarter view of upright seated person using a dedicated hip abductor machine, knee pads on the outside of the thighs, legs opening apart to push the pads outward, feet resting on movable supports. No barbell.
- Exercise cad-02: standing lateral cable hip abduction. Action and framing: Front three-quarter view, standing side-on to a low cable pulley, support leg near tower, farther leg lifting sideways away from the body with a cuff around that ankle. Taut cable from the moving ankle cuff running low to the tower. Hips level and working leg remains mostly straight.
- Exercise glu-01: dedicated standing glute kickback machine. Action and framing: Side view of a person leaning into a chest support at a dedicated stand-up glute kickback machine, one foot supporting them while the other pushes a machine foot pad backward with hip extended, rear leg mildly bent. Visible mechanical lever and chest pad, zero loose cables.
- Exercise lum-01: conventional barbell deadlift. Action and framing: Side three-quarter view, lifter near the start of a conventional deadlift, hips hinged with knees bent, neutral back and barbell close to the shins just off the floor, both hands gripping a single straight bar, weight plates clearly visible.
- Exercise lum-02: 45-degree back extension on a Roman chair. Action and framing: Clear full-body side view of person on a 45-degree Roman chair with thighs supported on angled pads and ankles secured by rollers. Torso forms a straight diagonal continuation of the legs (neutral top position), arms crossed on the chest. No round-backed or overextended pose, no weight.
- Exercise lum-03: seated selectorized lumbar extension machine. Action and framing: Dedicated lumbar extension resistance machine in side three-quarter view, person seated with pelvis stable and feet braced, a padded lever contacts behind the upper back, torso pressing backward toward neutral upright, arms crossed in front. Visible weight stack and lever, not Roman chair.
- Exercise ant-01: seated palms-up wrist curl. Action and framing: Close enough to see the grip. Person sitting with forearms supported along the thighs, fingers just past the knees, both palms up holding one short straight bar, wrists curling the bar upwards. Side three-quarter landscape view. Elbows do not lift.
- Exercise ant-02: seated palms-down reverse wrist curl. Action and framing: Close enough to clearly see the backs of both hands. Person seated with forearms supported on the thighs, holding a short bar overhand just beyond knees with knuckles and backs of hands facing up, extending only the wrists up. Side three-quarter landscape frame. This is the reverse grip, never palms up.

</details>

## 24 de noviembre de 2026 — Perfil y medidas

**Herramienta:** Codex de OpenAI. **Modelo de implementación:** GPT-6.2 Sol.

> Crea un plan para el desarrollo de la etapa 5, usa la guia del laboratorio, sigue las instrucciones y no cometas errores, yo actuare como supervisora de tu trabajo, hazme las preguntas que sean necesarias e investiga lo que haga falta, valida que todo funcione antes de entregarlo y actualiza la documentacion donde sea necesario, agrega comentarios en español donde sea importante entender el funcionamiento de tus cambios. Explica que cambiaste y porque, ademas de como puedo probar yo los cambios.

**Resultado.** La estudiante eligió comparar con el mes calendario anterior y pidió ejecutar el plan aprobado. Codex implementó Perfil y Medidas, añadió 13 pruebas y verificó el recorrido en el navegador. La guía de prueba y la investigación T4 quedaron en el README.

## 24 de noviembre de 2026 — Adaptación y entrega

**Herramienta:** Codex de OpenAI.

> Continuemos con la etapa 6, crea un plan para actualizar la documentacion de forma que sea clara, corta y entendible, debe ser en español, ademas verifica si puedes hacer un video de recorrido del app y lo que sea necesario para completar esta ultima etapa, hazme las preguntas que consideres necesarias e investiga lo que necesites, no cometas errores.

**Resultado.** La estudiante confirmó el nombre, el teléfono Android y Google Drive. Al ejecutar el plan, Codex ajustó el diseño, comprobó la versión web y preparó el README y el guion. La grabación en Android queda pendiente.

## 24 de noviembre de 2026 — RF09 · Advertencias por lesión

**Herramienta:** Codex de OpenAI.

> Crea un plan para desarrollar el primer punto RF09 de bonificacion, sigue la guia, las instrucciones, la investigacion realizada y las buenas practicas de desarrollo de software, hazme las preguntas que necesites e investiga lo que consideres necesario, no cometas errores, haz las validaciones y pruebas necesarias para entregar el trabajo de la mejor manera.

**Resultado.** La estudiante pidió ejecutar el plan. Codex añadió las casillas de Perfil, los avisos y cinco pruebas automatizadas nuevas. Verificó en web que los avisos cambian únicamente al guardar un perfil válido. La estudiante informó que las pruebas solicitadas en Expo Go pasaron satisfactoriamente.

## Próximos registros

Agregar una entrada solo si el prompt produjo una decisión o cambio relevante. Incluir fecha y etapa, el prompt, la herramienta/modelo y un resultado breve. No copiar consultas sencillas ni preguntas de aprendizaje.
