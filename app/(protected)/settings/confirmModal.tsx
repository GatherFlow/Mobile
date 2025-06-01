import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Button } from '@/core/components/ui/button';
import { TriangleAlert } from '@/core/lib/icons/TriangleAlert';
import { useTranslation } from 'react-i18next';

interface ConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export default function ConfirmModal({ visible, onClose, onConfirm, message }: ConfirmModalProps) {
  const { t } = useTranslation();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center px-8 bg-black/50">
        <View className="bg-background pb-2 pt-[14px] px-2 rounded-2xl items-center w-full gap-[22px]">
          <View className="items-center gap-[22px]">
            <TriangleAlert size={24} className="text-primary" />
            <Text className="text-foreground text-base font-medium text-center">{message}</Text>
          </View>

          <View className="flex-row w-full gap-x-3">
            <Button
              variant={'outline'}
              onPress={onClose}
              className="flex-1"
            >
              <Text className="text-foreground">{t('confirmModal.noButton')}</Text>
            </Button>

            <Button
              onPress={onConfirm}
              className="flex-1"
            >
              <Text>{t('confirmModal.yesButton')}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}