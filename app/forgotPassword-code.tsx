import { View, Text } from 'react-native'
import React from 'react'
import { BigIcon } from '@/components/ui/bigIcon'
import Lock from '@/lib/icons/lock.svg'
import { OTPInputGroup } from '@/components/ui/otpInputGroup'
import { Default } from '@/components/ui/typography'
import { Link } from '@/components/ui/link'
import { Button } from '@/components/ui/button'
import { Stack, router } from 'expo-router'
import { useTranslation } from 'react-i18next';
export default function recovery() {
	const { t } = useTranslation();
	const handleVerification = async() =>{
		router.push('/forgotPassword-change')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('forgotPasswordCode.title') }} />
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
              <Default className="text-muted-foreground">{t('forgotPasswordCode.didNotGetCode')}</Default>
              <Link>{t('forgotPasswordCode.resend')}</Link>
            </View>
          </View>
        </View>
        <Button onPress={handleVerification}>
          <Text>{t('forgotPasswordCode.verifyButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}