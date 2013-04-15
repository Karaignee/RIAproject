
//this is JSON, containing key, columns and value
var questions = [
    {
        "text": "What do you call the Lego range for small children?",
        "answers": ["DUPLO", "TECHNIC", "MEGA BLOCKS"],
        "correct": "DUPLO",
        "message": "Duplo blocks are bigger and easier to handle for small children"
    },

    {
        "text": "How many Lego bricks are made every minute?",
        "answers": ["1,000", "14,000", "26,000", "33,000", "42,000"],
        "correct": "42,000",
        "message": ""
    },
    
    {
        "text": "How many Lego bricks are made every year?",
        "answers": ["4 billion", " 9 billion", "13 billion", "16 billion", "21 billion"],
        "correct": "21 billion",
        "message": ""
    },
    
    {
        "text": "What kind of Lego set lets you build programmable robots?", 
        "answers": ["BIONICLE", "TECHNIC", "MINDSTORMS"],
        "correct": "TECHNIC",
        "message": ""
    },

    {
        "text": "The Earth's population is about 6.5 billion. How many Lego people (minifigures) are there?",
        "answers": ["4 billion", "6.5 billion", "8 billion"], //There are 4 billion minifigures out there, so they haven't taken over the world yet.
        "correct": "4 billion",
        "message": ""
    },
    
    {
        "text": "How many Lego bricks are made every minute?",
        "answers": ["1,000", "14,000", "26,000", "33,000", "42,000"],
        "correct": "42,000",
        "message": ""
    }
];

var score = 0;
var display_question = (function () {

    var question = questions[score];

    $("#question").text(question.text);

    $("#answers").empty();
    for (var i in question.answers) {
        var answer = question.answers[i];
        $("#answers").append("<li>" + answer + "</li>");
    }
    
    //make answers clickable and create var called validate_answer
    $("#answers li").on("click", validate_answer);

});

var validate_answer = (function() {
    var message = questions[score].message;
    //if the clicked item is equal to questions correct item, else we are wrong:
    if ($(this).text().toLowerCase() == questions[score].correct.toLowerCase()) {
        score++;
        display_score();
        $("#answers").empty();
        
        $('#question').html('<h4>Correct!</h4><div id="message">' + message + '</div><a id="next-link">Next Question</a>');
        
        $('#next-link').click(display_question);
        
        // More Questions
        if (questions.length > score) {
            
        }
        // Quiz Won
        else {
            $('#next-link').remove();
            $('#winner').show();
        }

    } else {
        $(this).animate({width: '10%'}, 1000, 'easeOutBounce');
        
        //$("#question").text("you are cast into the gorge of eternal peril")
        //$("#answers").empty();
        //
        //var back = $('<a/>').addClass('try-again').text('Try Again').click(display_question);
        //$("#answers").append(back);
    }
    
    display_score();
});

var display_score = (function () {
    $("#score-num").text(score);
});

display_question();
display_score();



//alert("right off you go"); [he removed this
//alert("FAIL");

//alert($(this).text()); //if you have blank () it returns a value, if you enter sth it will replace the value with that thing