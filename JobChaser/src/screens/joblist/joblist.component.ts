import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobcardComponent } from '../../components/jobcard/jobcard.component';
import { JobModel } from '../../models/jobModel';
import { JOB_STATUS_COLOR } from '../../enums/jobEnum';
import { ButtonModule } from 'primeng/button';
import { AddJobModalComponent } from '../../components/addJobModal/addJobModal.component';

@Component({
  selector: 'app-joblist',
  standalone: true,
  imports: [CommonModule, JobcardComponent, ButtonModule, AddJobModalComponent],
  templateUrl: './joblist.component.html',
  styleUrl: './joblist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoblistComponent {
  jobList: JobModel[] = [
    {
      companyName: 'huawei',
      url: '/https://primeng.org/card',
      position: 'frontend dev',
      applyDate: new Date(),
      status: 'waiting for hr',
      statusColor: JOB_STATUS_COLOR.Yellow,
    },
  ];
  ngOnInit() {
    this.getJobList();
  }
  getJobList() {
    this.jobList = JSON.parse(localStorage.getItem('jobList') ?? '[]');
  }
  addNewJob(job: JobModel) {
    this.jobList.push(job);
    localStorage.setItem('jobList', JSON.stringify(this.jobList));
  }
}
