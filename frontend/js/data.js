var dataArr = [
    {
        id: 1,
        name: '1',
        children: [
            {
                id: 11,
                name: '11',
                children: [
                    {
                        id: 111,
                        name: '111',
                        children: []
                    },
                    {
                        id: 112,
                        name: '112'
                    }
                ]
            },
            {
                id: 12,
                name: '12',
                children: []
            }
        ],
        users: []
    },
    {
        id: 2,
        name: '2',
        children: [
            {
                id: 22,
                name: '22',
                children: []
            }
        ]
    }
];

var dataObj = {
    id: 1, 
    value: 00, 
    children: [{
        id: 11, 
        value: 01, 
        children: [{
            id: 111, 
            value: 03, 
            children: []
        }, {
            id: 112, 
            value: 04
        }]
    }, {
        id: 12, 
        value: 02, 
        children: []
    }]
}