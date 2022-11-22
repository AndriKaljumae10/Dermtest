import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentList } from "./data.services";

@Injectable({
    providedIn: 'root'
})

export class CommentListService {
    private commentsUrl = 'api/comments';

    public constructor(
        private http: HttpClient
    ) {
    }

    public fetchComments(): Observable<CommentList[]> {
        return this.http.get<CommentList[]>(this.commentsUrl);
    }

    public addComment(commentList: CommentList) {
        return this.http.post(this.commentsUrl, commentList);
    }

    public updateComment(commentList: CommentList) {
        return this.http.post(this.commentsUrl, commentList);
    }

    public deleteComment(id: number) {
        return this.http.delete(`${this.commentsUrl}/?${id}`);
    }

    public getCommentById(id: number): Observable<CommentList> {
        return this.http.get<CommentList>(`${this.commentsUrl}/?${id}`);
    }
}