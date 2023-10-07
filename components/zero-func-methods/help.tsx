import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { Button, Dialog } from "@radix-ui/themes";

export default function ZeroFuncFieldsHelpComponent() {
    //eq,A,b,interacoes,precision
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
                    Ajuda em Metodo de Bissecção
                </Dialog.Title>

                <Dialog.Description>
                    Enteda um pouco mais sobre Metodo de Bissecção
                </Dialog.Description>

            </Dialog.Content>
        </Dialog.Root>
    )
}