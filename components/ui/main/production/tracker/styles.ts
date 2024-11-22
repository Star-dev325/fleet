import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { RFPercentage as fp } from "react-native-responsive-fontsize";
import { Colors } from "@/constants/shared";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: wp(2),
  },
  main: {
    flex: 1,
  },
  operator: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(2),
  },
  events: {
    width: "30%",
    height: "100%",
    borderRadius: wp(1),
    borderColor: Colors.gray,
    borderWidth: wp(0.2),
    padding: wp(1),
  },
  prevBtn: {
    width: wp(4),
    backgroundColor: Colors.blueGray,
  },
  titleView: {
    flexDirection: 'row',
  },
  title: {
    fontSize: fp(2),
    fontWeight: "bold",
  },
  desc: {
    fontSize: fp(1.3),
    color: Colors.light,
  },
  tracker: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.5),
    alignItems: 'center',
    backgroundColor: Colors.blueGray,
    borderRadius: wp(1.5),
  },
  time: {
    fontSize: fp(3),
    fontWeight: 'bold',
    color: Colors.white,
  },
  trackOperator: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(0.5),
    height: "100%",
    flexDirection: 'row',
    gap: wp(0.5),
  },
  pauseBtn: {
    backgroundColor: Colors.success,
    color: Colors.white,
    height: wp(4.5),
    width: wp(4.5),
  },
  cancelBtn: {
    backgroundColor: Colors.red,
    color: Colors.white,
    height: wp(4),
    width: wp(4),
  },
  confirmBtn: {
    backgroundColor: Colors.blue,
    color: Colors.white,
    height: wp(4),
    width: wp(4),
  },
  activityChecker: {
    width: '100%',
    height: wp(20),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(1),
  },
  activityCategory: {
    width: "40%",
    borderRadius: wp(1),
    backgroundColor: Colors.blueGray,
    padding: wp(0.3),
  },
  activityItem: {
    width: '100%',
    padding: wp(1),
    borderRadius: wp(1),
  },
  activityTitle: {
    fontSize: fp(1.3),
    color: Colors.secondary,
    // paddingRight: wp(1),
  },
  checkItemTitle: {
    flex: 1,
    fontSize: fp(1.3),
    color: Colors.white,
    paddingRight: wp(1),
  },
  activityChecklist: {
    width: "40%",
    borderRadius: wp(1),
    padding: wp(0.3),
    flexDirection: 'column',
    gap: wp(0.7),
  },
  search: {
    width: '100%',
    color: Colors.secondary,
  },
  checklist: {
    flex: 1,
  },
  checkedItem: {
    flex: 1,
    padding: wp(0.2),
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: wp(0.5),
    justifyContent: 'space-between',
  },
  checkedItemTitle: {
    fontSize: fp(1), 
    color: Colors.secondary,
    flex: 1,
  },
  checkedItemView: {
    flexDirection:'row', 
    alignItems: 'center',
    gap: wp(1),
  },
  checklistItem: {
    width: '100%',
    padding: wp(1),
    marginVertical: wp(0.3),
    backgroundColor: Colors.blueGray,
    borderRadius: wp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkButton: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(0.5),
    marginRight: wp(0.5),
    padding: wp(0),
  },
  continueButton: {
    width: "50%",
    backgroundColor: Colors.success,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  continueText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: fp(1.3),
    width: '100%',
    textAlign: 'center',
  },
  eventTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: wp(1),
  },
  eventTitle: {
    color: Colors.white,
    fontSize: fp(1.3),
  },
  eventItem: {
    padding: wp(1),
    borderRadius: wp(1),
    backgroundColor: Colors.blueGray,
    flexDirection: 'row',
    marginVertical: wp(0.2),
  },
  eventNumberView: {
    padding: wp(0.5),
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderRadius: wp(1)
  },
  eventDetail: {
    flex: 1,
    paddingHorizontal: wp(0.5)
  },
  eventNumber: {
    fontSize: wp(1.2),
    color: Colors.white,
  },
  eventDetailName: {
    fontSize: wp(1.2),
    color: Colors.white,
  },
  eventDetailTime: {
    fontSize: wp(1),
    color: Colors.gray,
  },
  eventTimePast: {
    width: '100%', 
    textAlign: 'right',
    fontSize: wp(1),
    color: Colors.gray,
  }
});

export default styles;
