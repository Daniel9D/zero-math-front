import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export default function ZeroFuncFieldsHelpComponent(props: { method: number }) {
    //eq,A,b,interacoes,precision
    const { method } = props?.method ? props : { method: 5 };
    console.log("Metodo", method)

    const [name, setName] = useState("Bissecção");

    useEffect(() => {
        switch (method) {
            case 1:
                setName('Bissecção');
                break
            case 2:
                setName('Newton Raph');
                break
            case 3:
                setName('Secante');
                break
            case 4:
                setName('Falsa Posicao');
                break
            case 5:
                setName('Ponto Fixo');
                break
        }
    }, [method])

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button size={"3"} ml={"5"}>
                    <QuestionMarkIcon />
                    Ajuda
                </Button>
            </Dialog.Trigger>

            <Dialog.Content>
                <Dialog.Title>
                    Ajuda em Metodo de {name}
                </Dialog.Title>

                <Dialog.Description >
                    <Box m='4'>

                        <h1>Método da  {name}</h1>
                        <p style={{ padding: "10px 20px 10px 0" }}>
                            {method == 1 ? (
                                <>
                                    O método da Bissecção é um algoritmo utilizado para encontrar uma raiz de uma função em um intervalo especificado.
                                    É um método iterativo que se baseia no Teorema de Bolzano, que estabelece que se uma função contínua possui valores de sinais
                                    opostos em ambos os extremos de um intervalo, então existe pelo menos uma raiz nesse intervalo.
                                </>
                            ) : method == 2 ? (
                                <>
                                    O Método de Newton-Raphson é uma técnica iterativa para encontrar raízes de uma função.
                                    Ele utiliza a tangente da curva da função no ponto de estimativa para aproximar a raiz. O método segue os seguintes passos:
                                </>
                            ) : method == 3 ? (
                                <>
                                    O Método da Secante é uma técnica iterativa para encontrar raízes de uma função.  <br />
                                    É semelhante ao Método de Newton-Raphson, mas em vez de calcular a derivada,
                                    ele estima a inclinação da reta secante entre dois pontos para aproximar a raiz. O método segue os seguintes passos:
                                </>
                            ) : method == 4 ? (
                                <>
                                    O Método da Falsa Posição, também conhecido como Método da Interpolação Linear, é uma técnica numérica para encontrar raízes de uma função.  <br />
                                    Este método utiliza uma interpolação linear entre dois pontos em um intervalo para estimar a raiz. Os passos básicos do método são os seguintes:
                                </>
                            ) : method == 5 ? (
                                <>
                                    O Método do Ponto Fixo é uma técnica numérica para encontrar raízes de uma função transformando o problema em encontrar o ponto fixo de uma função auxiliar.
                                    Os passos básicos do método são os seguintes:
                                </>
                            ) : (<></>)

                            }

                        </p>
                        <h2>Passos do Método:</h2>
                        <Box p='4'>

                            {method == 1 ? (
                                <>
                                    <li>Defina um intervalo [a, b] onde a função possui valores de sinais opostos em a e b.</li>
                                    <li>Calcule o ponto médio c = (a + b) / 2.</li>
                                    <li>Avalie a função f(c).</li>
                                    <li>Verifique se f(c) é suficientemente próximo de zero (ou seja, se é aceitável como solução).</li>
                                    <li>Se f(c) é aceitável, você encontrou a raiz.</li>
                                    <li>Se não, verifique se f(a) e f(c) têm sinais opostos. Se sim, atualize o intervalo para [a, c]. Caso contrário, atualize para [c, b].</li>
                                    <li>Repita os passos 2 a 6 até que a raiz seja encontrada com a precisão desejada.</li>

                                </>
                            ) : method == 2 ? (
                                <>

                                    <li>Escolha uma estimativa inicial para a raiz, x0.</li>
                                    <li>Calcule a derivada da função, f'(x).</li>
                                    <li>Atualize a estimativa da raiz usando a fórmula: x1 = x0 - (f(x0) / f'(x0)).</li>
                                    <li>Repita o passo 3 até que a estimativa da raiz seja suficientemente próxima da raiz verdadeira ou até que um número máximo de iterações seja atingido.</li>

                                </>
                            ) : method == 3 ? (
                                <>
                                    <li>Escolha duas estimativas iniciais para a raiz, x0 e x1.</li>
                                    <li>Calcule a inclinação da reta secante: m = (f(x1) - f(x0)) / (x1 - x0).</li>
                                    <li>Atualize a estimativa da raiz usando a fórmula: x2 = x1 - (f(x1) / m).</li>
                                    <li>Repita o passo 3 até que a estimativa da raiz seja suficientemente próxima da raiz verdadeira ou até que um número máximo de iterações seja atingido.</li>
                                </>
                            ) : method == 4 ? (
                                <>
                                    <li>Escolha um intervalo inicial [a, b] onde a função possui valores de sinais opostos em a e b.</li>
                                    <li>Calcule o ponto de interseção entre a reta que conecta (a, f(a)) e (b, f(b)) com o eixo x, obtendo a estimativa da raiz.</li>
                                    <li>Avalie a função f(x) nesse ponto de interseção.</li>
                                    <li>Verifique se a estimativa da raiz é suficientemente próxima da raiz verdadeira (ou seja, se é aceitável como solução).</li>
                                    <li>Se a estimativa é aceitável, você encontrou a raiz.</li>
                                    <li>Se não, atualize o intervalo [a, b] para um novo intervalo onde a função muda de sinal e repita os passos anteriores até que a raiz seja encontrada com a precisão desejada.</li>
                                </>
                            ) : method == 5 ? (
                                <>
                                    <li>Reformule a função f(x) = 0 como x = g(x), onde g(x) é uma função contínua e escolhida de forma a simplificar o problema.</li>
                                    <li>Escolha uma estimativa inicial x0.</li>
                                    <li>Itere usando a fórmula: x1 = g(x0), x2 = g(x1), ... até que x_n converja para a solução.</li>
                                    <li>Verifique se a sequência xn converge para um valor fixo. Se a sequência convergir, o valor convergido é a raiz da função f(x).</li>
                                </>
                            ) : (<></>)

                            }

                        </Box>
                        <h2>Exemplo:</h2>
                        <p style={{ padding: "10px 20px 10px 0" }}>
                            {method == 1 ? (
                                <>
                                    Vamos supor que queremos encontrar a raiz da função f(x) = x^2 - 4 em um intervalo [1, 3]. Inicialmente, a = 1 e b = 3.
                                    Após várias iterações, o método da bissecção encontrará a raiz aproximada de f(x) como x ≈ 2.
                                </>
                            ) : method == 2 ? (
                                <>
                                    Suponha que desejamos encontrar a raiz da função f(x) = x^2 - 4 usando o Método de Newton-Raphson com uma estimativa inicial de x0 = 2.
                                    Inicialmente, x0 = 2 e f(x)t = 2x. <br />
                                    Após várias iterações, o Método de Newton-Raphson encontrará a raiz aproximada de f(x) como x ≈ 2.
                                </>
                            ) : method == 3 ? (
                                <>
                                    Vamos supor que queremos encontrar a raiz da  <br /> função f(x) = x^3 - 6x^2 + 11x - 6   <br />
                                    usando o Método da Secante com estimativas iniciais  <br />
                                    x0 = 1 e x1 = 2. <br />
                                    m = (f(2) - f(1)) / (2 - 1).  <br />
                                    Após várias iterações, o Método da Secante encontrará a raiz aproximada de f(x) como x ≈ 3.
                                </>
                            ) : method == 4 ? (
                                <>
                                    Suponha que você deseje encontrar a raiz da função  <br /> f(x) = x^2 - 4 em um intervalo [1, 3] usando Falsa Posição.  <br />  Inicialmente, a = 1 e b = 3. Após várias iterações, o método da Falsa Posição encontrará a raiz aproximada de f(x) como x ≈ 2
                                </>
                            ) : method == 5 ? (
                                <>
                                    Suponha que você deseje encontrar a raiz da função <br /> f(x) = x^2 - 4 usando o  Ponto Fixo.  <br /> Você pode reformular a função como x = √(x^2 - 4),
                                    e escolher uma estimativa inicial, como x0 = 2. <br />
                                    Em seguida, itere usando a fórmula x1 = √(x0^2 - 4), x2 = √(x1^2 - 4), até que a sequência convirja para x ≈ 2.<br />
                                    É importante escolher uma função g(x) que leve à convergência do método.
                                </>
                            ) : (<></>)

                            }

                        </p>
                    </Box>
                </Dialog.Description>

            </Dialog.Content>
        </Dialog.Root >
    )
}