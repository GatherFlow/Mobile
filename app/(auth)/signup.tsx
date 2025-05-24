import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';
import { Stack, router } from 'expo-router';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { Accent, Default } from '@/components/ui/typography';
import { BACKLESS_STACK_OPTION } from '@/constants'

export default function Signup() {
  const { t } = useTranslation();

  const handleSignup = async () => {
    router.push('/verify');
  };
  
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('signup.title'), ...BACKLESS_STACK_OPTION }} /> 
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">

        <View className="gap-y-4">
          <View className="flex-row gap-x-4">
            <View className="flex-1 gap-1">
              <Accent className='text-foreground'>{t('signup.firstNameLabel')}</Accent>
              <Input placeholder={t('signup.firstNamePlaceholder')}/>
            </View>
            <View className="flex-1 gap-1">
              <Accent className='text-foreground'>{t('signup.lastNameLabel')}</Accent>
              <Input placeholder={t('signup.lastNamePlaceholder')}/>
            </View>
          </View>

          <View className="gap-1">
            <Accent className='text-foreground'>{t('signup.emailLabel')}</Accent>
            <Input placeholder={t('signup.emailPlaceholder')}/>
          </View>
          <View className="gap-1">
            <Accent className='text-foreground'>{t('signup.passwordLabel')}</Accent>
            <Input placeholder={t('signup.passwordPlaceholder')} variant='password'/>
          </View>
          <View className="gap-1">
            <Accent className='text-foreground'>{t('signup.confirmPasswordLabel')}</Accent>
            <Input placeholder={t('signup.confirmPasswordPlaceholder')} variant='password'/>
          </View>
        </View>

        <View className="gap-y-4">
          <Button onPress={handleSignup}>
            <Text>{t('signup.createAccountButton')}</Text>
          </Button>
          <View className="flex-row justify-center items-center">
            <Default className='text-muted-foreground'>{t('signup.alreadyHaveAccount')}</Default>
            <Link href="/login">{t('signup.loginLink')}</Link>
          </View>
        </View>
        
      </View>
    </React.Fragment>
  )
}