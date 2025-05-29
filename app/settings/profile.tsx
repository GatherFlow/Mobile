import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { BigIcon } from '@/core/components/ui/bigIcon';
import { Default } from '@/core/components/ui/typography';
import { SettingsListItem } from '@/core/components/ui/settingsListItem';

export default function Profile() {
  return (
    <React.Fragment>
      <View className="flex-1 pt-8 pb-10 px-8">
        <View className="items-center">
          <BigIcon />
          <Default className="text-muted-foreground mt-2">
            Edit photo
          </Default>
        </View>

        <View className="gap-y-2 mt-8">
          <SettingsListItem
            label="First name"
            value={'John'}
          />
          <SettingsListItem
            label="Last name"
            value={'Doe'}
          />
          <SettingsListItem
            label="Date of birth"
            value={'Set date'}
          />
          <SettingsListItem
            label="Username"
            value={'@sadfsadf'}
          />
          <SettingsListItem
            label="Bio"
            value={'Add bio'}
          />
          <SettingsListItem
            label="Links"
            value={'Add link'}
          />
        </View>
      </View>
    </React.Fragment>
  );
}