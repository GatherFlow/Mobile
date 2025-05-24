import { Button } from '@/core/components/ui/button'
import { Input } from '@/core/components/ui/input'
import { Link } from '@/core/components/ui/link'
import { useAppForm } from '@/core/components/ui/tanstack-form'
import { Default } from '@/core/components/ui/typography'
import { BACKLESS_STACK_OPTION } from '@/core/constants'
import { Link as ExpoLink, Stack } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'

export default function LoginView() {
	const { t } = useTranslation()

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('login.title'), ...BACKLESS_STACK_OPTION }} />
      <View className="flex-1 pt-[60px] pb-10 px-8">
        <form.AppForm>
          <View className='flex flex-col h-full gap-y-4'>
            <form.AppField name="email">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('login.emailLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="email-address"
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('login.emailPlaceholder')}
                      autoComplete="email"
                    />
                  </field.FormControl>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>
            <form.AppField name="password">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('login.passwordLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="visible-password"
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('login.passwordPlaceholder')}
                      secureTextEntry={true}
                    />
                  </field.FormControl>
                  <View className="items-end">
                    <Link href="/(auth)/forgot-password/email">{t('login.forgotPasswordLink')}</Link>
                  </View>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>

            <View className="gap-y-4 mt-auto">
              <ExpoLink href="/" push asChild>
                <Button>
                  <Text>{t('login.loginButton')}</Text>
                </Button>
              </ExpoLink>
              <View className="flex-row justify-center items-center">
                <Default className="text-muted-foreground">{t('login.noAccount')}</Default>
                <Link href="/signup">{t('login.signUpLink')}</Link>
              </View>
            </View>
          </View>
        </form.AppForm>
      </View>
    </React.Fragment>
  );
}