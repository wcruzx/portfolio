import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (alert$ | async; as alert) {
    <div class="alert-container" [class.show]="alert">
      <div class="alert" [class]="alert.type">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          @if (alert.type === 'success') {
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
          } @else {
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
          />
          }
        </svg>
        {{ alert.message }}
      </div>
    </div>
    }
  `,
  styles: [
    `
      :host {
        position: fixed;
        top: 250px;
        right: 59px;
        z-index: 1000;
      }

      .alert-container {
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;

        &.show {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .alert {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-weight: 500;
        min-width: 300px;
        max-width: 450px;
        animation: slideIn 0.3s ease-out;

        .icon {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        &.success {
          background: #10b981;
          color: white;
        }

        &.error {
          background: #ef4444;
          color: white;
        }
      }
    `,
  ],
})
export class AlertComponent {
  alert$;

  constructor(private alertService: AlertService) {
    this.alert$ = this.alertService.alert$;
  }
}
