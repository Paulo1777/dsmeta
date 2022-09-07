import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../Notification button'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="ds-meta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
</div>

                    <div className="ds-meta-form-control-container">
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="dsmeta-form-control"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>


                <div>
                    <table className="dsmeta-sales-table">
                        <thead>
                            <tr>
                                <th className="show992">ID</th>
                                <th className="show576">Data</th>
                                <th> Vendedor</th>
                                <th className="show992">Visitas</th>
                                <th className="show992">Vendas</th>

                                <th> Total</th>
                                <th> Notificar</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th className="show992">#1777 </th>
                                <th className="show576">04/09/2022</th>
                                <th> Anakin </th>
                                <th className="show992">99</th>
                                <th className="show992">17</th>
                                <th>R$55300.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>

                            <tr>
                                <th className="show992">#1777 </th>
                                <th className="show576">04/09/2022</th>
                                <th> Anakin </th>
                                <th className="show992">99</th>
                                <th className="show992">17</th>
                                <th>R$55300.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <th className="show992">#1777 </th>
                                <th className="show576">04/09/2022</th>
                                <th> Anakin </th>
                                <th className="show992">99</th>
                                <th className="show992">17</th>
                                <th>R$55300.00</th>
                                <th>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton />
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    </table >
                </div >
            </div >
            )
}


            export default SalesCard
