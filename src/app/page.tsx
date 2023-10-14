"use client"

import { Box, Container, Flex, Tabs, Text, Theme } from "@radix-ui/themes";
import { useState } from "react";
import GraphComponent from "../../components/graph";
import ZeroFuncFieldsComponent from "../../components/zero-func-methods";
// 
export default function Home() {
  const [x, setX] = useState([]);
  const [y, sety] = useState([]);
  const [roots, setroots] = useState([]);
  const getResults = (res: any) => {
    console.log(">>", res)
    setX(res.x);
    sety(res.y);
    setroots(res.raizes);
  }

  return (
    <>
      <div className="gradient"></div>
      <Theme>
        <Container className="conent" style={{ borderRadius: 10 }}>
          <Box mb="4">
            <Text align="center" weight="bold" as="div" size="6">Encontrar Raiz Aproximada De função </Text>
          </Box>

          <GraphComponent X={x} Y={y} root={roots} />
          <Flex display="flex" direction="column">
            <Tabs.Root defaultValue="bissection">
              <Tabs.List>
                <Tabs.Trigger value="bissection">Bissecção</Tabs.Trigger>
                <Tabs.Trigger value="NewtonRaph">Newton Raph</Tabs.Trigger>
                <Tabs.Trigger value="Secante">Secante</Tabs.Trigger>
                <Tabs.Trigger value="FalsaPosicao">Falsa Posicao</Tabs.Trigger>
                <Tabs.Trigger value="metPontoFixo">Ponto Fixo</Tabs.Trigger>
              </Tabs.List>

              <Box px="4" pt="3" pb="2">
                <Tabs.Content value="bissection">
                  <ZeroFuncFieldsComponent getResults={getResults} tipo={1}></ZeroFuncFieldsComponent>
                </Tabs.Content>

                <Tabs.Content value="NewtonRaph">
                  <ZeroFuncFieldsComponent getResults={getResults} tipo={2}></ZeroFuncFieldsComponent>
                </Tabs.Content>
                <Tabs.Content value="Secante">
                  <ZeroFuncFieldsComponent getResults={getResults} tipo={3}></ZeroFuncFieldsComponent>
                </Tabs.Content>
                <Tabs.Content value="FalsaPosicao">
                  <ZeroFuncFieldsComponent getResults={getResults} tipo={4}></ZeroFuncFieldsComponent>
                </Tabs.Content>
                <Tabs.Content value="metPontoFixo">
                  <ZeroFuncFieldsComponent getResults={getResults} tipo={5}></ZeroFuncFieldsComponent>
                </Tabs.Content>
              </Box>
            </Tabs.Root>

          </Flex>
        </Container>
      </Theme>
    </>
  );
}
