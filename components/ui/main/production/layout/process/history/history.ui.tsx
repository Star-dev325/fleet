import React from "react";
import { Image, View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { ProcessHistoryProps } from "@/constants/interfaces";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const History: React.FC<{ history: ProcessHistoryProps }> = ({ history }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={[
            styles.metalImage,
            {
              backgroundColor:
                history.type === "gold" ? Colors.warning : Colors.orange,
            },
          ]}
        >
          {history.type === "gold" ? (
            <Image
              style={styles.metalIcon}
              source={require("@assets/images/gold.png")}
            />
          ) : (
            <Image
              style={styles.metalIcon}
              source={require("@assets/images/copper.png")}
            />
          )}
        </View>
        <View style={styles.historyView}>
          <View style={styles.workView}>
            <View style={styles.workTextView}>
              <Text style={styles.workText}>{history.work}</Text>
              <View style={styles.workIcon}>
                <FontAwesome6
                  name="arrow-trend-up"
                  size={wp(1)}
                  color={Colors.white}
                />
              </View>
              <Text style={styles.workText}>{history.pocket}</Text>
            </View>
            <FontAwesome6 name="retweet" size={wp(1)} color={Colors.white} />
          </View>
          <View style={styles.timeView}>
            <FontAwesome6
              name="calendar-days"
              size={wp(0.9)}
              color={Colors.white}
            />
            <Text style={styles.timeText}>09:25 - 10:25 AM</Text>
            <View style={styles.dot} />
            <FontAwesome6
              name="business-time"
              size={wp(0.9)}
              color={Colors.white}
            />
            <Text style={styles.timeText}>32 min</Text>
          </View>
        </View>
      </View>
      <View style={styles.timeline}>
        <Text style={styles.timelineText}>hace {2} min</Text>
      </View>
    </View>
  );
};

export default History;
