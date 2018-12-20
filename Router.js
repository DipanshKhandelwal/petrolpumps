import { createStackNavigator, createAppContainer } from 'react-navigation';
import App from './App';
import PumpsList from './PumpsList';

const Router = createStackNavigator(
  {
    App: { screen: App},
    PumpsList: { screen: PumpsList},
  },
  {
    initialRouteName: 'App',
    navigationOptions: {
      header: null
    }
  }
  );

export default createAppContainer(Router);
