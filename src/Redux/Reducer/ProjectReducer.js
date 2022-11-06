import { DAT_GHE, HUY_GHE } from "../Types/ProjectType";

const stateDefault = {
    danhSachGheDangDat: [
        { soGhe: "A1", gia: 1000 }
    ]
}
const ProjectReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);

            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }

        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);

            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }

        default: return { ...state }
    }
}
export default ProjectReducer;