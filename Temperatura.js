(function(exports){
    //Clase Temperatura que hereda de Medida
    function Temperatura(numero, unidad){
            //Atributos de la clase
            Medida.call(this,numero,unidad); //Llamada al constructor de la clase padre

    }


    var medidaConversion = {
        unidad: 'f'
    }
//Clase Celsius
    function Celsius(numero){
      Temperatura.call(this,numero,'c');

      this.f = function(){
        var result = (this.getNumero() * 9/5)+32;
        var f = new Fahrenheit(result);
        return f;
      }

      this.k = function(){
        var result = this.getNumero() + 273.15;
        var ke = new Kelvin(result);
        return ke;
      }


    }
    Celsius.prototype.getNumero = function(){
      return this.numero;
    }
    Celsius.prototype.getUnidad = function(){
      return this.unidad;
    }

    Celsius.prototype.convertir = function(medida){
      medidaConversion.unidad = medida;
      var f = this[medidaConversion.unidad]();
      return f;

    }


//Clase Fahrenheit
    function Fahrenheit(numero){
      Temperatura.call(this,numero, 'f');

      this.c = function(){
        var result = (this.getNumero() - 32)*5/9;
        var ce = new Celsius(result);
        return ce;
      }
      this.k = function(){
        var result = ((5*(this.getNumero()-32))/9)+273.15;
        var ke = new Kelvin(result);
        return ke;
      }

    }
    Fahrenheit.prototype.getNumero = function(){
      return this.numero;
    }
    Fahrenheit.prototype.getUnidad = function(){
      return this.unidad;
    }

    Fahrenheit.prototype.convertir = function(medida){
      medidaConversion.unidad = medida;
      var f = this[medidaConversion.unidad]();
      return f;

    }

//Clase Kelvin

    function Kelvin(numero){
      Temperatura.call(this,numero,'k');

      this.c = function(){
        var result = Math.round((this.getNumero() - 273.15)*100)/100;
        var ce = new Celsius(result);
        return ce;
      }
      this.f = function(){
        var result = ((this.getNumero()-273.15) * 9/5)+32;
        var fa = new Fahrenheit(result);
        return fa;
      }

    }

    Kelvin.prototype.getNumero = function(){
      return this.numero;
    }
    Kelvin.prototype.getUnidad = function(){
      return this.unidad;
    }

    Kelvin.prototype.convertir = function(medida){
      medidaConversion.unidad = medida;
      var f = this[medidaConversion.unidad]();
      return f;

    }



//Clase Estrategia para el diseño de patrones
    var unidad = {
            medida: 'c',
            numero: 0

    }
    function Estrategia(numero, unidadM){
      unidad.medida = unidadM;
      unidad.numero = numero;
      this.c = function () {

          var ce = new Celsius(numero);
          return ce;

      };

      this.f = function () {
          var fa = new Fahrenheit(numero);
          return fa;

      };

      this.k = function(){

          var ke = new Kelvin(numero);
          return ke;

      };

      this.default = function () {
          alert('error: no existe esa medida en el programa');

      };




    };

    exports.unidad = unidad;
    exports.Estrategia = Estrategia;
    exports.medidaConversion = medidaConversion;
    exports.Celsius = Celsius;
    exports.Fahrenheit = Fahrenheit;
    exports.Kelvin = Kelvin;
    exports.Temperatura = Temperatura;


})(this);
