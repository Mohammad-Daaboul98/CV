const app = () =>{
    let submit = false;

    let newContainer = $("<div></div>" , {"class":"skills-box-container"});
    let newContent = $("<div></div>" , {"class":"skills-box-content"});
    let newContentText = $("<div></div>" , {"class":"skills-box_content__text"});
    let newTextName = $("<p></p>" , {"class":"skills-box__name"});
    let newList = $("<div></div>" , {"class":"skills-box__list"});
    let newInput = $("<input></input>" , {"class":"skills-box__input" , "type":"checkbox"});
    let newLabel = $("<label></label>" , {"class":"skills-box__item"});
    let newSpan =  $("<span></span>" , {"class":"skills-box__checkbox"});

    const skillsBox = $('.skills-box');
    let container = $('.skills-box-container');
    const arryOfContainer = [];


    
    const checkContainer = () => {
        let contentLentgh;
        for (let i = 0; i < container.length; i++) {
            contentLentgh = $(container[i]).children('.skills-box-content').length;
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
            newLabel.attr('for', id + j);
            newInput.attr('id', id + j);
            newLabel.append(newSpan);
            newList = $(newList.append(newInput)).clone(true);
            newList = $(newList.append(newLabel)).clone(true);
        }
        return newContent.append(newList);
    }

    const skillHandler = () => {
        submit = true
        let textName = $("#skill-Input").val();
        newTextName.text(textName);
        addSkill();    
    }

    const addSkill = () => {
        newContent = $('<div></div>' , {'class':'skills-box-content'});
        checkContainer();
        let arrLength = arryOfContainer.length - 1;
        if (submit) {
            if (arryOfContainer[arrLength]  === 3) {
                newContentText.append(newTextName);
                $("#skill-Input").val('');
                newContent.append(newContentText);
                appendSpan();
                newContainer.append(newContent);
                skillsBox.append(newContainer);
            } else {

                let contentLentgh = $(container[container.length - 1]).children('skills-box-content').length;
                if (contentLentgh !== 3) {
                    newContentText.append(newTextName);
                    newContent.append(newContentText);
                    appendSpan();
                    const conterLen = checkContainer();
                    if(conterLen !== 3){
                    $(container[container.length - 1]).append(newContent)

                    }
                }
            }
            submit = false
        }
    }
    skillHandler();

}


$('#submit').click(app)