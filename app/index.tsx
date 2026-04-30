import CalculatorButton from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global.styles';
import React from 'react';
import { View } from 'react-native';

const CalculatorApp = () => {
  const {
    formula,
    buildNumber,
    clean,
    toogleSign,
    addOperation,
    number,
    calculate,
    subtractOperation,
    divideOperation,
    multiplyOperation,
  } = useCalculator();
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        <ThemeText variant="h2">{number}</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={clean}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="+/-"
          onPress={toogleSign}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="del"
          onPress={() => console.log('del')}
          color={Colors.lightGray}
          blackText
        />
        <CalculatorButton
          label="÷"
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => buildNumber('7')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="8"
          onPress={() => buildNumber('8')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="9"
          onPress={() => buildNumber('9')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="X"
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => buildNumber('4')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="5"
          onPress={() => buildNumber('5')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="6"
          onPress={() => buildNumber('6')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="-"
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => buildNumber('1')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="2"
          onPress={() => buildNumber('2')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="3"
          onPress={() => buildNumber('3')}
          color={Colors.darkGray}
        />
        <CalculatorButton
          label="+"
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          onPress={() => buildNumber('0')}
          color={Colors.darkGray}
          doubleSize
        />
        <CalculatorButton
          label="."
          onPress={() => buildNumber('.')}
          color={Colors.darkGray}
        />
        <CalculatorButton label="=" color={Colors.orange} onPress={calculate} />
      </View>
    </View>
  );
};

export default CalculatorApp;
