const data = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": ["quis ut nam facilis et officia qui","facilis et officia qui",
            {obj: "data"} // [,{title: [,,{obj:hello}]}]
        ],
        "completed": false
    },
    {
        "userId": 1, // [,,{userId}]
        "id": 3,     // [,,{id}]
        "title": "fugiat veniam minus",
        "completed": false
    }
];

const [obj1,obj2,obj3] = data;
const mainObject = {...obj1,...obj2,...obj3};