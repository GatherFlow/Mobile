import { BigIcon } from '@/components/ui/bigIcon'
import { Button } from '@/components/ui/button'
import { linkTextVariants } from '@/components/ui/link'
import { OTPInputGroup } from '@/components/ui/otpInputGroup'
import { Default } from '@/components/ui/typography'
import Lock from '@/lib/icons/lock.svg'
import { Stack, router } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

export default function Verify() {
	const { t } = useTranslation();

	const handleVerification = async() => {
		router.push('/login');
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('verify.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View>
          <View className="items-center pb-8">
            <BigIcon>
              <Lock />
            </BigIcon>
          </View>
          <View className="items-center gap-y-4">
            <OTPInputGroup />
            <View className="flex-row justify-center items-center">
              <Default className="text-muted-foreground">{t('verify.didNotGetCode')}</Default>
              <Text className={linkTextVariants()}>{t('verify.resend')}</Text>
            </View>
          </View>
        </View>
        <Button onPress={handleVerification}>
          <Text>{t('verify.verifyButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}