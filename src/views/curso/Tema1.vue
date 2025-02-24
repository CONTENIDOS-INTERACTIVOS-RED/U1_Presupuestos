<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definiciones y componentes del presupuesto'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .py-4.px-5.bg-color-1.mb-3(data-aos="fade-right")
          p.mb-0 El presupuesto es una herramienta esencial en la gestión financiera de cualquier organización, ya que permite planificar, controlar y evaluar el uso de los recursos. Se define como un plan detallado que proyecta los ingresos y gastos de una empresa en un periodo determinado, con el fin de garantizar una distribución adecuada de los recursos y facilitar la toma de decisiones estratégicas. No solo ayuda a gestionar las operaciones financieras diarias, sino que también permite anticipar escenarios y establecer acciones para alcanzar los objetivos organizacionales.
        p El presupuesto no es un documento estático, sino dinámico, ya que se ajusta a los cambios internos y externos de la organización. A través de presupuestos flexibles, las empresas pueden adaptarse a variaciones en ingresos y gastos, optimizando así su capacidad de respuesta ante situaciones imprevistas (Buitrago Ibáñez, 2021).
        p Los principales elementos del presupuesto son:
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", alt="", data-aos="zoom-in")


    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ingresos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ingresos
            p Recursos financieros generados por actividades como ventas o prestación de servicios.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Gastos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Gastos
            p Costos asociados a las operaciones diarias, incluyendo salarios, suministros y costos administrativos.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/3.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ahorros" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ahorros
            p Fondos reservados para imprevistos o inversiones futuras.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/4.png', alt='', style="width: 100%;")
    
    
    p.mb-4 Existen diversos tipos de presupuestos que se ajustan a las necesidades organizacionales:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-4.h-100.text-center(data-aos="fade-up")
          .bg-color-3.px-4.px-lg-5.py-3.rounded-top.text-white
            h4.mb-0.text-center Presupuesto operativo
          p.mb-0.p-4 Se enfoca en la gestión de las actividades diarias de la empresa, considerando los ingresos y gastos recurrentes.
    
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-6.h-100.text-center(data-aos="fade-down")
          .bg-color-5.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Presupuesto de capital
          p.mb-0.p-4 Relacionado con inversiones a largo plazo en activos fijos, como maquinaria o tecnología.
    
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-8.h-100.text-center(data-aos="fade-up")
          .bg-color-7.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Presupuesto flexible
          p.mb-0.p-4 Se ajusta a cambios en ingresos y costos a lo largo del periodo, permitiendo una mayor adaptación a condiciones variables. 
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto de presupuesto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .py-4.px-5.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 El presupuesto es más que una herramienta contable; es un mecanismo de planificación y control que ayuda a anticipar flujos de ingresos y gastos, facilitando la toma de decisiones estratégicas y operativas. Su función principal es prever los recursos necesarios y garantizar su distribución eficiente dentro de la organización.
        h2(data-aos="fade-left") Ejemplo práctico
        p Una empresa de productos electrónicos proyecta ingresos de $500,000 anuales y estima gastos por $400,000, incluyendo materiales, salarios y costos operativos. Su presupuesto quedaría así:

        .titulo-figura.mb-4
          h5 Tabla 1.
          span Ingresos, gastos y utilidad esperada
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-3.text-white Concepto
                th.bg-color-3.text-white Monto ($)
            tbody
              tr
                td Ingresos esperados
                td 500,000
              tr
                td Gastos estimados
                td 400,000
              tr
                td.text-bold Utilidad esperada
                td.text-bold 100,000

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", alt="", data-aos="zoom-in")
    
    p.mb-4 El presupuesto permite evaluar la rentabilidad y gestionar los recursos de manera estructurada, asegurando la alineación con los objetivos empresariales.

    h2(data-aos="fade-left") Importancia del presupuesto
    
    .bg-full-width.bg-h85.mb-5
      .px-4.p-md-5     
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-2
            p El presupuesto es clave para:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Planificación estratégica.</b> Alinea los objetivos financieros con las metas organizacionales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Control financiero.</b>  Permite detectar desviaciones y realizar ajustes oportunos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Evaluación del desempeño.</b>  Facilita la comparación entre proyecciones y resultados reales.
            p.mb-0 La ecuación contable permanece intacta, ya que el incremento en los activos se compensa con el aumento en el patrimonio debido a los ingresos generados.

          .col-lg-5(data-aos="zoom-in").order-1
            img.img-fluid(src='@/assets/curso/tema1/6.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        
        h2(data-aos="fade-left") Ejemplo adicional
        p Una empresa de servicios proyecta ingresos de $200,000 y estima gastos de $120,000 para el próximo trimestre. Su presupuesto inicial es:

        .titulo-figura.mb-4
          h5 Tabla 2.
          span Proyección de ingresos, gastos y beneficio
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-3.text-white Concepto
                th.bg-color-3.text-white Monto ($)
            tbody
              tr
                td Ingresos esperados
                td 200,000
              tr
                td Gastos estimados
                td 120,000
              tr
                td.text-bold Utilidad esperada
                td.text-bold 80,000

      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Si al final del trimestre los ingresos reales fueron $190,000 y los gastos $130,000, se evidencia una desviación que obliga a la empresa a analizar las causas y ajustar su planificación. En conclusión, el presupuesto no solo ayuda a gestionar los recursos financieros, sino que también permite a las empresas anticiparse a cambios, mejorar su planificación y tomar decisiones estratégicas informadas.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Elementos clave del presupuesto

    p El presupuesto es una herramienta fundamental en la administración financiera, ya que permite planificar, gestionar y controlar los recursos de una empresa de manera estructurada. Para que un presupuesto sea realista y funcional, debe incluir ciertos elementos esenciales que faciliten la toma de decisiones y aseguren la estabilidad financiera de la organización.
    p.mb-4 A continuación, se presentan los elementos clave del presupuesto junto con ejemplos prácticos:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Ingresos")
            p Representan el dinero que la empresa espera recibir en un período determinado. Provienen de la venta de bienes o servicios, inversiones o subvenciones. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Ejemplo: </b> Una empresa de software prevé generar $200,000 en ventas de licencias anuales. Este monto servirá como base para calcular los gastos y evaluar la rentabilidad.
    
          .div(titulo="Gastos")
            p Recursos financieros utilizados para las operaciones. Se dividen en: <b>fijos</b> (alquiler, sueldos) y <b>variables</b> (materiales, comisiones). 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Ejemplo: </b> Una empresa tiene gastos fijos mensuales de $50,000 y gastos variables de $30,000 por cada lote de productos fabricados.
    
          .div(titulo="Utilidad o beneficio")
            p Es la diferencia entre ingresos y gastos. Determina si la empresa es rentable. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Ejemplo: </b> Si los ingresos son de $200,000 y los gastos suman $150,000, la utilidad proyectada será de $50,000.
    
          .div(titulo="Ahorros y reservas")
            p Fondos destinados a imprevistos o futuras inversiones, permitiendo estabilidad financiera en tiempos de crisis. 
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Ejemplo: </b> Si la empresa ahorra el 10 % de su utilidad anual ($5,000), contará con respaldo financiero para gastos inesperados o inversión en tecnología.
          .div(titulo="Flujos de efectivo")
            p Proyección del dinero que entra y sale en un periodo determinado. Ayuda a evitar problemas de liquidez.  
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Ejemplo: </b> Si los clientes pagan a 60 días y los proveedores exigen pagos a 30 días, la empresa debe gestionar su flujo de efectivo para no enfrentar dificultades financieras.

    p.mb-4 A continuación, se presenta una descripción detallada de los elementos principales que conforman un presupuesto, destacando su definición, importancia y clasificación.

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="17.5%" y="89.5%" numero="+")
                h5 Ingresos
                p.mb-0 Dinero que la empresa espera recibir en un período determinado.
                p.mb-0 <b>Fuentes:</b> ventas de bienes/servicios, inversiones, subvenciones.
                p.mb-0 <b>Importancia:</b> definen recursos disponibles para cubrir gastos y generar utilidades.

    
              .bg-color-white.box-shadow.p-3(x="36%" y="11%" numero="+")
                h5 Gastos
                p.mb-0 Recursos financieros necesarios para operaciones.
                p.mb-0 <b>Clasificación:</b> fijos (alquiler, sueldos) y variables (materiales, comisiones).
                p.mb-0 <b>Importancia:</b> cálculo del flujo de efectivo necesario.

    
              .bg-color-white.box-shadow.p-3(x="58.8%" y="89%" numero="+")
                h5 Utilidad o beneficio
                p.mb-0 Diferencia entre ingresos y gastos.
                p.mb-0 <b>Importancia:</b> indicador de salud financiera y capacidad para generar ganancias.

    
              .bg-color-white.box-shadow.p-3(x="78.5%" y="11%" numero="+")
                h5 Ahorros y reservas
                p.mb-0 Fondos para imprevistos, inversiones futuras o crisis.
                p.mb-0 <b>Importancia:</b> estabilidad financiera y cobertura de costos inesperados.

    
              .bg-color-white.box-shadow.p-3(x="97.5%" y="84%" numero="+")
                h5 Flujos de efectivo
                p.mb-0 Cantidad de dinero que entra y sale de la organización.
                p.mb-0 <b>Importancia:</b> equilibrio entre flujo de efectivo y beneficios contables.


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Tipos de presupuestos.

    p.mb-4 El presupuesto es una herramienta clave en la administración financiera de las empresas. Existen distintos tipos de presupuestos diseñados para objetivos específicos según la naturaleza de la empresa y sus necesidades operativas. Conocerlos permite administrar de manera adecuada los recursos y tomar decisiones estratégicas bien fundamentadas.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7
              h5 Presupuesto operativo
              p Destinado a los recursos necesarios para las actividades diarias de la empresa, como producción, salarios, materiales y servicios. Es clave para la planificación y control financiero. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> Una tienda minorista proyecta ingresos de $150,000 y gastos operativos de $120,000 en un mes. La utilidad esperada es de $30,000, lo que permite evaluar el desempeño financiero.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5 Presupuesto de capital
              p Se enfoca en inversiones a largo plazo en activos fijos, como maquinaria, edificios o tecnología. Es esencial para la expansión y modernización de la empresa. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> Una empresa de fabricación de muebles planea invertir $500,000 en nuevas máquinas para aumentar su capacidad de producción. Esta inversión se refleja en su presupuesto de capital y se financia en un plazo de cinco años.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 Presupuesto flexible
              p Permite ajustar ingresos y gastos según los cambios en el mercado. Es útil para empresas con fluctuaciones en producción o ventas. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> Una empresa de software proyecta ingresos de $200,000 en un trimestre. Si las ventas aumentan a $250,000, el presupuesto flexible permite ajustar los gastos y la distribución de recursos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 Presupuesto base cero
              p Requiere justificar cada gasto desde cero en cada nuevo período, sin basarse en presupuestos anteriores. Ayuda a eliminar costos innecesarios.  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> Un departamento de marketing presenta un presupuesto de $50,000 para el próximo año. Con el presupuesto base cero, cada gasto debe ser evaluado y justificado antes de su aprobación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Presupuesto de flujo de caja
              p Prevé las entradas y salidas de dinero en un periodo determinado. Es esencial para garantizar liquidez y cumplir con obligaciones financieras. 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right.bg-color-9
                  p.mb-0 <b>Ejemplo: </b> Una empresa proyecta ingresos de $100,000 y pagos por $80,000 en un mes, lo que genera un superávit de $20,000 y permite operar sin recurrir a créditos.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio-uapa.cuaieed.unam.mx/repositorio/moodle/pluginfile.php/2805/mod_resource/content/1/UAPA-Presupuesto-Caracteristicas/index.html" target="_blank" rel="noopener noreferrer") Ruelas Vázquez, A. R. (2018). El Presupuesto y sus Características. Unidades de Apoyo para el Aprendizaje. CUAED/Facultad de Contaduría y Administración-UNAM.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.uned.es" target="_blank" rel="noopener noreferrer") Fundación UNED. (2021). El presupuesto como herramienta de gestión empresarial. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.incae.edu" target="_blank" rel="noopener noreferrer") NCAE Business School. (2019). Fundamentos de presupuesto en la administración de empresas.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=FQ26-TEMQfY" target="_blank" rel="noopener noreferrer") Contabilidad de costos. (2014, 9 de septiembre). Qué es el presupuesto y sus componentes básicos. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
