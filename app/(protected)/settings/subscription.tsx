import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { RadioGroup, RadioOptionItem } from '@/core/components/ui/RadioGroup';
import { Accent, Default } from '@/core/components/ui/typography';

export default function Subscription() {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState('free');

  const handlePlanChange = (newPlan: string) => {
    setSelectedPlan(newPlan);
  };

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title: t('subscription.title'),
          headerBackTitle: t('stack.back'),
        }}
      />
      <View className="flex-1 pt-8 pb-10 px-8">
        <RadioGroup value={selectedPlan} onValueChange={handlePlanChange}>
          <RadioOptionItem
            label={t('subscription.freePlanTitle')}
            value="free"
            rootValue={selectedPlan}
            position="topRight"
          >
            <Accent className="text-foreground mt-1">$0.00</Accent>
            <Default className="text-sm text-muted-foreground mt-1">{t('subscription.freePlanDescription')}</Default>
          </RadioOptionItem>

          <RadioOptionItem
            label={t('subscription.advancedPlanTitle')}
            value="advanced"
            rootValue={selectedPlan}
            position="topRight"
          >
            <Accent className="text-foreground mt-1">$2.99</Accent>
            <Default className="text-sm text-muted-foreground mt-1">{t('subscription.advancedPlanDescription')}</Default>
          </RadioOptionItem>

          <RadioOptionItem
            label={t('subscription.creatorPlanTitle')}
            value="creator"
            rootValue={selectedPlan}
            position="topRight"
          >
            <Accent className="text-foreground mt-1">$9.99</Accent>
            <Default className="text-sm text-muted-foreground mt-1">{t('subscription.creatorPlanDescription')}</Default>
          </RadioOptionItem>
        </RadioGroup>
      </View>
    </React.Fragment>
  );
}