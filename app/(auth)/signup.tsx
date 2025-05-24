import { Button } from '@/core/components/ui/button';
import { Input } from '@/core/components/ui/input';
import { Link } from '@/core/components/ui/link';
import { useAppForm } from '@/core/components/ui/tanstack-form';
import { Default } from '@/core/components/ui/typography';
import { BACKLESS_STACK_OPTION } from '@/core/constants';
import { Stack, router } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function Signup() {
  const { t } = useTranslation();

  const form = useAppForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const handleSignup = async () => {
    router.push('/verify');
  };
  
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('signup.title'), ...BACKLESS_STACK_OPTION }} /> 
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <form.AppForm>
          <View className='flex flex-col h-full gap-y-4'>
            <View className='flex-row gap-x-4'>
              <form.AppField name='firstName'>
                {(field) => (
                  <field.FormItem className='w-1/2'>
                    <field.FormLabel>{t('signup.firstNameLabel')}</field.FormLabel>
                    <field.FormControl>
                        <Input
                          keyboardType="default"
                          value={field.state.value}
                          onChangeText={(text) => field.handleChange(text)}
                          onBlur={field.handleBlur}
                          placeholder={t('signup.firstNamePlaceholder')}
                        />
                    </field.FormControl>
                  </field.FormItem>
                )}
              </form.AppField>
              <form.AppField name='lastName'>
                {(field) => (
                  <field.FormItem className='w-1/2'>
                    <field.FormLabel>{t('signup.lastNameLabel')}</field.FormLabel>
                    <field.FormControl>
                        <Input
                          keyboardType="default"
                          value={field.state.value}
                          onChangeText={(text) => field.handleChange(text)}
                          onBlur={field.handleBlur}
                          placeholder={t('signup.lastNamePlaceholder')}
                        />
                    </field.FormControl>
                  </field.FormItem>
                )}
              </form.AppField>
            </View>
            <form.AppField name="email">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('signup.emailLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="email-address"
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('signup.emailPlaceholder')}
                    />
                  </field.FormControl>
                </field.FormItem>
              )}
            </form.AppField>
            <form.AppField name="password">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('signup.passwordLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="visible-password"
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('signup.passwordPlaceholder')}
                    />
                  </field.FormControl>
                </field.FormItem>
              )}
            </form.AppField>
            <form.AppField name="confirmPassword">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('signup.emailLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="email-address"
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('signup.emailPlaceholder')}
                    />
                  </field.FormControl>
                </field.FormItem>
              )}
            </form.AppField>
            <View className="gap-y-4 mt-auto">
              <Button onPress={handleSignup}>
                <Text>{t('signup.createAccountButton')}</Text>
              </Button>
              <View className="flex-row justify-center items-center">
                <Default className='text-muted-foreground'>{t('signup.alreadyHaveAccount')}</Default>
                <Link href="/login">{t('signup.loginLink')}</Link>
              </View>
            </View>
          </View>
        </form.AppForm>
      </View>
    </React.Fragment>
  )
}