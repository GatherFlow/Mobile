import React, { useState } from 'react';
import { View } from 'react-native';
import { Link, Stack, router } from 'expo-router';
import { SettingsListItem } from '@/core/components/ui/settingsListItem';
import { useTranslation } from 'react-i18next';

import { UserCircle } from '@/core/lib/icons/UserCircle';
import { AtSign } from '@/core/lib/icons/AtSign';
import { Lock } from '@/core/lib/icons/Lock';
import { Earth } from '@/core/lib/icons/Earth';
import { Podcast } from '@/core/lib/icons/Podcast';
import { LogOut } from '@/core/lib/icons/LogOut';

import { ConfirmModal } from '@/app/settings/confirmModal';

export default function Home() {
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const handleConfirmLogout = () => {
    router.replace('/onboarding');
    setModalVisible(false);
  };

  const handleCancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('homeSettings.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 pt-8 pb-10 px-8 gap-y-3">
        <Link href="/settings/profile" push asChild>
          <SettingsListItem
            icon={<UserCircle size={22} className="text-foreground" />}
            label={t('homeSettings.profileLabel')}
          />
        </Link>

        <Link href="/settings/account" push asChild>
          <SettingsListItem
            icon={<AtSign size={22} className="text-foreground" />}
            label={t('homeSettings.accountLabel')}
          />
        </Link>

        <Link href="/settings/privacy" push asChild>
          <SettingsListItem
            icon={<Lock size={22} className="text-foreground" />}
            label={t('homeSettings.privacyLabel')}
          />
        </Link>

        <Link href="/settings/language" push asChild>
          <SettingsListItem
            icon={<Earth size={22} className="text-foreground" />}
            label={t('homeSettings.languageLabel')}
          />
        </Link>

        <Link href="/settings/subscription" push asChild>
          <SettingsListItem
            icon={<Podcast size={22} className="text-foreground" />}
            label={t('homeSettings.subscriptionLabel')}
          />
        </Link>
        <SettingsListItem
          icon={
            <View className="-scale-x-100">
              <LogOut size={22} className="text-foreground" />
            </View>
          }
          label={t('homeSettings.logoutLabel')}
          onPress={handleLogoutPress}
        />

        <ConfirmModal
          visible={modalVisible}
          onClose={handleCancelLogout}
          onConfirm={handleConfirmLogout}
          message={t('confirmModal.message')}
        />
      </View>
    </React.Fragment>
  );
}