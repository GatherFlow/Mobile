import { View } from "react-native";
import { BigIcon } from "@/core/components/ui/bigIcon";
import { Accent } from "@/core/components/ui/typography";
import { Default } from "@/core/components/ui/typography";
import React from "react";

export default function ProfilePage() {
  return (
    <React.Fragment>
      <View className="flex-1 justify-between pt-8 pb-10 px-8">
        <View  className="items-center gap-y-6">
          <View className="items-center gap-y-2">
            <BigIcon>
            </BigIcon>
            <View className="items-center">
              <Accent className="text-foreground">John Doe</Accent>
              <Default className="text-foreground text-center max-w-[220px]">Hello its me, I very like nurvana songs</Default>
            </View>
          </View>
          <Accent className="text-foreground">Social media</Accent>
        </View>
      </View>
    </React.Fragment>
  )
}