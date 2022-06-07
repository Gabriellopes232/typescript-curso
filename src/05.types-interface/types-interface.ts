{
    interface IGame {
        title: string;
        description: string;
        genre: string;
        platform: string[];
        getSimilars?: (title: string) => void;
    }

    const tlou: IGame = {
        title: 'the last of us',
        description: 'the best game in the world',
        genre: 'action',
        platform: ['ps3', 'ps4'],
        getSimilars: (title: string) => {
            console.log(`similiar games to ${title}: Uncharted, A plague tale, metro`)
        },
    }
    console.log(tlou.title);
    if (tlou.getSimilars) {
        tlou.getSimilars(tlou.title)
    }

    interface DLC extends IGame {
        originalGame: IGame;
        newContent: string[];
    }
    const leftbehind: DLC = {
        title: 'the last of US - Left Behind',
        description: 'you play as ellie before the original game',
        genre: 'action',
        platform: ['PS4'],
        originalGame: tlou,
        newContent: ['3 hours story', 'new character']
    }

    class CreateGame implements IGame {
        title: string;
        description: string;
        genre: string;
        platform: string[];

        constructor(t: string, d: string, g: string, p: string[]) {
            this.title = t;
            this.description = d;
            this.genre = g;
            this.platform = p;

        }
    }
}