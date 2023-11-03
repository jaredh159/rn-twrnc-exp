import { useDeviceContext, useAppColorScheme } from 'twrnc';
import tw from 'twrnc';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './screens/About';
import Home from './screens/Home';
import Layout from './components/Layout';

const Stack = createNativeStackNavigator();

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  const [, toggleColorScheme] = useAppColorScheme(tw);

  return (
    <Layout>
      <TouchableOpacity onPress={toggleColorScheme}>
        <Text
          style={tw`bg-gray-200 dark:bg-gray-900 text-black dark:text-white
                capitalize p-2 mt-24 text-center`}
        >
          toggle theme
        </Text>
      </TouchableOpacity>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <TouchableOpacity onPress={toggleColorScheme}>
                <Text
                  style={tw`bg-gray-200 dark:bg-gray-900 text-black dark:text-white
                capitalize p-2 rounded`}
                >
                  toggle theme
                </Text>
              </TouchableOpacity>
            ),
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Layout>
  );
}
