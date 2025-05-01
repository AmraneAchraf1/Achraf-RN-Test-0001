import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";

const AppButton = ({
    onPress,
    children,
    buttonStyles,
    textStyles,
    disabled,
    color,
    Icon,
    iconName,
    iconSize,
    iconColor,
    iconStyles,
    iconPosition,
    accessibilityLabel,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: disabled
            ? Colors.primaryShades[200]
            : pressed
            ? Colors.primaryShades[800]
            : color || Colors.primary,
        },
        styles.container,
        buttonStyles,
      ]}
      disabled={disabled}
      onPress={onPress}
      accessible
      accessibilityLabel={accessibilityLabel || "A Button"}
    >
      <Text style={[styles.text, textStyles]}>
        {children}
      </Text>
        {Icon && (
          <Icon
            name={iconName}
            size={iconSize || Sizes[20]}
            color={iconColor || Colors.white}
            style={[
                iconPosition === "left"
                ? {
                    position: "absolute",
                    left: Sizes[14],
                    top: Sizes[10],
                } : {
                    position: "absolute",
                    right: Sizes[14],
                },
              iconStyles,
            ]}
          />
        )}
    </Pressable>
  );
};



const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes[8],
    paddingVertical: Sizes[12],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Sizes[6],
    flexDirection: "row",
  },
  text: { 
    color: Colors.white,
    fontSize: Sizes[16],
    fontFamily: "jsSB",
    textAlign: "center",
   },
});

export default AppButton;