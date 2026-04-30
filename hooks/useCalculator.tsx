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
    if (lasOperator.current) {
      setFormula(`${prevnumber} ${lasOperator.current}${number}`);
    } else {
      setFormula(number);
    }
  }, [number, prevnumber]);

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

  const Result = (): number => {
    const num1 = Number(prevnumber);
    const num2 = Number(number);

    switch (lasOperator.current) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num2 === 0 ? 0 : num1 / num2;

      default:
        return num2;
    }
  };
  const calculateSubResult = () => {
    if (!lasOperator.current) return;

    const result = Result();
    setPrevNumber(`${result}`);
  };
  const setLastOperator = (operator: Operator) => {
    calculateSubResult();

    setPrevNumber(number);
    setNumber('0');

    lasOperator.current = operator;
  };

  const calculate = () => {
    const result = Result();

    setNumber(`${result}`);
    setPrevNumber('0');
    lasOperator.current = undefined;
  };
  const addOperation = () => setLastOperator(Operator.add);
  const subtractOperation = () => setLastOperator(Operator.subtract);
  const multiplyOperation = () => setLastOperator(Operator.multiply);
  const divideOperation = () => setLastOperator(Operator.divide);
  return {
    //props
    formula,
    number,
    prevnumber,

    //metodos
    buildNumber,
    clean,
    toogleSign,
    addOperation,
    subtractOperation,
    multiplyOperation,
    divideOperation,
    calculate,
  };
};
