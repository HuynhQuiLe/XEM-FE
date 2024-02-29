export const convert = {
    mainTitle: (string) => {
        return `
        <h2 class='leading-[120%] text-[45px] font-semibold '>${string}
        </h2>
        `
    },
    Index: (string) => {
        return `
        
        `
    },
    Text: (string) => {
        return `
        <div>
            <p class='mb-5'>${string}</p>
        </div>
        `
    }
}