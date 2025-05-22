import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Home } from '../../lib/icons/Home'; 
import { DiamondPlus } from '../../lib/icons/DiamondPlus'; 
import { CircleUser } from '../../lib/icons/CircleUser';
import { SvgProps } from 'react-native-svg';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
    const { colors } = useTheme();

    type RouteName = 'index' | 'flow' | 'profile';

    const icons: Record<'index' | 'flow' | 'profile', (props: SvgProps) => React.ReactElement> = { 

      index: (props: SvgProps) => (
        <Home className="text-foreground" size={30} strokeWidth={1.25} {...props} />
      ),
      flow: (props: SvgProps) => (
        <DiamondPlus className="text-foreground" size={30} strokeWidth={1.25} {...props} />
      ),
      profile: (props: SvgProps) => (
        <CircleUser className="text-foreground" size={30} strokeWidth={1.25} {...props} />
      ),
    };
    
      

    return (
        <View className="h-[60px] rounded-[16px] bottom-10 left-0 right-0 flex-row justify-center items-center border border-input shadow-sm shadow-black/15 mx-8 gap-x-10">
        {state.routes.map((route, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true, 
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const Icon = icons[route.name as RouteName];

          return (
            <TouchableOpacity
              key={route.key}
              className="flex justify-center items-center"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              style={{ flex: 1 }}
            >
              
              <Icon className={isFocused ? 'text-primary' : 'text-muted-foreground'} />
              <Text className={`text-center font-medium text-xs ${isFocused ? 'text-primary' : 'text-muted-foreground'}`}>
                {typeof label === 'function' 
                  ? label({ focused: isFocused, color: isFocused ? colors.primary : colors.text, position: 'below-icon', children: route.name })
                  : label
                }
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

export default TabBar