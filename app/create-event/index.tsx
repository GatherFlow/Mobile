import { Button } from "@/core/components/ui/button";
import { Input } from "@/core/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/core/components/ui/select";
import { useAppForm } from "@/core/components/ui/tanstack-form";
import { Textarea } from "@/core/components/ui/textarea";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Stack } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";



type Ticket = {
  title: string
  quantity: number
  price: number
  description: string
}

type Location = {
  name: string
  latitude: number
  longitude: number
}

export default function CreateEventScreen() {
  const { t } = useTranslation()

  const form = useAppForm({
    defaultValues: {
      name: '',
      description: '',
      tags: [] as string[],
      startedAt: new Date(),
      duration: 0,
      format: '',
      meetingLink: '',
      location: {} as Location,
      tickets: [] as Ticket[]
    }
  })


  const [value, setValue] = React.useState('')
  const [step, setStep] = React.useState(0)

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  const decrementStep = () => {
    setStep((prev) => prev - 1)
  }

  const insets = useSafeAreaInsets()
  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };


  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Create event', headerBackTitle: t('stack.back') }} />
      <View className="flex-1 pt-8 pb-10 px-8">
        <form.AppForm>
          <View className="flex flex-col gap-4">
            {step === 0 && (
              <React.Fragment>
                <form.AppField name="name">
                  {(field) => (
                    <field.FormItem>
                      <field.FormLabel>Title</field.FormLabel>
                      <field.FormControl>
                        <Input
                          value={field.state.value}
                          onChangeText={field.handleChange}
                          onBlur={field.handleBlur}
                          placeholder="Enter event title"
                        />
                      </field.FormControl>
                      <field.FormMessage />
                    </field.FormItem>
                  )}
                </form.AppField>
                <form.AppField name="tags" mode="array">
                  {(field) => (
                    <field.FormItem>
                      <field.FormLabel>Tags</field.FormLabel>
                      <field.FormControl>
                        <Input
                          placeholder="Enter tag"
                          value={value}
                          onChangeText={setValue}
                          onSubmitEditing={(e) => {
                            field.pushValue(value)
                            setValue('')
                          }}
                        />
                      </field.FormControl>
                      <field.FormMessage />
                      <View className="gap-1" style={{ display: 'flex', flexDirection: 'row' }}>
                        {field.state.value.map((tag, index) => (
                          <Button
                            key={index}
                            size="sm"
                            variant="outline"
                            onPress={() => form.removeFieldValue('tags', index)}
                            className="min-w-20 w-fit"
                          >
                            <Text className="text-foreground">#{tag}</Text>
                          </Button>
                        ))}
                      </View>
                    </field.FormItem>
                  )}
                </form.AppField>
                <form.AppField name="description">
                  {(field) => (
                    <field.FormItem>
                      <field.FormLabel>Description</field.FormLabel>
                      <field.FormControl>
                        <Textarea
                          value={field.state.value}
                          onChangeText={field.handleChange}
                          placeholder="Enter event description"
                        />
                      </field.FormControl>
                      <field.FormMessage />
                    </field.FormItem>
                  )}
                </form.AppField>
              </React.Fragment>
            )}
            {step === 1 && (
              <React.Fragment>
                <form.AppField name="startedAt">
                  {(field) => (
                    <field.FormItem>
                      <field.FormLabel>Date</field.FormLabel>
                      <field.FormControl>
                        <DateTimePicker
                          value={field.state.value}
                          minimumDate={new Date()}
                        />
                      </field.FormControl>
                    </field.FormItem>
                  )}
                </form.AppField>
                <form.AppField name="format">
                  {(field) => (
                    <field.FormItem>
                      <field.FormLabel>Format</field.FormLabel>
                      <field.FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent insets={contentInsets}>
                            <SelectItem label="Hybrid" value="hybrid">Hybrid</SelectItem>
                            <SelectItem label="Online" value="online">Online</SelectItem>
                            <SelectItem label="Offline" value="offline">Offline</SelectItem>
                          </SelectContent>
                        </Select>
                      </field.FormControl>
                    </field.FormItem>
                  )}
                </form.AppField>
              </React.Fragment>
            )}
          </View>
        </form.AppForm>
        <View className="mt-auto gap-4">
          {step === 2 && (
            <Button onPress={incrementStep}>
              <Text>Create</Text>
            </Button>
          )}
          {step < 2 && (
            <Button onPress={incrementStep}>
              <Text>Next</Text>
            </Button>
          )}
          {step > 0 && (
            <Button variant="outline" onPress={decrementStep}>
              <Text>Back</Text>
            </Button>
          )}
        </View>
      </View>
    </React.Fragment>
  )
}