import { Button } from "@/components/ui/button";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import Logo from '@/assets/logo.svg'
import { useTranslation } from "react-i18next";

export default function OnboardingScreen() {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex flex-col items-center justify-between h-full pt-[90px] pb-10 px-8">
        <View className="flex flex-col pt-20 gap-5 items-center">
          <Logo width={215} height={215} />
          <Text className="text-3xl font-bold text-foreground">GatherFlow</Text>
          <Text className="text-base text-foreground">Plan. Gather. Flow</Text>
        </View>
        <View className="flex flex-col w-full gap-5">
          <Link href="/(tabs)" push asChild>
            <Button variant="default">
              <Text>{t('onboarding.sign-up')}</Text>
            </Button>
          </Link>
          <Button variant="outline">
            <Text>{t('onboarding.continue-with-google')}</Text>
          </Button>
          <Button variant="ghost">
            <Text>{t('onboarding.login')}</Text>
          </Button>
        </View>
      </View>
    </React.Fragment>
  )
}