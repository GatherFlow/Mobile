import { View, Text } from 'react-native'
import React from 'react'
import { MenuTitle } from '@/core/components/ui/typography'
import { SettingsListItem } from '@/core/components/ui/settingsListItem'
import { useTranslation } from 'react-i18next';

export default function account() {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <View className="flex-1 pt-8 pb-10 px-8">
        <View className="gap-8">
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              {t('accountSettings.credentialsTitle')}
            </MenuTitle>
            <View className="gap-3">
              <SettingsListItem label={t('accountSettings.emailLabel')} value={'john**ler@gmail.com'} />
              <SettingsListItem label={t('accountSettings.passwordLabel')} value={t('accountSettings.editPasswordValue')} />
            </View>
          </View>
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              {t('accountSettings.linksTitle')}
            </MenuTitle>
            <SettingsListItem label={t('accountSettings.googleLabel')} value={t('accountSettings.addGoogleAccountValue')} />
          </View>
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              {t('accountSettings.paymentsTitle')}
            </MenuTitle>
            <SettingsListItem label={t('accountSettings.cardLabel')} value={t('accountSettings.addCreditCardValue')} />
          </View>

        </View>


      </View>
    </React.Fragment>
  )
}