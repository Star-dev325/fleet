import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Button, SearchBar, Checkbox } from "@/components/core";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/shared";
import styles from "./styles";

type ActivityItem = {
  id: number;
  name: string;
}

type ActivityCategory = {
  id: number;
  category: string;
  list: ActivityItem[];
}

type EventItem = {
  id: number;
  name: string;
  start: Date;
  end: Date;
}

const Tracker: React.FC = () => {
  const activities:ActivityCategory[] = [{
      id: 2,
      category: 'Horas de Parada Planificada',
      list: [
        {id: 201, name: 'Chequeo de Equipo (Inspección rutinaria) / Check List'},
        {id: 202, name: 'Charla / Reparto de Guardia / Capacitación'},
        {id: 203, name: 'Registro / Revisión de documentos en Bocamina'},
        {id: 204, name: 'Chequeo de Labor'},
        {id: 205, name: 'Liberación de Labor'},
        {id: 206, name: 'Refrigerio'},
        {id: 207, name: 'Lavado de Equipo'},
        {id: 208, name: 'Abastecimiento de Combustible'},
      ]
    },{
      id: 3,
      category: 'Horas Perdidas',
      list: [
        {id: 301, name: 'Desate de Labor'},
        {id: 302, name: 'Espera para inicio de carguío'},
        {id: 303, name: 'Falta de Scoop'},
        {id: 304, name: 'Espera Operador Scoop'},
        {id: 305, name: 'Scoop inoperativo'},
        {id: 306, name: 'Falta de Carga'},
        {id: 307, name: 'Espera en Parrilla'},
        {id: 308, name: 'Espera Zona de descarga - Planta, cancha'},
        {id: 309, name: 'Falta de Vigía'},
        {id: 310, name: 'Traslado en Vacío'},
        {id: 311, name: 'Cambio de Orden'},
        {id: 312, name: 'Tiempo en demora en ubicar al supervisor'},
        {id: 313, name: 'Parada por condiciones Climáticas'},
        {id: 314, name: 'Incidente / Accidente'},
        {id: 315, name: 'Atascamiento del Equipo'},
        {id: 316, name: 'Instalación y / o orden de tuberías'},
        {id: 317, name: 'Instalación y/o falta de iluminación'},
        {id: 318, name: 'Obstrucción de Vías con agua o equipo'},
        {id: 319, name: 'Tráfico en la vía'},
        {id: 320, name: 'Ventilación deficiente'},
        {id: 321, name: 'Falta de combustible'},
        {id: 322, name: 'Despeje de Voladura'},
        {id: 323, name: 'Parqueo'},
        {id: 324, name: 'Volquete en Stand By'},
        {id: 325, name: 'Descarguío de Bancos'},
        {id: 326, name: 'Cuneteo de Equipo'},
        {id: 327, name: 'Paradas planificadas y coordinadas'},
      ]
    },{
      id: 4,
      category: 'Horas de Mantenimiento ',
      list: [
        {id: 401, name: 'Mantenimiento Programado / Preventivo'},
        {id: 402, name: 'Mantenimiento Correctivo'},
        {id: 403, name: 'Mantenimiento Taller Soldadura'},
        {id: 404, name: 'Mantenimiento Llantas'},
        {id: 405, name: 'Mantenimiento de Tolva / Loras'},
        {id: 406, name: 'Equipo en taller'},
        {id: 407, name: 'Equipo inoperativo'},
        {id: 408, name: 'Reparación Mecánica'},
        {id: 409, name: 'Reparación Eléctrica'},
        {id: 410, name: 'Cambio de Llantas'},
        {id: 411, name: 'Reparación de Llantas'},
        {id: 412, name: 'Traslado por Falla Mecánica - Eléctrica - Neumáticos'},
        {id: 413, name: 'Tiempo de llegada para atención Mecánica (Llegada del mecánico)'},
        {id: 414, name: 'Tiempo de demora en ubicar al mecánico'},
      ]
    },{
      id: 5,
      category: 'Daños Operacionales',
      list: [
        {id: 501, name: 'Carguío de Bancos'},
        {id: 502, name: 'Rotura de Muelle'},
        {id: 503, name: 'Daño Tolva'},
        {id: 504, name: 'Daño Llanta'},
        {id: 505, name: 'Cuneteo de Equipo'},
        {id: 506, name: 'Daño compuerta'},
        {id: 507, name: 'Daño Volquete'},
      ]
    },{
      id: 6,
      category: 'Condiciones Saturno',
      list: [
        {id: 601, name: 'Falta de Operador'},
        {id: 602, name: 'Bloqueo de Equipos'},
      ]
    }]

  const router = useRouter();
  const [category, setCategory] = useState<number>(2);
  const [search, setSearch] = useState<string>('');
  const [startTime, setStartTime] = useState<Date>();
  const [endTime, setEndTime] = useState<Date>();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [checkedActivityId, setCheckedActivityId] = useState<number>();
  const [checkedActivityName, setCheckedActivityName] = useState<string>();
  const [trackPlayStatus, setTrackPlayStatus] = useState<boolean>(false);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setSearch('');
  }, [category])

  const activityList = useMemo(() => {
    let activity:ActivityCategory = activities.filter((item) => item.id == category)[0];
    if (search) {
      activity = {
        id: activity.id,
        category: activity.category,
        list: activity.list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())),
      };
    }
    return activity
  }, [category, search])

  const [events, setEvents] = useState<EventItem[]>([]);

  const timeTrack = () => {
    if (trackPlayStatus) {
      setTrackPlayStatus(false)
      setStartTime(undefined)
      setEndTime(undefined)
    } else {
      setTrackPlayStatus(true)
      setStartTime(currentTime)
    }
  }

  const cancelTimeTrack = () => {
    setTrackPlayStatus(false)
    setStartTime(undefined)
    setEndTime(undefined)
  }

  const completeTimeTrack = () => {
    setTrackPlayStatus(false)
    setEndTime(currentTime)
  }

  const handleAddTracking = () => {
    if (
      !checkedActivityId ||
      !checkedActivityName ||
      !startTime ||
      !endTime
    ) {
      return;
    }

    const newEvent = {
      id: checkedActivityId, 
      name: checkedActivityName, 
      start: startTime, 
      end: endTime,
    };
    setEvents([
      ...events,
      newEvent
    ])

    setCheckedActivityId(undefined)
    setCheckedActivityName(undefined)
    setStartTime(undefined)
    setEndTime(undefined)
  }

  const onClickPrev = () => {
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button
          onClickButton={onClickPrev}
          buttonStyle={styles.prevBtn}
          icon={
            <FontAwesome6
              name="chevron-left"
              size={wp(1.2)}
              color={Colors.white}
            />
          }
        />
        <View style={styles.operator}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.titleView}>
              <Text style={[styles.title, {color: Colors.white}]}>Actividad </Text>
              <Text style={[styles.title, {color: Colors.success}]}>improductiva</Text>
            </View>
            <Text style={styles.desc}>
              Selecciona la actividad y comienza a medir el tiempo
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: wp(1)}}>
            <View style={styles.tracker}>
              <Text style={styles.time}>{currentTime.getHours()}:{currentTime.getMinutes()}</Text>
              <Text style={styles.desc}>
                {trackPlayStatus ? "Duración total" : "¿Listo?"}</Text>
            </View>
            <View style={styles.trackOperator}>
              <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Button
                  buttonStyle={[
                    styles.cancelBtn,
                    !trackPlayStatus && {backgroundColor: Colors.grey}
                  ]}
                  icon={
                    <FontAwesome6
                      name="xmark"
                      size={wp(1.2)}
                      color={Colors.white}
                    />
                  }
                  disabled={!trackPlayStatus}
                  onClickButton={cancelTimeTrack}
                />
              </View>
              <Button
                buttonStyle={styles.pauseBtn}
                icon={
                  <FontAwesome6
                    name={trackPlayStatus ? "pause" : "play"}
                    size={wp(2)}
                    color={Colors.white}
                  />
                }
                onClickButton={timeTrack}
              />
              <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                <Button
                  buttonStyle={[
                    styles.confirmBtn,
                    !trackPlayStatus && {backgroundColor: Colors.grey},
                  ]}
                  icon={
                    <FontAwesome6
                      name="check"
                      size={wp(1.2)}
                      color={Colors.white}
                    />
                  }
                  disabled={!trackPlayStatus}
                  onClickButton={completeTimeTrack}
                />
              </View>
            </View>
          </View>
          <View style={styles.activityChecker}>
            <View style={styles.activityCategory}>
              {activities.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.activityItem,
                    item.id == category && {
                      backgroundColor: Colors.grey
                    }
                  ]}
                  onPress={() => setCategory(item.id)}
                >
                  <Text style={[
                    styles.activityTitle,
                    item.id == category && {
                      color: Colors.white
                    }
                  ]}>
                    {item.id}. {item.category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.activityChecklist}>
              <SearchBar
                style={styles.search}
                value={search}
                placeholder="Buscar por código..."
                onChange={(value) => setSearch(value)}
              />
              <ScrollView style={styles.checklist}>
                {activityList.list.map((item: any, index: number) => (
                  <TouchableOpacity 
                    key={index} 
                    style={[
                      styles.checklistItem,
                      item.id == checkedActivityId && {
                        backgroundColor: "#84CC1677"
                      }
                    ]}
                    onPress={() => {
                      setCheckedActivityId(item.id)
                      setCheckedActivityName(item.name)
                    }}
                  >
                    <Text style={styles.checkItemTitle} numberOfLines={1} ellipsizeMode="tail">
                      {item.id} - {item.name}
                    </Text>
                    <Checkbox
                      checked={item.id == checkedActivityId}
                      checkedBoxStyle={[
                        styles.checkButton,
                        item.id == checkedActivityId && {backgroundColor: Colors.success},
                      ]}
                    />
                    {/* <Button
                      buttonStyle={[
                        styles.checkButton,
                        // { backgroundColor: Colors.grey },
                      ]}
                      icon={
                        <FontAwesome6
                          name="check"
                          size={wp(1.2)}
                          color={Colors.emeraldGreen}
                        />
                      }
                    /> */}
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={styles.checkedItemView}>
                <Text style={{fontSize: fp(1), color: Colors.white}}>
                  Seleccionado 
                </Text>
                {checkedActivityId && 
                  <View style={styles.checkedItem}>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.checkedItemTitle}>
                      {checkedActivityId} - {checkedActivityName}
                    </Text>
                    <Button
                      buttonStyle={{
                        backgroundColor: Colors.grey,
                        padding: wp(0.2),
                      }}
                      icon={
                        <FontAwesome6
                          name="xmark"
                          size={wp(1)}
                          color={Colors.secondary}
                        />
                      }
                    />
                  </View>
                }
              </View>
            </View>
          </View>
          <View>
            <Button
              text="Añadir"
              // icon={
              //   <FontAwesome6
              //     name="arrow-right"
              //     size={wp(1)}
              //     color={Colors.white}
              //   />
              // }
              buttonStyle={styles.continueButton}
              textStyle={styles.continueText}
              onClickButton={handleAddTracking}
            />
          </View>
        </View>
      </View>
      <View style={styles.events}>
        <View style={styles.eventTitleView}>
          <Text style={styles.eventTitle}>Eventos registrados</Text>
          <Text style={styles.eventTitle}>3 total</Text>
        </View>
        <ScrollView>
          {events.map((event, index) => (
            <View key={index} style={styles.eventItem}>
              <View style={styles.eventNumberView}>
                <Text style={{fontSize: wp(0.7), color: Colors.gray}}>Código</Text>
                <Text style={styles.eventNumber}>{event.id}</Text>
              </View>
              <View style={styles.eventDetail}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.eventDetailName}>
                  {event.name}
                </Text>
                <Text style={styles.eventDetailTime}>
                  <FontAwesome6
                    name="calendar-days"
                    size={wp(1)}
                  />
                  &nbsp;{event.start.getHours()}:{event.start.getMinutes()} - {event.end.getHours()}:{event.end.getMinutes()} -&nbsp;
                  <FontAwesome6
                    name="clock"
                    size={wp(1)}
                  />
                  &nbsp;{Math.floor((event.end.getTime() - event.start.getTime()) / (1000 * 60))}min
                </Text>
                <Text style={styles.eventTimePast}>
                  hace {Math.floor((currentTime.getTime() - event.start.getTime()) / (1000 * 60))} min
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Tracker;
