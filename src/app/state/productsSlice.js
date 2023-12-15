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
  // {
  //   name: 'COSECHADORAS',
  //   products: [
  //     {
  //       img: './assets/harvester/c4-5-85.png',
  //       id: '200',
  //       name: 'CR 5.85',
  //       info: 'La pionera tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los grandes cóncavos proporcionan un rozamiento suave en toda su longitud, grano a grano, con una gran fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y máxima calidad del grano.',
  //       detail: 'El extraordinario sistema de limpieza de doble acción produce grano de alta calidad en cualquier tipo de cultivo, debido a su gran área de limpieza de grano. Es capaz de procesar un gran volumen de granos mediante el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza un flujo de aire uniforme a través de los tamices. La extrema eficiencia de trilla y separación y el eficiente sistema de limpieza mantienen la cantidad de relaves en el RC al mínimo.'
  //     },
  //     {
  //       img: './assets/harvester/c4-evo.png',
  //       id: '201',
  //       name: 'CR EVO',
  //       info: 'La exclusiva tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los cóncavos de grandes dimensiones realizan una fricción suave en toda su extensión, grano a grano, con elevada fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y la máxima calidad del grano.',
  //       detail: 'El extraordinario sistema de limpieza de doble acción produce granos de alta calidad en cualquier tipo de cosecha, debido a su gran área de limpieza. Es capaz de procesar un gran volumen de granos, por el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza el flujo de aire homogéneo a través de los zarandas. La extrema eficacia de la trilla y la separación y el eficiente sistema de limpieza reducen al mínimo la cantidad de perdidas en la CR Evo.'
  //     }
  //   ]
  // },
  // {
  //   name: 'FORRAJES',
  //   products: [
  //     {
  //       img: './assets/mixers/mg-100.png',
  //       id: '300',
  //       name: 'MG 100',
  //       info: 'Mezclador y distribuidor de raciones de 10 m3 de capacidad. Mezclado a través de 3 sinfines horizontales. Está comandado por toma de potencia directa desde el tractor. La descarga del producto está accionada hidráulicamente integralmente desde la cabina del tractor. Equipado con balanza electrónica para una correcta formulación de las dietas.',
  //       detail: 'Descarga por acción de 2 sinfines que garantizan una entrega pareja y una mezcla homogénea de la ración.',
  //     },
  //     {
  //       img: './assets/mixers/mg-70.png',
  //       id: '301',
  //       name: 'MG 70',
  //       info: 'Mezclador y distribuidor de raciones de 7 m3 de capacidad. Mezclado a través de 3 sinfines horizontales. Está comandado por toma de potencia directa desde el tractor. La descarga del producto es accionada integralmente desde la cabina del tractor en forma hidráulica. Equipado con balanza electrónica para una correcta formulación de las dietas.',
  //       detail: 'Transmisión trasera por medio de cadenas a rodillos tratadas y de alta resistencia. Proveen una reducción de esfuerzos en la barra de mando. Menos potencia requerida.',
  //     },
  //     {
  //       img: './assets/mixers/mgv-110f.png',
  //       id: '302',
  //       name: 'MGV 110F',
  //       info: 'Mezclador y distribuidor de raciones de tipo vertical DE 11 m3 de capacidad. El mezclado se produce por un sinfín cónico de paso variable de tipo vertical. Está dotado de cuchillas que permiten el desmenuzado de rollos y fardos prismáticos. La descarga es a través de noria. Totalmente comandado desde el tractor.',
  //       detail: 'Sinfín único en su estilo por su agresividad en rollos y fardos prismáticos. Dotado de cuchillas dentadas construidas de materiales bonificados tratados térmicamente y respaldadas con carburo de tungsteno (auto afilables).',
  //     },
  //     {
  //       img: './assets/mixers/mgv-150f.png',
  //       id: '303',
  //       name: 'MGV 150F',
  //       info: 'Mezclador y distribuidor de raciones de tipo vertical de 14 m3 de capacidad. El mezclado se produce por un sinfín cónico de paso variable de tipo vertical. Está dotado de cuchillas que permiten el desmenuzado de rollos y fardos prismáticos. La descarga es a través de noria. Totalmente comandado desde el tractor.',
  //       detail: 'Puerta especialmente diseñada para trabajar en el mismo plano que las paredes de la tolva., Única en el mundo, que garantiza la excelencia en el mezclado. Sistema propio y único del mercado.',
  //     }
  //   ]
  // }
]

export const productsSlice = createSlice({
  name: "products",
  initialState: products
});

export default productsSlice.reducer;