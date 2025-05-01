import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import Sizes from "../../constants/Sizes";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Feather from '@expo/vector-icons/Feather';
const Container = ({
  children,
  headerTitle,
  headerTitleStyle,
  headerLeft,
  headerRight,
  pH,
  fixedHeader,
  style,
  headerStyle,
  footerStyle,
  contentContainerStyle,
  scrollEnabled,
  ...props
}) => {
  return (
    <View style={[style, { flex: 1 }]} {...props}>
      {!fixedHeader && (headerTitle || headerLeft || headerRight) && (
        <Header
          headerTitle={headerTitle}
          headerLeft={headerLeft}
          headerRight={headerRight}
          headerTitleStyle={headerTitleStyle}
          style={[styles.header, headerStyle]}
        />
      )}
      <ScrollView
        contentContainerStyle={[
          {
            flexGrow: 1,
            paddingHorizontal: pH || Sizes[16],
            paddingBottom: Sizes[16],
          },
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnabled}
        style={{ flex: 1 }}
        nestedScrollEnabled={true}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        {...props}
      >
        {fixedHeader && (headerTitle || headerLeft || headerRight) && (
          <Header
            headerTitle={headerTitle}
            headerLeft={headerLeft}
            headerRight={headerRight}
            headerTitleStyle={headerTitleStyle}
            style={[styles.header, headerStyle]}
          />
        )}
        {children}
        {/* add bottom bar spacing */}
        <View style={[{
        flex: 0,
        paddingBottom: Sizes[32] * 3,
      }, footerStyle]} />
      </ScrollView>
      
      
    </View>
  );
};

const Header = ({
  headerTitle,
  headerTitleStyle,
  headerLeft,
  headerRight,
  onHeaderLeftPress,
  onHeaderRightPress,
  style,
  ...props
}) => {
  const navigation = useNavigation();
  const handleHeaderLeftPress = () => {
    if (onHeaderLeftPress) {
      onHeaderLeftPress();
      return;
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  const handleHeaderRightPress = () => {
    if (onHeaderRightPress) {
      onHeaderRightPress();
      return;
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <View style={style} {...props}>
      <TouchableOpacity onPress={handleHeaderLeftPress} style={{minWidth:"10%"}}>{headerLeft ?? null}</TouchableOpacity>
      {headerTitle && (
        <Text style={[styles.headerTitle, headerTitleStyle]}>
          {headerTitle}
        </Text>
      )}
      {<TouchableOpacity onPress={handleHeaderRightPress} style={{minWidth:"10%" }}>{headerRight ?? null}</TouchableOpacity>}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Sizes[18],
    paddingHorizontal: Sizes[16],
  },
  headerTitle: {
    fontSize: Sizes[24],
    color: Colors.primary,
    fontFamily: "jsSB",
    textAlign: "center",
    flex: 1,
  },
});
