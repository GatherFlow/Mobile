import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/core/lib/utils";
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from "@tanstack/react-form";
import { Label } from "./label";
import { Text, View, ViewProps, type TextProps } from "react-native";

const {
  fieldContext,
  formContext,
  useFieldContext: _useFieldContext,
  useFormContext,
} = createFormHookContexts();

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormItem,
  },
  formComponents: {},
});

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: ViewProps) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <View
        data-slot="form-item"
        className={cn("grid gap-2", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
}

const useFieldContext = () => {
  const { id } = React.useContext(FormItemContext);
  const { name, store, ...fieldContext } = _useFieldContext();

  const errors = useStore(store, (state) => state.meta.errors);
  if (!fieldContext) {
    throw new Error("useFieldContext should be used within <FormItem>");
  }

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    errors,
    store,
    ...fieldContext,
  };
};

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  const { formItemId, errors } = useFieldContext();

  return (
    <Label
      data-slot="form-label"
      data-error={!!errors.length}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { errors, formItemId, formDescriptionId, formMessageId } =
    useFieldContext();

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !errors.length
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!errors.length}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: TextProps) {
  const { formDescriptionId } = useFieldContext();

  return (
    <Text
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function FormMessage({ className, ...props }: TextProps) {
  const { errors, formMessageId } = useFieldContext();
  const body = errors.length
    ? String(errors.at(0)?.message ?? "")
    : props.children;
  if (!body) return null;

  return (
    <Text
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}
    >
      {body}
    </Text>
  );
}

export { useAppForm, useFormContext, useFieldContext, withForm };