type Props ={
    user: string
    pass?: string
}

export const Client = ({user, pass}: Props) => {

    return(
        //TESTE DE RENDERIZAÇÃO CONDICIONAL
        <div className="w-60 border-red-600 p-3 text-3xl text-center itelic">
            <h3 className="text-3xl font-bold italic">{user}</h3>
            <p className="text-right text-sm">{pass? pass : "alguma coisa nao existe ainda"}</p>
        </div>
    )
}