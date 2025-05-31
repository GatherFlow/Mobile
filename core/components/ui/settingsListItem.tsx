import React from 'react';
import { View, Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { ChevronRight } from '@/core/lib/icons/ChevronRight';
import { cn } from '@/core/lib/utils';

interface SettingsListItemCustomProps {
	label: string;
	icon?: React.ReactNode;
	value?: string;
}

export type SettingsListItemProps = Omit<TouchableOpacityProps, 'children'> & SettingsListItemCustomProps;

export const SettingsListItem: React.FC<SettingsListItemProps> = ({
	label,
	icon,
	value,
	className,
	...props
}) => {
	return (
		<TouchableOpacity
			{...props}
			className={cn(
				'flex-row items-center justify-between p-[10px] border border-input bg-background h-[50px] rounded-[10px] shadow-sm',
				className
			)}
			activeOpacity={0.8}
		>
			<View className="flex-row items-center">
				{icon && (
					<View className="items-center mr-2">
						{icon}
					</View>
				)}
				<Text className={cn(
					"text-base font-medium text-foreground"
				)}>
					{label}
				</Text>
			</View>

			<View className="flex-row items-center">
				{value && (
					<Text className={cn(
						"text-sm text-muted-foreground"
					)}>
						{value}
					</Text>
				)}
				<ChevronRight
					size={24}
					className={cn(
						value ? "text-muted-foreground" : "text-foreground"
					)}
				/>
			</View>
		</TouchableOpacity>
	);
};