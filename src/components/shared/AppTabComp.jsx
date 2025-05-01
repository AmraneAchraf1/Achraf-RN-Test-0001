import { View, Pressable } from "react-native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { BlurView } from "expo-blur";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AppTabComp({ state, descriptors, navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 16,
        position: "absolute",
        bottom: 8,
        paddingVertical: 4,
        left: 14,
        right: 14,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        zIndex: 5,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarIcon
            key={index}
            label={label}
            focused={isFocused}
            color={isFocused ? "#014035" : "#01403580"}
            size={24}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

const TabBarIcon = ({ label, focused, color, size, onPress, onLongPress }) => {
  if (label === "AddEvent") {
    return (
      <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
        <View
          onPress={onPress}
          onLongPress={onLongPress}
          style={{ flex: 1, alignItems: "center", padding: 10 }}
        ></View>

        <BlurView
          intensity={18}
          tint="extraLight"
          style={{
            position: "absolute",
            bottom: 32,
            borderRadius: 12,
            width: 64,
            height: 64,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => ({
              borderRadius: 12,
              width: 64,
              height: 64,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(1, 64, 52, 0.9)",
              transform: [{ scale: pressed ? 0.95 : 1 }],
              shadowColor: "#01403550",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.5,
              elevation: 5,

            })}
            android_ripple={{ color: "#01403580", radius: 14 }}
            accessibilityRole="button"
            accessibilityState={{ selected: focused }}
            accessibilityLabel={label}
            accessibilityHint="Creates a new event"
            accessibilityActions={[{ name: "create", label: "Create" }]}
            onAccessibilityAction={(e) => {
              if (e.nativeEvent.actionName === "create") {
                onPress();
              }
            }}
          >
            <AntDesign name="plus" size={32} color="#fff" />
          </Pressable>
        </BlurView>
      </View>
    );
  }
  return (
    <PlatformPressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 8,
        paddingVertical: 10,
        justifyContent: "center",
        borderRadius: 12,
        overflow: "hidden",
      }}
      android_ripple={{ color: "#01403580", borderless: true }}
      accessibilityRole="button"
    >
      <View
        style={{
          height: 22,
        }}
      >
        {getIcon(label, 22, color)}
      </View>
      <Text style={{ color, fontSize: 12 }}>{label}</Text>
    </PlatformPressable>
  );
};
const getIcon = (label, size, color) => {
  switch (label) {
    case "Home":
      return <Octicons name="home" size={size} color={color} />;
    case "Profile":
      return <FontAwesome5 name="user" size={size} color={color} />;
    case "Messages":
      return <AntDesign name="message1" size={size} color={color} />;
    case "More":
      return <Octicons name="three-bars" size={size} color={color} />;
    case "AddEvent":
      return <AntDesign name="plus" size={size} color={color} />;
    default:
      return null;
  }
};
