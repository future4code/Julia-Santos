// Justificativa: devem ser armazenados em arrays separados para facilitar a manipulação

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const posts: Post[] = [
    {
      userId: 1,
      id: 45,
      title: "item1",
      body: "dfmijdfnirufnrijesnferjifnerifreiuuf"
    },
    {
      userId: 2,
      id: 24,
      title: "item2",
      body: "dnjnurvnfhuabhruenafhrnfhre"
    },
    {
      userId: 3,
      id: 12,
      title: "item3",
      body: "sdjdsfndjkfndjfvfd"
    },
]