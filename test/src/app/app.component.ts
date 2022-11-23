import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentListService } from './comment-list.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public form: FormGroup;
	public comments: any[] = [];

	public constructor(
		private readonly formBuilder: FormBuilder,
		private readonly commentListService: CommentListService
	) {
		this.form = this.formBuilder.group({
			name: ["", Validators.required],
			text: ["", Validators.required]
		})
	}

	public ngOnInit(): void {
		this.commentListService.fetchComments().subscribe(comments => this.comments = comments)
	}

	public submit() {
		if (this.form.valid) {
			this.commentListService.addComment(this.form.value).subscribe(res => {
				this.commentListService.fetchComments().subscribe(comments => this.comments = comments)
			})
		}
	}
}