import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Link as ALink } from '@/components/ui/link'
import { Button } from '@/components/ui/button'
import { Accent, Default } from '@/components/ui/typography'
import { Link, Stack, router } from 'expo-router'
import { useTranslation } from 'react-i18next';

export default function login() {
	const { t } = useTranslation();
	const handlePasswordRecovery = async() => {
		router.push('/forgotPassword-email')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('login.title'), headerLeft: () => null, headerBackVisible: false}} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View className="gap-1">
          <View className="gap-y-4">
            <View className="gap-1">
              <Accent className="text-foreground">{t('login.emailLabel')}</Accent>
              <Input placeholder={t('login.emailPlaceholder')} keyboardType="email-address" />
            </View>
            <View className="gap-1">
              <Accent className="text-foreground">{t('login.passwordLabel')}</Accent>
              <Input placeholder={t('login.passwordPlaceholder')} variant="password" />
            </View>
          </View>
          <View className="items-end">
            <ALink onPress={handlePasswordRecovery}>{t('login.forgotPasswordLink')}</ALink>
          </View>
        </View>
        <View className="gap-y-4">
          <Link href="/" push asChild>
            <Button>
              <Text>{t('login.loginButton')}</Text>
            </Button>
          </Link>
          <View className="flex-row justify-center items-center">
            <Default className="text-muted-foreground">{t('login.noAccount')}</Default>
            <Link href={'/signup'}>{t('login.signUpLink')}</Link>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}