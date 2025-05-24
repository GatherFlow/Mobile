import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { useAppForm } from "@/core/components/ui/tanstack-form";
import { Stack, router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function forgotPassword() {
	const { t } = useTranslation()

  const form = useAppForm({
    defaultValues: {
      email: ''
    }
  })

	const handleRecovery = async() =>{
		router.push('/(auth)/forgot-password/code')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('forgotPasswordEmail.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <form.AppForm>
          <View className="flex h-full gap-y-4">
            <form.AppField name="email">
              {(field) => (
                <field.FormItem>
                  <field.FormLabel>{t('forgotPasswordEmail.emailLabel')}</field.FormLabel>
                  <field.FormControl>
                    <Input
                      keyboardType="email-address"
                      value={field.state.value}
                      onChangeText={field.handleChange}
                      onBlur={field.handleBlur}
                      placeholder={t('forgotPasswordEmail.emailPlaceholder')}
                    />
                  </field.FormControl>
                  <field.FormMessage />
                </field.FormItem>
              )}
            </form.AppField>
            <Button className="mt-auto" onPress={handleRecovery}>
              <Text>{t('forgotPasswordEmail.sendCodeButton')}</Text>
            </Button>
          </View>
        </form.AppForm>
      </View>
    </React.Fragment>
  );
}
