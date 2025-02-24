<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Objetivos y clasificaciones del presupuesto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") El presupuesto es una herramienta clave en la administración financiera de las organizaciones, ya que permite planificar y controlar los recursos de manera adecuada. Su objetivo principal es servir como guía para la asignación de ingresos y gastos con el fin de alcanzar los objetivos estratégicos de la empresa. Además, facilita la toma de decisiones al anticipar posibles desviaciones y realizar ajustes a tiempo para optimizar los recursos.
    
    p.mb-4 Los principales objetivos del presupuesto incluyen:

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-3.p-4.text-center.h-100.align-content-center.text-white
          h5.mb-0 Garantizar el uso eficiente de los recursos.
    
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-down")
        .tarjeta.bg-color-5.p-4.text-center.h-100.align-content-center
          h5.mb-0 Prever necesidades de financiamiento.
    
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-11.p-4.text-center.h-100.align-content-center.text-white
          h5.mb-0 Maximizar la operatividad y rentabilidad.
      .col-lg-3.mb-3.mb-lg-0(data-aos="fade-up")
        .tarjeta.bg-color-7.p-4.text-center.h-100.align-content-center
          h5.mb-0 Identificar oportunidades de ahorro y mejorar el control de gastos.
    
    p.mb-4 Por otro lado, el presupuesto puede clasificarse según su propósito y características. Algunas de las clasificaciones más comunes son:


    .bg-full-width-2.bg-fondo-1
      .px-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/2.svg" alt="" style="width: 90px")
              h5.text-center Presupuesto operativo
              p.mb-0.text-center Cubre costos y gastos recurrentes para el funcionamiento diario de la empresa.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Presupuesto de capital
              p.mb-0.text-center Destinado a inversiones a largo plazo, como adquisición de maquinaria o expansión de infraestructura.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Presupuesto fijo
              p.mb-0.text-center Se mantiene sin cambios durante el periodo establecido.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Presupuesto flexible
              p.mb-0.text-center Se ajusta según las condiciones cambiantes del mercado y la empresa.
    
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 La correcta clasificación del presupuesto es crucial para tomar decisiones estratégicas que favorezcan el crecimiento y la estabilidad financiera de la organización.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Propósito del presupuesto en las organizaciones

    p.mb-4 El presupuesto no solo permite planificar y controlar los recursos financieros, sino que también funciona como un mecanismo de evaluación para medir el desempeño de la empresa. Su propósito fundamental es garantizar la estabilidad y el crecimiento organizacional a través de la adecuada administración de los recursos.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7
              h5 Planificación de recursos
              p Permite asignar ingresos y gastos de manera estructurada, asegurando la disponibilidad de fondos y evitando deficiencias de liquidez.  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> si una empresa planea aumentar su producción, el presupuesto incluirá costos de materiales, mano de obra y logística para garantizar que los recursos sean suficientes.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Control de gastos y rentabilidad
              p Actúa como una guía para gestionar los gastos, permitiendo identificar desviaciones y realizar ajustes oportunos. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> si el presupuesto estimó $100,000 en gastos operativos y se gastaron $120,000, se podrán identificar las áreas donde se excedió y corregir para futuros periodos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Toma de decisiones estratégicas
              p Ayuda a evaluar la viabilidad de proyectos, inversiones y estrategias empresariales
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> una empresa que desea lanzar un nuevo producto usará el presupuesto para calcular costos de producción y marketing, determinando si es viable financieramente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Medición del rendimiento y ajuste de estrategias
              p Permite comparar lo presupuestado con los resultados reales para identificar áreas de éxito o mejora.  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> si se proyectaba un aumento del 10 % en ventas y solo se alcanzó el 5 %, el presupuesto ayudará a analizar las causas y ajustar la estrategia de ventas.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El presupuesto es una herramienta vital para la planificación, control y evaluación de los recursos en cualquier organización. Su correcta implementación contribuye a la estabilidad financiera y al éxito empresarial a largo plazo.
          
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Clasificación de presupuestos 

    p.mb-4 Los presupuestos son herramientas clave en la gestión financiera de una organización, ya que permiten planificar y controlar los recursos necesarios para alcanzar los objetivos establecidos. Se pueden clasificar en <b>presupuestos operativos</b> y <b>presupuestos de capital</b>, cada uno con funciones y características específicas dentro de la estrategia financiera empresarial.

    h2(data-aos="fade-left") Presupuesto operativo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-3.mb-lg-0
        p Este presupuesto se enfoca en la planificación de ingresos y egresos derivados de las actividades cotidianas de la organización. Incluye costos directos e indirectos asociados a la producción y comercialización de bienes o servicios, lo que facilita la gestión de gastos recurrentes y la evaluación de la rentabilidad de las operaciones diarias.
        .py-4.px-5.bg-color-10.mb-3(data-aos="fade-right")
          h5 Ejemplo práctico: 
          p.mb-0 Una empresa de fabricación de muebles incluirá en su presupuesto operativo costos como materiales, sueldos de empleados, alquiler de instalaciones y servicios públicos. Generalmente, este presupuesto se elabora para un período de corto plazo (un año) y se ajusta según los resultados obtenidos en la producción.
        
      .col-lg-5
        figure
          img(src="@/assets/curso/tema2/11.png", alt="", data-aos="zoom-in")

    p.mb-4 El seguimiento continuo de este presupuesto es esencial para identificar desviaciones y aplicar medidas correctivas oportunas (Buitrago Ibáñez, 2021).

    h2(data-aos="fade-left") Presupuesto de capital

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2
        p Este presupuesto se centra en la planificación de inversiones a largo plazo, como la adquisición de activos fijos (maquinaria, terrenos, edificios o tecnología). A diferencia del presupuesto operativo, su objetivo es impulsar el crecimiento y la expansión de la empresa mediante decisiones estratégicas de inversión.
        .py-4.px-5.bg-color-13.mb-3(data-aos="fade-right")
          h5 Ejemplo práctico: 
          p.mb-0 Si una empresa decide comprar una máquina para incrementar su producción de muebles, deberá elaborar un presupuesto de capital que contemple el costo de la máquina, gastos de instalación, capacitación del personal y mantenimiento futuro. Este presupuesto tiene un horizonte más amplio, ya que las inversiones realizadas generan beneficios a largo plazo (Vásquez Rojas, 2021).
        p.mb-0 Las decisiones tomadas en este presupuesto pueden transformar la empresa, permitiéndole adaptarse a cambios del mercado y mejorar su competitividad (Checa Hinojo, 2024).

        
      .col-lg-5.mb-3.mb-lg-0.order-1
        figure
          img(src="@/assets/curso/tema2/12.svg", alt="", data-aos="zoom-in")

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Diferencias entre el presupuesto operativo y el presupuesto de capital
    .tabla-a.color-acento-botones
      table
        thead
          tr
            th.bg-color-3.text-white Criterio
            th.bg-color-3.text-white Presupuesto operativo
            th.bg-color-3.text-white Presupuesto de capital
        tbody
          tr
            td.text-bold Duración
            td Corto plazo (generalmente un año)
            td Largo plazo (varios años)
          tr
            td.text-bold Propósito
            td Mantener la estabilidad financiera en el corto plazo
            td Impulsar el crecimiento mediante inversiones estratégicas
          tr
            td.text-bold Elementos
            td Costos recurrentes: salarios, materiales, servicios
            td Inversiones en activos fijos: maquinaria, terrenos, tecnología
    
    p.mb-4 Ambos tipos de presupuesto son fundamentales para la estabilidad financiera de la empresa. Mientras el presupuesto operativo garantiza la continuidad de las operaciones diarias, el presupuesto de capital permite la expansión y adaptación a las condiciones del mercado.

    .bg-full-width.bg-color-14.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Otros tipos de presupuestos
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento <b>Otros tipos de presupuestos</b>, donde se presentan diversas estrategias de planificación financiera más allá de los presupuestos operativos y de capital. Se analizan opciones como el presupuesto base cero, el flexible, el de caja y el incremental, explicando sus características y aplicaciones prácticas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Otros tipos de presupuestos.
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/13.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
