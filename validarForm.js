document.addEventListener('DOMContentLoaded', function () {

  //Validacion campos formulario
  (function () {

      var formulario = document.getElementById('form');

      var validarCliente = function (e) {
          if (formulario.cliente.value == 0) {
              alert("Completá el Campo numero de cliente");
              e.preventDefault();
          }
      };

      var validarCorreo = function (e) {
          if (formulario.email.value == 0) {
              alert("Completá el campo Correo Electrónico");
              e.preventDefault();
          }
      };

      var validarFactura = function (e) {
          if (formulario.factura.value == "") {
              alert("Completá el campo de factura");
              e.preventDefault();
          }
      };

      var validarDinero = function (e) {
          if (formulario.dinero.value == 0) {
              alert("Completá el campo de tipo de moneda");
              e.preventDefault();
          }
      };
      var validarTarjeta = function (e) {
          if (formulario.tarjeta.value == 0) {
              alert("Completá el campo de numero de Tarjeta");
              e.preventDefault();
          }
      };
      var validarFecha = function (e) {
          if (formulario.fecha.value == 0) {
              alert("Completá el campo de los datos de expiracion");
              e.preventDefault();
          }
      };

      var validar = function (e) {
          validarCliente(e);
          validarCorreo(e);
          validarFactura(e);
          validarDinero(e);
          validarTarjeta(e);
          validarFecha(e);
      };

      formulario.addEventListener("submit", validar);


      //Recarga formulario un vez validado y enviado, limpiando los campos.
      //!NO FUNCIONA
      formulario.addEventListener("submit", handleSubmit)
      async function handleSubmit(event) {
          event.preventDefault()
          const form = new FormData(this);
          const response = await fetch(this.action, {
              method: this.method,
              body: form,
              headers: {
                  'Accept': 'application/json'
              }
          })
          if (response.ok) {
              this.reset();
              alert('Gracias por contactarte con nosotros. En breve nos estaremos comunicando');
          }
      }
  }())
});