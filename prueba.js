var expect = chai.expect;

describe("Medida",function(){
    describe("Constructor", function(){
      it("Debe recibir un valor y una medida",function(){
        var m = new Medida(32, 'f');
        expect(m.getNumero()).to.equal(32);
      });
    });
});

describe("Temperatura",function(){
  describe("Constructor", function(){
    it("Debe recibir un valor y una medida",function(){
      var m = new Temperatura(32, 'f');
      expect(m.numero).to.equal(32);
    });
  });
});

describe("Fahrenheit",function(){
  describe("Constructor", function(){
    it("Debe recibir un valor y tiene tipo f",function(){
      var m = new Fahrenheit(32);
      expect(m.getUnidad()).to.equal('f');
    });
  });

  describe("Conversión a los tipos",function(){
    it("Conversión a Celsius",function(){
      var fa = new Fahrenheit(32);
      expect(fa.convertir('c').getNumero()).to.equal(0);
    });
    it("Conversión a Kelvin",function(){
      var fa = new Fahrenheit(32);
      expect(fa.convertir('k').getNumero()).to.equal(273.15);
    });
  });

});

describe("Celsius",function(){
  describe("Constructor", function(){
    it("Debe recibir un valor y tiene tipo c",function(){
      var m = new Celsius(32);
      expect(m.getUnidad()).to.equal('c');
    });
  });

  describe("Conversión a los tipos",function(){
    it("Conversión a Fahrenheit",function(){
      var ce = new Celsius(32);
      expect(ce.convertir('f').getNumero()).to.equal(89.6);
    });
    it("Conversión a Kelvin",function(){
      var ce = new Celsius(32);
      expect(ce.convertir('k').getNumero()).to.equal(305.15);
    });
  });

});

describe("Kelvin",function(){
  describe("Constructor", function(){
    it("Debe recibir un valor y tiene tipo k",function(){
      var m = new Kelvin(32);
      expect(m.getUnidad()).to.equal('k');
    });
  });

  describe("Conversión a los tipos",function(){
    it("Conversión a Fahrenheit",function(){
      var ke = new Kelvin(32);
      expect(ke.convertir('f').getNumero()).to.equal(-402.07);
    });
    it("Conversión a Celsius",function(){
      var ke = new Kelvin(32);
      expect(ke.convertir('c').getNumero()).to.equal(-241.15);
    });
  });

});

describe("Estrategia",function(){
  describe("Creación de objetos", function(){
    it("Debe identificar que tiene que crear un objeto Fahrenheit",function(){
      var valorNum = 32;
      var valorUni = 'f';
      var est = new Estrategia(valorNum,valorUni);
      expect(est[valorUni]() instanceof Fahrenheit).to.equal(true);
    });

    it("Debe identificar que tiene que crear un objeto Celsius",function(){
      var valorNum = 32;
      var valorUni = 'c';
      var est = new Estrategia(valorNum,valorUni);
      expect(est[valorUni]() instanceof Celsius).to.equal(true);
    });

    it("Debe identificar que tiene que crear un objeto Kelvin",function(){
      var valorNum = 32;
      var valorUni = 'k';
      var est = new Estrategia(valorNum,valorUni);
      expect(est[valorUni]() instanceof Kelvin).to.equal(true);
    });
  });


});
