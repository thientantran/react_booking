import React, { Component } from 'react'

export default class BookingInformation extends Component {
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
                            <th>Tổng tiền</th>
                            <th></th>
                            <th></th>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


