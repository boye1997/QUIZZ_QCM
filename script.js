
const quizData = [
    {
        question: "Qu'est qu'un musulman? ",
        a: "Un arabe",
        b: "Une personne qui pratique l'islam",
        c: "Un Maghrébin",
        d: "Une personne qui vit dans un pays arabe",
        correct: "b",
    },

    {
        question: "Quelles est le premier des 5 pilliers de l'Islam ?",
        a: "Le Pélerinage à la Mecque (Hadj)",
        b: "La Priére (Salat)",
        c: "Laumone légale (Zakat)",
        d: "Lattestation de foi qu'il n'y a de Dieu et que Mohammed (sws) est son Messager (Shahada)",
        correct: "d",
    },

    {
        question:"Qui est le dernier (le sceau) des prophétes selon la religion musulmane?",
        a: "Le prophéte Jésus (Issa)",
        b: "Le prophéte Abraham (Ibrahim)",
        c: "Le prophéte Noé (Nuh)",
        d: "Le Prophéte Mouhammed",
        correct: "d",
    },

    {
        question: "Quelle est le livre sacré des musulmans à l'heure d'aujourd'hui ?",
        a: "Le Coran (Quran)",
        b:"La Torah",
        c:"LEvangile",
        d:"Les Psaumes de David",
        correct: "a",
    },

    {
        question: "Qui est le premier Calif qui succéda au Prophéte Mouhammed sws?",
        a: "Abu Bakr as-Siddiq",
        b: "Omar Ibn al-khattab",
        c: "Othman Ibn Affan",
        d: "Ali Ibn Talib",
        correct: "a",
    },

];


 const quiz= document.getElementById('quiz')
 const answerEl = document.querySelectorAll('.answer')
 const questionEl = document.getElementById('question')
 const a_texte = document.getElementById('a_text')
 const b_texte = document.getElementById('b_text')
 const c_texte = document.getElementById('c_text')
 const d_texte = document.getElementById('d_text')
 const submitBtn = document.getElementById('submit')

 let currentQuiz= 0
 let score = 0

 function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]


    questionEl.innerHTML = currentQuizData.question
    a_texte.innerText = currentQuizData.a
    b_texte.innerText = currentQuizData.b
    c_texte.innerText = currentQuizData.c
    d_texte.innerText = currentQuizData.d
}

    function deselectAnswers() {
    answerEl.forEach(answerEl=> answerEl.checked = false)
 }

    function getSelected() {
    let answer 
    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
 }
 loadQuiz();

 submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct) {
         score++

        }
     currentQuiz++

     if(currentQuiz < quizData.length){
        loadQuiz()
}

 else{
        quiz.innerHTML =`
        <h2> score ${score}/${quizData.length}</h2>

        <button onclick="location.reload()">Recommencer</button>
        `
     }
     
    }

 })