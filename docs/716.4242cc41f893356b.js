"use strict";(self.webpackChunkquiz_maker=self.webpackChunkquiz_maker||[]).push([[716],{5716:(z,r,t)=>{t.r(r),t.d(r,{QuizResultsComponent:()=>g});var i=t(6814),c=t(9671),s=t(4946),l=t(8660),a=t(4670);const _=function(o,u,e){return{bad:o,regular:u,good:e}};let g=(()=>{class o{constructor(e,n){this.quizService=e,this.router=n,this.questions=[],this.correctAnswers=0}ngOnInit(){this.questions=this.quizService.loadQuestions(),this.correctAnswers=this.questions.filter(e=>e.correctAnswer===e.selectedAnswer).length}onNewQuiz(){this.quizService.resetQuestions(),this.router.navigate(["/"])}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(l.v),s.Y36(a.F0))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-quiz-results"]],standalone:!0,features:[s.jDz],decls:7,vars:9,consts:[[3,"questions","showResults"],[3,"ngClass"],[3,"click"]],template:function(e,n){1&e&&(s.TgZ(0,"h2"),s._uU(1,"RESULTS"),s.qZA(),s._UZ(2,"app-quiz-questions",0),s.TgZ(3,"p",1),s._uU(4),s.qZA(),s.TgZ(5,"button",2),s.NdJ("click",function(){return n.onNewQuiz()}),s._uU(6,"Create a new quiz"),s.qZA()),2&e&&(s.xp6(2),s.Q6J("questions",n.questions)("showResults",!0),s.xp6(1),s.Q6J("ngClass",s.kEZ(5,_,n.correctAnswers<2,n.correctAnswers>=2&&n.correctAnswers<4,n.correctAnswers>=4)),s.xp6(1),s.AsE("You scored ",n.correctAnswers," out of ",n.questions.length,""))},dependencies:[c.j,i.mk],styles:[".bad[_ngcontent-%COMP%]{background-color:red}.regular[_ngcontent-%COMP%]{background-color:#ff0}.good[_ngcontent-%COMP%]{background-color:green}"]}),o})()}}]);