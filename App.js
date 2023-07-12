import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Fridge from './screens/FridgeScreen';
import Recipe from './screens/RecipeScreen';
import MyPage from './screens/MyPageScreen';
import AddItem from './screens/AddItemScreen.js';
import AddItemDetails from './screens/AddItemDetails';
import SelectIngredient from './screens/SelectIngredient';
import IngredientDetail from './screens/IngredientDetail';
import { Button } from '@react-native-material/core';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="냉장고" component={Fridge} />
      <Tab.Screen name="레시피북" component={Recipe} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#46B3B3'},
          headerTintColor: '#fff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'REFIPE'}}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{title: '새로운 식재료 추가'}}
        />
        <Stack.Screen
          name="AddItemDetails"
          component={AddItemDetails}
          options={{title: '새로운 식재료 추가'}}
        />
        <Stack.Screen
          name="SelectIngredient"
          component={SelectIngredient}
          options={{title: '식재료 고르기'}}
        />
        <Stack.Screen
          name="IngredientDetail"
          component={IngredientDetail}
          options={{title: '식재료 상세정보'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
