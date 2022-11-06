import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../Redux/Actions/ProjectActions';
class SeatInformation extends Component {
    renderGhe = (danhSachGhe) => {
        return danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false
            // Ghế đã đặt
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }
            // Ghế đang đặt
            let cssGheDangDat = "";
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon"
            }

            return <button onClick={() => { this.props.datGhe(ghe) }} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }

    renderSoHang = (danhSachGhe) => {
        return danhSachGhe.map((ghe, index) => {
            return <button key={index} className='rowNumber'>{ghe.soGhe}</button>

        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-3'>
                {this.props.hangGhe.hang} {this.renderSoHang(this.props.hangGhe.danhSachGhe)}
            </div>
        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe(this.props.hangGhe.danhSachGhe)}
            </div>
        }
    }

    render() {
        return (
            <div className='text-light ml-5 mt-3'>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.ProjectReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SeatInformation);