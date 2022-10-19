import _, { size } from 'lodash';

function JoinDemo() {
    let arr = ['doan', 'chu', 'duc'];
    const person = [
        {id: 1, name: 'Doan'},
        {id: 2, name: 'Nam'},
        {id: 3, name: 'Hoa'}
    ];
    const arr2 = ['id', 1, 'name', 'khai', 'info', 'cybersoft'];
   
    const result = _.join(arr, '-');
    const result2 = _.chunk(arr2, size = 2);
    const result3 = _.fill(person, {id: 5, name: 'Hoa'}, 1, 2);
    console.log(result3)

    return ( 
        <div>
            <div>{result}</div>
            <div>{_.first(person).id}</div>
            <div>{_.size(person)}</div>
        </div>
     );
}

export default JoinDemo;