interface ResData{
    userId: number;
    id: number;
    title: string;
    body: string;
}

class FifteenthTitle{
    static #URL: string = 'https://jsonplaceholder.typicode.com/posts';
    static #ID: number = 15;

    static #get(): void {
        fetch(FifteenthTitle.#URL)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(resData => FifteenthTitle.#getTitleFromJson(resData))
        .then(title => console.log(title))
        .catch(({message}) => console.error(message))
    }

    static #getTitleFromJson(resData: ResData[]): string {
        const itemWithTitle = resData.find(item => item.id === FifteenthTitle.#ID)
        const title = itemWithTitle?.title || '';
        return title;
    }

    public run(): void {
        FifteenthTitle.#get();
    }
}

const fifteenthTitle = new FifteenthTitle();
fifteenthTitle.run();