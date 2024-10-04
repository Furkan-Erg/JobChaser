import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { JobModel } from '../../models/jobModel';
@Component({
  selector: 'jobcard',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: ` <p-card [header]="this.job?.name">
    <p class="m-0">{{ this.job?.description }}</p>
    <div class="flex flex-row justify-between">
      <p class="mt-2" [class]="this.job?.statusColor">
        {{ this.job?.status }}
      </p>
      <p class="mt-2 ">{{ this.job?.url }}</p>
    </div>
  </p-card>`,
  styleUrl: './jobcard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobcardComponent {
  @Input() job: JobModel | undefined;
}
