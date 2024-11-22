import React from "react";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/shared";
import styles from "./styles";

const Header: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const activeRoute = path.startsWith("/order")
    ? "order"
    : path.startsWith("/checklist")
    ? "checklist"
    : path.startsWith("/production")
    ? "production"
    : "summary";

  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo/logo-green.png")}
          accessibilityLabel="Logo"
        />
      </View>
      <View style={styles.menuView}>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem}>
            <View
              style={[
                styles.menuIcon,
                activeRoute === "order" && styles.activeMenuIcon,
              ]}
            >
              <FontAwesome6
                name="clipboard"
                size={wp(1.5)}
                color={activeRoute === "order" ? Colors.white : Colors.gray}
              />
            </View>
            <Text
              style={[
                styles.menuText,
                activeRoute === "order" && styles.activeMenuText,
              ]}
            >
              Orden de Trabajo
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/(main)/checklist")}
          >
            <View
              style={[
                styles.menuIcon,
                activeRoute === "checklist" && styles.activeMenuIcon,
              ]}
            >
              <FontAwesome6
                name="list-check"
                size={wp(1.5)}
                color={activeRoute === "checklist" ? Colors.white : Colors.gray}
              />
            </View>
            <Text
              style={[
                styles.menuText,
                activeRoute === "checklist" && styles.activeMenuText,
              ]}
            >
              Checklist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => router.push("/(main)/production")}
          >
            <View
              style={[
                styles.menuIcon,
                activeRoute === "production" && styles.activeMenuIcon,
              ]}
            >
              <FontAwesome6
                name="retweet"
                size={wp(1.5)}
                color={
                  activeRoute === "production" ? Colors.white : Colors.gray
                }
              />
            </View>
            <Text
              style={[
                styles.menuText,
                activeRoute === "production" && styles.activeMenuText,
              ]}
            >
              Ciclo de Producción
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View
              style={[
                styles.menuIcon,
                activeRoute === "summary" && styles.activeMenuIcon,
              ]}
            >
              <FontAwesome6
                name="file-lines"
                size={wp(1.5)}
                color={activeRoute === "summary" ? Colors.white : Colors.gray}
              />
            </View>
            <Text
              style={[
                styles.menuText,
                activeRoute === "summary" && styles.activeMenuText,
              ]}
            >
              Resumen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.toolView}>
        <TouchableOpacity style={styles.notificationBtn}>
          <FontAwesome6 name="sun" size={wp(1.5)} color={Colors.warning} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationBtn}>
          <FontAwesome6 name="bell" size={wp(1.5)} color={Colors.white} />
        </TouchableOpacity>
        <View style={styles.userProfileView}>
          <View style={styles.avatarView}>
            <Image
              style={styles.avatar}
              source={require("@/assets/images/temp/avatar.png")}
              accessibilityLabel="User Avatar"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.userNameView}>
          <View>
            <Text style={styles.hello}>👋 {"Bienvenido"}</Text>
            <Text style={styles.name}>{"Pablo Pérez"}</Text>
          </View>
          <View style={styles.userProfileArrowView}>
            <FontAwesome6
              name="angle-down"
              size={wp(1.5)}
              color={Colors.gray}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
