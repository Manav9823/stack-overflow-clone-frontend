import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuesAnsService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/questions`);
  }

  postQuestion(question: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/questions`, question);
  }

  postAnswer(answer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/answers`, answer);
  }
  login(answer: any): Observable<any> {
    const data = {answer}
    return this.http.post<any>(`${this.apiUrl}/login`, data);
  }
  updateAnswerStatus(id:number, ansId:number, Accepted:boolean){
    console.log('In update status service')
    const data = {Accepted}
    return this.http.put<any>(`${this.apiUrl}/updateAnswer/${id}/${ansId}`, data);
  }
}
