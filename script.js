const que = [
    {
      correctAnswer: "NaN",
      options: [1, 0, "null", "NaN"],
      question: "What will be the output of the following code? \n console.log(Infinity/infinity)",
    },
    {
      correctAnswer: "Hello",
      options: [
        "0",
        "Hello",
        "true",
        "false",
      ],
      question: "What do you think the output of this code will be?  \n console.log(0||'Hello'||'Infinity')",
    },
    {
      correctAnswer: "A.(4 > 2 && 'hello' != 'Hello')",
      options: [
        "A.(4 > 2 && 'hello' != 'Hello')",
        "B. (false || null)",
        "C. (undefined === null)",
        "D. ('0' === 0)",
      ],
      question: "Which of the following expressions evaluate to truthy value in JavaScript?",
    },
    {
      correctAnswer: 2,
      options: [2, "'2'", "true", "false"],
      question: "What is the result of the following expression in JavaScript? \n console.log(true+true)",
    },
    {
      correctAnswer: "Automatically conversion of variable to another data type",
      options: [
        "Automatically conversion of variable to another data type",
        "Converting the data type by specifying the data type.",
        "Conversion of data type using typeof operator.",
        "Changing values of variables at runtime.",
      ],
      question: "What is type coercion in JavaScript?",
    },
    {
      correctAnswer: "let num = parseInt('42px');",
      options: [
        "let num = parseInt('42px');",
        "console.log(undefined.toString());",
        "let str = toNumber('5');",
        "console.log(string(100));",
      ],
      question: "Which of the following statements will not throw an error?",
    },
   
  ];

//Accessing all the elements:
let questionEl=document.getElementById('question');
let optionEl=document.getElementById('options');
let scoreEl=document.getElementById('score');
let nextEl=document.getElementById('next');

// Variables
let score=0;
let queNo=0;

function showQuestion(){
    let {correctAnswer,options,question}=que[queNo];
    questionEl.innerHTML=question;

    let shuffeledOptions=shuffleOptions(options);

    shuffeledOptions.forEach((option)=>{
        // console.log(option);
        let btn=document.createElement('button');
        btn.textContent=option;
        optionEl.appendChild(btn);
        btn.addEventListener('click',()=>{
            // console.log('clicked');
            if(correctAnswer==option){
                // console.log('Correct Answer');
                score++;
                // console.log(score);
            }
            else{
                score-=0.25;
                // console.log(score);
            }
            scoreEl.innerText=`Score ${score}`;
            // questionEl.innerHTML='Quiz Completed';
            // optionEl.remove();
            nextQuestion();
    
        })
    
    })

}
function nextQuestion(){
    queNo++;
    optionEl.innerHTML="";

    if(queNo<que.length){
        showQuestion()

    }
    else{
        questionEl.innerHTML='Quiz Completed';
        nextEl.remove();
    }
    

}
showQuestion();


// let correctAnswer=questionObj.correctAnswer;
// let options=questionObj.options;
// let question=questionObj.question;
// console.log(correctAnswer,options,question);



// //Manipulating the DOM:
// questionEl.innerHTML=question;

// let shuffeledOptions=shuffleOptions(options);

// shuffeledOptions.forEach((option)=>{
//     // console.log(option);
//     let btn=document.createElement('button');
//     btn.textContent=option;
//     optionEl.appendChild(btn);
//     btn.addEventListener('click',()=>{
//         // console.log('clicked');
//         if(correctAnswer==option){
//             // console.log('Correct Answer');
//             score++;
//             // console.log(score);
//         }
//         else{
//             score-=0.25;
//             // console.log(score);
//         }
//         scoreEl.innerText=`Score ${score}`;
//         questionEl.innerHTML='Quiz Completed';
//         optionEl.remove();

//     })

// })


function shuffleOptions(options){
    for (let i=options.length-1;i>0;i--){
        let j=Math.floor(Math.random()*4);
        [options[j],options[i]]=[options[i],options[j]];
    }    
    return options;
}
// let a=[1,2,3,4]




// time up***
// function questionClick() { 
//   if ( 
//       this.value !== 
//       questions[currentQuestionIndex] 
//           .answer 
//   ) { 
//       time -= 10; 
//       if (time < 0) { 
//           time = 0; 
//       } 
//       timerEl.textContent = time; 
//       feedbackEl.textContent = `Wrong! The correct answer was  
//       ${questions[currentQuestionIndex].answer}.`; 
//       feedbackEl.style.color = "red"; 
//   } else { 
//       feedbackEl.textContent = 
//           "Correct!"; 
//       feedbackEl.style.color = 
//           "green"; 
//   } 
//   feedbackEl.setAttribute( 
//       "class", 
//       "feedback"
//   ); 
//   setTimeout(function () { 
//       feedbackEl.setAttribute( 
//           "class", 
//           "feedback hide"
//       ); 
//   }, 2000); 
//   currentQuestionIndex++; 
//   if ( 
//       currentQuestionIndex === 
//       questions.length 
//   ) { 
//       quizEnd(); 
//   } else { 
//       getQuestion();