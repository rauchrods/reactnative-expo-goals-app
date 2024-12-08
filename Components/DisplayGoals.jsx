import React from "react";
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

const DisplayGoals = ({ goals, setGoals, setModalIsVisible }) => {
  const removeGoalHandler = (index) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal, idx) => idx !== index)
    );
  };
  return (
    <SafeAreaView style={styles.goalsContainer}>
      <Button
        title="Add New Goal"
        color={"#5e0acc"}
        onPress={() => setModalIsVisible(true)}
      />
      {goals.length === 0 && (
        <Text style={styles.goalItem}>No goals added yet</Text>
      )}
      {goals.length > 0 && (
        <FlatList
          data={goals}
          keyExtractor={(item, index) => index}
          renderItem={(itemData) => (
            <Pressable
              onLongPress={() => removeGoalHandler(itemData.index)}
              style={({ pressed }) => pressed && styles.goalItemPressed}
            >
              <Text style={styles.goalItem}>
                {itemData.index + 1} - {itemData.item}
              </Text>
            </Pressable>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default DisplayGoals;

const styles = StyleSheet.create({
  goalsContainer: {
    flex: 1,
    padding: 8,
    marginTop: 32,
  },

  goalItem: {
    borderRadius: 8,
    backgroundColor: "#5e0acc",
    padding: 8,
    color: "white",
    fontSize: 16,
    margin: 8,
  },

  goalItemPressed: {
    opacity: 0.5,
    backgroundColor: "red",
    marginBottom: 0,
    marginTop: 0,
  },
});
