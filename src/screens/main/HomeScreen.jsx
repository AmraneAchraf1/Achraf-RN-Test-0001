import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../../components/ui/Container";
import AppButton from "../../components/ui/AppButton";
import Entypo from "@expo/vector-icons/Entypo";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import Divider from "../../components/ui/Divider";
const DATA = [
  {
    id: 1,
    number: 0,
    icon: require("../../../assets/icons/Invite.png"),
    title: "Invited",
  },
  {
    id: 2,
    number: 0,
    icon: require("../../../assets/icons//Message.png"),
    title: "Message",
  },
  {
    id: 3,
    number: 0,
    icon: require("../../../assets/icons/Confirmed.png"),
    title: "Confirmed",
  },
  {
    id: 4,
    number: 0,
    icon: require("../../../assets/icons/Scanned.png"),
    title: "Scanned",
  },
  {
    id: 5,
    number: 0,
    icon: require("../../../assets/icons/Waiting.png"),
    title: "Waiting",
  },
  {
    id: 6,
    number: 0,
    icon: require("../../../assets/icons/Not invited.png"),
    title: "Cancelled",
  },
  {
    id: 7,
    number: 0,
    icon: require("../../../assets/icons/Rejected.png"),
    title: "Unchecked",
  },
  {
    id: 8,
    number: 0,
    icon: require("../../../assets/icons/Failed.png"),
    title: "Failed",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container headerTitle={"Invitation Report"} fixedHeader padding>
      <AppButton
        Icon={Entypo}
        onPress={() => navigation.navigate("Invitation")}
        iconName="chevron-down"
        buttonStyles={{
          width: "60%",
          alignSelf: "flex-end",
          marginVertical: 20,
        }}
      >
        Create Invitation
      </AppButton>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: Sizes[10],
          marginBottom: Sizes[10],
        }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        nestedScrollEnabled={true}
        bounces={false}
        overScrollMode="never"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>No data found</Text>
          </View>
        }
      />
      <AppButton
        buttonStyles={{
          marginVertical: 20,
        }}
      >
        Edit guest list
      </AppButton>
      <RolesSection />
    </Container>
  );
};

const Item = ({ item }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.white,
      borderRadius: Sizes[12],
      paddingHorizontal: Sizes[10],
      paddingVertical: Sizes[18],
      flex: 1,
      shadowColor: Colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    }}
  >
    <View
      style={{
        width: Sizes[20] * 2,
        height: Sizes[20] * 2,
        borderRadius: Sizes[20],
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: Colors.primaryShades[500],
        backgroundColor: Colors.primaryShades[50],
        marginBottom: Sizes[10],
      }}
    >
      <Image
        source={item.icon}
        style={{
          width: Sizes[24],
          height: Sizes[24],
          alignSelf: "center",
        }}
        resizeMode="contain"
      />
    </View>
    <Text>{item.number}</Text>
    <Text>{item.title}</Text>
  </View>
);

export const RolesSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[16],
        backgroundColor: Colors.white,
        borderRadius: Sizes[12],
        paddingHorizontal: Sizes[8],
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
        height: Sizes[32] * 5,
      }}
    >
      <View
        style={{
          flex: 1,
          height: "100%",
          borderRadius: Sizes[20],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      <Image
        source={require("../../../assets/icons/GateSup.png")}
        style={{
          width: Sizes[32] * 3.2,
          height: Sizes[32] * 3.2,
        }}
        resizeMode="contain"
      />
        <Text
          style={{
            fontSize: Sizes[16],
            fontFamily: "jsSB",
            color: Colors.primary,
          }}
        >
          Gate supervisors
        </Text>
      </View>
      <Divider horizontal={false}/>
      <View
        style={{
          flex: 1,
          height: "100%",
          paddingTop: Sizes[16],
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
      <Image
        source={require("../../../assets/icons/ExtraUsers.png")}
        style={{
          width: Sizes[32] * 2.1,
          height: Sizes[32] * 2.1,
        }}
        resizeMode="contain"
      />
        <Text
          style={{
            fontSize: Sizes[16],
            fontFamily: "jsSB",
            color: Colors.primary,
          }}
        >
          Extra guests
        </Text>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({});
