import { Button } from "@/components/ui/button";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import Logo from '@/assets/logo.svg'
import { useTranslation } from "react-i18next";
import { Input } from "@/components/ui/input";

export default function OnboardingScreen() {
  const { t } = useTranslation()

  return (
    <React.Fragment>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex flex-col items-center justify-between h-full pt-[90px] pb-10 px-8">
        <View className="flex flex-col pt-20 gap-5 items-center">
          <Logo width={215} height={215} />
          <View className="flex flex-col items-center gap-1">
            <Text className="text-3xl font-bold text-foreground">GatherFlow</Text>
            <Text className="text-base text-foreground">Plan. Gather. Flow</Text>
          </View>
        </View>

        <View className="flex flex-col w-full gap-5">
          <Link href="/signup" push asChild>
            <Button variant="default">
              <Text>{t('onboarding.sign-up')}</Text>
            </Button>
          </Link>
          <Link href="/" asChild>
            <Button variant="outline">
              <Text className="text-foreground">{t('onboarding.continue-with-google')}</Text>
            </Button>
          </Link>
          <Link href="/(auth)/login" push asChild>
            <Button variant="ghost">
              <Text className="text-foreground">{t('onboarding.login')}</Text>
            </Button>
          </Link>
        </View>
      </View>
    </React.Fragment>
  )
}