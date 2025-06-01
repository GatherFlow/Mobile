import { BACKLESS_STACK_OPTION } from '@/core/constants';
import { SignupForm } from '@/features/auth/components/signup-form';
import { Stack, router } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function Signup() {
  const { t } = useTranslation();

  const handleSignup = async () => {
    router.push('/verify');
  };
  
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('signup.title'), ...BACKLESS_STACK_OPTION }} /> 
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <SignupForm />
      </View>
    </React.Fragment>
  )
}