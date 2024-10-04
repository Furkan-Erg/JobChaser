import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobcardComponent } from '../../components/jobcard/jobcard.component';
import { JobModel } from '../../models/jobModel';
import { JOB_STATUS_COLOR } from '../../enums/jobEnum';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [CommonModule, JobcardComponent],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoblistComponent {
  jobList: JobModel[] = [
    {
      name: 'furkan',
      url: 'fur',
      description: 'asdaskljdalskjdlaksj',
      status: 'waiting for hr',
      statusColor: JOB_STATUS_COLOR.Yellow,
    },
  ];
}
