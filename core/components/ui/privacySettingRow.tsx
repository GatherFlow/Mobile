import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '@/core/lib/utils';
import { Default } from '@/core/components/ui/typography';
import { Switch } from '@/core/components/ui/Switch';

interface PrivacySettingRowProps {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const PrivacySettingRow: React.FC<PrivacySettingRowProps> = ({ title, description, value, onValueChange }) => (
  <View
    className={cn(
      'flex-row items-start justify-between p-[10px] border border-input bg-background h-[86px] rounded-[10px] shadow-sm relative',
      'mb-3'
    )}
  >
    <View className="flex-1 pr-[55px] gap-2">
      <Text className="text-[16px] font-medium text-foreground">
        {title}
      </Text>
      <Default className="text-sm text-muted-foreground max-w-[230px]">
        {description}
      </Default>
    </View>
    <Switch
      checked={value}
      onCheckedChange={onValueChange}
      className="absolute top-[10px] right-[10px]"
    />
  </View>
);

export { PrivacySettingRow, PrivacySettingRowProps };