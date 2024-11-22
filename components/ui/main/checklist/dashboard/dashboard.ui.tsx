import React from "react";
import { Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Colors, POKET_LIST } from "@/constants/shared";
import { Button, ButtonGroup } from "@/components/core";
import { formatNumber } from "@/constants/utils";
import styles from "./styles";

const Dashboard: React.FC = () => {
  const [selectedPocket, setSelectedPocket] = React.useState();
  const [worktime, setWorkTime] = React.useState(153);
  const [workDistance, setWorkDistance] = React.useState(1052);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.informationView}>
        <Text style={styles.informationTitle}>
          Información <Text style={{ color: Colors.success }}>Inicial</Text>
        </Text>
        <Text style={styles.informationDescription}>
          Por favor, especifique la zona e ingrese el horómetro y kilometraje
          inicial
        </Text>
        <View style={styles.pocketView}>
          <ButtonGroup
            buttons={POKET_LIST}
            setCurrentValue={setSelectedPocket}
            select={3}
            buttonGroupStyle={styles.pocketButtonGroup}
            buttonStyle={styles.pocketButton}
            textStyle={styles.pocketText}
            icon={
              <FontAwesome6
                name="check"
                size={wp(1.5)}
                color={Colors.success}
              />
            }
          />
        </View>
        <View style={styles.statisticView}>
          <View style={styles.statistic}>
            <View style={styles.hoursView}>
              <Text style={styles.hours}>{worktime.toFixed(0)}</Text>
              <Text style={styles.unit}>hs</Text>
            </View>
            <View style={styles.statisticControlView}>
              <Button
                buttonStyle={styles.hoursPlusButton}
                icon={
                  <FontAwesome6 name="plus" size={wp(1)} color={Colors.white} />
                }
                textStyle={styles.hoursPlusText}
                onClickButton={()=> setWorkTime(worktime + 1)}
              />
              <Button
                buttonStyle={styles.hoursMinusButton}
                icon={
                  <FontAwesome6
                    name="minus"
                    size={wp(1)}
                    color={Colors.white}
                  />
                }
                onClickButton={()=> setWorkTime(worktime - 1)}
                textStyle={styles.hoursPlusText}
              />
            </View>
          </View>
          <View style={styles.statistic}>
            <View style={styles.hoursView}>
              <Text style={styles.hours}>{workDistance.toFixed(0)}</Text>
              <Text style={styles.unit}>km</Text>
            </View>
            <View style={styles.statisticControlView}>
              <Button
                buttonStyle={styles.hoursPlusButton}
                icon={
                  <FontAwesome6 name="plus" size={wp(1)} color={Colors.white} />
                }
                textStyle={styles.hoursPlusText}
                onClickButton={()=> setWorkDistance(workDistance + 1)}
              />
              <Button
                buttonStyle={styles.hoursMinusButton}
                icon={
                  <FontAwesome6
                    name="minus"
                    size={wp(1)}
                    color={Colors.white}
                  />
                }
                onClickButton={()=> setWorkDistance(workDistance - 1)}
                textStyle={styles.hoursPlusText}
              />
            </View>
          </View>
        </View>
        <View style={styles.checkListButtonView}>
          <Button
            onClickButton={() => router.push("/(main)/checklist/setting")}
            text="Ir al checklist"
            icon={
              <FontAwesome6
                name="arrow-right"
                size={wp(1)}
                color={Colors.white}
              />
            }
            buttonStyle={styles.checkListButton}
            textStyle={styles.checkListText}
          />
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
