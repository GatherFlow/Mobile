import { View, Text } from 'react-native'
import React from 'react'
import { Accent } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router'
export default function changePassword() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('changePassword.title') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View className="gap-1">
          <View className="gap-y-4">
            <View className="gap-1">
              <Accent className="text-foreground">{t('changePassword.passwordLabel')}</Accent>
              <Input placeholder={t('changePassword.passwordPlaceholder')} variant="password" />
            </View>
            <View className="gap-1">
              <Accent className="text-foreground">{t('changePassword.confirmPasswordLabel')}</Accent>
              <Input placeholder={t('changePassword.confirmPasswordPlaceholder')} variant="password" />
            </View>
          </View>
        </View>
        <Button>
          <Text>{t('changePassword.changePasswordButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}