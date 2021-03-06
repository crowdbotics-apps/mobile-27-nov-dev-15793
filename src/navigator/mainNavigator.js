import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen115071Navigator from '../features/CopyOfBlankScreen115071/navigator';
import CopyOfBlankScreen315067Navigator from '../features/CopyOfBlankScreen315067/navigator';
import BlankScreen315066Navigator from '../features/BlankScreen315066/navigator';
import CopyOfCopyOfBlankScreen015065Navigator from '../features/CopyOfCopyOfBlankScreen015065/navigator';
import CopyOfBlankScreen015064Navigator from '../features/CopyOfBlankScreen015064/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen115071: { screen: CopyOfBlankScreen115071Navigator },
CopyOfBlankScreen315067: { screen: CopyOfBlankScreen315067Navigator },
BlankScreen315066: { screen: BlankScreen315066Navigator },
CopyOfCopyOfBlankScreen015065: { screen: CopyOfCopyOfBlankScreen015065Navigator },
CopyOfBlankScreen015064: { screen: CopyOfBlankScreen015064Navigator },

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
