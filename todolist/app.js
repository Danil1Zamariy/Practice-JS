$ (function(){
    let buttonEnter = $('#enter');
    let userInput = $('#userInput');
    let ul = $('ul');
    let todoMap=[
        {
            ind:1,
            text:'example'
        }
    ]
    
    function inputLength() {
        return !!userInput.val();
    }
    
    function createTodo() {
        let li = $("<li>");
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);
        userInput.val('');
        localStorage.setItem('Todo_list',JSON.stringify(todoMap));
    
        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTodoItem);
    
        li.click(() => {
            li.toggleClass('done');
        })

        function deleteTodoItem() {
            li.toggleClass('done1');
            li.animate({
                'margin-left':'-2450px',
                'margin-right':'2550px',
            },{duration:2000,queue:true}).fadeOut(1000).remove(4000);
        }
    }
    
    function changeListAfterKeypress(event) {
        if ( inputLength() && event.which === 13) {
            createTodo();
        }
    }
    
    userInput.keypress(changeListAfterKeypress);
    
    buttonEnter.click (function() { 
        if (inputLength()) {
            createTodo();
        }
    });
})
