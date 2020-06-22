import * as React from 'react';
import { View } from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  ContainerTab,
  ContainerItem,
  TabItemIcon,
  TabItemContainer,
} from './styles';
import { HomeTab } from '../../pages/App/Home';
import { SettingTab } from '../../pages/App/Settings';
import { CalendarTab } from '../../pages/App/CalendarTab';
import { ChartTab } from '../../pages/App/ChartTab';
import { StoreTab } from '../../pages/App/Store';

interface IProps extends BottomTabBarProps {
  optionsProps?: [string];
}

function MyTabBar({
  state,
  descriptors,
  navigation,
  ...props
}: IProps): JSX.Element {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return <View />;
  }

  props.activeBackgroundColor = 'red';

  return (
    <ContainerTab>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <ContainerItem
            key={route.key}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onPress}
          >
            <TabItemContainer>
              <TabItemIcon active={isFocused} name={route.name} />
            </TabItemContainer>
          </ContainerItem>
        );
      })}
    </ContainerTab>
  );
}

const RootTabNavigator = createBottomTabNavigator();

export const TabsPage = (): JSX.Element => (
  <RootTabNavigator.Navigator
    initialRouteName="home-outline"
    tabBar={(props) => <MyTabBar {...props} />}
  >
    <RootTabNavigator.Screen name={'store'} component={StoreTab} />
    <RootTabNavigator.Screen
      name={'calendar-multiselect'}
      component={CalendarTab}
    />
    <RootTabNavigator.Screen name={'home-outline'} component={HomeTab} />

    <RootTabNavigator.Screen
      name={'chart-line'}
      component={ChartTab}
    />
    <RootTabNavigator.Screen name={'settings-outline'} component={SettingTab} />
  </RootTabNavigator.Navigator>
);
