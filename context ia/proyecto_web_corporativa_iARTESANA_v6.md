# PROYECTO — Web corporativa iARTESANA · v6

> Reestructuración del sitio: de agencia de comunicación a implantación de IA por capas.
> **Las secciones 6 a 9 están listas para construir.**

---

## Qué cambia respecto a la v5

**Decisión de David: la web de iARTESANA no incorpora material, modelo ni discurso de iAdeBarrio.** Del material técnico aportado se conserva solo lo que da sustancia a los cuatro bloques.

- **Las cuatro páginas de bloque (secciones 6 a 9) quedan con inventario concreto**, listas para maquetar: qué se dice, qué se lista y qué se deja fuera.
- **La sección 14 se reduce a guardarraíles de redacción:** las frases que no pueden aparecer al escribir estas páginas.
- **Retirado** el análisis de arquitectura de marca y del modelo por suscripción.
- **Se mantiene un aviso:** el material técnico no menciona marca, tono ni contexto estable en ningún punto. La sección 6 los sitúa en primer lugar, y conviene que siga siendo así.

---

## Qué cambia respecto a la v4

Integrado el material aportado por Gerard, filtrado en la sección 14.

- **Inventario de producto concreto** en las cuatro páginas de bloque.
- **Anonimización y encapsulamiento de API** en `/seguridad-control`.
- **Dos decisiones abiertas quedan contestadas:** público objetivo y resultado dominante.

---

## Qué cambia respecto a la v3

**Decisión de David: se adopta la construcción animada por scroll.** La v3 recomendaba dejarla para una segunda versión del sitio; queda revertido. Consecuencias:

- **Nueva sección 13**, con la especificación completa de la capa de construcción.
- **Cambio de técnica respecto a lo que la v3 daba por supuesto:** no es vídeo sincronizado con el scroll, sino **SVG nativo animado por estados**. Es la decisión que hace la idea viable — mismo efecto, una fracción del coste y del riesgo.
- **Se resuelve un pendiente arrastrado desde la v1:** `/seguridad-control` y `/acompanamiento` dejan de estar sin activo visual. Los estados 5 y 6 de la construcción los cubren.
- **Los vídeos ya diseñados no se pierden:** cambian de destino, no de valor (sección 11).
- **Riesgo de calendario actualizado:** la capa se construye la última y el sitio debe funcionar sin ella.

---

## Qué cambia respecto a la v2

Filtrado del informe de tendencias de diseño 2026 (sección 12, nueva) y sus consecuencias:

- **Criterio de diseño explícito**, con lo que se adopta y lo que se descarta razonado. Antes el sistema visual estaba definido por el manual de marca y por el anti-brief de la web de tablet; ahora hay un criterio propio y escrito para la web corporativa.
- **La escala de intervención gana dos columnas:** qué registro deja y si es reversible. Es la mejor aportación del informe y va en `/ia-aplicada`.
- **Explicabilidad** se suma a `/seguridad-control` como quinto apartado.
- **Accesibilidad**: de requisito de calidad a posible línea de servicio (decisión abierta nº 10).
- **Nuevo riesgo:** el sitio persiguiendo tendencias contradice el mensaje del sitio.

---

## Qué cambia respecto a la v1

Revisión externa integrada. Lo esencial que se modifica:

| | v1 | v2 |
|---|---|---|
| **Nomenclatura** | El Sistema · Los Agentes · El Control · El Equipo | Base digital · IA aplicada · Seguridad y control · Acompañamiento humano, con titular de marca debajo |
| **Metáfora de la home** | Cuatro puertas | Qué construimos / Cómo lo hacemos |
| **Orden de la home** | Arquitectura primero | Problema y resultado primero, arquitectura después |
| **Bloque 02** | Agentes | IA aplicada, con escala de intervención |
| **Soberanía de datos** | Promesa pública | Principio interno; en público, control y portabilidad |
| **Contexto estático/dinámico** | Términos públicos | Términos internos; en público, contexto estable y datos vivos |
| **Conflicto Sistema/Sistema Base** | Decisión abierta | Resuelto: "Base digital" contiene "Sistema Base" sin colisión |
| **Producto de entrada** | Auditoría iARTESANA | **Diagnóstico iARTESANA** — 350 € |
| **Puerta gratuita** | Sesión 0 (público) | **Primera sesión** en público; "Sesión 0" pasa a nombre interno |

Lo que se mantiene de la v1 y la revisión no cuestionó: la distinción entre lo que se construye y lo que envuelve, la cautela legal, el mapa de activos audiovisuales, el tratamiento del legado de comunicación y los riesgos.

---

## 1. Qué cambia y por qué

La web actual comunica lo que iARTESANA **era**: comunicación, redes, diseño. El documento de contexto ya lo dice sin rodeos: *"la identidad visual ya no es el producto principal, es la primera capa de un sistema más amplio"*. La web todavía no lo ha entendido.

Lo que se conserva del trabajo previo: dominio único con rutas hijas, sesión gratuita y producto de entrada en una sola página, y leads directos a Supabase en lugar de a un Typeform — si vendéis orden de datos, la web tiene que practicarlo desde el día uno.

Lo que se corrige: el plan anterior contemplaba una landing por capa (siete en total). Para un equipo de dos personas no se mantienen. La nueva estructura las reduce a cuatro páginas con más peso cada una, y de paso resuelve el pendiente de *"¿qué es Automatizaciones y dónde encaja Mantenimiento?"*: automatizaciones van en IA aplicada, continuidad y mantenimiento en Acompañamiento humano.

---

## 2. La estructura: qué construimos / cómo lo hacemos

Los cuatro bloques no son cuatro fases, y tampoco son cuatro opciones entre las que elegir. Son dos cosas de naturaleza distinta:

```
QUÉ CONSTRUIMOS

   Base digital  ─────────→  IA aplicada

CÓMO LO HACEMOS

   Seguridad y control  ·  Acompañamiento humano
```

Si los cuatro se numeran 01-02-03-04, se comunica algo falso: que la seguridad llega en la fase 3 y las personas en la fase 4. Eso rompe la promesa —*"la cercanía es parte del producto"*, no la fase final— y regala el argumento al cliente desconfiado.

**Corrección respecto a la v1:** hablaba de "cuatro puertas". Es un error, y la crítica externa acierta: una puerta sugiere que puedes entrar por una y olvidarte de las demás. Seguridad y Acompañamiento no son alternativas, son garantías que atraviesan todo el servicio.

Lo que sí sigue siendo cierto —como lectura interna, no como metáfora pública— es que **cada cliente llega con un miedo distinto**: uno quiere automatizar, otro teme por sus datos, otro necesita saber que hay alguien detrás. Por eso los cuatro bloques necesitan la misma calidad de ejecución, aunque solo dos sean fases.

Hay además un argumento de fondo, no comercial, que refuerza la estructura: el marco normativo europeo de IA no se limita a ciberseguridad — pone peso en transparencia, supervisión humana y capacitación de quienes usan los sistemas. Es decir: **seguridad y formación no son extras que añadís para vender mejor, son parte de hacerlo bien.** (Verificar redacción antes de publicar; ver sección 8.)

---

## 3. Nomenclatura

Dos niveles: el nombre explica, el titular tiene carácter. Así no hay que elegir entre claridad comercial y personalidad de marca.

| | Nombre público | Titular | Verbo | Qué contiene |
|---|---|---|---|---|
| 01 | **BASE DIGITAL** | *Los cimientos* | Ordenamos | Sistema Base, base de datos, aplicaciones |
| 02 | **IA APLICADA** | *La inteligencia en acción* | Automatizamos | Agentes, asistentes y automatizaciones |
| — | **SEGURIDAD Y CONTROL** | *Todo bajo control* | Protegemos | Accesos, datos, trazabilidad, normativa |
| — | **ACOMPAÑAMIENTO HUMANO** | *Personas cerca* | Acompañamos | Formación, soporte, mantenimiento, evolución |

Leídos en fila, los verbos son un manifiesto que cabe en una línea y sirve fuera de la web —redes, propuestas, firma de email—:

> **Ordenamos. Automatizamos. Protegemos. Acompañamos.**

### Por qué estos nombres

**Base digital** resuelve el problema del primer bloque. *Ecosistema* suena a consultora genérica y sugiere algo que se organiza solo, justo lo contrario del control artesano. *Sistema* es correcto pero abstracto, y chocaba con "Sistema Base". *Infraestructura* es preciso y frío. *Contexto* explica una parte pero no engloba las aplicaciones. **Base digital** se entiende sin explicación, mantiene la metáfora de los cimientos que ya está desarrollada visualmente, y admite debajo las tres piezas sin renombrar ninguna: el bloque es Base digital, uno de sus componentes es Sistema Base. **El conflicto de naming de la v1 queda resuelto sin coste.**

Se descarta *"Base del negocio"*, que cubriría mejor la marca pero podría significar cualquier cosa —contabilidad, personal, local— y pierde la señal de que esto va de infraestructura digital, que es justo lo que os separa de una consultora de gestión.

**Sobre la marca dentro de "Base digital".** La objeción es legítima: un manual de identidad, un tono de voz o un protocolo de incidencias no son "digitales" en sentido estricto, y el nombre parece archivar el trabajo creativo bajo una etiqueta técnica. La incomodidad es real y conviene no maquillarla, porque **refleja una decisión estratégica que ya está tomada**: el documento de contexto dice que la identidad visual ya no es el producto principal sino la primera capa de un sistema mayor. El nombre es fiel a esa decisión.

Dicho eso, en este modelo la identidad **sí es un activo digital**: codificada, es el contexto estable sobre el que después opera la IA. No es branding archivado bajo tecnología; es branding convertido en infraestructura.

Dos condiciones para que la etiqueta no devalúe el trabajo creativo, y ninguna es negociable en la maqueta:

1. **La bajada empieza siempre por "Marca":** *"Marca, conocimiento, datos y herramientas conectadas. La base sobre la que trabajan las personas y la inteligencia artificial."*
2. **Dentro de la página, el contexto estable va primero y con peso.** La identidad es lo primero que lee el visitante del bloque, no una nota al pie tras los datos.

**IA aplicada** en lugar de *Agentes autónomos*. "Autónomos" transmite tres cosas que no os convienen: que la IA decide sin supervisión, que sustituye personas, y un nivel de autonomía que probablemente el proyecto no necesita. Además, no todo lo que implantaréis será un agente: habrá asistentes, buscadores, procesamiento documental, automatizaciones simples. Y hay un argumento de mercado: en España casi todas las consultoras usan ya las mismas palabras —agentes IA, automatización, chatbots, 24/7—. "Agentes" es reconocible pero ya no diferencia. Vuestra diferencia es que esos agentes trabajan sobre conocimiento, datos y criterios reales de la empresa.

**Seguridad y control** en lugar de *El Control* a secas. "El Control" conectaba bien con vuestra promesa, pero aislado es ambiguo: el visitante no sabe si habláis de control de procesos, económico o de supervisión. Con "Seguridad" delante, se entiende de inmediato.

**Acompañamiento humano** en lugar de *El Equipo*. El cambio es de perspectiva y es importante: "El Equipo" habla de vosotros, "Acompañamiento" habla de lo que recibe el cliente. Nadie compra un equipo; compra no quedarse solo después de la entrega. David y Gerard aparecen dentro de esa página, no al revés.

---

## 4. Mapa del sitio

```
/                       Home
├── /base-digital       Bloque 01 · Sistema Base, datos y aplicaciones
├── /ia-aplicada        Bloque 02 · Agentes, asistentes y automatizaciones
├── /seguridad-control  Bloque 03 · Accesos, datos, trazabilidad, normativa
├── /acompanamiento     Bloque 04 · Formación, soporte, evolución (+ equipo)
├── /diagnostico        Producto de entrada: primera sesión + diagnóstico 350 €
├── /agendar            Formulario + calendario → Supabase
├── /gracias            Confirmación con próximos pasos
└── /legal              Aviso legal, privacidad, cookies
```

Ocho rutas. Sin blog en la primera versión; `/notas` queda reservado (ver sección 11).

Las URLs de la v1 se descartan por buenos motivos: `/sistema` era genérico, `/agentes` os ataba a una tecnología concreta, `/control` resultaba ambiguo y `/equipo` parecía una página corporativa tradicional.

---

## 5. Home

**Corrección de fondo respecto a la v1:** el documento anterior explicaba muy bien *cómo* construís y poco *qué gana* la empresa. Un empresario no llega pensando "necesito contexto estable y una interfaz". Llega pensando: repetimos demasiadas tareas, la información está desperdigada, dependemos de una persona que lo sabe todo, tardamos en responder, cometemos errores, tenemos herramientas que no se hablan, queremos usar IA pero no sabemos por dónde empezar.

**La arquitectura aparece después de haber prometido un resultado.** Secuencia:

1. **Qué problema resolvéis y qué gana la empresa.** Copy v0, une beneficio y método:
   > Implantamos inteligencia artificial para que tu empresa trabaje con menos tareas repetidas, mejor información y más capacidad de respuesta.
   > Pero no empezamos instalando herramientas. Primero ordenamos el conocimiento, los datos y los procesos sobre los que deberá trabajar la IA.
2. **El principio, como columna vertebral:** *"Primero ordenamos. Después automatizamos."*
   Sustituye a *"Antes de automatizar, ordenar"*, que es más memorable pero suena a nota interna. La versión activa dice quién hace qué. La original se conserva como frase de apoyo en material interno y propuestas.
3. **Qué construimos.** Base digital → IA aplicada.
4. **Cómo lo hacemos.** Seguridad y control · Acompañamiento humano.
5. **Presencia humana, aquí y no al final.** Una foto pequeña o una frase firmada por David y Gerard antes del cierre. Sin esto, la primera mitad de la web es puro sistema y se enfría.
6. **Cómo se empieza.** Resumen de los tres pasos, enlace a `/diagnostico`.
7. **Prueba.** `[PENDIENTE: sin caso publicable todavía]`. Hasta que exista el del sector faro, declaración de método honesta. Nunca logos prestados ni testimonios inventados.
8. **Cierre.** CTA único.

**Regla de conversión para todo el sitio:** una sola llamada a la acción, siempre con las mismas palabras. Ni "contacta", ni "pide presupuesto", ni newsletter.

---

## 6. `/base-digital` — Bloque 01

La página más diferencial del sitio y, por tanto, la que debe ser más fácil de entender.

Tres piezas. La columna de la derecha es la que va en la web; la de la izquierda se queda dentro de casa:

| Concepto interno | Nombre público | Qué se dice |
|---|---|---|
| Contexto estático · Sistema Base | **Contexto estable** | Quién sois, cómo habláis, cómo trabajáis y qué criterios seguís. |
| Contexto dinámico · Base de datos | **Datos vivos** | Lo que cambia cada día: clientes, operaciones, incidencias, disponibilidad, histórico. |
| Aplicaciones | **Herramientas conectadas** | Por donde el equipo consulta, introduce y utiliza la información. |

"Estático" suena a rígido y desactualizado; "estable" dice lo mismo en positivo. La arquitectura técnica no cambia, solo la palabra que ve el cliente.

### Inventario de la página *(nuevo en v6)*

Lo que se lista bajo cada pieza. Todo escrito como lo que resuelve, no como la tecnología que lo hace.

**Contexto estable** — *va primero y con peso*
- Identidad verbal y visual: cómo sois y cómo se os reconoce.
- Tono y criterios de comunicación, aplicables por personas y por IA.
- Buenas prácticas y forma de trabajar, escritas.
- Protocolos de incidencias: qué se hace cuando algo falla, sin depender de quién esté ese día.
- Procesos documentados y criterios de decisión.

> Esta pieza es el diferencial de la casa y no aparece en ningún documento técnico. Si se cae de la página, el bloque 01 pasa a ser infraestructura y deja de distinguirse de cualquier agencia de automatización. **Va arriba, no como nota al pie.**

**Datos vivos**
- Una sola fuente de información en lugar de hojas paralelas y datos en la cabeza de alguien.
- Estructura pensada para crecer, no para el apaño de hoy.
- Histórico utilizable, no solo el día a día.
- Sincronización entre sistemas: lo que se actualiza en un sitio se actualiza en todos.
- Información exportable y documentada.

**Herramientas conectadas**
- Web y páginas de captación conectadas a la base de datos: cada contacto entra ya ordenado.
- Panel de gestión con las métricas del negocio en un solo sitio.
- Reservas, agenda y calendario.
- Tienda y pagos, cuando el negocio lo requiere.
- Conexión con lo que ya se usa —correo, hojas de cálculo, CRM, calendarios, pasarelas de pago— en vez de sustituirlo todo.

**Frase que no puede faltar en la página:**

> *No sustituimos todo lo que ya tienes. Revisamos qué funciona, qué puede conectarse y qué necesita ordenarse.*

Sin ella, un porcentaje del tráfico leerá que le proponéis empezar de cero y se irá sin preguntar.

Dos ideas que esta página tiene que dejar clavadas:

- **El Sistema Base sirve al equipo humano tanto como a la IA.** Un manual de buenas prácticas y un protocolo de incidencias son útiles el día uno, aunque no se implante nunca un agente. Esto desactiva la objeción *"esto es preparar cosas para un futuro que no sé si quiero"*.
- **No hay que rehacer la empresa entera para trabajar con vosotros.** Literal, en la página: *"No sustituimos todo lo que ya tienes. Revisamos qué funciona, qué puede conectarse y qué necesita ordenarse."* Sin esta frase, más de un cliente leerá que le proponéis empezar de cero, y se irá.

La comparación de la IA con *"un becario brillante en su primer día"* funciona, pero baja a recurso secundario: como titular puede rebajar el valor percibido de la IA y está algo vista.

---

## 7. `/ia-aplicada` — Bloque 02

- **Mensaje-eje:** *"Inteligencia artificial que conoce tu empresa antes de actuar."*
- **Qué se implanta:** agentes, asistentes, buscadores internos, procesamiento documental, automatizaciones de proceso. Con ejemplos concretos y reconocibles del sector, nunca genéricos.
- **La regla, en voz alta:** no se implanta hasta que la Base digital está sana. Decir lo que no hacéis es, en esta página, lo que más convierte.
- **Los límites los pone el cliente.** Recuperar la pregunta del Bloque D del diagnóstico —*¿dónde no querríais nunca que hubiera IA en vuestro negocio?*— y ponerla en la web antes de vender nada.

**Escala de intervención** (incorporación de la revisión, y la mejor idea nueva de esta versión). Comunica confianza mucho mejor que la palabra "autónomo" y explica que no todos los sistemas tienen la misma libertad:

| Nivel | Qué hace | Qué registro deja | ¿Reversible? |
|---|---|---|---|
| **Asiste** | Propone, resume o busca información. | Consulta registrada | No aplica: no actúa |
| **Automatiza** | Ejecuta procesos ya definidos. | Log de cada ejecución | Sí |
| **Actúa** | Usa herramientas dentro de límites establecidos. | Registro de acción y motivo | Sí, con deshacer explícito |
| **Pide aprobación** | Se detiene cuando la decisión necesita criterio humano. | Quién aprobó, cuándo y qué | No hace falta: nada ocurre sin visto bueno |

Las dos columnas de la derecha son incorporación del informe de tendencias 2026 y mejoran la escala de forma sustancial. **Toda acción deja rastro y toda acción es reversible.** Esto contesta por adelantado la pregunta que todo cliente prudente se hace y no siempre formula: *¿y si se equivoca?*

Esta escala es además un buen instrumento comercial: permite empezar por el nivel más bajo con clientes temerosos y subir cuando hay confianza.

### Inventario de la página

Hasta ahora esta página describía bien la arquitectura y mal el producto. Un cliente que llega con un dolor operativo quiere reconocer **su** caso, no entender una taxonomía.

| Canal | Qué es | Casos que el cliente reconoce |
|---|---|---|
| **Texto** | Asistentes entrenados con la documentación real del negocio | Atención en web y mensajería fuera de horario · Preguntas frecuentes resueltas sin ocupar a nadie · Primer filtro de contactos comerciales · Atención en varios idiomas |
| **Voz** | Sistemas telefónicos conversacionales | Llamadas que nadie coge a mediodía · Confirmación de citas y reservas · Recordatorios y seguimiento de presupuestos |
| **Documentos** | Procesamiento y búsqueda | Facturas y albaranes leídos sin teclear · Buscar en el archivo propio y obtener respuesta con la fuente · Resúmenes de documentación extensa |
| **Procesos** | Automatizaciones sobre la Base digital | Alta automática de contactos ordenados · Avisos internos cuando pasa algo que importa · Informes periódicos que se generan solos · Reservas y agenda sincronizadas |

**Regla de redacción:** cada elemento se escribe como el problema que resuelve, nunca como la tecnología que lo hace. *"Nadie coge el teléfono a mediodía"* vende; *"voicebot con latencia ultra-baja"* no dice nada a una pyme.

**Fuera de esta página:** avatares de vídeo generativo y generación de imagen en tiempo real. Existen como capacidad y pueden ofrecerse en conversación si alguien los pide, pero en una web cuyo argumento es criterio humano y trato directo, un avatar hiperrealista trabaja en contra del bloque 04.

---

## 8. `/seguridad-control` — Bloque 03

Vuestro mejor diferenciador frente a agencias pequeñas de automatización. Cuatro apartados:

1. **Protección y accesos.** Quién puede hacer qué, copias, qué pasa si alguien deja la empresa.
2. **Control y portabilidad de los datos.** Estructurados, documentados y exportables.
3. **Trazabilidad y supervisión.** Qué hizo la IA, cuándo y por orden de quién.
4. **Explicabilidad.** *(Añadido en v3.)* No basta con que el sistema acierte: tiene que poder decir en qué se basó. Una respuesta de IA sin fuente es una opinión; con fuente, es una herramienta de trabajo. Aquí, además, hay coincidencia entre exigencia normativa y buen producto — se puede vender como lo segundo sin necesidad de invocar lo primero.
5. **Qué sale de tu empresa y qué no.** *(Añadido en v5.)* La respuesta a la pregunta que **todo** cliente hace tarde o temprano: *¿mis datos acaban en manos de una empresa americana?* Dos técnicas concretas:
   - **Anonimización antes del envío:** nombres, identificadores y credenciales se eliminan o enmascaran antes de que ninguna consulta salga hacia un modelo externo.
   - **Encapsulamiento de API:** las llamadas pasan por una pasarela propia, de modo que el proveedor del modelo no recibe la identidad ni la trazabilidad del negocio.

   Esto merece espacio propio y explicación llana, quizá con un diagrama sencillo de qué cruza la frontera y qué se queda dentro. Es concreto, es verificable y prácticamente nadie se lo está explicando así a una pyme. **Redactado en presente y sin adjetivos absolutos:** describe un procedimiento, no promete un resultado. "Anonimizamos antes de enviar" es defendible; "confidencialidad absoluta" no lo es y ningún sistema puede garantizarlo.
6. **Preparación normativa.** Qué hay que tener ordenado para llegar a tiempo.

### Inventario de la página *(nuevo en v6)*

Lo que se lista bajo cada apartado, en lenguaje de cliente:

**Protección y accesos**
- Permisos por persona y por función: cada uno ve lo que necesita ver.
- Copias de seguridad y recuperación.
- Cifrado de la información, tanto guardada como en tránsito.
- Qué pasa cuando alguien deja la empresa: se retira el acceso, no el conocimiento.

**Control y portabilidad**
- Información estructurada y documentada, no encerrada en un formato propietario.
- Exportable cuando queráis y sin pedir permiso.

**Trazabilidad y supervisión**
- Registro de qué hizo la IA, cuándo y a petición de quién.
- Seguimiento de las consultas que se envían a modelos externos.
- Revisión periódica del comportamiento de los sistemas implantados.

**Qué sale de tu empresa y qué no** — *el apartado que más convierte*
- Anonimización antes del envío.
- Pasarela propia entre vuestros datos y el modelo externo.
- Un diagrama simple de qué cruza la frontera y qué se queda dentro vale más aquí que tres párrafos.

**Preparación normativa**
- Qué obligaciones existen ya y cuáles vienen.
- Qué hay que tener ordenado para llegar a tiempo.
- Dónde termina nuestro trabajo y empieza el de un asesor legal — dicho con naturalidad, no en letra pequeña.

### Dos correcciones que evitan promesas indefendibles

**Sobre la dependencia de proveedores.** La v1 decía *"base de datos propia, no software de alquiler, sin dependencia de un proveedor"*. Es falso: si usáis Supabase y Vercel, hay dependencia — menor y más gestionable, pero la hay. Un cliente con perfil técnico lo detecta y ahí se pierde la venta y la credibilidad. Formulación correcta:

> Datos estructurados, documentados y exportables, sin quedar encerrados en una herramienta cerrada. Construimos para que la empresa conserve el control y la capacidad de trasladar su información.

**Sobre "soberanía de datos".** Sigue siendo principio interno y tesis de la casa. Pero en comunicación pública se sustituye por **control y portabilidad**: "soberanía" suena ideológico y promete más de lo que técnicamente se entrega. Mismo compromiso, afirmación defendible.

### Aviso legal

⚠️ El calendario y el alcance del Reglamento Europeo de IA siguen en movimiento. **Ninguna afirmación normativa concreta —fechas, obligaciones, categorías de riesgo— se publica sin verificación previa** con fuente oficial actualizada y, si algo se presenta como vinculante, revisión de un asesor legal.

Y la línea que no se cruza: iARTESANA **no es una asesoría jurídica**. La promesa correcta es *"te dejamos preparado para cumplir"*, nunca *"te garantizamos el cumplimiento"*. La primera es cierta y vendible; la segunda es un pasivo. Decirlo abiertamente da más confianza que esconderlo en letra pequeña.

---

## 9. `/acompanamiento` — Bloque 04

No es mantenimiento, y reducirlo a eso sería perder el bloque. Es **adopción**: que el sistema se use de verdad y la inversión no acabe abandonada.

Lo que el cliente recibe:

- Alguien que conoce su implantación, no un ticket.
- Formación para que el equipo entienda las herramientas, sepa cuándo usarlas y conozca sus límites.
- Capacidad de detectar errores y no depender de vosotros para cada acción.
- Documentación y tutoriales.
- Canales claros de soporte.
- Evolución del sistema conforme crece el negocio.
- Criterio para decidir qué automatizar y qué no.

Dentro de esta página, y solo aquí, aparecéis vosotros: David y Gerard, foto real, qué hace cada uno, cómo trabajáis. Sin fotos de stock, sin "nuestro equipo de expertos". Después de tres páginas de sistemas, dos caras reales **son** el argumento.

La frase de la casa aparece aquí, una sola vez y grande:

> *Artesanía no significa hacerlo todo a mano. Significa saber qué cosas no se deben automatizar.*

*(Nota interna: aquí vive el margen recurrente del modelo. En la web se cuenta como tranquilidad, no como suscripción.)*

### Inventario de la página *(nuevo en v6)*

⚠️ **Aviso para cuando la escribas:** de las cuatro, esta es la única que no recibe **nada** del material técnico aportado. Los documentos de ingeniería resuelven el acompañamiento en una línea de mantenimiento. Se escribe entera desde cero — y es, precisamente, la que más os diferencia. Si sale más floja que las otras tres por falta de material, el visitante leerá que las personas son el relleno.

Cuatro apartados:

**1. Con quién hablas**
- Las mismas dos personas que diseñaron el sistema, no un ticket ni un intermediario.
- Canales de contacto claros y tiempos de respuesta reales, no promesas de 24/7.

**2. Formación y materiales** — *el apartado con más peso de la página*

Aquí no basta con prometer "damos formación". **Se listan los materiales**, porque un material es un entregable y una formación es una promesa. Es lo que convierte este bloque de intangible en algo que el cliente puede imaginar recibiendo.

| Formato | Para qué | Cuándo se usa |
|---|---|---|
| **Guía escrita del sistema** | Documentación viva de la implantación concreta de cada cliente | Base de todo. Se consulta y se actualiza |
| **Videotutoriales cortos** | Enseñar a hacer una cosa concreta, paso a paso | Lo que se explica mejor mostrando que escribiendo |
| **Sesiones de formación** | Arranque con el equipo, en persona u online | Al entregar cada capa, y cuando entra gente nueva |
| **Fichas de consulta rápida** | Una página con lo que se usa a diario | Para tener al lado, no para estudiar |
| **Guía de incorporación** | Que alguien nuevo aprenda el sistema sin depender de nadie | Cada vez que entra una persona al equipo |

Tres ideas que la página debe transmitir sobre estos materiales:

- **Enseñamos también cuándo no usar la IA.** Reconocer los límites y detectar un resultado erróneo forma parte de la formación. Es lo contrario de lo que hace el mercado, y es coherente con la frase de la casa.
- **El objetivo declarado es la autonomía**, no la dependencia. Se dice abiertamente aunque parezca ir contra el negocio: es exactamente lo que hace que un cliente se quede.
- **Los materiales no se hacen aparte: salen del sistema.** La documentación de procesos, el manual de buenas prácticas y los protocolos de incidencias **son el contexto estable de la Base digital** (sección 6). Se escriben una vez y sirven dos veces: como material de formación para el equipo humano y como contexto para la IA. Esto cierra el círculo de los cuatro bloques —el 04 entrega lo que el 01 construyó— y conviene decirlo en la web, porque explica por qué vuestro acompañamiento no es un extra facturable sino una consecuencia del método.

> ⚠️ **Nota operativa, no para la web.** El vídeo envejece mal: cualquier cambio de interfaz deja un tutorial desactualizado. Con dos personas y clientes que pagan, prometer vídeo para todo es una deuda de mantenimiento que se acumula en silencio. Criterio: **guía escrita como base** —barata de actualizar— y **vídeo solo para lo que de verdad se entiende mejor viéndolo**, en piezas cortas de un asunto cada una, de modo que rehacer una cueste diez minutos y no una tarde. No prometáis en la web un catálogo de vídeo que después haya que sostener.

*(Los materiales genéricos —qué es la IA aplicada a un negocio, cómo leer un resultado, qué preguntar antes de automatizar— son además material publicable en `/notas` cuando exista. Los específicos de cada cliente, nunca.)*

**3. Evolución**
- El sistema crece con el negocio: se ajusta lo que deja de encajar.
- Revisión periódica de qué funciona y qué sobra.
- Nuevas piezas cuando el negocio las pide, no cuando toca renovar.

**4. Criterio**
- Ayuda para decidir qué automatizar y qué conviene dejar en manos de personas.
- Es el servicio menos tangible y el más valioso, y enlaza directamente con la frase de la casa.

**Y aquí, y solo aquí, aparecéis vosotros.** David y Gerard, foto real, qué hace cada uno. Después de tres páginas de sistemas, dos caras reales son el argumento — el mismo criterio de ruptura visual que el estado 6 de la capa de construcción (sección 13).

---

## 10. `/diagnostico` — Producto de entrada

La revisión señala un fallo real: **350 € tienen que comprar un entregable, no una conversación.** La página debe dejar clarísimo qué recibe el cliente:

- Procesos analizados.
- Estado de datos y herramientas.
- Oportunidades priorizadas.
- Riesgos detectados.
- Primera propuesta de implantación.
- Próximos pasos y orden recomendado.

El precio sí va en la web: da confianza y filtra.

### Naming: decidido

**El producto pasa a llamarse "Diagnóstico iARTESANA".**

"Auditoría" arrastra en castellano una carga concreta: auditoría de cuentas, auditoría laboral, inspección. Es algo que te *hacen*, normalmente porque toca, y que empieza buscando lo que has hecho mal. Vuestro tono es exactamente el contrario —*devolver tranquilidad y control, no amplificar la urgencia*— y el cliente ya llega asustado con la IA. Además, el material interno ya dice que *"la Auditoría promete un diagnóstico"*: el nombre no coincidía con la promesa.

Lo que zanja la duda del coste de migración: **ese coste no volverá a ser tan bajo.** Aún no habéis hecho las primeras cinco a ocho, así que hoy el cambio afecta a documentos internos y a nada más. Con veinte clientes hechos, cambiarlo ya no se plantea.

Nombre corto para hablar y escribir; el entregable lo carga la línea que va siempre debajo:

> **Diagnóstico iARTESANA** — Diagnóstico y hoja de ruta para implantar IA. 350 €, que se descuentan si avanzamos juntos.

Se descarta *"Diagnóstico de IA y hoja de ruta"* como nombre: describe bien, pero cinco palabras no se dicen en una reunión.

**La puerta gratuita pasa a llamarse "primera sesión" de cara al cliente. "Sesión 0" se queda como nombre interno.**

Mismo criterio que ya aplicamos a *contexto estable* y a *control y portabilidad*: el término con carácter se queda dentro, el término claro sale fuera. "Sesión 0" tiene personalidad, pero un visitante que no os conoce no puede permitirse descifrar el CTA más importante del sitio. En minúscula y sin artículo de producto, porque no es un producto: *la Sesión 0 nunca se vende, se ofrece*.

Y así se preserva intacta la distinción que sostiene el modelo: **la primera sesión promete una conversación, el Diagnóstico promete un diagnóstico.** Dos verbos distintos, dos nombres distintos.

Internamente no cambia nada: rúbrica, métricas y guiones siguen hablando de Sesión 0.

**Llamada a la acción única en todo el sitio:** `Reservar primera sesión`. Siempre estas tres palabras, en todos los botones, sin variaciones creativas. Descripción que la acompaña en la primera mención de cada página: *"Una primera conversación de 45 minutos, sin coste ni compromiso."*

---

## 11. Sistema visual, activos y técnica

### Relación con la web de tablet

No son la misma web ni deben unificarse. **La de tablet es el pasillo**: lineal, se recorre acompañado. **La corporativa es el vestíbulo**: autoservicio, el visitante elige por dónde entrar. Comparten identidad y buena parte del copy; difieren en estructura y propósito.

### Vídeos: nuevo destino *(revisado en v4)*

Los cuatro vídeos isométricos se diseñaron para el modelo antiguo de capas. Con la capa de construcción adoptada (sección 13), **la web corporativa ya no los usa como pieza principal**: el fondo animado hace ese trabajo en SVG nativo, más ligero y mejor integrado.

Dónde va cada cosa:

- **Fotogramas clave KF0–KF4** → arte de referencia para dibujar el SVG de la construcción. Composición, encuadre, color por capa e iluminación se aprovechan íntegros.
- **Vídeos renderizados V1–V4** → **web de tablet**, que es su sitio natural: dispositivo controlado, sin conexión, sin depender del scroll.
- **KF4** → imagen fija de marca: `og:image`, portadas de propuesta, cabeceras.
- **Los dos vídeos que faltaban ya no hacen falta.** Seguridad y Acompañamiento quedan cubiertos por los estados 5 y 6 de la construcción. Dos producciones que se ahorran, y un pendiente arrastrado desde la v1 que se cierra.

Si más adelante se quiere una pieza de vídeo suelta para redes o propuestas, el máster encadenado de ~30 s sigue siendo válido tal como está especificado.

### Técnica

Next.js (App Router) + Tailwind, un repo (`iartesana-web`), despliegue en Vercel, contenido en MDX sin CMS hasta que haya volumen, formularios contra Supabase, analítica Plausible — medir con GA4 en una web que vende control de datos sería incoherente.

- **SEO real.** Esta sí se indexa. Metadatos y Open Graph por página, sitemap, `robots.txt`, datos estructurados de organización. Las cuatro páginas de bloque son los activos SEO: escribirlas pensando en lo que la gente busca de verdad, sin relleno.
- **Blog:** fuera de la primera versión. `/notas` reservado. El anexo pedagógico del diagnóstico —*"Qué es realmente la IA aplicada a tu negocio"*— es el primer artículo y ya está escrito.
- **Rendimiento y peso:** los vídeos son el riesgo. `webm` + `mp4`, silenciados, `preload="none"`, póster estático, desactivados con `prefers-reduced-motion`. Objetivo LCP < 2,5 s. Presupuesto de peso por página fijado **antes** de maquetar, no medido después: es la única forma de que no se incumpla.
- **Accesibilidad:** AA, y tratada como arquitectura desde el primer componente, no como repaso final. Ojo con el gris sobre negro y con el verde `#85bf57`, que sobre blanco se queda corto para texto pequeño.
- **Container queries** para los componentes de bloque, que se reutilizan en anchos distintos (home y página propia). Soporte de navegadores ya suficiente; evita duplicar variantes.

### El legado de comunicación

Diseño, identidad y redes no desaparecen: se absorben en la Base digital. Pero hay clientes y contactos que llegan buscando *"una web"* o *"un logo"*. Si no encuentran nada, se van sin preguntar.

Solución mínima: dentro de `/base-digital`, un apartado que reconozca ese servicio con su nombre —marca, identidad, presencia digital— explicando que ahora es la primera pieza de algo mayor. No una página propia: eso reabriría el posicionamiento que se está cerrando. Y redirecciones 301 desde las URLs antiguas de servicios.

---

## 12. Criterio de diseño: el informe 2026, filtrado

### El principio de filtro

Una empresa cuyo mensaje central es *"no persigas el hype, primero ordena"* no puede construir su web persiguiendo tendencias. Si la web corporativa se parece a cualquier otra web puntera de 2026, el mensaje se desmiente solo antes de que nadie lea una línea.

**La única tendencia que iARTESANA no puede seguir es la presión por seguir tendencias.** No por conservadurismo: por coherencia. La pregunta ante cada técnica no es *"¿está vigente?"* sino *"¿sirve al orden, al control y a la calma, o sirve a parecer actual?"*.

Conviene además notar que el informe se contradice a sí mismo. Su conclusión sostiene *"intención sobre interfaz"* y *"humano sobre algoritmo"*, pero la mayor parte de su catálogo es espectáculo de interfaz. **La mitad valiosa del informe no es la visual: es la sistémica y ética** — auditabilidad, explicabilidad, supervisión humana, accesibilidad. Y esa mitad se parece mucho a lo que vosotros ya vendéis.

⚠️ Las cifras del informe (tamaño de mercado, porcentajes de mejora, soporte de navegadores) **no se reciclan en material comercial de iARTESANA sin verificar en fuente primaria**. Misma disciplina que ya aplicamos a las afirmaciones normativas: un dato prestado que resulta falso cuesta más que no citar ninguno.

### Lo que adoptamos

**1. Accesibilidad como arquitectura.** El principio de *diseñar para los extremos* —resolver primero al usuario con más limitaciones y obtener de paso una experiencia mejor para todos— no es solo ética: es exactamente vuestro argumento sobre el orden aplicado al diseño. Un sistema accesible es un sistema con mejor arquitectura lógica. Sube de "requisito de calidad" a **criterio de construcción**, y abre una posible línea de servicio (ver más abajo).

**2. Tipografía como estructura.** Titulares grandes, secciones de solo texto, cuerpo intocable en legibilidad. Aquí el informe **confirma decisiones ya tomadas**: es lo que hace la web de tablet con negro, Dubai Bold y aire. No cambia nada; conviene saber que lo que ya teníais está alineado.

**3. Movimiento pedagógico, nunca decorativo.** El criterio útil del informe es que el movimiento puede *enseñar*, no solo adornar. Los cuatro vídeos isométricos ya cumplen eso: enseñan que el orden importa mostrándolo construirse.

> **Decidido (v4):** se adopta la construcción animada por scroll como capa de fondo de todo el sitio. La reserva de la v3 era contra el vídeo sincronizado con el scroll, que sigue descartado por caro y frágil. Resuelto como SVG nativo por estados, la idea pasa el filtro con holgura: no es adorno, es la tesis representada. **Especificación completa en la sección 13.**

**4. Container queries y bajo consumo.** Técnicas baratas, reales y sin riesgo estético. Reducir peso mejora conversión en conexiones malas, que es donde vive buena parte de vuestro cliente potencial.

**5. Auditabilidad, explicabilidad y supervisión humana.** La aportación más valiosa del informe, y ya integrada en las secciones 7 y 8: registro de acciones, reversibilidad, aprobación humana en lo sensible. **No es diseño de interfaz: es producto.**

### Lo que descartamos, y por qué

| Tendencia | Motivo |
|---|---|
| **Liquid Glass** | Ya estaba prohibida en el anti-brief de la web de tablet, y con razón: transparencias y refracción sobre lienzo negro con acentos de color destrozan la legibilidad. Además es lenguaje de marca de otro; adoptarlo es vestirse de Apple. |
| **3D interactivo, Spatial UI, AR** | No vendéis objetos que manipular en el espacio. Sería espectáculo por el espectáculo, justo lo que decís no hacer. Los vídeos isométricos ya dan volumen por una fracción del coste. |
| **Sentient UX / interfaz adaptativa** | **Aquí hay conflicto directo con la tesis.** Ver abajo. |
| **Zero UI, multimodal (voz, cámara)** | Correcto para productos operativos, absurdo en un sitio de ocho rutas. Eso sí: es material de `/ia-aplicada` —lo que podéis construir *para* el cliente—, no criterio para vuestra propia web. |
| **Glitch y visuales surrealistas de IA** | El glitch comunica avería. Sois la empresa del orden y el control: es la señal exactamente contraria. Y las imágenes generativas surrealistas envejecen en meses. |
| **Micro-interacciones de gratificación** | Mecánica de formación de hábito importada de redes sociales. Vuestro tono es sereno; el objetivo no es que el visitante vuelva por el subidón, es que entienda y decida. Feedback funcional sí; recompensa dopamínica no. |

### El conflicto que hay que señalar

El informe propone interfaces que **infieren el estado emocional o el nivel de pericia del visitante** y reorganizan la pantalla en consecuencia. Es la idea más seductora del documento y la que no podéis tocar:

**No se puede vender control de datos mientras se perfila emocionalmente a quien te visita.** Requiere seguimiento conductual, contradice la decisión de usar analítica sin cookies ni perfilado, y desmiente la promesa de `/seguridad-control` en la propia página que la enuncia. Un visitante técnico que abra las herramientas de desarrollo y vea un rastreador de comportamiento en la web que le promete portabilidad de datos no vuelve.

La versión honesta de "adaptación al usuario" que sí podéis hacer, y que además es barata: **dejar que la persona elija por dónde entra.** Cuatro bloques con puntos de entrada claros ya adaptan el recorrido a quien llega — con la diferencia de que decide el visitante, no un modelo que lo observa. Es, literalmente, devolver el control. Coincide con vuestra tesis y no cuesta nada.

### El uso más valioso de este informe

No es estético: es comercial.

Auditabilidad, explicabilidad, supervisión humana, reversibilidad y accesibilidad son cosas que iARTESANA puede **vender**, no solo aplicar. Alimentan `/seguridad-control`, `/ia-aplicada` y el argumentario del diagnóstico mucho mejor de lo que alimentan la maqueta.

Y hay un guiño que conviene no desaprovechar: el informe concluye que el diseñador ha pasado de dibujar pantallas a ser *arquitecto de sistemas de inteligencia*. Es, palabra por palabra, vuestro posicionamiento. Cuando exista `/notas`, ahí hay un primer artículo con la tesis ya escrita por otros.

---

## 13. La capa de construcción

> Especificación de la capa de fondo animada por scroll. Alimenta directamente el prompt de construcción.

### Qué es

Una escena isométrica única —la misma de los vídeos— que vive **detrás del contenido** de todo el sitio y se ensambla a medida que el visitante baja. El texto scrollea por encima; la construcción avanza por debajo, sin robarle protagonismo.

### Por qué esto sí pasa el filtro de la sección 12

Porque **la forma del sitio defiende el argumento del sitio**. El visitante no puede llegar a los agentes antes de que exista la base: el scroll es secuencial y la construcción también. No lee que el orden importa — lo recorre.

Es la definición literal de *movimiento pedagógico y no decorativo*. Si se retira la capa, el sitio sigue funcionando y el argumento sigue estando escrito; con la capa, el argumento además se demuestra. Ese es exactamente el listón que la sección 12 pone para admitir una técnica.

### El problema a resolver: el sitio no es lineal

La sección 2 estableció que la web corporativa es un **vestíbulo**, no un pasillo. Alguien puede aterrizar en `/seguridad-control` desde una búsqueda sin haber pasado por la home. Si la construcción solo tiene sentido leída en orden, se rompe en cuanto alguien entra por la puerta lateral — que será la mayoría del tráfico orgánico.

**Solución: dos alcances distintos.**

- **En la home**, secuencia completa. El visitante llega arriba, baja, y la escena se construye entera de vacío a sistema vivo. Aquí es donde vive la narración.
- **En cada página interior**, la escena arranca **ya construida hasta la capa anterior** y solo anima lo propio de esa página. Quien entra directo a `/ia-aplicada` encuentra la plataforma, los bloques y los conductos ya ahí, como hecho dado, y ve aparecer únicamente los orbes.

Esto convierte el problema en refuerzo: llegar a `/ia-aplicada` y encontrar la base ya montada dice, sin una palabra, *esto no existe sin aquello*.

### Los estados

| Estado | Qué hay en pantalla | Dónde se dispara | Color |
|---|---|---|---|
| **0 · Vacío** | Rejilla apenas visible, un punto de luz | Entrada de la home | — |
| **1 · Plataforma** | Teselas que se ensamblan en una base | "Primero ordenamos" · `/base-digital` | Verde |
| **2 · Bloques** | Monolitos de datos que emergen | "Datos vivos" · `/base-digital` | Azul |
| **3 · Conductos** | Tuberías que conectan los bloques | "Herramientas conectadas" · `/base-digital` | Violeta |
| **4 · Orbes** | Entes de luz recorriendo la red | "Qué construimos: IA" · `/ia-aplicada` | Rosa |
| **5 · Envolvente** | Una carcasa translúcida rodea y sella el conjunto; un punto de acceso se ilumina | "Cómo lo hacemos: seguridad" · `/seguridad-control` | Blanco frío |
| **6 · Retirada** | La construcción se atenúa y cede el sitio a fotografía real | "Cómo lo hacemos: personas" · `/acompanamiento` | — |

**Los estados 5 y 6 resuelven el pendiente arrastrado desde la v1:** los dos bloques que se quedaban sin activo visual ya lo tienen, y sin producir dos vídeos más.

El estado 6 es deliberadamente una **ruptura**: tras seis pantallas de abstracción geométrica, la construcción se aparta y aparecen dos caras reales. Es el mismo criterio que ya fijaba la sección 11 —romper el lenguaje visual a propósito— ahora integrado en la mecánica en lugar de contradecirla.

### La decisión técnica que lo hace viable: estados, no *scrubbing*

Hay dos formas de hacer esto y se parecen solo en el resultado:

| | *Scrubbing* (descartado) | Estados (adoptado) |
|---|---|---|
| **Qué es** | La animación sigue el scroll fotograma a fotograma | Cada sección dispara la transición al estado siguiente, que se reproduce con su propio tiempo |
| **Coste** | Alto | Bajo |
| **Riesgo en móvil** | Alto: tirones, seek poco fiable | Bajo |
| **Peso** | Megas de vídeo precargado | Kilobytes de SVG |
| **Si algo falla** | Se ve roto | Se ve el estado final, correcto |
| **Sensación** | Elástica; invita a jugar con el scroll | Serena; acompaña la lectura |

El *scrubbing* además tiene un problema de tono que pesa más que el técnico: **invita a jugar con el scroll**. La gente sube y baja para ver el efecto. En un sitio comercial eso es distracción, y en un sitio cuyo tono es *sereno, sin humo*, es directamente incoherente.

Con estados, cada transición dura entre 600 y 900 ms con su propia curva de salida, independiente de la velocidad a la que el visitante scrollee. **Se obtiene el 90 % del efecto por el 10 % del coste**, y degrada bien: si algo no carga, se ve el estado final y nadie nota que faltaba una animación.

### Especificación técnica

- **SVG inline animado con CSS.** Nada de vídeo en esta capa. Peso en kilobytes, nítido a cualquier resolución, accesible y editable sin volver a renderizar.
- **Disparo:** `IntersectionObserver` como base —funciona en todo— y animaciones CSS ligadas al scroll como mejora progresiva donde el navegador las soporte. Nunca como requisito.
- **Capa:** contenedor `sticky` o `fixed` a pantalla completa, `pointer-events: none`, `z-index` por debajo de todo el contenido. La construcción no se toca ni intercepta clics.
- **Animar solo `transform` y `opacity`.** Es la regla que ya rige los vídeos y aquí es lo que garantiza los 60 fps.
- **Contraste, y es innegociable:** la construcción nunca supera el **15 % de opacidad** en las zonas donde hay texto encima. El contenido manda; el fondo acompaña. Verificar AA con la capa activa, no solo sin ella.
- **`prefers-reduced-motion`:** estado final directo, sin transiciones. Y comprobar que el sitio se entiende igual — porque debe.
- **Móvil:** versión simplificada. Menos elementos, transiciones más cortas, o estados fijos por sección sin animación intermedia. En una pantalla de 6 pulgadas con el texto ocupándolo todo, la construcción aporta poco y cuesta batería.
- **Sin scroll-jacking.** El scroll nativo no se toca: ni fijado de secciones, ni velocidad alterada, ni desplazamiento forzado. La sección 12 lo prohíbe y esto no es una excepción.

### Qué pasa con los vídeos ya diseñados

No se pierde nada, cambian de destino:

- **Los cinco fotogramas clave (KF0–KF4) pasan a ser el arte de referencia** desde el que se dibuja el SVG. El trabajo de composición, encuadre, color por capa e iluminación se aprovecha íntegro.
- **Los vídeos renderizados van a la web de tablet**, que es su sitio natural: dispositivo controlado, sin conexión, sin scroll del que depender.
- **KF4** sigue siendo la imagen fija de marca: `og:image`, portadas de propuesta, cabeceras.
- **Los vídeos que faltaban ya no hacen falta.** Seguridad y Acompañamiento se cubren con los estados 5 y 6. Dos producciones menos.

### Cómo se construye sin que se coma el proyecto

Ésta es la parte que decide si la idea sale bien o se convierte en el motivo por el que la web no se publica:

1. **La capa se desarrolla la última**, en rama aparte, cuando el sitio ya está terminado y funcionando.
2. **El sitio debe verse perfecto con la capa desactivada.** No es el fondo del diseño: es una mejora encima de un diseño que ya se sostiene solo. Si al apagarla el sitio se ve vacío, el diseño está mal, no la capa.
3. **Se construye por estados, en orden, y cada uno se publica cuando funciona.** Estado 1 solo ya aporta; no hay que esperar a tener los siete.
4. **La fecha de publicación no se mueve por esta capa.** Si el día del lanzamiento van tres estados, se sale con tres.

---

## 14. Guardarraíles de redacción

> Lista de comprobación al escribir las cuatro páginas. Todas estas expresiones aparecen en material técnico que circula por la casa; ninguna puede llegar a la web.

### Absolutos

Ningún adjetivo absoluto sobre capacidad o seguridad. **"Infinito", "absoluto", "total", "sin límites", "cero", "garantizado"** — fuera. Un cliente con perfil técnico los desmonta en una pregunta, y ahí se pierde a la vez la venta y la credibilidad. Es la misma corrección que ya se aplicó a "soberanía de datos" en la v2.

| En vez de… | Escribir |
|---|---|
| Capacidad infinita | Preparada para crecer con el negocio |
| Confidencialidad absoluta | Anonimizamos antes de enviar nada fuera |
| Portabilidad absoluta | Exportable y documentada |
| Seguridad total / blindaje | Cifrado, permisos por persona y registro de accesos |

**Se describe un procedimiento, no se promete un resultado.**

### Normativa

- **Nunca "cumplimiento", "conforme a", "certificado" ni "compliant".** La promesa es *preparado para cumplir*.
- **Ninguna norma ni certificación se cita sin tenerla.** Una certificación listada y no poseída es una afirmación falsa sobre la propia empresa, no un matiz de marketing.
- **Ninguna fecha ni obligación concreta sin verificar** en fuente oficial actualizada. El calendario europeo de IA sigue moviéndose.

### Autonomía

**"Agentes autónomos", "bots cognitivos", "sin intervención humana"** — fuera. Se renombró a *IA aplicada* en la v2 con motivo: "autónomo" transmite que la IA decide sin supervisión, y contradice la escala de intervención que es vuestro mejor argumento de confianza.

### Sustitución de personas

La línea roja de las cuatro páginas. Nada que insinúe que la IA reemplaza al equipo — ni como beneficio, ni como broma, ni comparando la tecnología con un empleado. El bloque 04 existe entero para decir lo contrario, y la frase de la casa es *saber qué cosas no se deben automatizar*. Una web no sostiene las dos cosas.

### Estandarización

**"Clonable", "llave en mano", "plantilla", "cero complejidad para el usuario"** — fuera. Lo primero niega el principio operativo de la casa (*cada cliente se trata por separado*). Lo último suena a *no hace falta que lo entiendas*, justo lo contrario de devolver el control.

### Cifras

Ningún porcentaje, ahorro de horas ni tiempo de respuesta **sin dato propio medido o fuente verificable**. Misma disciplina que con el informe de tendencias. Cuando exista el primer caso real medido, se publica ese — y valdrá diez veces más que una cifra prestada.

---

## 15. Decisiones abiertas

Cerradas en esta revisión: nomenclatura de los cuatro bloques, nombre del producto de entrada (Diagnóstico iARTESANA), nombre público de la puerta gratuita (primera sesión) y validación de "Base digital". El naming ya no bloquea nada.

Lo que sigue abierto bloquea el copy definitivo y el prompt de construcción.

1. **¿Se confirma pymes y autónomos** como lector único de todo el copy? El Libro Blanco lo da por hecho; falta ratificarlo.
2. **¿Se confirma "recuperar tiempo"** como resultado dominante, con orden y control como apoyo? Idem.
3. **¿Se puede contratar IA aplicada sin rehacer toda la base?** La respuesta pública debería ser: se revisa lo que existe y solo se construye lo necesario. Confirmar que operativamente es cierto.
4. **¿Qué incluye exactamente el mantenimiento?** Soporte, correcciones, evolución, consumo de IA, alojamiento y formación no son lo mismo, y mezclarlos genera conflictos de facturación.
5. **¿Qué materiales de formación entran en el precio y cuáles se facturan aparte?** Guía escrita y sesión de arranque probablemente sí; una biblioteca de vídeo a medida es otra cosa. Definirlo antes de escribir la página, no después de que un cliente lo dé por incluido.
6. **¿Dónde termina iARTESANA y empieza el asesor legal o de protección de datos?**
7. **¿Qué control conserva el cliente sobre código, datos, cuentas y proveedores?** Define lo que se puede prometer en `/seguridad-control`.
8. **¿Existe alguna certificación de seguridad** (ISO 27001 u otra)? Determina qué se puede listar sin faltar a la verdad. Ver sección 14.
9. **¿Cuál será el primer caso demostrable?** Sin caso concreto, la web será pedagógicamente buena y comercialmente abstracta. ¿Es 3villas citable, aunque sea sin nombre?
10. **¿Precios de las capas siguientes:** horquillas orientativas o nada?
11. **¿Quién valida las afirmaciones legales** de `/seguridad-control` antes de publicar?
12. **¿La accesibilidad se convierte en línea de servicio?** Existe normativa europea de accesibilidad ya aplicable a determinados productos y servicios digitales, con exenciones según tamaño de empresa y sector. Si afecta a vuestro tipo de cliente, es un servicio vendible que encaja en `/seguridad-control` y que casi nadie está ofreciendo a pymes. **Requiere verificación previa de alcance y exenciones** antes de mencionarlo en la web (misma disciplina que el resto de afirmaciones normativas). Decidir si se investiga ahora o queda para fase 4.
13. **Teléfono:** sigue sin resolver el 684 vs 683 del manual de marca.
14. **Idiomas:** ¿castellano solo, o catalán e inglés desde el inicio? Afecta a la arquitectura de rutas; no se improvisa después.

---

## 16. Fases

**Fase 0 — Decisiones (esta semana).** Cerrar la sección 15. Sin esto, todo lo demás se hace dos veces.

**Fase 1 — Copy definitivo.** Home + las cuatro páginas de bloque + `/diagnostico`, palabra por palabra. Es el entregable que David revisa antes de que nadie diseñe nada.

**Fase 2 — Diseño y construcción.** Sistema de componentes sobre el manual de marca, maquetación, booking contra Supabase. **El sitio se termina y se da por bueno sin la capa de construcción.**

**Fase 2b — Capa de construcción.** Rama aparte, por estados y en orden. Entra lo que esté listo en la fecha; lo que no, entra después de publicar.

**Fase 3 — Lanzamiento.** QA cruzado, SEO, redirecciones 301, prueba end-to-end del booking (tres veces reales), publicación. QA de accesibilidad y contraste **con la capa activa y desactivada**.

**Fase 4 — Después.** Estados de construcción pendientes, primer caso del sector faro, `/notas`, idiomas.

---

## 17. Riesgos

- **Contaminación de discurso.** *(Nuevo en v6.)* El material técnico que circula por la casa está escrito en un registro distinto —absolutos, garantías de cumplimiento, agentes autónomos— y es el que estará más a mano al redactar deprisa. Basta con una frase copiada para desmentir una página entera. Contramedida: la sección 14, revisada al terminar cada página.
- **La capa de construcción retrasa el lanzamiento.** *(Nuevo en v4.)* Es la consecuencia previsible de adoptarla: un fondo animado no tiene "terminado" evidente y siempre se puede pulir un estado más. Contramedidas en la sección 13 — rama aparte, sitio válido sin ella, fecha intocable. Si al llegar la fecha van tres estados, se publica con tres.

- **Perseguir tendencias contradice el mensaje.** *(Nuevo en v3.)* Es el riesgo más silencioso, porque no llega como una mala decisión sino como una buena idea suelta en la fase de maquetación: un efecto de cristal aquí, una animación llamativa allá. Ninguna de las dos parece grave; juntas convierten el sitio en el de cualquier consultora. Toda técnica visual que se incorpore fuera de la sección 12 debe justificarse por escrito antes de implementarse. Si el argumento es *"queda muy bien"*, no entra.
- **El más probable: cuatro bloques desiguales.** Base digital e IA aplicada llegan con material abundante; Seguridad y Acompañamiento, casi vacíos. Si salen a medias, el visitante lee "dos cosas serias y dos de relleno". Cualquiera que no esté a la altura, se retrasa: mejor tres páginas sólidas que cuatro flojas.
- **Sobreprometer en Seguridad.** El riesgo legal real del proyecto. Ver sección 8.
- **Perder al cliente que entra por comunicación** antes de que haya tracción en IA. Mitigado en la sección 11, pero vigilad de dónde vienen los leads los primeros meses.
- **Ganar claridad y perder carácter.** Esta versión es más comercial y más comprensible que la v1; el precio es que los nombres son más previsibles. El sistema de dos niveles —nombre que explica, titular que emociona— existe justo para compensarlo. Si en la maqueta los titulares se caen "por espacio", el sitio acabará sonando como cualquier consultora. No dejéis que se caigan.
- **La web se convierte en proyecto eterno.** Con dos personas y clientes que pagan, la web propia siempre pierde. Fijad fecha de publicación y salid con lo que esté listo.
