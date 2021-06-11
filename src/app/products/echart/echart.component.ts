import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.scss']
})
export class EchartComponent implements OnInit {

  name = 'Angular';

  private myChart: any = null;


  
  

  ngOnInit() {
    this.InitPipe();
    this.InitLine();
  }

  private InitPipe(): void {
    this.myChart = echarts.init((document.getElementById('pipe')) as any);

    const option = {
      angleAxis: {
          type: 'category',
          data: ['50', '400', '800', '600', '350', '450', '390']
      },
      radiusAxis: {
      },
      polar: {
      },
      series: [{
          type: 'bar',
          data: [1, 2, 3, 4, 3, 5, 1],
          coordinateSystem: 'polar',
          name: 'A',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }, {
          type: 'bar',
          data: [2, 4, 6, 1, 3, 2, 1],
          coordinateSystem: 'polar',
          name: 'B',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }, {
          type: 'bar',
          data: [1, 2, 3, 4, 1, 2, 5],
          coordinateSystem: 'polar',
          name: 'C',
          stack: 'a',
          emphasis: {
              focus: 'series'
          }
      }],
      legend: {
          show: true,
          data: ['A', 'B', 'C']
      }
  };

    this.myChart.setOption(option);

  }

  private InitLine(): void {
    this.myChart = echarts.init((document.getElementById('line')) as any);

    const option = {
      tooltip: {
          trigger: 'item'
      },
      legend: {
          top: '5%',
          left: 'center'
      },
      series: [
          {
              name: 'Sale',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
              },
              label: {
                  show: false,
                  position: 'center'
              },
              emphasis: {
                  label: {
                      show: true,
                      fontSize: '40',
                      fontWeight: 'bold'
                  }
              },
              labelLine: {
                  show: false
              },
              data: [
                  {value: 1048, name: 'Mug'},
                  {value: 735, name: 'Clipa'},
                  {value: 580, name: 'Rack'},
                  {value: 484, name: 'Glass'},
                  {value: 300, name: 'Jug'}
              ]
          }
      ]
  };

    this.myChart.setOption(option);

  }

  

}
