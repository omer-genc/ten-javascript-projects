const quizData = [{
        question: "2021 de en çok kullanılan programlama dili hangisidir?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "US başkanı kimdir?",
        a: "Ömer Genç",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "HTML açılımı nedir",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Javascript ne zaman çıktı?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Hiçbiri",
        correct: "b",
    },
];
let score = 0;
let currentQuizNumber = 0;
const questionELEMENT = document.querySelector("#questions");
const a_ELEMENT = document.querySelector("#a_text");
const b_ELEMENT = document.querySelector("#b_text");
const c_ELEMENT = document.querySelector("#c_text");
const d_ELEMENT = document.querySelector("#d_text");
const submitBTN = document.querySelector("#submit");
const answerListELEMENT = document.querySelectorAll(".answer");
const quizContainerELEMENT = document.querySelector(".quiz-container");

function loadQuiz(currentQuiz) {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionELEMENT.innerText = currentQuizData.question;
    a_ELEMENT.innerText = currentQuizData.a;
    b_ELEMENT.innerText = currentQuizData.b;
    c_ELEMENT.innerText = currentQuizData.c;
    d_ELEMENT.innerText = currentQuizData.d;

}

loadQuiz(0)

submitBTN.addEventListener("click", () => {
    let answer = getSelected();
    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuizNumber].correct)
            score++;

        currentQuizNumber++;

        if (currentQuizNumber < quizData.length)
            loadQuiz(currentQuizNumber);
        else
            quizContainerELEMENT.innerHTML = `<h2 style="text-align: center;"> Quiz bitti skorunuz: ${score}/${quizData.length} </h2>`

    } else {
        alert("Soruyu boş bırakamazsın");
    }

});

function deselectAnswers() {
    answerListELEMENT.forEach(answerELEMENT => {
        answerELEMENT.checked = false;
    });
}

function getSelected() {
    let answer = undefined;

    answerListELEMENT.forEach((answerELEMENT) => {
        if (answerELEMENT.checked) {
            answer = answerELEMENT.id;
        }
    });

    return answer;
}