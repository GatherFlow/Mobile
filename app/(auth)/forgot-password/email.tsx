import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accent } from "@/components/ui/typography";
import { Stack, router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

export default function forgotPassword() {
	const { t } = useTranslation()

	const handleRecovery = async() =>{
		router.push('/(auth)/forgot-password/code')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('forgotPasswordEmail.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View className="gap-1">
          <Accent className="text-foreground">{t('forgotPasswordEmail.emailLabel')}</Accent>
          <Input placeholder={t('forgotPasswordEmail.emailPlaceholder')} keyboardType="email-address" />
        </View>
        <Button onPress={handleRecovery}>
          <Text>{t('forgotPasswordEmail.sendCodeButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}
