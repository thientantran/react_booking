import React, { Component } from "react";
import BookingInformation from "./BookingInformation";
import danhSachGheData from "../Data/danhSachGhe.json"
import "./Project.css";
import SeatInformation from "./SeatInformation";

export default class Project extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return <div key={index}>
        <SeatInformation hangGhe={hangGhe} soHangGhe={index} />
      </div>
    })
  }
  render() {
    return (
      <div className="hinhNen">
        <div className="layerAn">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8">
                <h1 className="text-light text-center display-4">Đặt vé xem phim</h1>
                <div className="mt-3 text-light text-center" style={{ fontSize: '25px' }}>Màn hình</div>
                <div className="mt-1" style={{ display: "flex", justifyContent: 'center' }}>
                  <div className="screen"></div>

                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <h1 className="text-light display-5 text-center mt-2">Danh sách ghế được chọn</h1>
                <BookingInformation />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
