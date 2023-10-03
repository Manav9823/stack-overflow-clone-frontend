import { Component, OnInit } from '@angular/core';
import { QuesAnsService } from 'src/app/ques-ans.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{
  constructor(private quesAns:QuesAnsService){}
  questions: any[] = [];
  status: string = ''

  ngOnInit(): void {
    this.quesAns.getQuestions().subscribe(
      data => {
        this.questions = data;
        this.questions.forEach(question => {
          const newAnswers = question.answers.filter((item: { text: string; }) => item.text !== '')
          question.answers = newAnswers
        }); 
      },
      error => {
        console.error('Error fetching questions:', error);
      }
    )
  }

  postAnswer(question: any) {
    const answer = question.answer;
    if (answer) {
      question.answers = question.answers || [];
      let reqAnswers = {
        id : question.answers.length + 1,
        text : answer,
        status : ''
      }
      question.answers.push(reqAnswers);
      question.answer = '';

      // Update the backend with the new answer
      this.quesAns.postAnswer(question).subscribe(
        response => {
          console.log('Answer posted successfully:', response);

        },
        error => {
          console.error('Error posting answer:', error);
        }
      );
    }
  }

  markAccepted(question: any, ansId:number, Accepted:boolean) {
    question.answers[ansId - 1].status = 'Accepted'
    this.updateAnswerStatus(question, ansId,Accepted);
  }

  markRejected(question: any, ansId:number, Accepted:boolean) {
    question.answers[ansId - 1].status = 'Rejected'
    this.updateAnswerStatus(question, ansId, Accepted);
  }

  updateAnswerStatus(question: any, ansId:number, Accepted:boolean) {
    this.quesAns.updateAnswerStatus(question.id, ansId, Accepted).subscribe(
      response => {
        console.log('Answer status updated successfully:', response);
      },
      error => {
        console.error('Error updating answer status:', error);
      }
    );
  }
}
