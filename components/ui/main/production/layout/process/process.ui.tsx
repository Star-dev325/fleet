import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Calendar } from "@/components/core";
import { Order } from "./order";
import { History } from "./history";
import { ProcessHistoryProps } from "@/constants/interfaces";
import styles from "./styles";

const Process: React.FC = () => {
  const histories: ProcessHistoryProps[] = [
    {
      type: "gold",
      work: "TJ-821",
      pocket: "PARRILLA 1",
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      type: "gold",
      work: "CX-823",
      pocket: "FAJA  4",
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      type: "gold",
      work: "GA-782",
      pocket: "CANCHA 100",
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      type: "copper",
      work: "TJ-123",
      pocket: "POCKET 3",
      startTime: new Date(),
      endTime: new Date(),
    },
    {
      type: "copper",
      work: "TJ-821",
      pocket: "PARRILLA 1",
      startTime: new Date(),
      endTime: new Date(),
    },
  ];

  const [selectDate, setSelectDate] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <Calendar
        startDate={new Date()}
        duration={6}
        selectDate={selectDate}
        onChange={(date) => setSelectDate(date)}
      />
      <Order />
      <View style={styles.historyView}>
        <View style={styles.historyTextView}>
          <Text style={styles.historyText}>Viajes realizados</Text>
          <Text style={styles.historyText}>{histories.length} Total</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={true}
          style={styles.scrollView}
        >
          {histories.map((history: ProcessHistoryProps, index) => (
            <History key={`history_${index}`} history={history} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Process;
