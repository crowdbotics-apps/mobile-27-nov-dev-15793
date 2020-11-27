import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen315066Navigator from '../features/BlankScreen315066/navigator';
import CopyOfCopyOfBlankScreen015065Navigator from '../features/CopyOfCopyOfBlankScreen015065/navigator';
import CopyOfBlankScreen015064Navigator from '../features/CopyOfBlankScreen015064/navigator';
import BlankScreen015063Navigator from '../features/BlankScreen015063/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen315066: { screen: BlankScreen315066Navigator },
CopyOfCopyOfBlankScreen015065: { screen: CopyOfCopyOfBlankScreen015065Navigator },
CopyOfBlankScreen015064: { screen: CopyOfBlankScreen015064Navigator },
BlankScreen015063: { screen: BlankScreen015063Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
