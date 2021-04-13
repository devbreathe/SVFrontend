import { useHistory } from "react-router-dom";
import {Card, Button, Input, Row, Col} from "antd";
import "../styles/login.css";

export const Login = () => {
    const history = useHistory();
    const onLogin = () => {
        
        history.push("/dashboard");
    }

    return(
        <section className="login_content">
            <Row>
                <Col span={12}>
                    <Card>
                        <Input placeholder="Usuario"/>
                        <Input.Password placeholder="Contraseña" />
                        <Button type="primary" size="large" onClick={onLogin}>Login</Button>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}
