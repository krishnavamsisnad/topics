import { Component, IterableDiffers, OnInit } from '@angular/core'
import { Chart, registerables } from 'chart.js/auto';
import { ChartserviesService } from '../chartservies.service';
import { MonthlyTotal, Saledata, SalesReport, TotalsByMonth } from './mychart.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
Chart.register(...registerables)

@Component({
  selector: 'app-mychart',
  standalone: true,
  imports: [CommonModule],
  providers: [ChartserviesService],
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.css'
})
export class MychartComponent implements OnInit {
  chartdata: Saledata[] = []
  saclestotal: { sales: number, order: number, items: number,shipping:string, tax: string }[] = [];
  amountdata: any[] = []
  labledata: any[] = []
  colordata: any[] = []
  salesdata: any[] = []
  

  apiSubscription!: Subscription;
  constructor(public chart: ChartserviesService) { }

  ngOnInit() {

    this.loadproductssales()
    this.renderbarchart(this.labledata, this.amountdata, this.colordata)
    this.renderpiechart(this.labledata, this.amountdata, this.colordata)
    this.renderdoughnutchart(this.labledata, this.amountdata, this.colordata)
    this.renderpolarareachart(this.labledata, this.amountdata, this.colordata)
    this.renderlinechart(this.labledata, this.amountdata, this.colordata)
    this.renderscatterchart(this.labledata, this.amountdata, this.colordata)
  }

  loaddata() {
    this.chart.loadsales().subscribe((res: any) => {
      this.chartdata = res
      if (this.chartdata != null) {
        this.chartdata.map((item: any) => {
          this.labledata.push(item.year)
          this.amountdata.push(item.Amount)
          this.colordata.push(item.colorcode)
        })
      }
    })
    this.renderbarchart(this.labledata, this.amountdata, this.colordata)
    this.renderpiechart(this.labledata, this.amountdata, this.colordata)
    this.renderdoughnutchart(this.labledata, this.amountdata, this.colordata)
    this.renderpolarareachart(this.labledata, this.amountdata, this.colordata)
    this.renderlinechart(this.labledata, this.amountdata, this.colordata)
    this.renderscatterchart(this.labledata, this.amountdata, this.colordata)
  }



  renderbarchart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "barchart", 'bar')
  }
  renderpiechart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "piechart", 'pie')
  }
  renderdoughnutchart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "doughnutchart", 'doughnut')
  }
  renderpolarareachart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "polarAreachart", 'polarArea')
  }

  renderlinechart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "linechart", 'line')
  }

  renderscatterchart(labledata: any, valuedata: any, colordata: any) {
    this.Renderchart(labledata, valuedata, colordata, "scatterchart", 'scatter')
  }


  Renderchart(labledata: any, valuedata: any, colordata: any, chartid: any, charttype: any) {
    const mychart = new Chart(chartid, {
      type: charttype,

      data: {

        labels: labledata,
        datasets: [
          {
            label: 'yearly sales',
            data: valuedata,
            backgroundColor: colordata
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

  loadproductssales() {
    this.chart.getSalesData('2024-01-01', '2024-08-01').subscribe((res: SalesReport[]) => {
      const salesReport = res[0];
      console.log(salesReport);


      if (salesReport && salesReport.totals != null) {
        this.labledata = Object.keys(salesReport.totals);
        this.labledata.forEach((t) => {
          this.salesdata.push(parseFloat(salesReport.totals[t].sales));
          this.saclestotal.push({
            sales: parseInt(salesReport.totals[t].sales),
            order: salesReport.totals[t]?.orders ,
            items: salesReport.totals[t]?.items || 0,
            shipping:salesReport.totals[t]?.shipping,
            tax: salesReport.totals[t]?.tax 
          });
          this.colordata.push(this.getRandomColor());
        })


        this.renderscaleschart(this.labledata, this.salesdata, this.colordata);
        this. renderscalespiechart(this.labledata, this.salesdata, this.colordata);
      }
    });
  }

  renderscaleschart(labledata: string[], salesdata: number[], colordata: string[]) {
    this.renderSalesBarChart(labledata, salesdata, colordata, 'salesBarChart', 'bar');
  }
  
  renderscalespiechart(labledata: string[], salesdata: number[], colordata: string[]) {
    this.renderSalesBarChart(labledata, salesdata, colordata, 'salesbarchart', 'pie');
  }

  renderSalesBarChart(labledata: string[], salesdata: number[], colordata: string[], chartId: string, chartType: any) {
  
    new Chart(chartId, {
      type: chartType,
      data: {
        labels: labledata,
        datasets: [{
          label: 'Monthly Sales ',
          data: salesdata,
          backgroundColor: colordata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Month',
              color: '#911'
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Sales ($)',
              color: '#191'
            }
          }
        }
      }
    });

  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
