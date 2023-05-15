import _, { debounce } from "lodash";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, View } from "react-native";
import WidgetBaseLogo from "../../widgets/base/WidgetBaseLogo";
import { Button, TextInput } from "react-native-paper";
import { ServiceUserRegister } from "../../services/ServiceUser";
import WidgetBaseLoader from "../../widgets/base/WidgetBaseLoader";

const ScreenUserRegister = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }); // TODO: add schema user

  const [complete, setComplete] = useState(false);

  const handleChange = (name, value) => {
    setUser((values) => ({ ...values, [name]: value }));
  };

  const userRegister = () => {
    setComplete(false);
    const debounce = _.debounce(() => {
      ServiceUserRegister(user)
        .then((data) => {
          Alert.alert("Berhasil", "Anda berhasil register, silahkan login.");
          navigation.goBack();
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setComplete(true);
        });
    }, 500);

    debounce();
  };

  useEffect(() => {
    setComplete(false);
    const debounce = _.debounce(() => {
      setComplete(true);
    }, 500);
    debounce();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {complete && (
        <ScrollView
          contentContainerStyle={{
            gap: 16,
            marginHorizontal: 40,
            justifyContent: "center",
            height: "100%",
          }}>
          <WidgetBaseLogo />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 16,
            }}>
            <TextInput
              style={{ flex: 1 }}
              label="First Name"
              placeholder="Masukan nama depan"
              value={user.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
            />
            <TextInput
              style={{ flex: 1 }}
              label="Last Name"
              placeholder="Masukan nama belakang"
              value={user.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
            />
          </View>
          <TextInput label="Email" placeholder="Masukan email"
          value={user.email}
          onChangeText={(text) => handleChange("email", text)} />
          <TextInput label="Password" 
          value={user.password}
          onChangeText={(text) => handleChange("password", text)}
          secureTextEntry={true}/>
          <Button onPress={userRegister}mode="contained">Register</Button>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            mode="outlined">
            Login
          </Button>
        </ScrollView>
      )}
      <WidgetBaseLoader complete={complete} />
    </SafeAreaView>
  );
};

export default ScreenUserRegister;