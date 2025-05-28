import React from 'react';
import BotonDeRetroceso from '../../../menus/BotonDeRetroceso';

/*

const Informacion = () => {
  return (
    <>  
    <div className="w-full h-screen p-4">
      <h2 className="font-bold mb-4 dark:text-gold hsm:text-center">Información completa para emigrar a otro país</h2>
      <iframe
        src="/docs/miarchivo.pdf"
        className="w-full h-full"
        title="Documento PDF"
      ></iframe>
    </div>
    <div className="flex justify-center mt-20">
      <BotonDeRetroceso textoBoton="Volver a los servicios"/>
    </div>
    </>
  );
};

export default Informacion;
*/
export default function Informacion() {
  return (
    <>
    <div className="flex justify-center">
      <div className="sm:w-[90%] hsm:w-full pb-10 pt-4 px-6 sm:rounded-2xl space-y-16
                      opacity-0 translate-y-6 animate-fadeInUp
                      text-left">
        {/* Título principal */}
        <header className="space-y-4">
          <h2 className="text-4xl font-bold text-purple dark:text-gold w-full">
            Guía completa para emigrar desde España a trabajar en el extranjero
          </h2>
          <p className="text-lg leading-relaxed text-black dark:text-white">
            A continuación se ofrece una visión detallada, país por país, de los trámites,
            oportunidades y condiciones para españoles que desean emigrar a trabajar. Cada
            sección incluye aspectos legales (visados, permisos y trámites), sectores con mayor
            demanda laboral, calidad de vida, coste de vida, idioma, comunidades españolas,
            enlaces oficiales y noticias recientes que afectan la emigración laboral.
          </p>
        </header>

        {/* Sección: Estados Unidos */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-purple dark:text-gold">
            Irlanda
          </h3>

          {/* Requisitos legales */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Requisitos legales de emigración
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Libre circulación en la UE:</strong> Irlanda es miembro de la UE, por lo que los españoles no necesitan visado ni permiso de trabajo ni residencia para establecerse o trabajar. Basta con presentar DNI o pasaporte al llegar y, tras 3 meses de estancia, registrarse ante las autoridades irlandesas.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Registro de residencia:</strong> Al residir más de tres meses se debe obtener un número de <span className=" text-turq">PPS</span> (equivalente al número de la Seguridad Social) para trabajar y recibir servicios sociales. No se exige visa especial.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Homologación de títulos:</strong> Aunque no hay visado, sí puede ser necesario validar titulaciones profesionales (sobre todo en salud o educación). Por ejemplo, enseñantes o médicos españoles deben registrarse en el organismo irlandés correspondiente.
            </p>

          </div>

          {/* Oportunidades laborales */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Oportunidades laborales por sectores
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Oportunidades laborales por sectores:</strong> Según informes, los sectores con más vacantes en Irlanda incluyen <span className=" text-turq">tecnologías de la información, ciencias, ingeniería, sanidad, finanzas, educación y hostelería</span>.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>TI y ciencia:</strong> Irlanda alberga sedes europeas de <span className=" text-turq">Google, Apple, Facebook</span>, y grandes farmacéuticas como <span className=" text-turq">Pfizer</span> y <span className=" text-turq">Johnson & Johnson</span>. Buscan desarrolladores, ingenieros, investigadores y técnicos cualificados.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Ingeniería:</strong> Ingenieros <span className=" text-turq">mecánicos, eléctricos y químicos</span> encuentran demanda en la industria y manufactura avanzada.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Sanidad:</strong> Médicos y enfermeros cualificados están en demanda tanto en <span className=" text-turq">hospitales públicos como privados</span>.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Administración y finanzas:</strong> <span className=" text-turq">Dublín</span> es un centro financiero europeo que acoge bancos, firmas de contabilidad y aseguradoras, ofertando plazas para economistas, contables y consultores.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Construcción:</strong> Con el <span className=" text-turq">boom inmobiliario</span> y de infraestructuras, se buscan obreros especializados y arquitectos.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Hostelería y turismo:</strong> Hoteles y restaurantes precisan personal de cocina y servicio, sobre todo en <span className=" text-turq">temporada alta</span>. El inglés comprende el requisito mínimo, pero el conocimiento de español puede ser un plus en turismo internacional.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Atención al cliente / Telecomunicaciones:</strong> Muchas multinacionales instalan <span className=" text-turq">call centers</span> en Irlanda, por lo que hay oferta de puestos para <span className=" text-turq">multilingües</span> en soporte técnico y servicio al cliente.
            </p>

          </div>

          {/* Calidad de vida */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Calidad de vida
            </h4>
            {/* Calidad de vida: Seguridad, Sanidad, Educación, Ocio y cultura, Transporte público */}
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Calidad de vida:</strong>
              <span className=" text-turq"> Irlanda</span> es un país generalmente seguro. La tasa de homicidios es muy baja (0,65 por 100.000 habitantes en 2023), comparable a la de España. Los delitos violentos son menos frecuentes que en Estados Unidos y similares a otros países del noroeste europeo.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Bienestar general:</strong> Según la <span className=" text-turq">ONU</span>, Irlanda tiene una de las esperanzas de vida más altas del mundo (82 años, líder en la UE). El país ofrece servicios públicos sólidos, aunque en sanidad pública los tiempos de espera pueden ser largos; muchos optan por <span className=" text-turq">seguro privado</span>.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Educación y salud:</strong> La <span className=" text-turq">educación primaria y secundaria pública</span> es gratuita. La sanidad pública cubre emergencias y atención primaria (con carnet médico), pero se recomienda <span className=" text-turq">seguro médico privado</span> para servicios más rápidos.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Ocio y transporte:</strong> Dublín y otras ciudades ofrecen una vida cultural activa (música, festivales celtas, pubs). El transporte público es bueno en Dublín (autobuses, tranvía <span className=" text-turq">Luas</span>, trenes <span className=" text-turq">DART</span>) y aceptable en ciudades medianas. En zonas rurales, es más limitado. El clima templado y lluvioso favorece la <span className=" text-turq">naturaleza y actividades al aire libre</span>.
            </p>
          </div>
          {/* Coste de vida aproximado */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Coste de vida aproximado
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Vivienda:</strong> <span className=" text-turq">Dublín</span> es cara: un piso de 1 habitación en el centro ronda €1.800–2.500 al mes. En ciudades más pequeñas como <span className=" text-turq">Cork</span> o <span className=" text-turq">Limerick</span>, el alquiler es menor (~€1.200–1.600). Las políticas recientes de <span className=" text-turq">control de rentas</span> intentan moderar subidas.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Alimentación:</strong> El coste de la cesta básica es algo superior al español. Por ejemplo, 1L de leche cuesta alrededor de €1,00 y una docena de huevos €2,50. En total, una persona gasta aproximadamente <span className=" text-turq">€250–350 mensuales</span> en comida. Comer fuera es caro (un menú estándar cuesta entre €15 y €20).
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Transporte:</strong> Un abono mensual en Dublín cuesta unos <span className=" text-turq">€120</span>. Los autobuses locales son frecuentes; el tren <span className=" text-turq">DART</span> cubre la costa. En zonas rurales, es habitual utilizar coche privado.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Otros gastos:</strong> Los <span className=" text-turq">impuestos</span> (income tax, PRSI) son elevados, pero el salario mínimo irlandés y los salarios medios son altos comparativamente. Por ejemplo, el <span className=" text-turq">sueldo bruto medio</span> supera los €3.500 mensuales.
            </p>
          </div>
          {/* Idioma y Comunidad española */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Idioma
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              El idioma principal es el <span className=" text-turq">inglés</span>, aunque hay dos idiomas oficiales: inglés e <span className=" text-turq">irlandés (gaélico)</span>. En la práctica, el inglés es indispensable para trabajar y vivir en Irlanda. El irlandés es obligatorio en el colegio, pero en los trabajos casi no se utiliza. Se recomienda un <span className=" text-turq">nivel de inglés mínimo B2</span> para acceder a empleos formales. El <span className=" text-turq">español</span> no es requerido, pero se valora en sectores como el <span className=" text-turq">turismo</span> y la atención a la creciente comunidad hispanohablante.
            </p>

            <h4 className="text-2xl  text-purple dark:text-gold">
              Comunidad española y redes de apoyo
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Comunidad española y redes de apoyo:</strong> La <span className=" text-turq">Embajada de España en Dublín</span> coordina ayudas consulares y ofrece información útil. En su web se listan <span className=" text-turq">asociaciones españolas</span> en Irlanda, como la <span className=" text-turq">Ireland-Spain Economic Association</span>, que promueve inversiones bilaterales, o agrupaciones de <span className=" text-turq">científicos</span> y <span className=" text-turq">emprendedores españoles</span> en el país. También existen <span className=" text-turq">grupos sociales y culturales hispanohablantes</span> (familias, clubes de fútbol español, radios en español). Estas redes facilitan la <span className=" text-turq">integración</span> y ofrecen actividades comunitarias en español.
            </p>
          </div>
          {/* Noticias recientes y época para emigrar */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Noticias recientes y políticas migratorias
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Vivienda:</strong> La <span className=" text-turq">escasez de oferta habitacional</span> en Dublín ha incrementado significativamente las rentas, un aspecto importante a considerar al emigrar. En respuesta, el <span className=" text-turq">gobierno irlandés</span> ha anunciado planes de <span className=" text-turq">construcción de vivienda pública</span> para aliviar la presión del mercado.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Inmigración cualificada:</strong> Irlanda participa activamente en <span className=" text-turq">programas europeos de movilidad laboral</span>. Aunque no se requieren visados para ciudadanos de la UE, el país actualiza regularmente las listas de <span className=" text-turq">profesiones en demanda</span> dentro del <span className=" text-turq">Critical Skills Employment Permit</span>. Actualmente, hay alta demanda de <span className=" text-turq">ingenieros</span>, <span className=" text-turq">enfermeros</span> y <span className=" text-turq">profesionales en tecnología</span>.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Otros factores:</strong> El auge de <span className=" text-turq">empresas tecnológicas</span> en Irlanda (especialmente en Dublín) continúa atrayendo <span className=" text-turq">talento internacional</span>. Esto favorece la contratación de <span className=" text-turq">trabajadores extranjeros cualificados</span>. Para ciudadanos españoles, <span className=" text-turq">no hay restricciones adicionales</span> más allá del reglamento vigente de la Unión Europea.
            </p>

            <h4 className="text-2xl  text-purple dark:text-gold">
              Mejor época del año para emigrar
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              No existe un mes ideal único, pero conviene <span className="font-semibold text-turq">planificar según el sector</span>. En <span className="font-semibold text-turq">hostelería y turismo</span>, la demanda aumenta en primavera y verano. En <span className="font-semibold text-turq">tecnología y finanzas</span>, la contratación se mantiene estable durante todo el año, con picos leves en primavera y otoño. Para <span className="font-semibold text-turq">trabajos agrícolas</span>, la <span className="font-semibold text-turq">primavera y el verano</span> son las estaciones con mayor necesidad de personal.
            </p>
          </div>

        </section>
        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-purple dark:text-gold">
            Estados Unidos
          </h3>

          {/* Requisitos legales */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Requisitos legales de emigración
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Visados de trabajo temporales:</strong> Los empleadores estadounidenses pueden
              patrocinar distintos visados según la profesión y duración. Por ejemplo, el visado
              <span className=" text-turq"> H-1B</span> para ocupaciones especializadas
              (requiere título universitario),<span className=" text-turq"> H-2A</span> para
              trabajadores agrícolas temporales,<span className=" text-turq"> H-2B</span> para
              otros trabajos temporales estacionales (hostelería, construcción, turismo, etc.),
              <span className=" text-turq"> L-1</span> para transferencias dentro de la
              misma empresa internacional,<span className=" text-turq"> O-1</span> para
              personas con habilidades extraordinarias, y<span className=" text-turq"> J-1</span>
              para intercambios educativos o prácticas.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Visados de residencia permanente:</strong> También existen categorías de inmigrantes
              (<span className=" text-turq">EB-2/EB-3</span>) para empleo permanente. Su tramitación
              incluye petición de empleador y, en muchos casos, certificación laboral.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Proceso de solicitud:</strong> En la práctica, primero se debe obtener una oferta de empleo
              y luego el empleador tramitará la petición (petición I-129 para no inmigrantes) ante USCIS. El
              proceso puede tardar varios meses. Por ejemplo, el visado H-1B se solicita anualmente y su aprobación
              depende de cupo y sorteo.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Residencia permanente:</strong> Tras años con visado temporal es posible acceder a la
              “Green Card” mediante la categoría EB correspondiente. Algunos visados (como H-1B o L-1) permiten
              solicitar posteriormente la residencia si se cumplen requisitos de empleo y experiencia.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Certificaciones necesarias:</strong> Para los visados de trabajo cualificado se suele exigir
              título universitario y/o experiencia profesional relevante. Muchos puestos requieren convalidación
              de títulos o licencias.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Tiempos estimados:</strong> Dependen de la vía elegida. Un H-1B puede tardar de 6 a 9 meses
              (más si hay prórroga “premium”), mientras que obtener la residencia permanente mediante EB puede
              llevar años.
            </p>
          </div>

          {/* Oportunidades laborales */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Oportunidades laborales por sectores
            </h4>
            <ul className="list-disc list-inside leading-relaxed text-black dark:text-white space-y-2">
              <li><strong>Tecnologías de la Información (TI):</strong> La alta demanda de ingenieros de software,
                desarrolladores, ciberseguridad, “big data” y otras especialidades TIC es una de las principales
                razones para venir (muchas empresas tecnológicas contratan H-1B).</li>
              <li><strong>Ciencia, Ingeniería e Industria:</strong> Biotecnología, farmacéutica, aeroespacial y energía.
                Ingenieros civiles, eléctricos o mecánicos tienen oportunidades en infraestructuras y manufactura.
              </li>
              <li><strong>Sanidad:</strong> Hay carencias de médicos, enfermeros, técnicos sanitarios y científicos biomédicos. Las
                plazas en hospitales y centros de investigación están abiertas a profesionales con experiencia
                (aunque requieren convalidación de títulos). </li>
              <li><strong>Construcción:</strong> Debido a grandes proyectos de obra civil e inmobiliarios, se buscan desde
                operarios especializados (fontaneros, electricistas, carpinteros) hasta ingenieros civiles.
              </li>
              <li><strong>Agricultura y hostelería:</strong> Las visas H-2A/H-2B cubren mano de obra temporal en agricultura
                (cosecha, ganadería) y en turismo/hotelería (temporada alta de verano) . Sectores como
                hotelería, restauración y turismo estacional suelen emplear H-2B.
              </li>
              <li><strong>Finanzas y consultoría:</strong> Wall Street, fintech y consultoras en Nueva York, Silicon Valley, Boston y
                Chicago demandan economistas, analistas financieros y consultores expertos en tecnología
                financiera. </li>
              <li><strong>Educación e investigación:</strong> Universidades y centros de I+D ofrecen puestos a profesores e
                investigadores cualificados, aunque suele exigirse nivel de inglés muy alto y, en algunos casos,
                visados J-1 o H-1B específicos para académicos.
              </li>
            </ul>
          </div>

          {/* Calidad de vida */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Calidad de vida
            </h4>
            {/* Calidad de vida: Seguridad, Sanidad, Educación, Ocio y cultura, Transporte público */}
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Seguridad:</strong> La seguridad varía mucho por zona. En general, Estados Unidos tiene índices de criminalidad más altos que España; la tasa de homicidios fue 5,76 por 100 000 habitantes en 2023, frente a 0,69 en España. Sin embargo, en muchas ciudades medianas y zonas suburbanas la seguridad es buena, y las agencias de seguridad (policía, bomberos) suelen ser profesionales.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Sanidad:</strong> El sistema de salud es mayoritariamente privado/pagador. La cobertura médica es costosa si no está subvencionada por el empleador. La calidad de atención es alta pero los gastos sanitarios pueden ser elevados. Según la OCDE, EEUU gasta alrededor del 16 % del PIB en salud, con resultados variables: la esperanza de vida (~79 años) es inferior al promedio OCDE y existen desigualdades de acceso.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Educación:</strong> La educación pública primaria y secundaria es gratuita y de buena calidad en general, con sistemas locales (entre distritos hay diferencias). Las universidades privadas pueden ser muy caras, pero hay becas para extranjeros destacados. El país alberga muchas universidades de prestigio mundial, lo que incentiva la emigración de estudiantes y profesionales académicos.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Ocio y cultura:</strong> EEUU ofrece gran diversidad cultural: museos, parques, playas, montañas. Las actividades al aire libre (senderismo, parques nacionales) y el deporte (baloncesto, fútbol americano) son populares.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Transporte público:</strong> Varía según ciudad. Ciudades como Nueva York, Washington DC, Chicago o Boston tienen metro y buses extensos. Sin embargo, en la mayoría de áreas metropolitanas (Los Ángeles, Miami, muchas ciudades del sur) el automóvil es casi imprescindible. En general, la inversión en transporte público es inferior a la europea.
            </p>
          </div>
          {/* Coste de vida aproximado */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Coste de vida aproximado
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Vivienda:</strong> Es uno de los gastos mayores. En zonas urbanas caras (NYC, San Francisco) un apartamento de 1 dormitorio puede superar los $2 000 mensuales. En promedio, una familia gasta alrededor de $7 000 al mes en vivienda y otros costos asociados. Por ejemplo, el alquiler promedio de un piso pequeño en una gran ciudad ronda los $1 000–1 500 mensuales.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Alimentación:</strong> Los productos básicos tienen precios similares o algo más bajos que en España. Por ejemplo, 1 litro de leche cuesta alrededor de $0,9–1,2 y una docena de huevos $2,5–3 en un supermercado estándar. Una compra mensual de alimentos para una persona puede estar en torno a $300–400.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Transporte:</strong> El transporte público varía: un abono mensual en ciudades medianas puede costar $100–120. El precio de la gasolina ronda los $3–4 por galón (≈3,8 litros). Para muchos, el coche propio sigue siendo necesario fuera de grandes urbes.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Otros gastos:</strong> El seguro de salud (si no lo cubre el empleador) puede suponer varios cientos de dólares al mes. El impuesto de renta y contribuciones sociales dependen del estado. Aun así, los salarios promedio estadounidenses son altos (el ingreso medio bruto ronda $51 000 anuales), compensando en parte el coste de vida.
            </p>
          </div>
          {/* Idioma y Comunidad española */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Idioma
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              El idioma de uso es el inglés americano. No existe idioma oficial federal, pero el inglés es de facto la lengua común en todos los ámbitos (trabajo, administración, educación). Se recomienda un nivel fluido (mínimo B2/C1) para conseguir empleo en la mayoría de sectores. El español es ampliamente hablado en comunidades hispanas (especialmente en Florida, Texas, California y Nueva York), pero su uso es limitado en entornos laborales formales.
            </p>

            <h4 className="text-2xl  text-purple dark:text-gold">
              Comunidad española y redes de apoyo
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              España cuenta con varios consulados generales en EEUU (Boston, Chicago, Houston, Los Ángeles, Miami, Nueva York, San Francisco, San Juan de Puerto Rico), que ofrecen información consular y apoyo a emigrantes. Existen asociaciones de españoles y latinoamericanos en muchas ciudades: por ejemplo, la Federación de Asociaciones Españolas en Estados Unidos (FAEUSA) agrupa entidades regionales, y hay redes de expatriados en tecnología (ALDEEU en San Francisco, Silicon Valley) o comercio (Instituto de Comercio Exterior). También es común encontrar iglesias y clubes deportivos con secciones en español.
            </p>
          </div>
          {/* Noticias recientes y época para emigrar */}
          <div className="space-y-4">
            <h4 className="text-2xl  text-purple dark:text-gold">
              Noticias recientes y políticas migratorias
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Nuevos visados H-2B:</strong> El Departamento de Seguridad Nacional y Trabajo de EEUU ampliaron temporalmente el cupo anual de visas H-2B en 64.716 para 2025 (por ejemplo, hostelería, construcción), abriendo más plazas de trabajo temporal.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Potenciales cambios con nueva administración:</strong> Los medios informan que la próxima administración (a partir de enero 2025) planea medidas restrictivas (deportaciones masivas e incluso revocar la ciudadanía por nacimiento). No obstante, tales medidas enfrentarían obstáculos legales.
            </p>
            <p className="leading-relaxed text-black dark:text-white">
              <strong>Otros factores:</strong> Se discuten reformas al sistema de inmigración de EEUU (enfocadas en trabajadores cualificados), pero aún sin cambios concretos inmediatos. El clima político puede crear incertidumbre en los flujos migratorios.
            </p>

            <h4 className="text-2xl  text-purple dark:text-gold">
              Mejor época del año para emigrar
            </h4>
            <p className="leading-relaxed text-black dark:text-white">
              Depende del sector: para visas H-2A/H-2B agrícolas o turísticas, conviene planear según temporadas de cosecha (primavera/verano) o turismo (verano e invierno, en resorts de esquí). En tecnología o finanzas, la contratación es continua, aunque muchos graduados se incorporan en verano u otoño. En general, llegar a principios de año laboral (enero-febrero) puede ayudar a alinearse con ciclos de contratación corporativa.
            </p>
          </div>
        </section>
      </div>
    </div>
    <div className='flex justify-center'>
    <div className="sm:w-[90%] hsm:w-full pb-10 pt-4 px-6 sm:rounded-2xl space-y-16
                      opacity-0 translate-y-6 animate-fadeInUp
                      text-left h-[800px]">
        <h2 className="font-bold mb-4 dark:text-gold hsm:text-center">Información con mas de 10 paises:</h2>
        <iframe
          src="/docs/miarchivo.pdf"
          className="w-full h-full "
          title="Documento PDF"
        ></iframe>
      </div>
      </div>
            <div className="flex justify-center mt-20">
        <BotonDeRetroceso textoBoton="Volver a los servicios" />
      </div>
    </>
  );
}
