import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  question: { title: string, body: string, tags: string[] } = { title: '', body: '', tags: [] };
  tagInput: string = '';

  submitQuestion() {
    // Convert the comma-separated tags to an array
    this.question.tags = this.tagInput.split(',').map(tag => tag.trim());
    
    // Implement logic to post the question (e.g., using a service)
    console.log('Question submitted:', this.question);
  }
}
