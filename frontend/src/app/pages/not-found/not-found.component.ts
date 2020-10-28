import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1>Ops! Trang này không tồn tại!</h1>

    <p class="text-center" style="margin-top: 3rem;">
      <button mat-raised-button routerLink="/">
        <span>Quay lại trang chủ</span>
      </button>
    </p>
  `,
})
export class NotFoundComponent {}
