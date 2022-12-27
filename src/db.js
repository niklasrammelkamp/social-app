const startPosts = [
  {
    id: 1,
    date: "20.05.2022",
    headline: "Lorem Ipsum",
    text: "Lorem Ipsum dolor sit amet, bla bla bla bla",
    hashtags: ["lorem", "Ipsum", "Dolor"],
    comments: [],
    showComments: false,
  },
  {
    id: 2,
    date: "21.05.2022",
    headline: "Lorem Ipsum zwei",
    text: "Lorem Ipsum dolor sit amet, bla bla bla bla",
    hashtags: ["lorem", "Ipsum", "Dolor"],
    comments: [
      {
        commentId: 111,
        comment: "was für ne scheiße",
      },
      {
        commentId: 122,
        comment: "was für ne scheißechabo",
      },
      {
        commentId: 133,
        comment: "was für ne scheißebabos",
      },
    ],
    showComments: false,
  },
  {
    id: 3,
    date: "22.05.2022",
    headline: "Lorem Ipsum drei",
    text: "Lorem Ipsum dolor sit amet, bla bla bla bla",
    hashtags: ["lorem", "Petr", "Dolor"],
    comments: [
      {
        commentId: 1111,
        comment: "was für ne scheiße",
      },
      {
        commentId: 1222,
        comment: "was für ne scheißechabo",
      },
      {
        commentId: 1333,
        comment: "was für ne scheißebabos",
      },
    ],
    showComments: false,
  },
];

export default startPosts;
