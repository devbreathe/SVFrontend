import {useState} from "react";
import {Statistic, Row, Col, Card} from "antd";

const Box = () => {

    const [sales, setSales] =  useState({
        total: "30.000",
        bills: "40.000",
        money: "5.000",
        totalToday: 0,
        refills: "4.000",
        calls: "2.000",
        sweets: "1.000"});
    return(
        <section>
            <Row gutter={[8, 20]} >
                <Col xs={24} sm={24} md={12}>
                    <Card>
                    <Statistic title="Total dia anterios: " value={sales.total} />
                    <Statistic title="Billetes: " value={sales.bills} />
                    <Statistic title="Monedas: " value={sales.money} />
                    <Statistic title="Total del dia: " value={sales.totalToday} />
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={12}>
                   <Card>
                   <Statistic title="Recargas: " value={sales.refills} />
                    <Statistic title="Llamadas: " value={sales.calls} />
                    <Statistic title="Monedas: " value={sales.sweets} />
                   </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Box;