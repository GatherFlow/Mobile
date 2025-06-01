import { Button } from '@/core/components/ui/button';
import { Text } from '@/core/components/ui/text';
import i18n from '@/core/lib/i18n';
import { useLogout } from '@/features/auth/mutations/useLogout';
import { Link } from 'expo-router';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export default function HomeScreen() {
  const { t } = useTranslation()

  const { mutate } = useLogout()

  return (
    <View className='flex flex-col pt-5 px-8 gap-4'>
      <Link href="/onboarding" push asChild>
        <Button>
          <Text>{i18n.language}</Text>
        </Button>
      </Link>
      <Button variant="outline" onPress={() => mutate()}>
        <Text>{t('example.change-language')}</Text>
      </Button>
    </View>
  );
}
