interface Column {
    title: string;
    dataIndex: string;
    key: string;
}

type Columns = Column[];

export interface IData {
    key: string;
    name: string;
    age: number;
    address: string;
}


export const columns:Columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}];

export const dataSource: IData[] = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '3',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '4',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '5',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '6',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '7',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '8',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '9',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '10',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '11',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '12',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '13',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '14',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '15',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '16',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '17',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '18',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '19',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '20',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '21',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '22',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
    {
        key: '23',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
    },
];