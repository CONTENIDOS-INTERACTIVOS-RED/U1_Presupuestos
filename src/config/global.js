export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Generalidades del presupuesto',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definiciones y componentes del presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de presupuesto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos clave del presupuesto',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos clave del presupuesto',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Objetivos y clasificaciones del presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Propósito del presupuesto en las organizaciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación de presupuestos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planeación y control del presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Planeación estratégica y presupuesto',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Etapas del proceso presupuestario',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Ejemplo numérico del proceso presupuestario',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Buitrago Ibáñez, J. V. (2021). Presupuestos en Excel: (1 ed.). Editorial UPTC. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/219237?page=1',
    },
    {
      referencia:
        'Piedra Aguilera, M. A. & Cubero Abril, T. (2024). Presupuestos. Un enfoque práctico: (1 ed.). Universidad del Azuay',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/278951?page=2',
    },
    {
      referencia:
        'Pacheco Coello, C. E. (2020). Presupuestos un enfoque gerencial: ( ed.). Instituto Mexicano de Contadores Públicos. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/151225',
    },
    {
      referencia:
        'Vásquez Rojas, F. A. (2021). Costos y Presupuestos para financieros junior: ( ed.). Grupo Editorial Nueva Legislación SAS. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/160288?page=1',
    },
    {
      referencia:
        'Checa Hinojo, E. J. (2024). Elaboración del presupuesto editorial. ARGN0109: (1 ed.). IC Editorial',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/274320?page=1',
    },
    {
      referencia:
        'Moreno Castro, T. F. (2023). Plan de ventas: productos, pronósticos y presupuestos: (1 ed.). RIL editores',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/268333?page=1',
    },
    {
      referencia:
        'Antón Pérez, J. J. & Garijo de Miguel, S. (2024). Empresa y administración: (1 ed.). Macmillan Iberia, S.A',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/267631',
    },
    {
      referencia:
        'Gutiérrez Aragón, Ó. (2015). Fundamentos de administración de empresas: ( ed.). Difusora Larousse - Ediciones Pirámide',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/49039',
    },
    {
      referencia:
        'Reza Trosino, J. C. (2019). El gerente efectivo: los fundamentos de la administración, el trabajo en equipo y el liderazgo: (1 ed.). Universidad Nacional Autónoma de México (UNAM). ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/228831',
    },
    {
      referencia:
        'Salgado Benítez, J. Guerrero López, L. & Salgado Hernández, N. (2016). Fundamentos de Administración: ( ed.). Grupo Editorial Éxodo. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/130328',
    },
  ],
  glosario: [
    {
      termino: 'Ajuste presupuestario',
      significado:
        'Modificación de las proyecciones financieras a medida que cambian las circunstancias internas o externas de la organización.',
    },
    {
      termino: 'Alquiler',
      significado:
        'Costo asociado al arrendamiento de propiedades o instalaciones para la operación de la empresa.',
    },
    {
      termino: 'Beneficio neto',
      significado:
        'La ganancia de una empresa después de descontar todos los costos y gastos, incluidos impuestos y otros cargos.',
    },
    {
      termino: 'Alquiler',
      significado:
        'Costo asociado al arrendamiento de propiedades o instalaciones para la operación de la empresa.',
    },
    {
      termino: 'Capital',
      significado:
        'Recursos financieros utilizados para iniciar o mantener operaciones empresariales, que incluyen tanto fondos propios como de terceros.',
    },
    {
      termino: 'Costos de producción',
      significado:
        'Gastos directamente relacionados con la fabricación de productos, incluyendo materiales, mano de obra y costos indirectos de fabricación.',
    },
    {
      termino: 'Costos fijos',
      significado:
        'Gastos que no cambian con el volumen de producción, como el alquiler de locales o sueldos administrativos.',
    },
    {
      termino: 'Costos variables',
      significado:
        'Gastos que fluctúan en función del volumen de producción, como los materiales utilizados en la fabricación de productos.',
    },
    {
      termino: 'Deuda',
      significado:
        'Obligación financiera de la empresa que debe ser pagada en el futuro, generalmente con intereses.',
    },
    {
      termino: 'Desviación',
      significado:
        'Diferencia entre el presupuesto planificado y los resultados reales obtenidos.',
    },
    {
      termino: 'Ejecución presupuestaria',
      significado:
        'Implementación de los planes financieros establecidos en el presupuesto y monitoreo de su cumplimiento.',
    },
    {
      termino: 'Evaluación financiera',
      significado:
        'Proceso de análisis de los resultados financieros para determinar la eficiencia y rentabilidad de las operaciones de una empresa.',
    },
    {
      termino: 'Gastos operativos',
      significado:
        'Todos los costos asociados con las actividades diarias de la empresa, como sueldos, alquiler y servicios públicos.',
    },
    {
      termino: 'Ingresos',
      significado:
        'Dinero recibido por la empresa, típicamente a través de la venta de bienes o servicios.',
    },
    {
      termino: 'Inversión',
      significado:
        'Colocación de capital en activos con el objetivo de generar retorno o beneficios en el futuro.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de una empresa para cubrir sus obligaciones a corto plazo con los activos disponibles en efectivo o fácilmente convertibles en efectivo.',
    },
    {
      termino: 'Margen de beneficio',
      significado:
        'Porcentaje de ingresos que representa el beneficio neto de la empresa, después de descontar todos los costos.',
    },
    {
      termino: 'Presupuesto base cero',
      significado:
        'Método de elaboración de presupuestos en el que todas las partidas deben ser justificadas y aprobadas desde cero, sin basarse en presupuestos anteriores.',
    },
    {
      termino: 'Presupuesto flexible',
      significado:
        'Tipo de presupuesto que se ajusta según las variaciones en el nivel de actividad o producción de la empresa.',
    },
    {
      termino: 'Presupuesto operativo',
      significado:
        'Estimación de ingresos y egresos relacionados con las operaciones diarias de la empresa.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'Medida del beneficio generado por la empresa en relación con los recursos invertidos o utilizados.',
    },
  ],
}
