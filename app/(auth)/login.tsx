import { BACKLESS_STACK_OPTION } from '@/core/constants'
import { LoginForm } from '@/features/auth/components/login-form'
import { Stack } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'

export default function LoginView() {
  const { t } = useTranslation()

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('login.title'), ...BACKLESS_STACK_OPTION }} />
      <View className="flex-1 pt-[60px] pb-10 px-8">
        <LoginForm />
      </View>
    </React.Fragment>
  );
}