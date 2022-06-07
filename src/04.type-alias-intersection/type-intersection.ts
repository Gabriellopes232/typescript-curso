{
    type AccountInfo = {
        id: number;
        name: string;
        //Union
        email?: string
    }
    const account: AccountInfo = {
        id: 123,
        name: 'gabriel'
    }
    type CharInfo = {
        nickname: string;
        level: number;
    }
    const char: CharInfo = {
        nickname: 'gabriellopes232',
        level: 100
    }
    // intersection
    type PlayerInfo = AccountInfo & CharInfo

    const player: PlayerInfo = {
        id: 123,
        name: 'gabriel',
        nickname: 'gabriellopes232',
        level: 100
    }
}