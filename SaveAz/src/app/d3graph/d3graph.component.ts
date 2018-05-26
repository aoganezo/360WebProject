import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent implements OnInit {
  width = 600;
  height = 350;
  data = [
    {
      label: 'January',
      value: 36
    },
    {
      label: 'February',
      value: 54
    },
    {
      label: 'March',
      value: 62
    },
    {
      label: 'April',
      value: 82
    },
    {
      label: 'May',
      value: 96
    },
    {
      label: 'June',
      value: 104
    },
    {
      label: 'July',
      value: 122
    },
    {
      label: 'August',
      value: 152
    },
    {
      label: 'September',
      value: 176
    },
    {
      label: 'October',
      value: 180
    },
    {
      label: 'November',
      value: 252
    },
    {
      label: 'December',
      value: 342
    }
  ];

  max = 0;
  constructor() {
  }

  ngOnInit() {
    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
    this.max = 0;

    const arrLength = this.data.length;
    for (let i = 0; i < arrLength; i++) {
      // Find Maximum X Axis Value
      if (this.data[i].value > this.max) {
        this.max = this.data[i].value;
      }
    }
  }

}
