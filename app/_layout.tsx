import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';
import { globalStyles } from '../styles/global.styles';

const isAndroid = Platform.OS === 'android';
if (isAndroid) {
  NavigationBar;
}
const RootLayout = () => {
  // Cargamos la fuente y obtenemos el estasdo de loaded
  const [load] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  // evita renderizar la app si la fuente no ha cargado
  if (!load) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Text>Header</Text>

      <Slot />
      <StatusBar style="light" />
    </View>
  );
};
export default RootLayout;
