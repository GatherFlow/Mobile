import '@/global.css';

import { Tabs } from "expo-router";
import { Home } from '@/core/lib/icons/Home'
import { DiamondPlus } from '@/core/lib/icons/DiamondPlus'
import { CircleUser } from '@/core/lib/icons/CircleUser'
import { useTranslation } from "react-i18next";
import { useColorScheme } from "@/core/lib/useColorScheme";
import TabBar from '@/core/components/ui/TabBar';

export default function TabsLayout() {
  const { t } = useTranslation()
  const { isDarkColorScheme } = useColorScheme()

  const getInactiveTintColor = () => {
    return isDarkColorScheme ? '#fff' : '#000'
  }

  return (
    <Tabs
    tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: '#ffd06b',
        tabBarInactiveTintColor: getInactiveTintColor(),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.home'),
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="flow"
        options={{
          title: t('tabs.flow'),
          tabBarIcon: ({ color, size }) => (
            <DiamondPlus color={color} size={size} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color, size }) => (
            <CircleUser color={color} size={size}  />
          )
        }}
      />
    </Tabs>
  );
}
