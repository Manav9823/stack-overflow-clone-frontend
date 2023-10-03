import { Component, OnInit } from '@angular/core';
import { QuesAnsService } from 'src/app/ques-ans.service';


interface answer {
  id:number,
  text:string,
  status:string
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit {

  constructor(private quesAnsService: QuesAnsService){}

  ngOnInit(): void {
  }

  questionCounter = 1
  question: { id: number; title: string; body: string; tags: string[]; answers: answer[];}=
  {
    id:this.questionCounter++,
    title:'',
    body:'',
    tags:[],
    answers:[{
      id:1,
      text:'',
      status:''
    }]
  }
  tagInput: string = '';

  submitQuestion() {
    this.question.tags = this.tagInput.split(',').map(tag => tag.trim());    
    this.quesAnsService.postQuestion(this.question).subscribe(
      response => {
        console.log('Question posted successfully:', response);
        this.question.title = '';
        this.question.body = '';
        this.tagInput = ''
      },
      error => {
        console.error('Error posting question:', error);
      }
    )
  }
}
