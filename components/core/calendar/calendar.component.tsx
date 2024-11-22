import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { CalendarProps } from "@/constants/interfaces";
import { formatDayInSpanish } from "@/constants/utils";
import { Colors } from "@/constants/shared";

const Calendar: React.FC<CalendarProps> = ({
  startDate,
  duration,
  selectDate = startDate,
  onChange,
}) => {
  const days = Array.from({ length: duration }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    return {
      day: formatDayInSpanish(date),
      date: date.getDate(),
      wholeDate: date,
    };
  });

  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <TouchableOpacity
          key={`day_${index}`}
          style={[
            styles.dayView,
            day.wholeDate.toDateString() === selectDate.toDateString() &&
              styles.selectDayView,
          ]}
          onPress={() => onChange && onChange(day.wholeDate)}
        >
          <Text
            style={[
              styles.day,
              day.wholeDate.toDateString() === selectDate.toDateString() &&
                styles.selectDate,
            ]}
          >
            {day.day.toUpperCase()}
          </Text>
          <Text
            style={[
              styles.date,
              day.wholeDate.toDateString() === selectDate.toDateString() &&
                styles.selectDate,
            ]}
          >
            {day.date}
          </Text>
          {day.date === new Date().getDate() && <View style={styles.dot} />}
          {/* {day.date === new Date().getDate() && <View style={styles.dot} />} */}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Calendar;
