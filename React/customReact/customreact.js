
function customRender (reactElement,container){/*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement);*/ //handles only href and target attributes

    const domElement=document.createElement(reactElement.type);//create a new element of reactElement type
    domElement.innerHTML=reactElement.children  //copy the children
    for(const prop in reactElement.props){
        if(prop === 'children')
            continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
        }
    container.appendChild(domElement)
    //dynamically sets all the attributes except `children`
}
const reactElement = {
    type : 'a',
    props: 
    {
        href: 'https://google.com',
        target: '_blank'    
    },
    children : 'Click me to visit google'
}

const mainContainer= document.querySelector('#root');

customRender(reactElement,mainContainer);