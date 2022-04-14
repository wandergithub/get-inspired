// Speakers Section dynamic creation

let person = [
    {
        name:'samlple 1',
        contribution:'sample 1',
        Description:'sample 1',
        img:'sample 1'
    },
    {
        name:'sample 2',
        contribution:'sample 2',
        Description:'sample 2',
        img:'sample 2'
    }
]

function CreateElement(elementType='') {
    let element = document.createElement(elementType);
    
    return element;
}

function GenerateInstance(person) {
   let container = CreateElement('div');
}

function DisplaySection() {
    for (let index = 0; index < person.length; index++) {
        GenerateInstance(person[index]);
    }
}

DisplaySection();