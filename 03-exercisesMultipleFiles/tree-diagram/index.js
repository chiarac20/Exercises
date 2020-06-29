document.getElementById('copy-button').addEventListener('click', function createFirstLevelNode (){
    const initialInput= document.getElementById('initial-input').value;
    const children=document.getElementById('children');
    children.classList.add('children');
    createNode(initialInput,children);
})

function createNode(title, container){
    const node=makeNode(container);
    createTitleDiv(title, node);
    const input=appendInput(node);
    const button=createButton(node);
    const children=createChildren(node);
    children.classList.add('children');
    button.addEventListener('click', ()=>{
        createNode(input.value, children);
    }) 
}

function makeNode(place){
    const node=document.createElement('div');
    place.appendChild(node);
    node.classList.add('node')
    return node;
}

function createTitleDiv(title, place){
    const titleDiv=document.createElement('div');
    titleDiv.innerText=title;
    place.appendChild(titleDiv);
}

function appendInput(place){
    const input=document.createElement('input');
    input.type='text';
    place.appendChild(input);
    return input;
}

function createButton(place){
    const button=document.createElement('button');
    button.innerText='copy';
    place.appendChild(button);  
    return button;  
}

function createChildren(place){
    const children= document.createElement('div');
    place.appendChild(children);  
    return children;  
}
