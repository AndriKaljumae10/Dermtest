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
	public totalComments: number;
	public comments: any[] = [];


	public constructor(
		private readonly formBuilder: FormBuilder,
		private readonly commentListService: CommentListService
	) {
		this.form = this.formBuilder.group({
			name: ["", Validators.required],
			comment: ["", Validators.required]
		})
		this.totalComments = 0;
	}

	public ngOnInit(): void {
		this.commentListService.fetchComments().subscribe((res) => {
			console.log(res)
		})
	}

	public submit() {
		console.log(this.form.value)
	}
}