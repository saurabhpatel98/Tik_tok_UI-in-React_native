import * as React from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styles} from './src/style/style';
import HomeScreen from './src/components/Screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const DisplayHeader = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => alert('This is a button!')}>
        <Text style={styles.headerTitle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLeft: () => <DisplayHeader title={'Following'} />,
        headerRight: () => <DisplayHeader title={'For You'} />,
        headerTransparent: true,
        headerTitle: false,
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Discover') {
              iconName = focused ? 'search' : 'search-plus';
            } else if (route.name === 'Add') {
              iconName = focused ? 'plus-square-o' : 'plus-square';
            } else if (route.name === 'Inbox') {
              iconName = focused ? 'inbox' : 'inbox';
            } else if (route.name === 'Me') {
              iconName = focused ? 'user-o' : 'user-circle-o';
            }
            return (
              <View>
                <Icon
                  name={iconName}
                  size={25}
                  color={focused ? 'white' : 'grey'}
                />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'grey',
          style: {
            backgroundColor: 'black',
          },
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discover" component={SettingsScreen} />
        <Tab.Screen name="Add" component={HomeStackScreen} />
        <Tab.Screen name="Inbox" component={SettingsScreen} />
        <Tab.Screen name="Me" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
