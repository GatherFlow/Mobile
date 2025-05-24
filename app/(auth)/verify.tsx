import { View, Text } from 'react-native'
import React from 'react'
import { BigIcon } from '@/components/ui/bigIcon'
import { OTPInputGroup } from '@/components/ui/otpInputGroup'
import { Link } from '@/components/ui/link'
import { Button } from '@/components/ui/button'
import Lock from '@/lib/icons/lock.svg';
import { Default } from '@/components/ui/typography'
import { Stack, router } from 'expo-router'
import { useTranslation } from 'react-i18next';
import { BACKLESS_STACK_OPTION } from '@/constants'

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
              <Link>{t('verify.resend')}</Link>
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