import { Dimensions, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/ui/Container";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Divider from "../../components/ui/Divider";
import CircularProgress from "../../components/ui/CircularProgress";
import { RolesSection } from "./HomeScreen";
import Feather from '@expo/vector-icons/Feather';
const InvitationScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Container
        headerTitle={"Invitation"}
        headerLeft={<Ionicons name="chevron-back" size={24} color="black" />}
        contentContainerStyle={{
          gap: Sizes[20],
        }}
      >
        <View
          style={{
            marginTop: Sizes[20],
            alignItems: "center",
          }}
        >
          <CardEvent />
        </View>
        <DashboardSection />
        <Divider />
        <RolesSection />
        <EventType />
      </Container>
    </SafeAreaView>
  );
};

const CardEvent = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [7, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth * 0.9; // 90% of screen width
  const cardHeight = cardWidth / (1050 / 600); // Maintain 7:4 aspect ratio
  return (
    <View
      style={{
        width: cardWidth,
        height: cardHeight,
        borderRadius: Sizes[24],
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: "relative",
      }}
    >
      <MaterialCommunityIcons
        name="image-auto-adjust"
        size={Sizes[24]}
        color={Colors.primary}
        style={{
          position: "absolute",
          top: Sizes[20],
          right: Sizes[20],
          zIndex: 1,
          backgroundColor: Colors.primaryShades[100],
          borderWidth: Sizes[1],
          borderColor: Colors.primaryShades[500],
          borderRadius: Sizes[24],
          padding: Sizes[6],
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={pickImage}
      />
      {image ? (
        <Image
          source={{ uri: image }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: Sizes[24],
          }}
        />
      ) : (
        <View
          style={{
            fontSize: Sizes[20],
            color: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            padding: Sizes[20],
            gap: Sizes[10],
          }}
        >
          <Text>7:4</Text>
          <Text>1050 x 600</Text>
        </View>
      )}
    </View>
  );
};

const DashboardSection = () => {
  return (
    <View
      style={{
        width: "100%",
        gap: Sizes[10],
      }}
    >
      <Text
        style={{
          fontSize: Sizes[20],
          fontWeight: "bold",
          color: Colors.primary,
        }}
      >
        Dashboard
      </Text>
      <Divider />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: Sizes[10],
        }}
      >
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          Total E-Invitations : 200
        </Text>
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          User: 140
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: Sizes[32],
          paddingVertical: Sizes[10],
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: Sizes[10],
          }}
        >
          <CircularProgress
            progress={69}
            customNumber={214}
            strokeWidth={Sizes[6]}
            labelColor={Colors.black}
            size={Sizes[32] * 3}
            progressCircleColor={Colors.primaryShades[500]}
          />
          <Text
            style={{
              fontSize: Sizes[16],
              color: Colors.primary,
              fontFamily: "jsR",
              textAlign: "center",
            }}
          >
            Remaining
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: Sizes[10],
          }}
        >
          <CircularProgress
            progress={40}
            customNumber={180}
            strokeWidth={Sizes[6]}
            labelColor={Colors.black}
            size={Sizes[32] * 3}
            progressCircleColor={Colors.primaryShades[700]}
          />
          <Text
            style={{
              fontSize: Sizes[16],
              color: Colors.primary,
              fontFamily: "jsR",
              textAlign: "center",
            }}
          >
            Acceptance
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: Sizes[10],
          }}
        >
          <CircularProgress
            progress={45}
            customNumber={20}
            strokeWidth={Sizes[6]}
            labelColor={Colors.black}
            size={Sizes[32] * 3}
            progressCircleColor={Colors.red}
          />
          <Text
            style={{
              fontSize: Sizes[16],
              color: Colors.primary,
              fontFamily: "jsR",
              textAlign: "center",
            }}
          >
            Apologize
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: Sizes[10],
          }}
        >
          <CircularProgress
            progress={30}
            customNumber={15}
            strokeWidth={Sizes[6]}
            labelColor={Colors.black}
            size={Sizes[32] * 3}
            progressCircleColor={Colors.orange}
          />
          <Text
            style={{
              fontSize: Sizes[16],
              color: Colors.primary,
              fontFamily: "jsR",
              textAlign: "center",
            }}
          >
            Waiting
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: Sizes[10],
          }}
        >
          <CircularProgress
            progress={20}
            customNumber={8}
            strokeWidth={Sizes[6]}
            labelColor={Colors.black}
            size={Sizes[32] * 3}
            progressCircleColor={Colors.secondary}
          />
          <Text
            style={{
              fontSize: Sizes[16],
              color: Colors.primary,
              fontFamily: "jsR",
              textAlign: "center",
            }}
          >
            Deleted
          </Text>
        </View>
      </View>
    </View>
  );
};

const EventType = () => {
  const [editMode, setEditMode] = useState(false);
  const handledEditMode = () => {
    setEditMode(!editMode);
  }
 
  return (
    <View
      style={{
        gap: Sizes[10],
      }}
    >
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
      }}
    >
      <Text
        style={{
          fontSize: Sizes[20],
          fontWeight: "bold",
          color: Colors.primary,
        }}
      >
        Event Type
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: Sizes[16],
        }}
      >
        <Feather name="edit-3" size={Sizes[24]} color={Colors.secondary}  onPress={handledEditMode}/>
        <Feather name="trash-2" size={Sizes[24]} color={Colors.red} />
      </View>
    </View>

    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
        backgroundColor: Colors.primaryShades[50],
        borderRadius: Sizes[12],
        padding: Sizes[16],
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
        }}
      >
        Event Name
      </Text>
      {
        editMode ? (
          <TextInput
        placeholder="marriage"
        placeholderTextColor={Colors.primary}
        onChangeText={(text) => console.log(text)}
        autoFocus
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
          borderBottomWidth: Sizes[1],
          borderBottomColor: Colors.primary,
          width: "50%",
          textAlign: "right",
        }}
      />) : (
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          marriage
        </Text>
      )
      }
      
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
        backgroundColor: Colors.primaryShades[50],
        borderRadius: Sizes[12],
        padding: Sizes[16],
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
        }}
      >
        Name of the caller
      </Text>
      {
        editMode ? (
          <TextInput
        placeholder="Name of the caller"
        placeholderTextColor={Colors.primary}
        onChangeText={(text) => console.log(text)}
        autoFocus
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
          borderBottomWidth: Sizes[1],
          borderBottomColor: Colors.primary,
          width: "50%",
          textAlign: "right",
        }}
      />) : (
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          Name of the caller
        </Text>
      )
      }
      
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
        backgroundColor: Colors.primaryShades[50],
        borderRadius: Sizes[12],
        padding: Sizes[16],
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
        }}
      >
      Date
      </Text>
      {
        editMode ? (
          <TextInput
        placeholder="26/ 11/ 2024"
        placeholderTextColor={Colors.primary}
        onChangeText={(text) => console.log(text)}
        autoFocus
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
          borderBottomWidth: Sizes[1],
          borderBottomColor: Colors.primary,
          width: "50%",
          textAlign: "right",
        }}
      />) : (
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          26/ 11/ 2024
        </Text>
      )
      }
      
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
        backgroundColor: Colors.primaryShades[50],
        borderRadius: Sizes[12],
        padding: Sizes[16],
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
        }}
      >
      Time
      </Text>
      {
        editMode ? (
          <TextInput
        placeholder="8:00 PM"
        placeholderTextColor={Colors.primary}
        onChangeText={(text) => console.log(text)}
        autoFocus
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
          borderBottomWidth: Sizes[1],
          borderBottomColor: Colors.primary,
          width: "50%",
          textAlign: "right",
        }}
      />) : (
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
        8:00 PM 
        </Text>
      )
      }
      
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: Sizes[10],
        backgroundColor: Colors.primaryShades[50],
        borderRadius: Sizes[12],
        padding: Sizes[16],
        width: "100%",
      }}
    >
      <Text
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
        }}
      >
      Location
      </Text>
      {
        editMode ? (
          <TextInput
        placeholder="Malik Fahd neighborhood"
        placeholderTextColor={Colors.primary}
        onChangeText={(text) => console.log(text)}
        autoFocus
        style={{
          fontSize: Sizes[16],
          color: Colors.primary,
          fontFamily: "jsR",
          borderBottomWidth: Sizes[1],
          borderBottomColor: Colors.primary,
          width: "50%",
          textAlign: "right",
        }}
      />) : (
        <Text
          style={{
            fontSize: Sizes[16],
            color: Colors.primary,
            fontFamily: "jsR",
          }}
        >
          Malik Fahd neighborhood
        </Text>
      )
      }
      
    </View>
    </View>
  );
}

export default InvitationScreen;
