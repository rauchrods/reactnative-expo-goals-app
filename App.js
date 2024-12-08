import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  Keyboard,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import DisplayGoals from "./Components/DisplayGoals";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [goals, setGoals] = useState([]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const chnageTextHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText]);
    setEnteredGoalText("");
    setModalIsVisible(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <StatusBar style="auto" />
      <Modal
        visible={modalIsVisible}
        animationType="slide"
        onRequestClose={() => setModalIsVisible(false)}
        presentationStyle="pageSheet"
      >
        <SafeAreaView style={styles.inputContainer}>
          <Image style={styles.image} source={require("./assets/goal.png")} />
          <TextInput
            style={styles.textInput}
            placeholder="Your Course Goal"
            value={enteredGoalText}
            onChangeText={chnageTextHandler}
          ></TextInput>
          <View style={styles.buttonContainer}>
            <Button title="Add Goal" onPress={addGoalHandler}></Button>
            <Button
              title="Cancel"
              color={"red"}
              onPress={() => setModalIsVisible(false)}
            ></Button>
          </View>
        </SafeAreaView>
      </Modal>
      <DisplayGoals
        goals={goals}
        setGoals={setGoals}
        setModalIsVisible={setModalIsVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },

  image: {
    width: 200,
    height: 200,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    padding: 8,
    marginRight: 8,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
    padding: 8,
    marginTop: 16,
  },
});
