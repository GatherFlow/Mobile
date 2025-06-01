import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Link } from "@/core/components/ui/link";
import { useAppForm } from "@/core/components/ui/tanstack-form";
import { Default } from "@/core/components/ui/typography";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useLogin } from "../mutations/useLogin";
import { loginSchema } from "../schemas";
import { useRouter } from "expo-router";

export const LoginForm: React.FC = () => {
  const router = useRouter()

  const { t } = useTranslation()

  const { mutateAsync } = useLogin()

  const form = useAppForm({
    validators: { onSubmit: loginSchema },
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value)

      console.log('1212')
    }
  })

  const handleSubmit = React.useCallback(() => {
    form.handleSubmit()
  }, [form])

  return (
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
          <Button onPress={handleSubmit}>
            <Text>{t('login.loginButton')}</Text>
          </Button>
          <View className="flex-row justify-center items-center">
            <Default className="text-muted-foreground">{t('login.noAccount')}</Default>
            <Link href="/signup">{t('login.signUpLink')}</Link>
          </View>
        </View>
      </View>
    </form.AppForm>
  )
}
