# half-pie-chart

> Simply use Half Doughnut Chart to compare two element ratio

## Features

[![](https://github.com/kbram/files/blob/main/half-pie.png)](https://github.com/kbram/files/blob/main/half-pie.png)

- Highly customizable
- Very easy to implement
- Resolution independent
- Uses css for smooth animations on riced time
- Works in all modern browsers, [Chrome, FireFox, Safari]
- Simply compare ratio
- No need other front-end css stuff
- Dark, light modes available and text back colors are editable

## framework support

- React JS _(no dependencies)_

## Get started

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

Using npm:

```bash
$ npm i half-pie-chart
```

Using yarn:

```bash
$ yarn add half-pie-chart
```

---

## Usage

#### sample - 01

```js
import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: [
        {
          value: 20,
          displayValue: "20 $",
          text: "Collected",
          color: "#4cb38e",
        },
      ],
      left: [
        {
          value: 10,
          displayValue: "10 $",
          text: "Pending",
          color: "#eee36b",
        },
      ],
    };
  }
  render() {
    return (
      <HalfPieChart
        name="rentStatus"
        right={this.state.right}
        left={this.state.left}
        title="Rent Status"
      />
    );
  }
}
export default App;
```

#### sample - 02 (Dark Mode)

```js
import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: [
        {
          value: 3000,
          displayValue: "3000 $",
          text: "Achieved",
          color: "#4cb38e",
        },
      ],
      left: [
        {
          value: 10500,
          displayValue: "10500 $",
          text: "Pending",
          color: "#eee36b",
        },
      ],
    };
  }
  render() {
    return (
      <HalfPieChart
        name="rentStatus2"
        right={this.state.right}
        left={this.state.left}
        dark={true}
        title="Monthly Achievement"
      />
    );
  }
}
export default App;
```

#### sample - 03 (change bar color and add center text)

```js
import { HalfPieChart } from "half-pie-chart";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: [
        {
          value: 3000,
          displayValue: "3000 /=",
          text: "Achieved",
          color: "#f19bea",
        },
      ],
      left: [
        {
           value: 10500,
          displayValue: "10500 /=",
          text: "Pending",
          color: "#67d4ff",
        },
      ],
    };
  }
  render() {
    return (
      <HalfPieChart
        name="rentStatus4"
        right={this.state.right}
        left={this.state.left}
        dark={true}
        title="Rent Status"
        fontStyle="Montserrat"
        centerText={"Target"}
        centerPostText={" /="}
      />
    );
  }
}
export default App;
```
---
## Options

You can pass these options to the initialize function to set a custom look and feel for the plugin.

<table>
    <tr>
      <th>Property (Type)</th>
      <th>Default</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><strong>name</strong></td>
      <td>null</td>
      <td>string</td>
      <td>The name is must be compulsory attribute. If you not put this multiple component can't use in same time. this is for identification of our component </td>
    </tr>
    <tr>
      <td><strong>right</strong></td>
      <td>null</td>
      <td>Json Array</td>
      <td>The name is must be compulsory attribute. This array sample is given above sample. </td>
    </tr>
    <tr>
      <td><strong>left</strong></td>
      <td>null</td>
      <td>Json Array</td>
      <td>The name is must be compulsory attribute. This array sample is given above sample. </td>
    </tr>
    <tr>
      <td><strong>dark</strong></td>
      <td>false</td>
      <td>boolean</td>
      <td>This is boolean attribute , It's true value is decided dark mode or not.</td>
    </tr>
    <tr>
        <td><strong>title</strong></td>
        <td>null</td>
        <td>string</td>
        <td>This is for displaying title of component</td>
    </tr>
    <tr>
        <td><strong>fontStyle</strong></td>
        <td>Montserrat, sans-serif</td>
        <td>string</td>
        <td>You can change whole component font style here</td>
    </tr>
    <tr>
        <td><strong>centerText</strong></td>
        <td>null</td>
        <td>string</td>
        <td>If you define this only comes center text part. If not define not comes.</td>
    </tr>
    <tr>
        <td><strong>centerPostText</strong></td>
        <td>null</td>
        <td>string</td>
        <td>This string is postfix of center text part</td>
    </tr>
    <tr>
        <td><strong>cardBackColor</strong></td>
        <td><li>Dark:<code>rgb(32, 32, 32)</code></li><li>Light:<code>rgb(245, 245, 245)</code></li></td>
        <td>string</td>
        <td>This is for background color of the component</td>
    </tr>
    <tr>
        <td><strong>cardTextColor</strong></td>
        <td><li>Dark:<code>#343a40</code></li><li>Light:<code>#e9e9e9</code></li></td>
        <td>string</td>
        <td>This is for text color of the component</td>
    </tr>
</table>

## CallArrays

This array have value and visible text of pie chart 

```js
right: [
    {
      value: 3000,
      displayValue: "3000 $",
      text: "Achieved",
      color: "#4cb38e",
    }],
left: [{
          value: 10500,
          displayValue: "10500 $",
          text: "Pending",
          color: "#eee36b",
    }]
```

<table>
    <tr>
        <th>Property (Type)</th>
        <th>Default</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td><strong>value</strong></td>
        <td><strong>0</strong></td>
        <td><strong>int</strong></td>
        <td>This is compulsory attribute. This is for calculating value. </td>
    </tr>
     <tr>
        <td><strong>displayValue</strong></td>
        <td><strong>null</strong></td>
        <td><strong>int</strong></td>
        <td>This is compulsory attribute. This is just displaying value.</td>
    </tr>
     <tr>
        <td><strong>text</strong></td>
        <td><strong>null</strong></td>
        <td><strong>int</strong></td>
        <td>This is compulsory attribute. This is displaying text.</td>
    </tr>
    <tr>
        <td><strong>color</strong></td>
        <td><strong>null</strong></td>
        <td><strong>int</strong></td>
        <td>This is changed color of the pie bar, you can customize any of the color.</td>
    </tr>
</table>

## Browser Support

Native support

- Chrome
- Safari
- FireFox


## License

[MIT](LICENSE)


> Developed by Karunaaharan Bavaram

## Copyright

Copyright (c) 2022 Karunaaharan Bavaram, contributors. Released under the MIT, GPL licenses
