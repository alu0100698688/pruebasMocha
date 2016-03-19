(function(exports){
  "use strict"
  function Medida (numero, unidad) {

          this.numero = numero;
          this.unidad = unidad;
  };
  Medida.prototype={
    getNumero: function(){
      return this.numero;
    },

    setNumero: function(valor){
      this.numero = valor;
    },

    getUnidad: function(){
      return this.unidad;
    },

    setUnidad: function(valor){
      this.unidad = valor;
    }
  };


  exports.Medida = Medida;

})(this);
