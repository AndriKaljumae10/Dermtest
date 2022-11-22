import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const comments = [
      new CommentList(1, "Andri Kaljumäe", "Ma ei oska midagi tarka öelda"),
      new CommentList(2, "Madis Padi", "Mulle megalt meeldib koodida"),
      new CommentList(3, "Onu Heino", "Mida ma siia kirjutama peaksin?")
    ];
    return { comments }
  }

  genId(comments: CommentList[]): number {
    return comments.length > 0 ? Math.max(...comments.map(comment => comment.id)) + 1 : 11;
  }
}

export class CommentList {
  id: number;
  name: string;
  text: string;

  public constructor(
    id: number,
    name: string,
    text: string,
  ) {
    this.id = id;
    this.name = name;
    this.text = text;
  }
}