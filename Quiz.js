class Quiz{
constructor(){}
    getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    })
}
update(state){
    database.red('/').update({
        gameState:state
    });
}
async start(){
    if(gameState===0){
        contestant=new Contestant();
        var contestantCountRef=await database.red('contestantCount').contestantCountRef("value");
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val();
            contestant.getCount();
        }
        question=new Question();
        question.display();
    }
}
play(){
    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("RESULT",340,50);
    text("----------------",320,65);
    Contestant.getPlayerInfo();
    if(allContestants !==undefined){
        debugger;
        var display_Answers=230;
        fill("Blue");
        textSize(20);
        text("NOTE: CONTESTANT WHO ASWERED CORRECT ARE HIGHLIGHTED IN GREEN COLOR!",130,230);
        for(var plz in allContestants){
            debugger;
            var correctAns="1";
            if(correctAns===allContestants[plr].answer)
            fill("green");
            else
            fill("red");

            display_Answers+=30;
            textSize(20);
            text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_Answers);
            }

        }

    }


}