import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  energy:30,
  range:50,
  fluid:10,
  tireWear:90,
  barChartData:[134, 173,112, 190, 134, 219, 163],
  lineChartData:[14, 13,112, 190, 14, 21, 63],
  AssetsLineChart:[141, 131,1121, 1901, 141, 211, 613]
}

export const userDataReducer = createSlice({
  name: 'userData',
  initialState,
  reducers: {},
})


export default userDataReducer.reducer