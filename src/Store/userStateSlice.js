import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  energy: 30,
  range: 50,
  fluid: 10,
  tireWear: 90,
  barChartData: [134, 173, 112, 190, 134, 219, 163],
  lineChartData: [14, 13, 112, 190, 14, 21, 63],
  AssetsLineChart: [141, 131, 1121, 1901, 141, 211, 613],
  Msgs: [{
    img: "s",
    text: "Hi, I hope you are doing well, yesterday you have gave a pen This very nice, i am very happy for this.yesterday you have gave a pen This very nice",
    time: "2:30",
    type: "rec",
    sender: "Ahmad"
  },
  {
    img: "sadas",
    text: "yea Im well, Thank you, i am very happy for this.yesterday you have gave a pen This very nice",
    time: "2:30",
    type: "sent",
    to: "Ahmad"
  },],
  contacts: [{
    img: "o",
    name: "Omar Khas",
    status: "Online",
    time: "4:30",
    notif: "3",
  },
  {
    img: "o",
    name: "Marc",
    status: "Online",
    time: "4:30",
    notif: "3",
  },
  {
    img: "o",
    name: "Adham",
    status: "Online",
    time: "4:30",
    notif: "3",
  },
  {
    img: "o",
    name: "Ali",
    status: "Online",
    time: "4:30",
    notif: "3",
  },
  {
    img: "s",
    name: "Ahmad",
    status: "Online",
    time: "8:30",
    notif: "1",
  }],
  cars: [
    {
      name: "Mini",
      kms: "20kms",
      rate: "20/hr",
      percentage: "36%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Mini1",
      kms: "20kms1",
      rate: "20/hr1",
      percentage: "36%1",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Mini2",
      kms: "20kms2",
      rate: "20/2hr",
      percentage: "326%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Min3i",
      kms: "20kms3",
      rate: "20/h3r",
      percentage: "363%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Min4i",
      kms: "20k4ms",
      rate: "204/hr",
      percentage: "364%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Mi5ni",
      kms: "20k5ms",
      rate: "20/5hr",
      percentage: "356%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "Mi6ni",
      kms: "20km6s",
      rate: "20/h66r",
      percentage: "366%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "M7ini",
      kms: "20k7ms",
      rate: "207/hr",
      percentage: "367%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
    {
      name: "M7ini",
      kms: "20k7ms",
      rate: "207/hr",
      percentage: "367%",
      type: "manual",
      classX: "coupe",
      passengers: 4,
    },
  ],
};

export const userDataReducer = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setMsgs:(state,{payload})=>{
      state.Msgs = [...state.Msgs,payload]
    },
    handleSend:(state,{payload})=>{
      const current = new Date();
      const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      let t = {
        img: "s",
        text: payload.msg,
        time: time.substring(1),
        type: "sent",
        to: payload.name
      };
      setMsgs(t);
    }
  },
});

export const { setMsgs} = userDataReducer.actions
export default userDataReducer.reducer;
