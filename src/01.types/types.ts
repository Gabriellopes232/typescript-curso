//boolean (true/false)
{
    let isOpen: boolean
    isOpen = true

    //string ('foo', "foo", `foo`)
    let message: string
    message = `foo`

    //number(int, float, hex, binary)
    let total: number
    total = 0xff0

    //array (type[])
    let items: string[]
    items = ['foo', 'bar']

    let values: Array<number>
    values = [1, 2, 3]

    //tuple
    let title: [number, string]
    title = [1, "foo"]

    //enum
    enum Colors {
        white = "#fff",
        black = "#000"
    }

    //any (qualquer coisa) NÃO USAR APENAS EM TESTES!
    let coisa: any
    coisa = [1]

    //void (vazio)
    function logger(): void {
        console.log('foo')
    }

    //null | undefined
    type Bla = string | undefined

    //never 
    function error(): never {
        throw new Error("error")
    }

    //object
    let cart: object

    cart = {
        key: 'foo',
        id: 1
    }
}