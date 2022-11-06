const stateDefault = {
    danhSachGheDangDat: [
        { soGhe: "A1", gia: 1000 }
    ]
}
const ProjectReducer = (state = stateDefault, action) => {
    switch (action.type) {

        default: return { ...state }
    }
}
export default ProjectReducer;