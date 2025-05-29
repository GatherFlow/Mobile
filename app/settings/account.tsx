import { View, Text } from 'react-native'
import React from 'react'
import { MenuTitle } from '@/core/components/ui/typography'
import { SettingsListItem } from '@/core/components/ui/settingsListItem'

export default function account() {
  return (
    <React.Fragment>
      <View className="flex-1 pt-8 pb-10 px-8">
        <View className="gap-8">
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              Credentials
            </MenuTitle>
            <View className="gap-3">
              <SettingsListItem label="Email" value={'john**ler@gmail.com'} />
              <SettingsListItem label="Password" value={'Edit password'} />
            </View>
          </View>
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              Links
            </MenuTitle>
            <SettingsListItem label="Google" value={'Add Google account'} />
          </View>
          <View className="gap-4">
            <MenuTitle className="text-foreground">
              Payments
            </MenuTitle>
            <SettingsListItem label="Card" value={'Add credit card'} />
          </View>

        </View>


      </View>
    </React.Fragment>
  )
}