import {Button} from "antd";
import { useState } from "react";


const Box = () => {

    const [disable, setDisable ] = useState(false);

    const openBox = () => {
        setDisable((disable) => !disable);
      }

    return(
        <div>
            <Button type="primary"  disabled={disable} >Abrir caja</Button>
        </div>
    )
}

export default Box;