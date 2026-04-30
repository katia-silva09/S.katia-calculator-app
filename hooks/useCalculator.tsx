import { useEffect, useRef, useState } from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

// formula
// number
//prevNUmber ( previos number)
//lastOpeation

export const useCalculator = () => {
  const [formula, setFormula] = useState(' ');
  const [number, setNumber] = useState('0');
  const [prevnumber, setPrevNumber] = useState('0');

  const lasOperator = useRef<Operator>();

  useEffect(() => {
    //todo calcular sub-resultado mas adelante
    setFormula(number);
  }, [number]);

  const clean = () => {
    (setNumber('0'), setPrevNumber('0'), setFormula('0'));

    // receteamos tambien la referencia de l ultima operacion

    lasOperator.current = undefined;
  };

  const toogleSign = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }
    setNumber('-' + number);
  };

  const buildNumber = (numberStrintg: string) => {
    // verificar si ya existe el punto decimal
    if (number.includes('.') && numberStrintg === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //validacione especiales para el cero

      // permitir el primer punto decimal

      if (numberStrintg === '.') {
        return setNumber(number + numberStrintg);
      }
      // evaluar si es otro cero y si hay punto

      if (numberStrintg === '0' && number.includes('.')) {
        return setNumber(number + numberStrintg);
      }
      //evaluar si es diferente de cero no hay numeros y es el primer digito

      if (numberStrintg != '0' && !number.includes('.')) {
        return setNumber(numberStrintg);
      }
      // evitar 00000

      if (numberStrintg === '0' && !number.includes('.')) {
        return;
      }
    }
    // concatenacion normal

    setNumber(number + numberStrintg);
  };
  return {
    //props
    formula,
    number,
    prevnumber,

    //metodos
    buildNumber,
    clean,
    toogleSign,
  };
};
