import { View, Text } from 'react-native'
import React from 'react'
import { Accent } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Stack, router } from 'expo-router'
import { useTranslation } from 'react-i18next';
export default function forgotPassword() {
	const { t } = useTranslation();
	const handleRecovery = async() =>{
		router.push('/forgotPassword-code')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('forgotPasswordEmail.title') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View className="gap-1">
          <Accent className="text-foreground">{t('forgotPasswordEmail.emailLabel')}</Accent>
          <Input placeholder={t('forgotPasswordEmail.emailPlaceholder')} keyboardType="email-address" />
        </View>
        <Button onPress={handleRecovery}>
          <Text>{t('forgotPasswordEmail.sendCodeButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}