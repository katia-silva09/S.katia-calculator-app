import { Colors } from '@/constants/theme';
import { globalStyles } from '@/styles/global.styles';
import * as Haptics from 'expo-haptics';
import { Pressable, Text } from 'react-native';
interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  onPress: () => void;
  doubleSize?: boolean;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
  doubleSize = false,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1, //Feedback viusual al presionar
        width: doubleSize ? 180 : 80, //Si doubleSize es true, el ancho es 180, si no es 80
      })}
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          //Condicional si blactext es true, la fuente es negra, si no es blanca
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
