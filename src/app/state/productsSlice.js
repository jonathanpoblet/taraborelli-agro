import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    name: 'TRACTORES',
    products: [
      {
        images: ['./assets/trucks/t4f.png', './assets/trucks/t4f2.png'],
        id: '100',
        name: 'T4F',
        filename: 't4f',
        path: './src/pdfs/t4f.pdf',
        info: [
          {
            title: 'POTENTES Y COMPACTOS',
            text: 'La serie de tractores T4F/N/V, a la que ahora se suma el modelo superior T4.105 de 106 CV, está propulsada por nuevos motores de cuatro cilindros y ofrece un rendimiento imbatible con un volumen compacto.'
          },
          {
            title: 'VERSATILIDAD ESPECIAL',
            text: 'Ningún tractor especial puede igualar la gran versatilidad de un tractor T4F/N. Estos tractores pueden disponer del eje SuperSteer™, de serie en los T4F, con DT automática, para realizar giros cerrados y utilizarse así en una amplia gama de aplicaciones.'
          },
          {
            title: 'COMODIDAD Y PRODUCTIVIDAD',
            text: 'Los tractores T4F/N/V pueden disponer de la avanzada cabina Blue Cab categoría 2 para ofrecer al operador una protección superior y un confort sin igual en los entornos más difíciles, además de una visibilidad total.'
          },
          {
            title: 'DISEÑADOS PARA OFRECER EL MÁXIMO AHORRO',
            text: 'Los largos intervalos de mantenimiento y el consumo reducido de combustible permiten reducir los costes operativos globales de todos los modelos T4F/N/V.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t4v.png', './assets/trucks/t4v2.png'],
        id: '101',
        name: 'T4V',
        filename: 't4v',
        path: './src/pdfs/t4v.pdf',
        info: [
          {
            title: 'POTENTES Y COMPACTOS',
            text: 'La serie de tractores T4F/N/V, a la que ahora se suma el modelo superior T4.105 de 106 CV, está propulsada por nuevos motores de cuatro cilindros y ofrece un rendimiento imbatible con un volumen compacto.'
          },
          {
            title: 'VERSATILIDAD ESPECIAL',
            text: 'Ningún tractor especial puede igualar la gran versatilidad de un tractor T4F/N. Estos tractores pueden disponer del eje SuperSteer™, de serie en los T4F, con DT automática, para realizar giros cerrados y utilizarse así en una amplia gama de aplicaciones.'
          },
          {
            title: 'COMODIDAD Y PRODUCTIVIDAD',
            text: 'Los tractores T4F/N/V pueden disponer de la avanzada cabina Blue Cab categoría 2 para ofrecer al operador una protección superior y un confort sin igual en los entornos más difíciles, además de una visibilidad total.'
          },
          {
            title: 'DISEÑADOS PARA OFRECER EL MÁXIMO AHORRO',
            text: 'Los largos intervalos de mantenimiento y el consumo reducido de combustible permiten reducir los costes operativos globales de todos los modelos T4F/N/V.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t5s.png', './assets/trucks/t5s2.png'],
        id: '102',
        name: 'T5.S',
        filename: 't5s',
        path: './src/pdfs/t5s.pdf',
        info: [
          {
            title: 'MAYOR EFICIENCIA Y MENOR CONSUMO',
            text: 'La serie T5 Electro Command™ proporciona un funcionamiento eficiente en todas las operaciones gracias al económico motor Turbo-Intercooler S8000 de 4 cilindros, que produce altos valores de par, gracias al depósito de combustible de 145 litros continúa funcionando sin interrupciones durante mucho tiempo. Con tres opciones diferentes de potencia del motor: 88 HP, 98 HP y 110 HP, la serie T5 de Electro Command™ ofrece un alto rendimiento y un uso económico.'
          },
          {
            title: 'FUNCIONAMIENTO CÓMODO EN CONDICIONES ADVERSAS',
            text: 'Al contar con el equipo necesario para un trabajo cómodo, el diseño de la cabina será de gran ayuda en condiciones de trabajo difíciles y extensas. Una de las características de diseño de la serie T5 Electro Command es el asiento con suspensión neumática que proporciona un control fácil y un buen funcionamiento durante las operaciones gracias a las palancas de control ubicadas en la consola derecha.'
          },
          {
            title: 'POTENCIA ININTERRUMPIDA Y OPCIONES DE ENGRANAJES',
            text: 'La transmisión Electro Command™, diseñada cuidadosamente es sumamente útil, ya que cuenta con los engranajes y los rangos de velocidad necesarios para garantizar la máxima eficiencia en todas las condiciones exigentes de operación. Gracias al amplio rango de velocidades que ofrece la transmisión con 16 marchas de avance y 16 de retroceso, la tracción máxima se logra incluso a velocidades bajas en condiciones de campo. Con la transmisión Electro Command™, los cambios de velocidad dentro del rango se pueden realizar fácilmente con la palanca de cambios o los botones en el panel derecho sin la necesidad de usar el embrague.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t6.png', './assets/trucks/t62.png', './assets/trucks/t63.png'],
        id: '103',
        name: 'T6',
        filename: 't6',
        path: './src/pdfs/t6.pdf',
        info: [
          {
            title: 'MAYOR EFICIENCIA Y MENOR CONSUMO',
            text: 'La serie T5 Electro Command™ proporciona un funcionamiento eficiente en todas las operaciones gracias al económico motor Turbo-Intercooler S8000 de 4 cilindros, que produce altos valores de par, gracias al depósito de combustible de 145 litros continúa funcionando sin interrupciones durante mucho tiempo. Con tres opciones diferentes de potencia del motor: 88 HP, 98 HP y 110 HP, la serie T5 de Electro Command™ ofrece un alto rendimiento y un uso económico.'
          },
          {
            title: 'FUNCIONAMIENTO CÓMODO EN CONDICIONES ADVERSAS',
            text: 'Al contar con el equipo necesario para un trabajo cómodo, el diseño de la cabina será de gran ayuda en condiciones de trabajo difíciles y extensas. Una de las características de diseño de la serie T5 Electro Command es el asiento con suspensión neumática que proporciona un control fácil y un buen funcionamiento durante las operaciones gracias a las palancas de control ubicadas en la consola derecha.'
          },
          {
            title: 'POTENCIA ININTERRUMPIDA Y OPCIONES DE ENGRANAJES',
            text: 'La transmisión Electro Command™, diseñada cuidadosamente es sumamente útil, ya que cuenta con los engranajes y los rangos de velocidad necesarios para garantizar la máxima eficiencia en todas las condiciones exigentes de operación. Gracias al amplio rango de velocidades que ofrece la transmisión con 16 marchas de avance y 16 de retroceso, la tracción máxima se logra incluso a velocidades bajas en condiciones de campo. Con la transmisión Electro Command™, los cambios de velocidad dentro del rango se pueden realizar fácilmente con la palanca de cambios o los botones en el panel derecho sin la necesidad de usar el embrague.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t7-full.png', './assets/trucks/t72-full.png', './assets/trucks/t73-full.png'],
        id: '104',
        name: 'T7 FULL POWERSHIFT',
        filename: 't7-full',
        path: './src/pdfs/t7-full.pdf',
        info: [
          {
            title: 'LA SIMPLICIDAD DE UN BOTÓN. AÑOS DE TECNOLOGÍA PROBADA',
            text: 'Reconocida por su legendaria robustez y confiabilidad incuestionable, la caja de cambios Power Command ™ con Powershift completo iguala la eficacia mecánica comprobada con la facilidad de control de New Holland, incluso los operadores menos experimentados pueden manejar esta caja de cambios de manera eficiente desde el primer momento. día. Con una configuración y operación simples, gracias al botón de marcha arriba y abajo, la caja de cambios Power Command ofrece fácilmente la velocidad que mejor se adapta a cada aplicación. En general, es el Powershift completo más eficiente en la actualidad.'
          },
          {
            title: 'SIMPLICIDAD Y ECONOMIA',
            text: 'Permitir que las tareas de mantenimiento se realicen de forma rápida y sencilla es una de las principales características de los equipos de New Holland. Y en la línea de tractores T7, este concepto fue llevado al extremo. La apertura total de la campana, el diseño de los componentes, los radiadores basculantes y el tanque de expansión son algunos de los elementos desarrollados para reducir el tiempo de inactividad. El motor New Holland, con 6 cilindros y turbo con intercooler, tiene versiones que alcanzan los 242 hp considerando el EPM (gestión automática de potencia) o 234 hp de potencia nominal. Además, el alto rendimiento también se destaca en esta línea, como resultado de la combinación del par más alto del mercado con el menor consumo de combustible en el segmento.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t7-semi.png', './assets/trucks/t72-semi.png', './assets/trucks/t73-semi.png'],
        id: '105',
        name: 'T7 SEMI POWERSHIFT',
        filename: 't7-semi',
        path: './src/pdfs/t7-semi.pdf',
        info: [
          {
            title: 'VISIÓN GENERAL',
            text: 'TUS NECESIDADES VARÍAN CONSTANTEMENTE. LA SERIE T7 SE ADAPTA A ELLAS PERFECTAMENTE'
          },
          {
            title: 'TRANSMISIÓN ROBUSTA COMPROBADA',
            text: 'Range Command permite cambiar de marcha sin pisar embrague dentro de cada gama de trabajo. Conocida por su legendaria robustez y su indiscutible fiabilidad, es la opción ideal para las labores agrícolas genéricas.'
          },
          {
            title: 'SIMPLE Y MUY VERSATIL',
            text: 'Equipados con la transmisión semi-powershift Range Command de New Holland de 18×6 40 km/h. Ideales para aplicaciones ganaderas y mixtas, con dimensiones y maniobrabilidad fáciles de manejar.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t8.png'],
        id: '106',
        name: 'T8 PLM INTELLIGENCE',
        filename: 't8',
        path: './src/pdfs/t8.pdf',
        info: [
          {
            title: 'MÁS FUERZA Y PRODUCTIVIDAD',
            text: 'Elija entre cinco modelos de 250 a 396 cballos de potencia nominales con aumento de torque del 40% hasta 71 caballos de fuerza adicionales del sitema de gerencia de potencia del motor, todos combinados con un intervalo de mantenimiento de 600 horas para mantener su funcionamiento operacional y lucrativo.'
          },
          {
            title: 'VERSATILIDAD MÁXIMA',
            text: '¡El nuevo IntelliView ™ 12 y el apoyo de brazo Sidewinder ™ Ultra son totalmente interconectados! Todos los controles han sido ergonómicamente rediseñados y precisamente reubicados, son fáciles e intuitivos de manejar permitiendo que el operador accione las funciones sin quitar los ojos de la operación.'
          },
          {
            title: 'NUEVA CABINA',
            text: 'El nuevo diseño arquitectónico presenta todo lo que hay de más moderno en una sola cabina. Proyectada para ofrecer el más alto nivel de comodidad, la nueva cabina ha sido cuidadosamente proyectada para atender las necesidades reales del campo.'
          },
          {
            title: 'MÁQUINA CONECTADA',
            text: 'La nueva plataforma PLM Intelligence™ pasa a ofrecer un paquete de tecnologías para facilitar el monitoreo y el control de las operaciones en el campo. Toda esa innovación ha creado el tractor más intuitivo que el campo ha visto ya.'
          }
        ]
      },
      {
        images: ['./assets/trucks/t9.png'],
        id: '107',
        name: 'T9',
        filename: 't9',
        path: null,
        info: [
          {
            title: 'MAS POTENCIA, MAS PRODUCTIVIDAD',
            text: 'Los motores de la línea T9 son potentes, económicos, robustos y muy confiables. Contando con 3 diferentes modelos de motores la línea T9 cuenta con los motores CURSOR 9, CURSOR 13 y CURSOR 13 con TURBO DE 2 ESTAGIO. Con un gran diferencial exclusivo de la línea New Holland que es el famoso EPM, accionado por carga en la PTO, demanda Hidráulica y cuando por encima de la 14 ° marcha, el mismo entrega una potencia más al motor para que no pierda rendimiento. El sistema puede entregar hasta 62 CV más de potencia cuando sea necesario, donde el T9.700 puede entregar hasta 682CV de potencia.'
          }
        ]
      },
      {
        images: ['./assets/trucks/td4f.png'],
        id: '108',
        name: 'TD4F',
        filename: 'td4f',
        path: './src/pdfs/td4f.pdf',
        info: [
          {
            title: 'MOTORES POTENTES, ECOLÓGICOS Y ECONÓMICOS',
            text: 'Los motores son de inyección mecánica Bosch, con menores costos de mantenimiento, con tres cilindros y sistema FPT Industrial con un nivel de emisiones en la categoría Tier 3, reduciendo el nivel de contaminación y haciéndolos más eficientes. Para la Argentina, seleccionamos dos ofertas de potencia para esta nacionalización: TD4.75F (potencia nominal de 72 hp) y TD4.85F (potencia nominal de 80 hp). Ambos modelos cuentan con motores turbocargados que brindan mayor torque, mejor respuesta y menor consumo de combustible.'
          },
          {
            title: 'OPCIONES DE TRANSMISIÓN ADECUADAS PARA TODAS SUS NECESIDADES',
            text: 'La familia TD4F dispone de una transmisión sincronizada 12x12, con 4 marchas y 3 gamas muy bien escalonadas que permiten una velocidad máxima de hasta 40 km/h. Además, posee palancas laterales que facilitan el día a día y la comodidad del operador. Otro gran diferencial es el inversor hidráulico (Power Shuttle), ubicado a la izquierda de la columna de dirección, que permite realizar maniobras de avance y retroceso sin usar el pedal del embrague, ahorrando tiempo y combustible especialmente durante las operaciones de final de línea.'
          },
          {
            title: 'ALTÍSIMA CAPACIDAD DE TRABAJO CON IMPLEMENTOS',
            text: 'En cuanto a la capacidad de trabajo con implementos, también es importante destacar el alto caudal hidráulico de los modelos TD4F con 51,7 litros por minuto, junto con el doble mando a distancia, fundamental para accionar los implementos de cosecha y todos aquellos que necesiten altos caudales hidráulicos. Se destaca por la alta capacidad de elevación máxima en el ojo del sistema hidráulico de tres puntos de 3.000 kg, combinado con el ya consolidado sistema Lift-O-Matic, presente en otros modelos de New Holland. Para la toma de fuerza, los modelos ofrecen las velocidades de 540/540E con accionamiento mecánico e independiente, velocidad de accionamiento de 540 @2196 rpm en máxima potencia para trabajos pesados y de 540E @1535 rpm que permite una economía de combustible para servicios de intensidad media.'
          },
          {
            title: 'CONFORT, ERGONOMÍA Y SEGURIDAD',
            text: 'En los tractores de la familia TD4F se ha pensado hasta el más mínimo detalle en la ergonomía, el confort y la seguridad del operador. Los aspectos más destacados son: Controles laterales y palancas Tablero moderno e intuitivo Asiento ergonómico Gran visibilidad Baja altura del volante Escape horizontal con protección Alfombra de goma Portaobjetos Pedales suspendidos Ergonomía al operar comandos Palancas y llaves al alcance de la mano Bloqueo y tracción del electrohidráulico Proa ROPS.'
          }
        ]
      },
      {
        images: ['./assets/trucks/tk4.png', './assets/trucks/tk42.png', './assets/trucks/tk43.png'],
        id: '109',
        name: 'TK4',
        filename: 'tk4',
        path: './src/pdfs/tk4.pdf',
        info: [
          {
            title: 'EL ADN QUE HACE LA DIFERENCIA',
            text: 'Todos los modelos TK4 son el resultado de una evolución que apunta a ofrecer la mejor estabilidad, el mejor rendimiento y la máxima facilidad de uso en la categoría, garantizando al mismo tiempo la máxima productividad, el máximo confort y la máxima seguridad en condiciones extremas del suelo. La gama New Holland TK4 incluye versiones de cabina, disponibles en modelos particulares. Las orugas de goma SmartTrax ™ y el sistema Steering-O-Matic ™ Plus garantizan la mejor experiencia de conducción y hacen que sea aún más fácil aprovechar al máximo el impresionante potencial del tractor.'
          },
          {
            title: 'DOS MODELOS, TODAS LAS APLICACIONES',
            text: 'La nueva gama TK4 se adecua a cualquier necesidad y aplicación. Viene en dos modelos: Special, para su uso en montaña y Campo Open, para un uso más general. Ambos tienen potencias de 85 y 99 hp, tanto en versiones ROPS como en cabina. Los tractores TK4 reafirman la renovación continua y supremacía indiscutible de New Holland en el segmento. Ambos modelos vienen en versión N.'
          },
          {
            title: 'POTENCIA LIMPIA Y DE CONSUMO REDUCIDO EN UN TAMAÑO COMPACTO',
            text: 'Todos los tractores de orugas de la Serie TK4 están propulsados por motores turboalimentados con intercooler de última generación para lograr niveles excepcionales de prestaciones, reducción del consumo y emisiones. Una de las características clave de todos los motores de la Serie TK4 es que cuentan con sobradas prestaciones para realizar labores que requieren mucha tracción.'
          }
        ]
      },
      {
        images: ['./assets/trucks/tt4.png', './assets/trucks/tt42.png', './assets/trucks/tt43.png'],
        id: '110',
        name: 'TT4',
        filename: 'tt4',
        path: './src/pdfs/tt4.pdf',
        info: [
          {
            title: 'PODER Y PRODUCTIVIDAD',
            text: 'Los tractores TK4 se caracterizan tanto por su diseño robusto y funcional como por su garantía de fiabilidad y durabilidad.'
          },
          {
            title: 'VERSATILIDAD',
            text: 'El TT4 ha sido diseñado para ofrecerle a los agricultores la máxima versatilidad en tractores de baja potencia.'
          },
          {
            title: 'PLACER EN LA CONDUCCIÓN',
            text: 'Pasar largas horas en el campo es fácil con el TT4 debido a su comodidad para la conducción.'
          },
          {
            title: 'PENSADO PARA REDUCIR COSTOS',
            text: 'La gama TT4 es simple de operar, fácil de mantener y construida para recorrer largas distancias.'
          }
        ]
      }
    ]
  },
  {
    name: 'COSECHADORAS',
    products: [
      {
        images: ['./assets/harvester/cr-5.png'],
        id: '200',
        name: 'CR 5.85',
        filename: 'cr5',
        path: './src/pdfs/cr-5.pdf',
        info: [
          {
            title: 'LA MAYOR ACCIÓN CENTRÍFUGA DEL MERCADO',
            text: 'La exclusiva tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los cóncavos de grandes dimensiones realizan una fricción suave en toda su extensión, grano a grano, con elevada fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y la máxima calidad del grano.'
          },
          {
            title: 'EXCLUSIVO SISTEMA DE LIMPIEZA',
            text: 'El extraordinario sistema de limpieza de doble acción produce granos de alta calidad en cualquier tipo de cosecha, debido a su gran área de limpieza. Es capaz de procesar un gran volumen de granos, por el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza el flujo de aire homogéneo a través de los zarandas. La extrema eficacia de la trilla y la separación y el eficiente sistema de limpieza reducen al mínimo la cantidad de perdidas en la CR Evo.'
          }
        ]
      },
      {
        images: ['./assets/harvester/cr-6.png'],
        id: '201',
        name: 'CR 6.80',
        filename: 'cr6',
        path: './src/pdfs/cr-6.pdf',
        info: [
          {
            title: 'LA MAYOR ACCIÓN CENTRÍFUGA DEL MERCADO',
            text: 'La exclusiva tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los cóncavos de grandes dimensiones realizan una fricción suave en toda su extensión, grano a grano, con elevada fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y la máxima calidad del grano.'
          },
          {
            title: 'EXCLUSIVO SISTEMA DE LIMPIEZA',
            text: 'El extraordinario sistema de limpieza de doble acción produce granos de alta calidad en cualquier tipo de cosecha, debido a su gran área de limpieza. Es capaz de procesar un gran volumen de granos, por el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza el flujo de aire homogéneo a través de los zarandas. La extrema eficacia de la trilla y la separación y el eficiente sistema de limpieza reducen al mínimo la cantidad de perdidas en la CR Evo.'
          }
        ]
      },
      {
        images: ['./assets/harvester/cr-7.png'],
        id: '202',
        name: 'CR 7.90 Intellisense',
        filename: 'cr7',
        path: './src/pdfs/cr-7.pdf',
        info: [
          {
            title: 'LA MAYOR ACCIÓN CENTRÍFUGA DEL MERCADO',
            text: 'La exclusiva tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los cóncavos de grandes dimensiones realizan una fricción suave en toda su extensión, grano a grano, con elevada fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y la máxima calidad del grano.'
          },
          {
            title: 'EXCLUSIVO SISTEMA DE LIMPIEZA',
            text: 'El extraordinario sistema de limpieza de doble acción produce granos de alta calidad en cualquier tipo de cosecha, debido a su gran área de limpieza. Es capaz de procesar un gran volumen de granos, por el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza el flujo de aire homogéneo a través de los zarandas. La extrema eficacia de la trilla y la separación y el eficiente sistema de limpieza reducen al mínimo la cantidad de perdidas en la CR Evo.'
          }
        ]
      }
    ]
  },
  {
    name: 'HENO Y FORRAJES',
    products: [
      {
        images: ['./assets/forage/bigbaler-plus.png', './assets/forage/bigbaler-plus2.png'],
        id: '300',
        name: 'BIGBALER PLUS',
        filename: 'bigbaler-plus',
        path: './src/pdfs/bigbaler-plus.pdf',
        info: [
          {
            title: 'EMPACADO PROFESIONAL DE NEW HOLLAND',
            text: 'New Holland lleva más de 25 años liderando el segmento de las empacadoras gigantes y ha introducido una serie de primicias que han revolucionado el empacado de grandes dimensiones en todo el mundo. Está garantizado el máximo rendimiento de empacado en todos los cultivos y en todos los tipos de explotación. Los nuevos modelos Plus resultarán irresistibles para los responsables de las explotaciones de heno y forraje, las empresas contratistas de paja, el sector de la biomasa y las grandes fincas de cultivo por su cámara de empacado, 80 cm más larga, y la calidad sistemática de las pacas, un 10% más densas.'
          },
          {
            title: 'DISEÑO DE LAS BIGBALER',
            text: 'La serie BigBaler actual se ha sometido a un programa intensivo de pruebas con toda clase de cultivos y condiciones agrícolas. Hemos trabajado incansablemente para obtener el máximo provecho de todas sus características y así garantizarle una productividad óptima.'
          },
          {
            title: 'BIGBALER: LA MEJOR OPCIÓN',
            text: 'Con cuatro modelos, la serie BigBaler le permitirá elegir la empacadora que mejor se adapte a su actividad, desde el modelo estándar de 80 x 70 cm hasta el superior de 120 x 90 cm. También es posible escoger el método de procesamiento del producto, ya sea estándar, Packer Cutter o CropCutter™.'
          },
          {
            title: 'LE PRESENTAMOS LA ÚLTIMA SERIE DE EMPACADORAS PLUS',
            text: 'Los nuevos modelos Plus elevan la serie BigBaler a un nivel enteramente nuevo de productividad y eficacia. Disfrutan de estas características: • Hasta un 10% más de densidad • Densidad uniforme durante toda la jornada de trabajo • Pacas mejor formadas • Menor riesgo de rotura de la cuerda • Empacado incluso en los entornos más calurosos • Descarga más delicada de las pacas • Mantenimiento más fácil y accesible • Mayor facilidad de limpieza.'
          },
          {
            title: 'BIGBALER 1290 PLUS. RETO CONSEGUIDO.',
            text: 'New Holland Agriculture puso la BigBaler 1290 Plus a trabajar, enganchada a un tractor T7.315 Heavy Duty Auto Command en un reto que tuvo a estas dos maquinas trabajando 17 horas en dos jornadas en condiciones reales de trabajo, entregando una productividad excepcional con 1.254 pacas realizadas. El reto fue superado y los resultados fueron confirmados por la empresa certificadora SGS.'
          }
        ]
      },
      {
        images: ['./assets/forage/fr.png', './assets/forage/fr2.png', './assets/forage/fr3.png', './assets/forage/fr4.png'],
        id: '301',
        name: 'FR FORAGE CRUISER',
        filename: 'fr-forage-cruiser',
        path: './src/pdfs/fr-forage-cruiser.pdf',
        info: [
          {
            title: 'COSECHA DE FORRAJE A ESCALA MÁXIMA',
            text: 'New Holland lleva más de medio siglo en la vanguardia del sector de cosecha de forraje. Ha introducido gran cantidad de avances que han revolucionado la manera de cosechar actual. La flamante FR920, a la cabeza de la gama, sitúa a New Holland en nuevas cotas. Se ha unido la extraordinaria capacidad de picado a un confort del operador sin igual. Se ha optimizado el sistema de alimentación, dando como resultado un gran incremento de capacidad y productividad. Todas estas prestaciones se alojan en un diseño achaflanado y elegante que lleva la firma inconfundible de New Holland.'
          },
          {
            title: 'CAPACIDAD MÁXIMA',
            text: 'New Holland es consciente de que la productividad de las picadoras de forraje es fundamental y de que los propietarios sueñan con toneladas por hora. La nueva FR920 está equipada con el flamante motor V20 de 8 cilindros en V. Está desarrollado por FPT Industrial y se sorprenderá al ver su potencia desplegada en el campo. El modo ECO de gestión del motor garantiza la plena carga del motor en relación con el régimen predeterminado para aportar una eficiencia operativa y unas prestaciones óptimas. Las funciones del reconocido sistema Power Cruise™ aseguran la eficiencia de la FR en campos de distintas densidades de cultivo y los avanzados cabezales son óptimos para hierba, maíz y plantas enteras.'
          },
          {
            title: 'EXCELENTE CALIDAD DE RECOLECCIÓN',
            text: 'La tecnología propia HydroLoc™ garantiza la longitud constante del picado, con independencia del volumen y tipo de cultivo. El sistema ActiveLOC™ adapta automáticamente la longitud del corte al contenido de humedad para ofrecer una calidad inigualable. El ajuste automático mantiene una excelente calidad de picado y, al combinarse con el desmenuzamiento uniforme del grano del nuevo procesador de cultivo de gran resistencia DuraCracker™, se asegura la máxima calidad de forraje y biomasa.'
          },
          {
            title: 'MENOS GASTOS DE FUNCIONAMIENTO',
            text: 'La reducción de los gastos de funcionamiento se traduce en mayores beneficios. Las picadoras FR780 y FR920 están equipadas con la tecnología HI-eSCR 2 ECOBlue™ para cumplir con los requisitos sobre emisiones más rigurosos hasta la fecha de la norma Fase V y mantienen el excelente nivel de eficiencia que cabe esperar de la gama FR Forage Cruiser. Los modelos restantes de la gama FR incorporan la prestigiosa tecnología HI-eSCR ECOBlue™, que optimiza el consumo de combustible y permite ahorrar dinero, a la vez que cumple la norma Tier 4B. Por ejemplo, el modelo FR650 tiene un 5%* más de capacidad pero consume un 21%* menos de combustible que el anterior modelo más grande, el FR700. Mayor productividad y reducción de costes. La avanzada tecnología MetaLoc™ protege la picadora FR de la penetración de elementos metálicos potencialmente dañinos. En el procesador de cultivo con sistema patentado Variflow™ se puede cambiar la posición de maíz a hierba en menos de 2 minutos sin necesidad de utilizar herramientas. El ahorro de tiempo aumenta los beneficios. * Consulte los datos de certificación oficiales de DLG.'
          },
          {
            title: 'EFICIENCIA DE COMBUSTIBLE QUE NO ADMITE COMPARACIÓN',
            text: 'La picadora FR650 Forage Cruiser fue sometida a las rigurosas pruebas de DLG Fokus. Los resultados evidencian un ahorro de combustible impresionante. La FR650 apenas consumió 0,5 litros de diésel por tonelada de maíz cosechada y con picado de 8 mm. En comparación con el modelo anterior FR700, la diferencia consistió en un 21% de ahorro de combustible y un aumento de la capacidad del 5%.'
          }
        ]
      },
      {
        images: ['./assets/forage/cabezales-para-segadora-hileradora-autopropulsada.png', './assets/forage/cabezales-para-segadora-hileradora-autopropulsada2.png', './assets/forage/cabezales-para-segadora-hileradora-autopropulsada3.png'],
        id: '302',
        name: 'SEGADORA HILERADORA',
        filename: null,
        path: null,
        info: [
          {
            title: 'CABEZALES DE ALTO RENDIMIENTO',
            text: `Las potentes hileradoras Speedrower® SP permiten que usted conduzca una amplia variedad de cabezales de alto rendimiento. Elija entre dos poderosos cabezales de disco - el Durabine™ 416 con corte de 16'1", o el Durabine™ 419 con corte de 19'4", el más ancho de la industria. Los cabezales de hoz Haybine® tienen una historia legendaria del rendimiento de corte y acondicionamiento superior, y están disponibles con un corte de 14, 16 ó 18 pies.`
          }
        ]
      },
      {
        images: ['./assets/forage/rotoenfardadoras.png', './assets/forage/rotoenfardadoras2.png', './assets/forage/rotoenfardadoras3.png'],
        id: '303',
        name: 'ROTOENFARDADORAS',
        filename: 'rotoenfardadoras',
        path: './src/pdfs/rotoenfardadoras.pdf',
        info: [
          {
            title: 'CAPACIDAD, INNOVACIÓN Y DENSIDAD EXCEPCIONALES',
            text: 'El liderazgo de New Holland en equipos para heno y forraje se deriva de la pasión por brindar a nuestros clientes equipos que faciliten su trabajo y les permitan lograr mayor eficiencia y rentabilidad. Son estas características precisamente las que ofrece la última generación de rotoenfardadoras de la serie Roll-Belt. Los ajustes y los servicios de mantenimiento han sido pensados teniendo en cuenta la simplicidad. Una gran variedad de modelos cuenta con paletas recolectoras duraderas y sistemas de alimentación sin complicaciones que le brindan mayor capacidad para enfardar más rápido que nunca. Las innovadoras soluciones de Precision Land Management (PLM™), como IntelliBale™, el control de densidad en la cabina y la detección de humedad de fábrica lo ayudan a tomar mejores decisiones sobre la marcha.'
          },
          {
            title: 'LA ROTOENFARDADORA ADECUADA',
            text: 'Sea que se trate de un agricultor a tiempo parcial que ocasionalmente debe enfardar 8 hectáreas o de un contratista que presta servicios a 20 clientes, hay una rotoenfardadora Roll-Belt para satisfacer sus necesidades.'
          },
          {
            title: 'LA DENSIDAD MARCA LA DIFERENCIA',
            text: 'Independientemente de si está enfardando heno seco o forraje pesado sometido a ensilado, paja resbaladiza o tallos de maíz gruesos, las rotoenfardadoras Roll-Belt producen la densidad de fardos que usted espera. Los fardos densos le permiten ahorrar dinero al reducir la compactación del suelo, minimizar el daño a la planta para un rebrote más rápido, mejorar el tonelaje en el próximo corte, reducir sus costos operativos y el tiempo de procesamiento y mejorar la salud del ganado a través de un forraje de mejor calidad.'
          },
          {
            title: 'HERRAMIENTAS DE PRECISIÓN QUE BRINDAN MEJORES RESULTADOS',
            text: 'Ya sea que esté utilizando la tecnología y los tractores más avanzados o la maquinaria más clásica, las rotoenfardadoras Roll-Belt le brindan una gran variedad de soluciones de precisión para mejorar su experiencia de enfardado. Desde monitores intuitivos hasta soluciones como IntelliBale, usted podrá enfardar de manera más inteligente y rápida que nunca.'
          },
          {
            title: 'AMPLÍE LAS POSIBILIDADES DE ENFARDADO',
            text: 'Cuando trata el heno con el conservante de New Holland CropSaver™, puede enfardar a humedades de hasta 30 % sin preocuparse por los daños que como resultado del calor o moho. Esto significa que puede comenzar a enfardar antes y permanecer en el campo hasta más tarde para completar su horario de trabajo, sin importar las condiciones climáticas. El conservante CropSaver también ayuda a mantener tanto el olor fresco como el color verde del heno, incluso después de almacenarlo.'
          }
        ]
      },
      {
        images: ['./assets/forage/segadora-central.png', './assets/forage/segadora-central2.png', './assets/forage/segadora-central3.png'],
        id: '304',
        name: 'SEGADORA 313/316',
        filename: 'segadora-central',
        path: './src/pdfs/segadora-central.pdf',
        info: [
          {
            title: 'CORTE MÁS BAJO. SECADO MÁS RÁPIDO. MAYOR DURABILIDAD',
            text: 'Las segadoras de discos con pivote central están redefiniendo la industria de las segadoras acondicionadoras de disco, lo que lleva el rendimiento de corte a nuevos niveles. La Discbine 313 de 13 pies y la Discbine 316 de 16 pies con 3 pulgadas, han sido diseñadas con mayor durabilidad y características que conducen a un corte más limpio, un flujo de cosecha más eficiente y un acondicionamiento más suave y eficaz.'
          },
          {
            title: 'BARRA DE CORTE DE DISCO MOWMAX ™ II',
            text: 'Esta es una barra de corte diseñada para las mayores demandas de grandes operaciones de cosecha. Incorpora discos grandes y componentes de servicio pesado, que también se encuentran en los cabezales de discos Durabine™ para las segadoras autopropulsadss New Holland Speedrower® . Los Discbine 313 y 316 hacen un trabajo rápido cortando heno y preparando su cosecha para empacar o picar, ya sea que usted esté segando alfalfa, trébol, hierba del huerto, timoteo, pasto bermuda, bahia, hierba, festuca, centeno, trigo forrajero o avena.'
          },
          {
            title: 'SISTEMAS DE CONDUCCIÓN SIMPLIFICADOS',
            text: 'El nuevo diseño inteligente de la barra de corte MowMax II permite conducir la barra de corte desde un solo extremo, lo que simplifica el mantenimiento y deja la parte superior del cabezal despejada. Todas las juntas universales son fácilmente accesibles para el mantenimiento, y el intervalo de lubricación se ha ampliado a 50 horas para que pase menos tiempo en el mantenimiento.'
          },
          {
            title: 'OPCIONES DE ACOPLAMIENTO GIRATORIO',
            text: 'Elija el acoplamiento giratorio para barra de tracción o el acoplamiento giratorio de dos puntos y obtenga el máximo rendimiento de giro sin afectar la transmisión. La potencia de la toma de fuerza se transfiere de la caja de engranajes giratoria delantera a una segunda caja de engranajes giratoria en la parte posterior de la lengüeta que mantiene la alineación perfecta del eje de transmisión de salida con la barra de corte y la caja de engranajes de accionamiento del acondicionador en el lado izquierdo de la unidad.'
          },
          {
            title: 'MANTENIMIENTO SENCILLO. FÁCIL ACCESO',
            text: 'New Holland ha facilitado el acceso a los discos y componentes de la unidad más que nunca. Los escudos superiores Poly bifold son ligeros, plegables y fáciles de levantar, y son más resistentes a los impactos de abolladuras por objetos extraños. La puerta de acero de acceso es de doble capa para resistir la abolladura en esa área también. La superposición de material mantiene las cortinas en su lugar sin la necesidad de clips o imanes.'
          }
        ]
      },
      {
        images: ['./assets/forage/speedpower-plus.png', './assets/forage/speedpower-plus2.png', './assets/forage/speedpower-plus3.png'],
        id: '305',
        name: 'SPEEDROWER PLUS',
        filename: 'speedpower-plus',
        path: './src/pdfs/speedpower-plus.pdf',
        info: [
          {
            title: 'PRESENTAMOS LAS NUEVAS SEGADORAS AUTOPROPULSADAS SPEEDROWER PLUS',
            text: 'Nuestra pasión es brindarle cada vez más en cada hectárea. La última generación de maquinarias Speedrower es producto de años de escuchar a productores forrajeros como usted para construir una segadora que lo ayude a cortar mayores cantidades de forraje por día. El resultado es la segadora autopropulsada Speedrower PLUS, que ofrece excelente maniobrabilidad gracias a su sistema "drive by wire" (accionamiento por cable) SensiDrive™ de controles electrónicos avanzados, mayor productividad con las velocidades más rápidas de la industria, soluciones Precision Land Management (PLM™) fáciles de usar y mayor comodidad que nunca para quien opera la máquina.'
          },
          {
            title: 'MÁS RÁPIDA EN EL CAMPO Y EN LA CARRETERA',
            text: 'Todas las máquinas de la serie Speedrower PLUS le permiten ahorrar tiempo. Los tres modelos brindan una excelente velocidad máxima en el campo, de 32 kph (20 mph). Para permitirle moverse más rápido de un campo a otro, los modelos estándar ofrecen velocidades máximas de hasta 35 kph (22 mph), mientras que la nueva versión de transporte de alta velocidad (disponible en Speedrower 220 PLUS y 260 PLUS) ofrece la velocidad máxima más rápida de la industria, a 48 kph (30 mph). Las versiones de transporte de alta velocidad brindan visibilidad frontal además de control adicional de los frenos de servicio automáticos y dirección del eje trasero para un transporte estable, seguro y productivo.'
          },
          {
            title: 'PRECISIÓN EN EL CAMPO PARA MAYOR PRODUCTIVIDAD',
            text: 'Las segadoras Speedrower PLUS pueden incorporar lo más avanzado en la tecnología PLM, y así logran mantenerse en un camino recto, lo que lleva a obtener mayor productividad. Con solo tocar un botón, la guía automática IntelliSteer™ instalada de fábrica puede aumentar la eficiencia y comodidad, al tiempo que reduce los costos operativos y mejora los resultados. Además, usted puede monitorear su segadora Speedrower PLUS donde quiera que se encuentre y en cualquier momento mediante el sistema de gestión de flota MyPLM™ Connect.'
          },
          {
            title: 'MÁXIMA CAPACIDAD DE ACTIVIDAD PARA AHORRARLE TIEMPO',
            text: 'El tiempo que ahorre en el campo lo ayudará a segar más hectáreas por día. Para maximizar el tiempo de actividad, la serie Speedrower PLUS ofrece abastecimiento de combustible a nivel de suelo, un servicio simple e intervalos de servicio excelentes. En el arranque, no hay demoras ni necesidad de centrar manualmente el volante. Se eliminan los complejos controles mecánicos e hidromecánicos a fin de reducir los puntos de mantenimiento diario.'
          }
        ]
      }
    ]
  }
]

export const productsSlice = createSlice({
  name: "products",
  initialState: products
});

export default productsSlice.reducer;