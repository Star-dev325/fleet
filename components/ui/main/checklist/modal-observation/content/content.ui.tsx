import React from "react";
import { View, ScrollView } from "react-native";
import { Divider } from "@/components/core";
import { Note } from "../note";
import { NoteProps } from "@/constants/interfaces";
import styles from "./styles";

const Content: React.FC = () => {
  const notes: NoteProps[] = [
    {
      image: {
        name: "prescription_Nov11.jpg",
        url: "@assets/images/temp/note.png",
        size: 2 * 1024 * 1024,
      },
      date: new Date().toISOString(),
    },
    {
      content:
        "Equipo Inoperativo - 0% Inoperatividad:\n\n1.Pinzas y Bocinas con desgastes\n2.Botellon de divaccion en mal estado\n3.Todos los componentes en mal estado",
      date: new Date().toISOString(),
    },
    {
      audio: {
        name: "test.mp3",
        url: "@assets/images/temp/test.mp3",
        size: 2 * 1024 * 1024,
      },
      date: new Date().toISOString(),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <View style={styles.timeView}>
          <Divider
            descriptionStyle={styles.dividerDescStyle}
            description={"Hoy a las 09:12 AM"}
          />
        </View>
        {notes.map((note: NoteProps, index) => (
          <Note key={`note_${index}`} note={note} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Content;
