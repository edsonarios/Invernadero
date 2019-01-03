export const CORPORATE_THEME = {
  name: 'corporate',
  base: 'default',
  variables: {
    temperature: [
      '#2ec7fe',//azul
      '#7bff24',//verde lechuga
      '#31ffad',//verde
      '#f7bd59',//naranja
      '#f2320c',//rojo
     
    ],

    solar: {
      gradientLeft: '#ff8ea0',
      gradientRight: '#ffa36b',
      shadowColor: 'rgba(0, 0, 0, 0)',
      radius: ['80%', '90%'],
    },

    traffic: {
     colorBlack: '#000000',
      tooltipBg: '#ffffff',
      tooltipBorderColor: '#c0c8d1',
      tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      lineBg: '#c0c8d1',
      lineShadowBlur: '1',
      itemColor: '#bcc3cc',
      itemBorderColor: '#bcc3cc',
      itemEmphasisBorderColor: '#42db7d',
      shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
      shadowLineShadow: 'rgba(0, 0, 0, 0)',
      gradFrom: '#ebeef2',
      gradTo: '#ebeef2',
    },

    electricity: {
      tooltipBg: '#edf0f4',
      tooltipLineColor: '#bdc4cd',
      tooltipLineWidth: '0',
      tooltipBorderColor: '#ebeef2',
      tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#2a2a2a',
      tooltipFontWeight: 'bolder',

      axisLineColor: 'rgba(0, 0, 0, 0)',
      xAxisTextColor: '#2a2a2a',
      yAxisSplitLine: '#ebeef2',

      itemBorderColor: '#73a1ff',
      lineStyle: 'solid',
      lineWidth: '4',
      lineGradFrom: '#bdc4cd',
      lineGradTo: '#c0c8d1',
      lineShadow: 'rgba(0, 0, 0, 0)',

      areaGradFrom: 'rgba(255, 255, 255, 0)',
      areaGradTo: 'rgba(255, 255, 255, 0)',
      shadowLineDarkBg: 'rgba(255, 255, 255, 0)',
    },

    bubbleMap: {
      titleColor: '#484848',
      areaColor: '#dddddd',
      areaHoverColor: '#cccccc',
      areaBorderColor: '#ebeef2',
    },

    echarts: {
      bg: '#ffffff',
      textColor: '#484848',
      axisLineColor: '#bbbbbb',
      splitLineColor: '#ebeef2',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '0.7',
    },

    chartjs: {
      axisLineColor: '#cccccc',
      textColor: '#484848',
    },
  },
};
