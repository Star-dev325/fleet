import React, { useState } from "react";
import { Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Button, Pagination } from "@/components/core";
import { useCheckListContext } from "@/hooks/checklist.hook";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Observation: React.FC = () => {
  const pageSize = 6;
  const settings = [
    {
      name: "Niveles",
      description:
        "Especifique las condiciones de los niveles según corresponda",
      options: [
        {
          name: "Aceite de motor",
          checked: true,
        },
        {
          name: "Aceite de dirección",
          checked: true,
        },
        {
          name: "Aceite de hidráulico",
          checked: true,
        },
        {
          name: "Liquido de freno",
          checked: true,
        },
        {
          name: "Combustible",
          checked: true,
        },
        {
          name: "Refrigerante",
          checked: false,
        },
      ],
    },
    {
      name: "Engrase",
      description: "Especifique las condiciones del engrase según corresponda",
      options: [
        {
          name: "Pines",
          checked: true,
        },
        {
          name: "Bocinas de tolva/grúa",
          checked: true,
        },
        {
          name: "Cardanes",
          important: true,
          checked: true,
        },
        {
          name: "Crucetas",
          important: true,
          checked: true,
        },
        {
          name: "Chumaceras",
          important: true,
          checked: true,
        },
      ],
    },
    {
      name: "Engrase",
      description: "Especifique las condiciones del engrase según corresponda",
      options: [
        {
          name: "Temperatura de aceite de motor",
          checked: true,
        },
        {
          name: "Temperatura de refrigerante de motor.",
          important: true,
          checked: true,
        },
        {
          name: "Horómetro y tacómetro",
          important: true,
          checked: true,
        },
        {
          name: "Tablero de control",
          important: true,
          checked: true,
        },
        {
          name: "Estructura Tolva/Grúa",
          important: true,
          checked: true,
        },
      ],
    },
    {
      name: "Seguridad y Medio Ambiente",
      description:
        "Especifique las condiciones de seguridad y medio ambiente según corresponda",
      options: [
        {
          name: "Faros y luces en general",
          important: true,
          checked: true,
        },
        {
          name: "Circulina",
          checked: true,
        },
        {
          name: "Alarma de retroceso",
          important: true,
          checked: true,
        },
        {
          name: "Claxon",
          checked: true,
        },
        {
          name: "Cintas reflectivas",
          checked: true,
        },
        {
          name: "S.O.A.T.",
          checked: true,
        },
        {
          name: "Tarjeta de propiedad",
          checked: true,
        },
        {
          name: "Freno de servicio",
          important: true,
          checked: true,
        },
        {
          name: "Freno de parqueo",
          important: true,
          checked: true,
        },
        {
          name: "Botón parada de emergencia de Grúa",
          checked: true,
        },
        {
          name: "Extintor, cuñas de seguridad, cono",
          checked: true,
        },
        {
          name: "Correa de seguridad",
          important: true,
          checked: true,
        },
        {
          name: "Barras antivuelco",
          important: true,
          checked: true,
        },
        {
          name: "Asiento del operador",
          checked: true,
        },
        {
          name: "Espejos, Parabrisas y limpiaparabrisas",
          checked: true,
        },
        {
          name: "Línea a tierra (cadena)",
          important: true,
          checked: true,
        },
        {
          name: "Llantas (cortes, presión, cocada)",
          checked: true,
        },
        {
          name: "Cilindros hidráulicos (brazo/gata estabilizadora)",
          checked: true,
        },
        {
          name: "Mangueras del sistema hidráulico",
          checked: true,
        },
        {
          name: "Gancho de la grúa (seguro)",
          checked: true,
        },
        {
          name: "Mangueras, abrazaderas y conectores",
          checked: true,
        },
        {
          name: "Tanques de Combustible, aceite hidráulico",
          checked: true,
        },
        {
          name: "Existen fugas de aceite y/o petróleo",
          checked: true,
        },
      ],
    },
    {
      name: "Componentes Principales",
      description:
        "Especifique las condiciones de estado de componentes principales según corresponda",
      options: [
        {
          name: "Motor de combustión (Diesel)",
          checked: true,
        },
        {
          name: "Caja de dirección",
          checked: true,
        },
        {
          name: "Ejes delantero y posterior",
          checked: true,
        },
        {
          name: "Estado del equipo, (presenta choques)",
          checked: true,
        },
        {
          name: "Toma fuerza para grúas",
          checked: true,
        },
        {
          name: "Baterías",
          checked: true,
        },
        {
          name: "Control remoto de Grúa",
          checked: true,
        },
        {
          name: "Sistema de dirección pines y bocinas",
          checked: true,
        },
        {
          name: "Paquete de muelles, amortiguadores",
          checked: true,
        },
        {
          name: "Enfriador hidráulico",
          checked: true,
        },
      ],
    },
  ];

  const { setCompleteModalVisible } = useCheckListContext();

  const [step, setStep] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const setting = settings[step];

  const onClickContinue = (): void => {
    if (step === settings.length - 1) {
      setCompleteModalVisible(true);
    } else {
      setPage(0);
      setStep(step + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.stepIndex}>{step + 1}. </Text>
        <Text style={styles.title}>{setting.name}</Text>
      </View>
      <View style={styles.descView}>
        <Text style={styles.desc}>{setting.description}</Text>
      </View>
      <View style={styles.optionContent}>
        {setting.options.map((option, index) => {
          if (index >= pageSize * page && index < pageSize * (page + 1)) {
            return (
              <View style={styles.optionView} key={`option_${index}`}>
                <View style={styles.optionNameView}>
                  <FontAwesome6
                    name="bolt"
                    size={wp(1.2)}
                    color={option.important ? Colors.danger : Colors.dark}
                  />
                  <Text
                    style={[
                      styles.optionName,
                      option.important && { color: Colors.danger },
                    ]}
                  >
                    {option.name}
                  </Text>
                </View>
                <View style={styles.optionCheckView}>
                  <Button
                    buttonStyle={[
                      styles.checkButton,
                      !option.checked && { backgroundColor: Colors.grey },
                    ]}
                    icon={
                      option.checked ? (
                        <FontAwesome6
                          name="check"
                          size={wp(1.2)}
                          color={Colors.emeraldGreen}
                        />
                      ) : null
                    }
                  />
                  <Button
                    buttonStyle={[
                      styles.unCheckButton,
                      option.checked && { backgroundColor: Colors.grey },
                    ]}
                    icon={
                      !option.checked ? (
                        <FontAwesome6
                          name="xmark"
                          size={wp(1.2)}
                          color={Colors.red}
                        />
                      ) : null
                    }
                  />
                </View>
              </View>
            );
          }
        })}
        <View style={styles.paginationView}>
          <Pagination
            paginationStyle={styles.pagination}
            pageSize={pageSize}
            total={setting.options.length}
            current={page}
            onBefore={() => setPage(page - 1)}
            onNext={() => setPage(page + 1)}
          />
        </View>
        <View style={styles.continueButtonView}>
          <Button
            onClickButton={onClickContinue}
            text="Continuar"
            icon={
              <FontAwesome6
                name="arrow-right"
                size={wp(1)}
                color={Colors.white}
              />
            }
            buttonStyle={styles.continueButton}
            textStyle={styles.continueText}
          />
        </View>
      </View>
    </View>
  );
};

export default Observation;
