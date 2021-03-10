var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0
    },

    {
        id: 2,
        name: 'Ruby',
        coin: 908
    },

    {
        id: 3,
        name: 'Java',
        coin: 0
    },

    {
        id: 4,
        name: 'Python',
        coin: 100
    },

    {
        id: 5,
        name: 'Ruby',
        coin: 0
    },

    {
        id: 6,
        name: 'Ruby',
        coin: 10
    }
]

function coinHandler() {
    
}

var totalCoin = courses.reduce(coinHandler, 0);

