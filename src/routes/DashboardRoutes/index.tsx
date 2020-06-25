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
  IsItemActive,
} from './styles';
import { HomeTab } from '../../pages/App/Home';
import { SettingTab } from '../../pages/App/Settings';
import { CalendarTab } from '../../pages/App/CalendarTab';
import { ChartTab } from '../../pages/App/ChartTab';
import { StoreTab } from '../../pages/App/Store';

interface IProps extends BottomTabBarProps {
  optionsProps?: [string];
}

function MyTabBar({ state, descriptors, navigation }: IProps): JSX.Element {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return <View />;
  }

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
              {isFocused && <IsItemActive />}
            </TabItemContainer>
          </ContainerItem>
        );
      })}
    </ContainerTab>
  );
}

const TabBarBottom = createBottomTabNavigator();

export const DashboardRoutes = (): JSX.Element => (
  <TabBarBottom.Navigator
    initialRouteName="home-outline"
    tabBar={(props) => <MyTabBar {...props} />}
  >
    <TabBarBottom.Screen name={'store'} component={StoreTab} />
    <TabBarBottom.Screen
      name={'calendar-multiselect'}
      component={CalendarTab}
    />
    <TabBarBottom.Screen name={'home-outline'} component={HomeTab} />

    <TabBarBottom.Screen name={'chart-line'} component={ChartTab} />
    <TabBarBottom.Screen name={'settings-outline'} component={SettingTab} />
  </TabBarBottom.Navigator>
);
