import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { View, Text } from 'react-native';
import { cva } from 'class-variance-authority';
import { cn } from '@/core/lib/utils';
import React from 'react';

const radioOptionItemVariants = cva(
  'flex-row items-center justify-between p-[10px] border rounded-[10px] shadow-sm bg-background h-auto min-h-[50px] mb-3',
  {
    variants: {
      position: {
        default: '',
        topRight: 'relative items-start',
      },
    },
    defaultVariants: {
      position: 'default',
    },
  }
);

const indicatorPositionVariants = cva(
  'aspect-square h-[16px] w-[16px] rounded-full justify-center items-center border',
  {
    variants: {
      position: {
        default: '',
        topRight: 'absolute top-4 right-4',
      },
    },
    defaultVariants: {
      position: 'default',
    },
  }
);

function RadioGroup({
  className,
  ...props
}: RadioGroupPrimitive.RootProps & {
  ref?: React.RefObject<RadioGroupPrimitive.RootRef>;
}) {
  return <RadioGroupPrimitive.Root className={cn('web:grid gap-2', className)} {...props} />;
}

interface RadioOptionItemProps extends RadioGroupPrimitive.ItemProps {
  label: string;
  children?: React.ReactNode;
  rootValue?: string;
  position?: 'default' | 'topRight';
}

const RadioOptionItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioOptionItemProps
>(({ label, children, className, value, rootValue, position = 'default', ...props }, ref) => {
  const isChecked = value === rootValue;

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        radioOptionItemVariants({ position }),
        isChecked ? 'border-primary' : 'border-input',
        className
      )}
      value={value}
      {...props}
    >
      <View className={cn('flex-1', position === 'default' ? 'pr-4' : 'pr-8')}>
        <Text className="text-base text-muted-foreground">{label}</Text>
        {children}
      </View>
      <View
        className={cn(
          indicatorPositionVariants({ position }),
          isChecked ? 'border-primary' : 'border-input'
        )}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <View
            className={cn(
              'h-[16px] w-[16px] rounded-full border-4',
              isChecked ? 'border-primary' : 'border-transparent'
            )}
          >
            <View
              className={cn(
                'h-[8px] w-[8px] rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              )}
            />
          </View>
        </RadioGroupPrimitive.Indicator>
      </View>
    </RadioGroupPrimitive.Item>
  );
});

RadioOptionItem.displayName = 'RadioOptionItem';

export { RadioGroup, RadioOptionItem };