import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import i18n from '@/lib/i18n';
import { changeLanguage } from '@/lib/i18n/utils';
import { Link } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function HomeScreen() {
  const { t } = useTranslation()

  return (
    <View className='flex flex-col pt-5 px-8 gap-4'>
      <Link href="/onboarding" push asChild>
        <Button>
          <Text>{i18n.language}</Text>
        </Button>
      </Link>
      <Button variant="outline" onPress={() => i18n.changeLanguage( i18n.language === 'en' ? 'uk' : 'en')}>
        <Text>{t('example.change-language')}</Text>
      </Button>
    </View>
  );
}
