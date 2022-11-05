import React, { Component } from 'react'

export default class SeatInformation extends Component {
    renderGhe = (danhSachGhe) => {
        return danhSachGhe.map((ghe, index) => {
            let cssGheDaDat = "";
            let disabled = false
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }
            return <button disabled={disabled} className={`ghe ${cssGheDaDat}`} key={index}>
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
