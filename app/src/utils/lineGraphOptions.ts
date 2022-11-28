import { Options } from 'highcharts'

export const options: Options = {
  title: {
    text: '総人口推移'
  },
  xAxis: {
    title: {
      text: '年度'
    },
    gridLineWidth: 1,
    min: 1980,
    max: 2020
  },
  yAxis: {
    title: {
      text: '人口（万人）'
    },
    gridLineWidth: 1,
    tickInterval: 100000,
    labels: {
      formatter() {
        return `${Number(this.value) / 10000}`
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  plotOptions: {
    series: {
      pointStart: 1980,
      pointInterval: 5
    }
  },
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 768
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }
    ]
  }
}
