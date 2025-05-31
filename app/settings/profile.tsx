import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { BigIcon } from '@/core/components/ui/bigIcon';
import { Default } from '@/core/components/ui/typography';
import { SettingsListItem } from '@/core/components/ui/settingsListItem';
import { useTranslation } from 'react-i18next';
import { Stack } from 'expo-router';

export default function Profile() {
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('profilePage.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 pt-8 pb-10 px-8">
        <View className="items-center">
          <BigIcon />
          <Default className="text-muted-foreground mt-2">
            {t('profilePage.editPhotoLabel')}
          </Default>
        </View>

        <View className="gap-y-2 mt-8">
          <SettingsListItem
            label={t('profilePage.firstNameLabel')}
            value={'John'}
          />
          <SettingsListItem
            label={t('profilePage.lastNameLabel')}
            value={'Doe'}
          />
          <SettingsListItem
            label={t('profilePage.dateOfBirthLabel')}
            value={t('profilePage.setDateValue')}
          />
          <SettingsListItem
            label={t('profilePage.usernameLabel')}
            value={'@sadfsadf'}
          />
          <SettingsListItem
            label={t('profilePage.bioLabel')}
            value={t('profilePage.addBioValue')}
          />
          <SettingsListItem
            label={t('profilePage.linksLabel')}
            value={t('profilePage.addLinkValue')}
          />
        </View>
      </View>
    </React.Fragment>
  );
}