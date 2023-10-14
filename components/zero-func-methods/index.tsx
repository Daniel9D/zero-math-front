import { useMaskito } from "@maskito/react";
import { InfoCircledIcon, PlayIcon } from "@radix-ui/react-icons";
import { Box, Button, Callout } from "@radix-ui/themes";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { matrixInput } from "../../lib/mask";
import BaseComponent from "../base/fieldComponent";
import "../base/styles.scss";
import ZeroFuncFieldsHelpComponent from "./help";

export default function ZeroFuncFieldsComponent(props: any) {
    //eq,A,b,interacoes,precision
    const AmatrixMask = useMaskito({ options: matrixInput });
    const BmatrixMask = useMaskito({ options: matrixInput });
    const [data, setData] = useState(
        {
            'tipo_equacao': props.tipo,
            'equacao': '',
            'equacao_derivada': '',
            'ponto_a': 0, 'ponto_b': 0,
            'nro_reps': 0, 'precisao': 0
        })
    const [errMessage, seterrMessage] = useState(null);
    const saveData = (Data: any) => {
        setData(Data);
    }

    async function sendData() {
        try {
            const roots = await axios.post('/api/calculate', data)
            props.getResults(roots.data)

        } catch (err) {
            console.log(err)
            if (err instanceof AxiosError)
                seterrMessage(err.response?.data.err);
        }
    }

    useEffect(() => {
        setTimeout(() => { seterrMessage(null) }, 5000)
    }, [errMessage])

    return (
        <>
            <Box>
                <Box className="Field">
                    <Box className="inner-box" >
                        {errMessage &&
                            <Callout.Root color="red" style={{ width: "100%" }}>
                                <Callout.Icon>
                                    <InfoCircledIcon />
                                </Callout.Icon>
                                <Callout.Text color="red">
                                    {errMessage}
                                </Callout.Text>
                            </Callout.Root>
                        }
                        <BaseComponent dataFunc={saveData} data={data}></BaseComponent>

                        <Box style={{ justifyContent: 'center', margin: '10px' }}>
                            <Button onClick={sendData} size={"3"} >
                                <PlayIcon radius="full" />
                                Calcular
                            </Button>

                            <ZeroFuncFieldsHelpComponent method={props.tipo} />

                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}