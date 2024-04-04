function clickEvent(self){
    if(self.id === "name"){
        $('.question').css('visibility', 'visible');
    } else if(self.id === "question1"){
        $('#image').css('visibility', 'visible');
    } else if(self.id === "image"){
        $('#answer').css('visibility', 'visible');
    } else if(self.id === "question2"){
        $('#answer2').css('visibility', 'visible');
    }
}