import { Component, IterableDiffers, OnInit } from '@angular/core'
import { Chart, registerables } from 'chart.js/auto';
import { ChartserviesService } from '../chartservies.service';
import { Saledata } from './mychart.model';
import { HttpClient } from '@angular/common/http';
Chart.register(...registerables)

@Component({
  selector: 'app-mychart',
  standalone: true,
  imports: [],
  providers:[ChartserviesService,HttpClient],


  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.css'
})
export class MychartComponent implements OnInit {
  chartdata: Saledata[] = []
  amountdata:any[]=[]
  labledata:any[]=[]
  colordata:any[]=[]
  constructor(public chart: ChartserviesService) { }

  ngOnInit() {
    this.loaddata()
  }

  loaddata() {
    this.chart.loadsales().subscribe((res: any) => {
      this.chartdata = res
      if(this.chartdata!=null){
        this.chartdata.map((item)=>{
          this.labledata.push(item.year)
          this.amountdata.push(item.Amount)
          this.colordata.push(item.colorcode)
        })
      }
    })
    this.renderbarchart(this.labledata,this.amountdata,this.colordata)
    this.renderpiechart(this.labledata,this.amountdata,this.colordata)
  }

  renderbarchart(labledata:any,valuedata:any,colordata:any){
    this.Renderchart(labledata,valuedata,colordata,"barchart",'bar')
  }
  renderpiechart(labledata:any,valuedata:any,colordata:any){
    this.Renderchart(labledata,valuedata,colordata,"piechart",'pie')
  }

  Renderchart(labledata:any,valuedata:any,colordata:any,chartid:any,charttype:any){
    const mychart=new Chart(chartid,{
      type:charttype,

      data:{
        
        labels:labledata,
        datasets:[
          {
            label:'yearly sales',
            data:valuedata,
            backgroundColor:colordata
          }
        ]
      },
      options:{
        scales:{
          y:{
            beginAtZero:true
          }
        }
      }
    })
  }
}
