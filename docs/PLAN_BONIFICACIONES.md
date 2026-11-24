# GymTrack · Plan de bonificaciones

## Objetivo

Implementar RF09, RF10 y RF11 en tres avances revisables por la estudiante. La guía asigna hasta 0,15, 0,15 y 0,20 puntos respectivamente, condicionados a su demostración en la sustentación.

## 1. Advertencias por lesión · RF09

**Estado:** completado. La estudiante confirmó las pruebas en Expo Go.

- En Perfil, permitir seleccionar y deseleccionar los 11 grupos musculares con controles accesibles. Precargar las lesiones del socio y guardarlas con el perfil.
- Mostrar una advertencia junto a cada ejercicio del grupo afectado en la sesión diaria, el catálogo y la ficha. La advertencia informa y permite continuar usando la app.
- Comprobar las lesiones iniciales de pierna y lumbar, los ejercicios de otros grupos, los cambios al guardar y la desaparición de la advertencia al desmarcar una lesión.

## 2. Temporizador de descanso · RF10

- Incorporar en la sesión diaria un temporizador de 60 segundos con controles Iniciar, Pausar, Continuar y Reiniciar. Mostrar los segundos restantes y un mensaje al terminar.
- Usar useEffect y setInterval con un instante límite para no acumular retrasos. Limpiar el intervalo al pausar, terminar o salir. Al volver al primer plano, recalcular el tiempo pendiente. Al salir de la sesión se reinicia.
- Probar el inicio, la pausa, la reanudación, el reinicio, el fin en cero y la salida sin intervalos activos.

## 3. Persistencia · RF11

- Instalar @react-native-async-storage/async-storage con npx expo install. La versión documentada para SDK 57 es 2.2.0 y está incluida en Expo Go. Guardar el perfil con lesiones y medidas, y las marcas de cada día.
- Cargar el estado antes de permitir ediciones o guardar cambios. Usar una clave versionada, validar los datos recuperados y serializar las escrituras para impedir que los cambios rápidos sobrescriban datos recientes.
- Si falla la lectura o el guardado, mostrar un mensaje claro y evitar sobrescribir los datos guardados con valores iniciales. Tratar la primera ejecución sin datos como un caso normal.
- Comprobar que los datos se conservan tras cerrar completamente y reabrir Expo Go, que las marcas siguen separadas por día y que una lectura dañada o un error de almacenamiento no borran registros.

## Comprobación y documentación

- Añadir pruebas para cada regla y ejecutar npm test, npx tsc --noEmit y npx expo lint con Node 24. Probar el recorrido real en Android con Expo Go y distinguir las comprobaciones web de las del teléfono.
- Mantener controles de 44 × 44 puntos, texto de 14 puntos, áreas seguras y pantallas de máximo 200 líneas. Añadir comentarios en español sobre lesiones, limpieza del intervalo y carga del estado.
- Actualizar README, bitácora y registro de prompts con el avance real. Preparar para la sustentación cómo se detecta un grupo lesionado, por qué se limpia el intervalo y cómo se evita guardar antes de terminar la carga.
- La grabación, las capturas, la medición del tiempo entre pestañas y la etiqueta v1.0 siguen pendientes del cierre de entrega.
