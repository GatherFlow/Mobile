import { BigIcon } from "@/core/components/ui/bigIcon";
import { BACKLESS_STACK_OPTION } from "@/core/constants";
import { Stack, router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import Lock from '@/core/lib/icons/lock.svg'
import { OTPInputGroup } from "@/core/components/ui/otpInputGroup";
import { Default } from "@/core/components/ui/typography";
import { Link, linkTextVariants } from "@/core/components/ui/link";
import { Button } from "@/core/components/ui/button";

export default function recovery() {
	const { t } = useTranslation();
  
	const handleVerification = async() =>{
		router.push('/(auth)/forgot-password/change')
	}

	return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('forgotPasswordCode.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View>
          <View className="items-center pb-8">
            <BigIcon>
              <Lock />
            </BigIcon>
          </View>
          <View className="items-center gap-y-4">
            <OTPInputGroup />
            <View className="flex-row justify-center items-center">
              <Default className="text-muted-foreground">{t('forgotPasswordCode.didNotGetCode')}</Default>
              <Text className={linkTextVariants()}>{t('forgotPasswordCode.resend')}</Text>
            </View>
          </View>
        </View>
        <Button onPress={handleVerification}>
          <Text>{t('forgotPasswordCode.verifyButton')}</Text>
        </Button>
      </View>
    </React.Fragment>
  );
}