import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.css']
})
export class FeedbackPage {
  feedbackForm: FormGroup;
  rating: number;
  feedbackType: string;
  feedback: string;
  email: string;

  constructor() {
    this.feedbackForm = new FormGroup({
      feedback: new FormControl('', Validators.required)
    });
  }

  submitFeedback() {
    if (this.feedbackForm.valid) {
      const feedbackData = {
        rating: this.rating,
        feedbackType: this.feedbackType,
        feedback: this.feedback,
        email: this.email
      };
      // Send feedback data to server or store locally
      console.log('Feedback submitted:', feedbackData);
      // Reset feedback form
      this.feedbackForm.reset();
    } else {
      console.log('Please fill in all required fields!');
    }
  }
}
