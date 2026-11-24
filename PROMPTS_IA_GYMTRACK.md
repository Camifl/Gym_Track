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

## Próximos registros

Agregar una entrada solo si el prompt produjo una decisión o cambio relevante. Incluir fecha y etapa, el prompt, la herramienta/modelo y un resultado breve. No copiar consultas sencillas ni preguntas de aprendizaje.
