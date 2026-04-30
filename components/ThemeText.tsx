// Extendemos el TexxProps para heredar  todas  las propiedades nativas.
import { globalStyles } from '@/styles/global.styles';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  variant?: 'h1' | 'h2'; // Nuestras dos variantes visuales
  // aqui iran nuestras propiedades personalizadas
}

// desestructuramos children y agrupamos el resto de la variable 'rest
const ThemeText = ({ children, variant = 'h1', ...rest }: Props) => {
  // Esperamos ...rest en el componente natvo
  return (
    <Text
      style={[
        // Estilos bse para todos nuestros textos
        { color: 'white', fontFamily: 'SpaceMono' },

        // Estilos condicionales basados en la variante

        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
};
export default ThemeText;
