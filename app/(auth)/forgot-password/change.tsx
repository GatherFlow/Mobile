import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accent } from "@/components/ui/typography";
import { Link, Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

export default function ChangePasswordView() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('changePassword.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 justify-between pt-[60px] pb-10 px-8">
        <View className="gap-1">
          <View className="gap-y-4">
            <View className="gap-1">
              <Accent className="text-foreground">{t('changePassword.passwordLabel')}</Accent>
              <Input placeholder={t('changePassword.passwordPlaceholder')} variant="password" />
            </View>
            <View className="gap-1">
              <Accent className="text-foreground">{t('changePassword.confirmPasswordLabel')}</Accent>
              <Input placeholder={t('changePassword.confirmPasswordPlaceholder')} variant="password" />
            </View>
          </View>
        </View>
        <Link href="/" push asChild>
          <Button>
            <Text>{t('changePassword.changePasswordButton')}</Text>
          </Button>
        </Link>
      </View>
    </React.Fragment>
  );
}
