import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Order: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.orderText}>Orden de Trabajo</Text>
      <View style={styles.orderView}>
        <View style={styles.weightView}>
          <View style={styles.weightTextView}>
            <FontAwesome6 name="star" size={wp(0.8)} color={Colors.warning} />
            <Text style={styles.weightText}>Meta</Text>
          </View>
          <Text style={styles.weight}>{2000} tn</Text>
        </View>
        <View style={styles.detailView}>
          <View style={styles.detail}>
            <Text style={styles.descText}>Hora</Text>
            <Text style={styles.desc}>7:30 am</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.descText}>Nivel</Text>
            <Text style={styles.desc}>1910</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.descText}>Labor</Text>
            <Text style={styles.desc}>7TJ-821</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.map}
        source={require("@assets/images/process_map.png")}
        accessibilityLabel="Process Map"
      />
    </View>
  );
};

export default Order;
