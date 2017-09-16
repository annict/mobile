import { StackNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';

import { HomeScreen } from './containers/home';

export const MobileApp = StackNavigator({
  Home: { screen: HomeScreen }
});
