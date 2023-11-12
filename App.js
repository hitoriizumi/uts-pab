import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./screens/home";
import Form from "./screens/form";
import Profile from "./screens/profile";
import ForYou from "./screens/for-you";
import Detail from "./screens/detail";
import Faq from "./screens/faq";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "For You":
              iconName = "business-outline";
              break;
            case "Form":
              iconName = "reader-outline";
              break;
            case "Faq":
              iconName = "information-circle-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={20}
              color={"white"}
            />
          );
        },
        tabBarIconStyle: { marginVertical: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: 'rgb(255,9,61)',
          paddingHorizontal: 10,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={"white"} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="For You" component={ForYou} options={noHead} />
      <Tab.Screen name="Form" component={Form} options={noHead} />
      <Tab.Screen name="Faq" component={Faq} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="Detail" component={Detail} options={noHead} />
          <Stack.Screen name="For You" component={ForYou} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;