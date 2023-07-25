import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    name: 'TRACTORES',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220318014607-mini.png',
        id: '100',
        name: 'T3F',
        info: 'Propulsada por eficientes motores FPT S8000 de tres cilindros turboalimentados con intercooler, la serie de tractores T3F, cuyo modelo superior, el T3.75F, genera 72 CV, ofrece un rendimiento imbatible en un tamaño compacto.',
        detail: 'Son pocos los tractores especiales que pueden igualar la gran versatilidad de un tractor T3F. Su equilibrado peso y sus dimensiones compactas le proporcionan la ventaja que necesita en espacios reducidos, como huertos y viñedos.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318015940-mini.png',
        id: '101',
        name: 'T5.S',
        info: 'Al contar con el equipo necesario para un trabajo cómodo, el diseño de la cabina será de gran ayuda en condiciones de trabajo difíciles y extensas. Una de las características de diseño de la serie T5 Electro Command es el asiento con suspensión neumática que proporciona un control fácil y un buen funcionamiento durante las operaciones gracias a las palancas de control ubicadas en la consola derecha.',
        detail: 'La transmisión Electro Command™, diseñada cuidadosamente es sumamente útil, ya que cuenta con los engranajes y los rangos de velocidad necesarios para garantizar la máxima eficiencia en todas las condiciones exigentes de operación. Gracias al amplio rango de velocidades que ofrece la transmisión con 16 marchas de avance y 16 de retroceso, la tracción máxima se logra incluso a velocidades bajas en condiciones de campo. Con la transmisión Electro Command™, los cambios de velocidad dentro del rango se pueden realizar fácilmente con la palanca de cambios o los botones en el panel derecho sin la necesidad de usar el embrague.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318020623-mini.png',
        id: '102',
        name: 'T6',
        info: 'Económico y con una reserva de par de hasta el 41%, el motor Tier 3 MAR l (con versiones de 118 a 132 CV, turboalimentado con intercooler) es el mejor en su categoría y aporta mucha más fuerza, robustez y rendimiento a su cultivo. . Además, la transmisión de la línea T6 ofrece la mejor relación costo-beneficio para su producción, ya que cuenta con el inversor hidráulico Power Shuttle y una excelente programación de engranajes.',
        detail: 'La comodidad y la seguridad del operador tampoco podían quedar fuera. Por esta razón, la línea T6 tiene dos versiones: la cabina y la plataforma. La versión de cabina tiene un gran espacio interno con un área de vidrio, lo que proporciona mayor comodidad, seguridad y control de las operaciones. Además, destaca por su exclusivo sistema de aire acondicionado con salidas de aire en la columna de dirección, el asiento del operador con suspensión neumática y la opción del asiento del instructor, volante con inclinación ajustable y mucho más. La versión de plataforma tiene una plataforma amplia y cómoda, columna de dirección con ajuste de inclinación y controles ergonómicamente posicionados, asiento con suspensión mecánica y reposabrazos, entre otros.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022112-mini.png',
        id: '103',
        name: 'T7 PC',
        info: 'Reconocida por su legendaria robustez y confiabilidad incuestionable, la caja de cambios Power Command ™ con Powershift completo iguala la eficacia mecánica comprobada con la facilidad de control de New Holland, incluso los operadores menos experimentados pueden manejar esta caja de cambios de manera eficiente desde el primer momento. día. Con una configuración y operación simples, gracias al botón de marcha arriba y abajo, la caja de cambios Power Command ofrece fácilmente la velocidad que mejor se adapta a cada aplicación. En general, es el Powershift completo más eficiente en la actualidad.',
        detail: 'Permitir que las tareas de mantenimiento se realicen de forma rápida y sencilla es una de las principales características de los equipos de New Holland. Y en la línea de tractores T7, este concepto fue llevado al extremo. La apertura total de la campana, el diseño de los componentes, los radiadores basculantes y el tanque de expansión son algunos de los elementos desarrollados para reducir el tiempo de inactividad. El motor New Holland, con 6 cilindros y turbo con intercooler, tiene versiones que alcanzan los 242 hp considerando el EPM (gestión automática de potencia) o 234 hp de potencia nominal. Además, el alto rendimiento también se destaca en esta línea, como resultado de la combinación del par más alto del mercado con el menor consumo de combustible en el segmento.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318021751-mini.png',
        id: '104',
        name: 'T7 RC',
        info: 'Range Command permite cambiar de marcha sin pisar embrague dentro de cada gama de trabajo. Conocida por su legendaria robustez y su indiscutible fiabilidad, es la opción ideal para las labores agrícolas genéricas.',
        detail: 'Equipados con la transmisión semi-powershift Range Command de New Holland de 18×6 40 km/h. Ideales para aplicaciones ganaderas y mixtas, con dimensiones y maniobrabilidad fáciles de manejar.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022322-mini.png',
        id: '105',
        name: 'T8',
        info: 'El motor Cursor 9 8.7I desarrollado internamente por FPT Industrial, el socio motor de New Holland, presenta un sistema de inyección de combustible common rail de alta presión. La gestión de potencia del motor (EPM) es estándar y proporciona una potencia mayor en los modos PTO, cuando las condiciones lo exigen.',
        detail: 'Precisión Land Management (PLM) es la solución de orientación de New Holland. Todos los modelos T8 pueden estar equipados con PLM Ready, completos de fábrica o con la opción de completarlos más tarde a través de piezas New Holland. Los modelos T8 son compatibles con ISOBUS y están listos para aceptar implementos con este protocolo. PLM Connect es el sistema telemático de New Holland y permite monitorear y administrar la productividad desde la oficina agrícola. IntelliTurnTM está disponible en todos los modelos T8, utiliza la tecnología NHDrive para girar de forma inteligente el T8, calculando y ejecutando automáticamente los giros al final de la fila, sin necesidad de dirección manual.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318022635-mini.png',
        id: '106',
        name: 'T9',
        info: 'Con la EPM (Gestión de la Potencia del Motor) usted gana una potencia extra de hasta 50cv, disponible en las exigentes aplicaciones del sistema hidráulico, TDF y el transporte, para la productividad ideal sin pérdida de rendimiento. Con la EPM, la línea T9 puede desarrollar una potencia de hasta 670cv, según cada necesidad de operación.',
        detail: ''
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220905043005-mini.png',
        id: '107',
        name: 'TD4F',
        info: 'Los motores son de inyección mecánica Bosch, con menores costos de mantenimiento, con tres cilindros y sistema FPT Industrial con un nivel de emisiones en la categoría Tier 3, reduciendo el nivel de contaminación y haciéndolos más eficientes. Para la Argentina, seleccionamos dos ofertas de potencia para esta nacionalización: TD4.75F (potencia nominal de 72 hp) y TD4.85F (potencia nominal de 80 hp). Ambos modelos cuentan con motores turbocargados que brindan mayor torque, mejor respuesta y menor consumo de combustible.',
        detail: 'La familia TD4F dispone de una transmisión sincronizada 12x12, con 4 marchas y 3 gamas muy bien escalonadas que permiten una velocidad máxima de hasta 40 km/h. Además, posee palancas laterales que facilitan el día a día y la comodidad del operador. Otro gran diferencial es el inversor hidráulico (Power Shuttle), ubicado a la izquierda de la columna de dirección, que permite realizar maniobras de avance y retroceso sin usar el pedal del embrague, ahorrando tiempo y combustible especialmente durante las operaciones de final de línea.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318014759-mini.png',
        id: '108',
        name: 'TT4',
        info: 'El TT4 ha sido diseñado para ofrecerle a los agricultores la máxima versatilidad en tractores de baja potencia.',
        detail: 'Pasar largas horas en el campo es fácil con el TT4 debido a su comodidad para la conducción.'
      }
    ]
  },
  {
    name: 'COSECHADORAS',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220908010040-mini.png',
        id: '200',
        name: 'CR 5.85',
        info: 'La pionera tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los grandes cóncavos proporcionan un rozamiento suave en toda su longitud, grano a grano, con una gran fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y máxima calidad del grano.',
        detail: 'El extraordinario sistema de limpieza de doble acción produce grano de alta calidad en cualquier tipo de cultivo, debido a su gran área de limpieza de grano. Es capaz de procesar un gran volumen de granos mediante el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza un flujo de aire uniforme a través de los tamices. La extrema eficiencia de trilla y separación y el eficiente sistema de limpieza mantienen la cantidad de relaves en el RC al mínimo.'
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318023619-mini.png',
        id: '201',
        name: 'CR EVO',
        info: 'La exclusiva tecnología de doble rotor es responsable de una cosecha de calidad y alta productividad. Los dos rotores y los cóncavos de grandes dimensiones realizan una fricción suave en toda su extensión, grano a grano, con elevada fuerza centrífuga, lo que contribuye a una gran capacidad de trilla y separación y la máxima calidad del grano.',
        detail: 'El extraordinario sistema de limpieza de doble acción produce granos de alta calidad en cualquier tipo de cosecha, debido a su gran área de limpieza. Es capaz de procesar un gran volumen de granos, por el sistema de trilla y separación. Un potente ventilador sopla una gran cantidad de aire, lo que garantiza el flujo de aire homogéneo a través de los zarandas. La extrema eficacia de la trilla y la separación y el eficiente sistema de limpieza reducen al mínimo la cantidad de perdidas en la CR Evo.'
      }
    ]
  },
  {
    name: 'MIXERS',
    products: [
      {
        img: 'https://dealers.rewebmkt.com/images/20220318052721-mini.png',
        id: '300',
        name: 'MG 100',
        info: 'Mezclador y distribuidor de raciones de 10 m3 de capacidad. Mezclado a través de 3 sinfines horizontales. Está comandado por toma de potencia directa desde el tractor. La descarga del producto está accionada hidráulicamente integralmente desde la cabina del tractor. Equipado con balanza electrónica para una correcta formulación de las dietas.',
        detail: 'Descarga por acción de 2 sinfines que garantizan una entrega pareja y una mezcla homogénea de la ración.',
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318052930-mini.png',
        id: '301',
        name: 'MG 70',
        info: 'Mezclador y distribuidor de raciones de 7 m3 de capacidad. Mezclado a través de 3 sinfines horizontales. Está comandado por toma de potencia directa desde el tractor. La descarga del producto es accionada integralmente desde la cabina del tractor en forma hidráulica. Equipado con balanza electrónica para una correcta formulación de las dietas.',
        detail: 'Transmisión trasera por medio de cadenas a rodillos tratadas y de alta resistencia. Proveen una reducción de esfuerzos en la barra de mando. Menos potencia requerida.',
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318051258-mini.png',
        id: '302',
        name: 'MGV 110F',
        info: 'Mezclador y distribuidor de raciones de tipo vertical DE 11 m3 de capacidad. El mezclado se produce por un sinfín cónico de paso variable de tipo vertical. Está dotado de cuchillas que permiten el desmenuzado de rollos y fardos prismáticos. La descarga es a través de noria. Totalmente comandado desde el tractor.',
        detail: 'Sinfín único en su estilo por su agresividad en rollos y fardos prismáticos. Dotado de cuchillas dentadas construidas de materiales bonificados tratados térmicamente y respaldadas con carburo de tungsteno (auto afilables).',
      },
      {
        img: 'https://dealers.rewebmkt.com/images/20220318051510-mini.png',
        id: '303',
        name: 'MGV 150F',
        info: 'Mezclador y distribuidor de raciones de tipo vertical de 14 m3 de capacidad. El mezclado se produce por un sinfín cónico de paso variable de tipo vertical. Está dotado de cuchillas que permiten el desmenuzado de rollos y fardos prismáticos. La descarga es a través de noria. Totalmente comandado desde el tractor.',
        detail: 'Puerta especialmente diseñada para trabajar en el mismo plano que las paredes de la tolva., Única en el mundo, que garantiza la excelencia en el mezclado. Sistema propio y único del mercado.',
      }
    ]
  }
]

export const productsSlice = createSlice({
  name: "products",
  initialState: products
});

export default productsSlice.reducer;