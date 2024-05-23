function apresentar(nome){
      return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (num1, num2) => {
      if (num1 || num2 > 10){
            return num1 + num2;
      }
}