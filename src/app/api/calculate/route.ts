
import { NextResponse } from "next/server";

interface sendingData {
    tipo_equacao: number
    equacao: string
    equacao_derivada: string
    ponto_a: number
    ponto_b: number
    nro_reps: number
    precisao: number
}

export async function POST(request: Request) {
    try {
        if (!process.env.BACKEND)
            throw new Error("cade o backend")

        const data: sendingData = await request.json();
        console.log(data)
        if (!data.tipo_equacao)
            return NextResponse.json({ err: "Necessario Fornecer o tipo da equação" }, { status: 400 })
        if (!data.equacao)
            return NextResponse.json({ err: "O campo equação é obrigatorio" }, { status: 400 })
        if (!data.equacao_derivada && data.tipo_equacao == 2)
            return NextResponse.json({ err: "O campo equação derivada é obrigatorio" }, { status: 400 })
        if (!data.ponto_a)
            return NextResponse.json({ err: "O campo Ponto A é obrigatorio" }, { status: 400 })
        if (!data.ponto_b && data.tipo_equacao != 2 && data.tipo_equacao != 5)
            return NextResponse.json({ err: "O campo Ponto B é obrigatorio" }, { status: 400 })
        if (!data.nro_reps)
            return NextResponse.json({ err: "O campo Iterações é obrigatorio" }, { status: 400 })
        else if (data.nro_reps <= 0)
            return NextResponse.json({ err: "O campo Iterações deve ser maior que 0" }, { status: 400 })
        if (!data.precisao)
            return NextResponse.json({ err: "O campo Precisão é obrigatorio" }, { status: 400 })

        const roots = await fetch(
            process.env.BACKEND + '/calculate',
            {
                headers: {
                    'Content-Type': 'application/json' // Tipo de conteúdo
                },
                method: 'POST',
                body: JSON.stringify(data)
            }
        )

        return NextResponse.json(await roots.json());
    } catch (err) {
        console.log(err)
        return NextResponse.json({ err: "Erro" }, { status: 400 })
    }
}