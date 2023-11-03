/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Jan 15 2022 17:37:34 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2022 and beyond
*/

import { View, Button, Text } from 'react-native';
import tw from 'twrnc';

const Home = ({ navigation }) => {
  const handleNavigation = () => navigation.navigate(`About`);

  return (
    <View style={tw`flex-1 dark:bg-gray-900`}>
      <Text
        style={tw`m-auto text-center text-black
        dark:text-white`}
      >
        Home Screen
      </Text>
      <Button title="Go to About" onPress={handleNavigation} />
    </View>
  );
};

export default Home;
