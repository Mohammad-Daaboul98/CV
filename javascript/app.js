const app = () => {

    let submit = false;

    let newContainer = document.createElement('div');
    newContainer.classList.add('skills-box-container')

    let newContent = document.createElement('div');
    newContent.classList.add('skills-box-content')

    let newContentText = document.createElement('div');
    newContentText.classList.add('skills-box_content__text');

    let newTextName = document.createElement('p')
    newTextName.classList.add('skills-box__name');

    let newList = document.createElement('div');
    newList.classList.add('skills-box__list');

    let newInput = document.createElement('input');
    newInput.classList.add('skills-box__input');
    newInput.setAttribute('type', 'checkbox')

    let newLabel = document.createElement('label');
    newLabel.classList.add('skills-box__item');

    let newSpan = document.createElement('span');
    newSpan.classList.add('skills-box__checkbox')


    const skillsBox = document.getElementById('skills-box')
    let container = document.getElementsByClassName('skills-box-container');
    const arryOfContainer = [];




    const checkContainer = () => {
        let contentLentgh;
        for (let i = 0; i < container.length; i++) {
            contentLentgh = container[i].getElementsByClassName('skills-box-content').length;
            if (i >= arryOfContainer.length) {
                arryOfContainer.pop()
                arryOfContainer.push(contentLentgh)
            }

        }
        return contentLentgh;

    }



    const appendSpan = () => {
        let id = Date.now();
        for (let j = 0; j < 5; j++) {
            newLabel.setAttribute('for', id + j);
            newInput.setAttribute('id', id + j);
            newLabel.appendChild(newSpan);
            newList.appendChild(newInput.cloneNode(true));
            newList.appendChild(newLabel.cloneNode(true));
        }
        return newContent.appendChild(newList);
    }



    const skillHandler = () => {
        submit = true
        let textName = document.getElementById("skill-Input").value;
        newTextName.innerText = textName;
        addSkill();    
    }



    const addSkill = () => {
        newContent = document.createElement('div');
        newContent.classList.add('skills-box-content')
        checkContainer();
        let arrLength = arryOfContainer.length - 1;
        if (submit) {
            if (arryOfContainer[arrLength]  === 3) {
                newContentText.appendChild(newTextName);
                document.getElementById("skill-Input").value = '';
                newContent.appendChild(newContentText);
                appendSpan();
                newContainer.appendChild(newContent);
                skillsBox.appendChild(newContainer.cloneNode(true));
            } else {

                let contentLentgh = container[container.length - 1].getElementsByClassName('skills-box-content').length;
                if (contentLentgh !== 3) {
                    newContentText.appendChild(newTextName);
                    newContent.appendChild(newContentText);
                    appendSpan();
                    const conterLen = checkContainer();
                    // console.log(conterLen)
                    if(conterLen !== 3){
                    // console.log(conterLen);
                    container[container.length - 1].appendChild(newContent)
                    }
                }
            }
            submit = false
        }
    }

    skillHandler();


}

let btnClick = document.getElementById('submit');
btnClick.addEventListener('click', app)


