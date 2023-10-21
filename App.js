import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { colors } from './src/theme/colors.js';
import { spacing } from './src/theme/spacing.js';
import { useFonts } from 'expo-font';
import { typography } from './src/theme/typography.js';
// import * as SplashScreen from 'expo-splash-screen';
import { presets } from './src/components/text/text.preset.js';
import Text from './src/components/text/text.js';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home.js';
import Details from './src/screens/Details.js';



const Stack = createNativeStackNavigator();



export default function App() {

  const [fontsLoaded] = useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  }, [fontsLoaded]);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.darkOrange,

    backgroundColor: colors.black
  }
});
