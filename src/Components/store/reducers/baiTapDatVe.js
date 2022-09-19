const stateDefault = {
        // "danhSachGhe": [
        //         {"soGhe":"A1","gia":75000,"daDat":false},
        //         {"soGhe":"A2","gia":75000,"daDat":false},
        //         {"soGhe":"A3","gia":75000,"daDat":false},
        //         {"soGhe":"A4","gia":75000,"daDat":false},
        //         {"soGhe":"A5","gia":75000,"daDat":false},
        //         {"soGhe":"A6","gia":75000,"daDat":false},
        //         {"soGhe":"A7","gia":75000,"daDat":false},
        //         {"soGhe":"A8","gia":75000,"daDat":false},
        //         {"soGhe":"A9","gia":75000,"daDat":false},
        //         {"soGhe":"A10","gia":75000,"daDat":false},
        //         {"soGhe":"A11","gia":0,"daDat":true},
        //         {"soGhe":"A12","gia":0,"daDat":true}

        //       ] ,
        "tenNguoiDat": "",
        "soLuongGheDat": "",
        "danhSachGheDaChon": [],
        "disableBTN" : true
}

export const baiTapDatVe = (state = stateDefault, action) => {
        switch (action.type) {
                case 'GET_VALUE': {
                        state.tenNguoiDat = action.payload.valueUser
                        state.soLuongGheDat = action.payload.valueSeat
                        state.disableBTN = false

                        return {...state}
                }
                case 'SAVE_SEAT': {
                        // state.danhSachGheDaChon.push(action.payload.Seat)  

                        let danhSachGheDaChon = [...state.danhSachGheDaChon];
                        console.log(danhSachGheDaChon);

                        const index = danhSachGheDaChon.findIndex(soGhe => soGhe === action.payload.Seat)
                        if (index === -1) {
                                danhSachGheDaChon.push(action.payload.Seat)
                        }
                        else {
                                danhSachGheDaChon.splice(index, 1)
                        }

                        if(danhSachGheDaChon.length == state.soLuongGheDat){
                                state.disableBTN = true
                        }
                         console.log(state);
                        return { ...state,danhSachGheDaChon }
                       
                }

                default:
                        return {...state}
        }

}