import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 导入 Router

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {
  user = {
    name: 'Muhannad',
    age: 26,
    gender: 'Male',
    email: '',
    phoneNumber: '',
    address: '',
    interests: []
  };

  newInterest = '';
  isEditable = false;

  constructor(private router: Router) { }

  updateProfile() {
    console.log('Updated Profile:', this.user);
    this.isEditable = false;
  }

  enableEditing() {
    this.isEditable = true;
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/regist']); // 根据你的路由配置导航到注册页面
  }

  addInterest() {
    this.user.interests.push(this.newInterest);
    this.newInterest = '';
  }

  getInterestColor(interest: string) {
    // Return a color for the interest chip
    return 'primary';
  }
}
