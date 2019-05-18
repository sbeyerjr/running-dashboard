var options = {
  chart: {
    height: 150,
    type: "area"
  },
  series: [
    {
      name: "Average BPM",
      data: [60, 64, 65, 78, 83, 90, 92, 94, 90, 84, 76, 65]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "00:00",
      "03:23",
      "05:56",
      "9:45",
      "12:12",
      "15:02",
      "17:38",
      "23:26",
      "25:15",
      "30:04",
      "31:23",
      "34:12"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();

$(".navbar-toggler").click(function() {
  $(".nav-item").toggleClass("hide-nav");
});
