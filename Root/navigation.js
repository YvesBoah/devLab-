import React from 'react';

import {
    createAppContainer,
    createStackNavigator,
    withNavigation,
} from 'react-navigation';

import Parent from './Components/ParentComponent';
import Children from './Components/ChildrenComponent';

const App = createStackNavigator({
    parent: Parent,
    children: Children
 },
 {
    initialRouteName: "parent"
 },
 {
    headerMode: 'none',
 },
);

const AppContainer = createAppContainer(App);
export default AppContainer;