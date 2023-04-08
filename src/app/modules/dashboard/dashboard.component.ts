import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarrosService } from 'src/app/core/services/carros.service';
import { S3Client, ListObjectsV2CommandOutput } from '@aws-sdk/client-s3';

import { environment } from 'src/environments/environment.development';
import { ICarro } from 'src/app/shared/models/carro';

// const s3 = new S3Client({
//   credentials : {
//     accessKeyId : environment.AWS_ACCESS_KEY,
//     secretAccessKey : environment.AWS_SECRET_ACCESS_KEY
//   },
//   region : environment.DEFAULT_REGION
// })

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  carros$!: any

  constructor(private carrosService: CarrosService) {}

  ngOnInit(): void {
    // this.carros$ = this.carrosService.retornaCarros()
    this.carrosService.retornaCarros().subscribe({
      next : (response) => {
        console.log(response.Contents)
        this.carros$ = response.Contents
      },
      error : (err) => console.error(err)
    })
  }
}
