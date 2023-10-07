import { Box, Text, TextFieldInput } from "@radix-ui/themes";
import "./styles.scss";
export default function BaseComponent(props: any) {
    //eq,A,b,interacoes,precision


    return (
        <>
            <Box>

                <Box className="inner-box" >
                    <Box style={{ width: '100%' }}>
                        <Text size="2" >{"Equação"}</Text>
                        <TextFieldInput
                            size="3"
                            onInput={(e) => props.dataFunc({ ...props.data, 'equacao': e.currentTarget.value })}
                            placeholder="Escreva aqui sua equação formato matlab"
                        />
                    </Box>
                    {props.data.tipo_equacao == 2 ? (
                        <Box style={{ width: '100%' }}>
                            <Text size="2" >{"Equação Derivada"}</Text>
                            <TextFieldInput
                                size="3"
                                onInput={(e) => props.dataFunc({ ...props.data, 'equacao_derivada': e.currentTarget.value })}
                                placeholder="Escreva aqui sua equação formato matlab"
                            />
                        </Box>
                    ) : (<></>)}


                    <Box style={{ width: '49%' }}>
                        <Text size="3" >{"Ponto A"}</Text>
                        <TextFieldInput
                            size="3"
                            variant="surface"
                            onInput={(e) => props.dataFunc({ ...props.data, 'ponto_a': Number(e.currentTarget.value) })}
                            placeholder="ex 1.1"

                        />
                    </Box>

                    <Box className="BoxItem" style={{ width: '49%', visibility: props.data.tipo_equacao != 2 && props.data.tipo_equacao != 5 ? 'visible' : 'hidden' }}>
                        <Text size="3" >{"Ponto B"}</Text>
                        <TextFieldInput
                            size="3"
                            placeholder="ex 1.2"
                            onInput={(e) => props.dataFunc({ ...props.data, 'ponto_b': Number(e.currentTarget.value) })}
                        />

                    </Box>

                    <Box style={{ width: '49%' }}>
                        <Text size="3">{"Numero maximo de Iterações"}</Text>
                        <TextFieldInput
                            size="3"
                            onChange={(e) => props.dataFunc({ ...props.data, 'nro_reps': Number(e.target.value) })}
                            placeholder="Numero maior que 0"
                        />
                    </Box>

                    <Box style={{ width: '49%' }}>
                        <Text size="3" >{"Erro tolerado"}</Text>
                        <TextFieldInput
                            size="3"
                            onChange={(e) => props.dataFunc({ ...props.data, 'precisao': Number(e.target.value) })}
                            placeholder="0.03 ou 3*10^2"
                        />
                    </Box>
                </Box>
            </Box >

        </>
    )
}