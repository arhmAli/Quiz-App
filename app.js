// import moreQuestions from './db'
let quizData = [
    {
        question: "Javascript is?",
        option_a: " JavaScript is a scripting language used to make the website interactive",
        option_b: " JavaScript is an assembly language used to make the website interactive ",
        option_c: " JavaScript is a compiled language used to make the website interactive  ",
        option_d: "  None of the mentioned",
        correctAnswer: "option_a"
    },
    {
        question: "Which of the following is correct about JavaScript?",
        option_a: " JavaScript is an Object-Based language",
        option_b: " JavaScript is Assembly-language",
        option_c: " JavaScript is an Object-Oriented language",
        option_d: " JavaScript is a High-level language",
        correctAnswer: "option_a"
    },
    {
        question: " Among the given statements, which statement defines closures in JavaScript?",
        option_a: " JavaScript is a function that is enclosed with references to its inner function scope",
        option_b: " JavaScript is a function that is enclosed with references to its lexical environment",
        option_c: " JavaScript is a function that is enclosed with the object to its inner function scope",
        option_d: " None of the mentioned",
        correctAnswer: "option_b"
    },
    {
        question: " Arrays in JavaScript are defined by which of the following statements?",
        option_a: " It is an ordered list of values",
        option_b: " It is an ordered list of objects",
        option_c: " It is an ordered list of string",
        option_d: " It is an ordered list of functions",
        correctAnswer: "option_a"
    }
    ,
    {
        question: " var js = (function(x) {return x*x;}(10)); how will this work?",
        option_a: " Exception will be thrown",
        option_b: " Memory leak",
        option_c: " Error",
        option_d: " Yes, perfectly",
        correctAnswer: "option_d"
    }
    ,
    {
        question: " Which of the following is not javascript data types?",
        option_a: " Null type",
        option_b: " Undefined type",
        option_c: " Number type",
        option_d: " All of the mentioned",
        correctAnswer: "option_d"
    }
    ,
    {
        question: " Where is Client-side JavaScript code is embedded within HTML documents?",
        option_a: " A URL that uses the special javascript:code",
        option_b: " A URL that uses the special javascript:protocol",
        option_c: " A URL that uses the special javascript:encoding",
        option_d: "  A URL that uses the special javascript:stack",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " Among the given statements, which statement defines closures in JavaScript?",
        option_a: " JavaScript is a function that is enclosed with references to its inner function scope",
        option_b: " JavaScript is a function that is enclosed with references to its lexical environment",
        option_c: " JavaScript is a function that is enclosed with the object to its inner function scope",
        option_d: " None of the mentioned",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " function range(int javascript) {int a=5;for(int i=0;i<javascript;i++){console.log(a);} }range(3);",
        option_a: " 2",
        option_b: " 55",
        option_c: " 555",
        option_d: " error",
        correctAnswer: "option_c"
    }
    ,
    {
        question: " Which of the following scoping type does JavaScript use?",
        option_a: " Sequential",
        option_b: " Segmental",
        option_c: " Lexical",
        option_d: " Literal",
        correctAnswer: "option_c"
    }
    ,
    {
        question: "  Which of the following methods/operation does javascript use instead of == and !=?",
        option_a: " JavaScript uses equalto()",
        option_b: " JavaScript uses equals() and notequals() instead",
        option_c: " JavaScript uses bitwise checking",
        option_d: " JavaScript uses === and !== instead",
        correctAnswer: "option_d"
    }
    ,
    {
        question: " What is the prototype represents in the following JavaScript code snippet?function javascript() {};        ",
        option_a: " Not valid",
        option_b: " Prototype of a function",
        option_c: " Function javascript",
        option_d: "  A custom constructor",
        correctAnswer: "option_d"
    }
    ,
    {
        question: " Which of the following is not a framework?",
        option_a: "  JavaScript .NET",
        option_b: " JavaScript",
        option_c: " Cocoa JS",
        option_d: " jQuery",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " Among the given statements, which statement defines closures in JavaScript?",
        option_a: " JavaScript is a function that is enclosed with references to its inner function scope",
        option_b: " JavaScript is a function that is enclosed with references to its lexical environment",
        option_c: " JavaScript is a function that is enclosed with the object to its inner function scope",
        option_d: " None of the mentioned",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " Which of the following is the property that is triggered in response to JS errors?",
        option_a: " onclick",
        option_b: " onerror",
        option_c: "  onmessage",
        option_d: " onexception",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " What is the reason for avoiding the attributes property in the HTML DOM?",
        option_a: " Found unnecessary",
        option_b: " Attributes don’t have attributes",
        option_c: " Attributes have attributes",
        option_d: " Considered irrelevant",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " How is everything treated in HTML DOM?",
        option_a: " Node",
        option_b: " Attributes",
        option_c: "  Elements",
        option_d: " Arrays",
        correctAnswer: "option_a"
    }
    ,
    {
        question: " What is the purpose of the Attr object in the HTML DOM?",
        option_a: " Used to focus on a particular part of the HTML page",
        option_b: " HTML Attribute",
        option_c: " Used to arrange elements",
        option_d: " CSS attribute",
        correctAnswer: "option_b"
    }
    ,
    {
        question: " How are the objects organized in the HTML DOM?",
        option_a: " Class-wise",
        option_b: " Queue",
        option_c: " Hierarchy",
        option_d: "  Stack",
        correctAnswer: "option_c"
    }
]
let container = document.querySelector(".quiz-container")
let question = document.querySelector(".question-text");
let option_a = document.getElementById('a')
let option_b = document.getElementById('b')
let option_c = document.getElementById('c')
let option_d = document.getElementById('d')
let button = document.querySelector(".btn")
let options = document.querySelectorAll(".option");


let questionNum = 0;
let score = 0;
takingValue()
function takingValue() {
    deselectAnswers();
    question.innerHTML = quizData[questionNum].question;
    option_a.innerHTML = quizData[questionNum].option_a;
    option_b.innerHTML = quizData[questionNum].option_b;
    option_c.innerHTML = quizData[questionNum].option_c;
    option_d.innerHTML = quizData[questionNum].option_d;

}

function getSelected() {
    let answer = undefined;

    options.forEach((option) => {
        if (option.checked) {
            answer = option.id;
        }
    });

    return answer;
}
function deselectAnswers() {
    options.forEach((option) => {
        option.checked = false;
    });
}

button.addEventListener("click", () => {
    let state = getSelected();
    console.log(state)
    if (state) {
        if (state === quizData[questionNum].correctAnswer) {
            score++;
        }

        questionNum++;
        if (questionNum < quizData.length) {
            takingValue();
        } else {
            container.innerHTML = `
            <div class="title animate__animated animate__backInUp column is-4-mobile">
            Congratulations!
            <br> <hr/> You Scored ${score}/${quizData.length}
            <br>
            YOU CAN ALWAYS IMPROVE!
            😊
            </div>
            `;
        }
    }
    console.log(moreQuestions)

})