import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import MenuScreen from '../screens/menu/MenuScreen';
import ProductCard from '../screens/product-card/ProductCard';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  Menu: MenuScreen,
  ProductCard: ProductCard
}));
