const bookList = [
    {
        id: 1,
        name: "Война и мир",
        author: "Лев Толстой",
        description: "Роман-эпопея, повествующий о многогранной русской жизни в начале XIX века"
    },
    {
        id: 2,
        name: "Мы",
        author: "Евгений Замятин",
        description: "Роман-антиутопия, анализирующая возможные последствия торжества разума"
    },
    {
        id: 3,
        name: "Шинель",
        author: "Николай Гоголь",
        description: "Рассказ о несчастном чиновнике - лишнем человеке"
    },
    {
        id: 4,
        name: "Рассуждение о методе",
        author: "Рене Декарт",
        description: "Известная философская работа Декарта о методе познания мира"
    }
];

export function getBookById(id) {
    return bookList.filter(book => book.id === id)[0];
}

export default bookList;