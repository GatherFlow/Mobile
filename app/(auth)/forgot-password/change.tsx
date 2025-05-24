import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { useAppForm } from "@/core/components/ui/tanstack-form";
import { Link, Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function ChangePasswordView() {
  const { t } = useTranslation()

  const form = useAppForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('changePassword.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <form.AppForm>
          <View className="flex gap-y-4 h-full">
            <form.AppField name="password">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('changePassword.passwordLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      placeholder={t('changePassword.passwordPlaceholder')}
                    />
                  </field.FormControl>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>
            <form.AppField name="confirmPassword">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('changePassword.confirmPasswordLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      value={field.state.value}
                      onChangeText={(text) => field.handleChange(text)}
                      onBlur={field.handleBlur}
                      placeholder={t('changePassword.confirmPasswordPlaceholder')}
                      secureTextEntry={true}
                    />
                  </field.FormControl>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>
            <Link href="/" push asChild className="mt-auto">
              <Button>
                <Text>{t('changePassword.changePasswordButton')}</Text>
              </Button>
            </Link>
          </View>
        </form.AppForm>
      </View>
    </React.Fragment>
  )
}
