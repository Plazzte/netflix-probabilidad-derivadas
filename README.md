# Detrás del play

Maqueta digital interactiva del trabajo sobre Netflix, algoritmos y probabilidad. Autores del trabajo: Lopez Juan y Jefer Beltran.

## Experiencias

- **Probabilidad:** modifica cuántos vieron una película dentro de un grupo ilustrativo de 200 millones. Simula 100 observaciones independientes, pausa y compara la proporción observada con la probabilidad del modelo.
- **Derivada:** ajusta de 0 a 200 solicitudes, explora una gráfica de T(x) y su tangente, amplía alrededor del punto y compara el cambio exacto con la aproximación de la derivada.
- Recorrido guiado, modo exposición y pregunta de comprensión. Diseño adaptable a teléfonos, teclado y preferencia de movimiento reducido.

## Modelo académico

P(A) = 150 / 200 = 0,75 = 75 %.

T(x) = 0,01x² + 0,2x + 1, en milisegundos; x es número de solicitudes.

T′(x) = 0,02x + 0,2, en ms/solicitud.

T(100) = 121 ms. T′(100) = 2,2 ms/solicitud. T(101) − T(100) = 2,21 ms.

Los datos y la función son supuestos ilustrativos del trabajo. No son estadísticas ni una representación del algoritmo real de Netflix. Las solicitudes son discretas; se usa una aproximación continua para derivar.

## Publicación

Sitio estático sin instalación de dependencias ni paso de compilación. En Vercel: importar este repositorio, Framework Preset **Other**, directorio de salida **dist**, sin comando de build. Los siguientes cambios en la rama de producción se publican con la integración Git de Vercel.

Documentación oficial: [configurar una compilación](https://vercel.com/docs/builds/configure-a-build), [integración con Git](https://vercel.com/docs/git).

## Desarrollo local

Servir `dist` con cualquier servidor HTTP estático. No abrir `index.html` mediante file:// porque utiliza módulos JavaScript.

Prueba de cálculos: `node --test math.test.mjs`.

Sin cuentas de visitantes, sin almacenamiento de datos y sin analítica. Google Fonts es opcional; el diseño conserva fuentes del sistema como alternativa.
