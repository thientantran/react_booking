import React, { Component } from 'react'
import { connect } from 'react-redux';
import { huyGheAction } from '../Redux/Actions/ProjectActions';
class BookingInformation extends Component {
    render() {
        return (
            <div>
                <div className="mt-5">
                    <button className="gheDuocChon"></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế đang đặt</span>
                    <br />
                    <button className="ghe" style={{ margin: 0 }}></button>
                    <span className='text-light' style={{ fontSize: '30px' }}>Ghế chưa đặt</span>
                </div>
                <div className='mt-5'>
                    <table className="table text-light" border="2">
                        <thead>
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index}>
                                    <th>{gheDangDat.soGhe}</th>
                                    <th>{gheDangDat.gia.toLocaleString()}</th>
                                    <th><button onClick={() => {
                                        this.props.dispatch(huyGheAction(gheDangDat))
                                    }}>Hủy</button></th>
                                </tr>
                            })}
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>Tổng Tiền</th>
                                <th>{this.props.danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
                                    return tongTien += gheDangDat.gia
                                }, 0).toLocaleString()}</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.ProjectReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(BookingInformation)