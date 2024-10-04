import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { JobModel } from '../../models/jobModel';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'jobcard',
  standalone: true,
  imports: [CommonModule, CardModule, RouterModule],
  template: ` <p-card [header]="this.job?.companyName">
    <p>{{ this.job?.position }}</p>

    <p [routerLink]="this.job?.url" routerLinkActive="router-link-active">
      Click to Go
    </p>
    <div class="flex flex-row justify-between gap-8">
      <p [class]="this.job?.statusColor">
        {{ this.job?.status }}
      </p>
      <p>{{ this.job?.applyDate | date : 'shortDate' }}</p>
    </div>
  </p-card>`,
  styleUrl: './jobcard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobcardComponent {
  @Input() job: JobModel | undefined;
}
