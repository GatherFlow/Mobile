import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { PrivacySettingRow } from '@/core/components/ui/privacySettingRow'; 


export default function Privacy() {
  const { t } = useTranslation();

  const [privateProfile, setPrivateProfile] = useState(false);
  const [hideOwnedTickets, setHideOwnedTickets] = useState(false);
  const [hidePurchasedTickets, setHidePurchasedTickets] = useState(true);
  const [hideAppreciatedTickets, setHideAppreciatedTickets] = useState(true);

  return (
    <React.Fragment>
      <Stack.Screen options={{ title: t('privacy.title'), headerBackTitle: t('stack.back') }} />
      <View className="flex-1 pt-8 pb-10 px-8">
        <View className="gap-y-3">
          <PrivacySettingRow
            title={t('privacy.privateProfileTitle')}
            description={t('privacy.privateProfileDescription')}
            value={privateProfile}
            onValueChange={setPrivateProfile}
          />

          <PrivacySettingRow
            title={t('privacy.hideOwnedTicketsTitle')}
            description={t('privacy.hideOwnedTicketsDescription')}
            value={hideOwnedTickets}
            onValueChange={setHideOwnedTickets}
          />

          <PrivacySettingRow
            title={t('privacy.hidePurchasedTicketsTitle')}
            description={t('privacy.hidePurchasedTicketsDescription')}
            value={hidePurchasedTickets}
            onValueChange={setHidePurchasedTickets}
          />

          <PrivacySettingRow
            title={t('privacy.hideAppreciatedTicketsTitle')}
            description={t('privacy.hideAppreciatedTicketsDescription')}
            value={hideAppreciatedTickets}
            onValueChange={setHideAppreciatedTickets}
          />
        </View>
      </View>
    </React.Fragment>
  );
}