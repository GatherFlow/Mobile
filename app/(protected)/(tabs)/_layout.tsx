import '@/global.css';

import { Link, Redirect, Tabs } from "expo-router";
import { Home } from '@/core/lib/icons/Home'
import { DiamondPlus } from '@/core/lib/icons/DiamondPlus'
import { CircleUser } from '@/core/lib/icons/CircleUser'
import { Plus } from '@/core/lib/icons/Plus'
import { Bell } from '@/core/lib/icons/Bell';
import { AlignJustify } from '@/core/lib/icons/AlignJustify';
import { useTranslation } from "react-i18next";
import { useColorScheme } from "@/core/lib/useColorScheme";
import TabBar from '@/core/components/ui/TabBar';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/core/components/ui/button';
import { useAuthStore } from '@/core/stores';

export default function TabsLayout() {
  const { t } = useTranslation()
  const { isDarkColorScheme } = useColorScheme()

  const getInactiveTintColor = () => {
    return isDarkColorScheme ? '#fff' : '#000'
  }

  const isAuthorized = useAuthStore((select) => select.isAuthorized)

  if (!isAuthorized) {
    return <Redirect href="/onboarding" />
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
          ),
          headerRight: () => (
            <Link href="/create-event" push asChild>
              <Button variant="ghost" size="icon" className='mr-10'>
                <Plus size={22} />
              </Button>
            </Link>
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: t('tabs.profile'),
          tabBarIcon: ({ color, size }) => (
            <CircleUser color={color} size={size}  />
          ),
          headerTitleAlign: 'center',
          headerTitleStyle: {},
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
              }}
              className='ml-10'
            >
              <Bell className="text-foreground" size={22} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                router.push('/settings/home');
              }}
              className='mr-10'
            >
              <AlignJustify className="text-foreground" size={22} />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
