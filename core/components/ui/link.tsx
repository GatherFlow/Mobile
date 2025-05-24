import { TextClassContext } from '@/core/components/ui/text';
import { cn } from '@/core/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Link as ExpoLink, LinkProps as ExpoLinkProps } from 'expo-router';
import * as React from 'react';
import { Text } from 'react-native';

const linkTextVariants = cva('text-sm', {
  variants: {
    variant: {
      default: 'underline text-muted-foreground',
      semibold: 'font-semibold text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkProps = ExpoLinkProps & VariantProps<typeof linkTextVariants> & React.PropsWithChildren

const Link: React.FC<LinkProps> = ({ children, className, variant, ...props }) => {
  const textStyle = cn(linkTextVariants({ variant }), className);

  return (
    <TextClassContext.Provider value={textStyle}>
      <ExpoLink {...props}>
        <Text className={textStyle}>{children}</Text>
      </ExpoLink>
    </TextClassContext.Provider>
  );
}

Link.displayName = 'Link';

export { Link, linkTextVariants };
export type { LinkProps };

Link.displayName = 'Link';
