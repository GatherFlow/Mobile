import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { RadioGroup, RadioOptionItem } from '@/core/components/ui/RadioGroup';
import { Default } from '@/core/components/ui/typography';
import i18n from '@/core/lib/i18n';

export default function Language() {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title: t('language.title'),
          headerBackTitle: t('stack.back'),
        }}
      />
      <View className="flex-1 pt-8 pb-10 px-8">
        <RadioGroup value={selectedLanguage} onValueChange={handleLanguageChange}>
          <RadioOptionItem
            label={t('language.english')}
            value="en"
            rootValue={selectedLanguage}
          />
          <RadioOptionItem
            label={t('language.ukrainian')}
            value="uk"
            rootValue={selectedLanguage}
          />
        </RadioGroup>
      </View>
    </React.Fragment>
  );
}