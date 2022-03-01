<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />

<!-- PROJECT LOGO -->
<div align="center">
  <a href="https://github.com/kbram/half-pie-chart">
    <img src="https://github.com/kbram/files/blob/main/half-pie-icon.png" alt="Logo" width="160" height="160">
  </a>

  <h3 align="center">half-pie-chart</h3>

  <p align="center">
    Simply use Half Doughnut Chart to compare two element ratio
    <br />
    <a href="https://github.com/kbram/half-pie-chart"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kbram/half-pie-chart">View Demo</a>
    ·
    <a href="https://github.com/kbram/half-pie-chart/issues">Report Bug</a>
    ·
    <a href="https://github.com/kbram/half-pie-chart/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
   <li><a href="#about-project">About Project</a></li>
   <li><a href="#features">Features</a></li>
    <li><a href="#framework-support">Framework support</a></li>
    <li><a href="#built-With">Built With</a></li>
    <li>
      <a href="#get-started">Get Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usages</a></li>
    <li><a href="#options">Options</a></li>
    <li><a href="#callArrays">CallArrays</a></li>
    <li><a href="#browser-support">Browser Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT FEATHERS -->
## About Project

[![](https://github.com/kbram/files/blob/main/half-pie.png)](https://github.com/kbram/files/blob/main/half-pie.png)


<p align="right">(<a href="#top">back to top</a>)</p>

## Features

- Highly customizable
- Very easy to implement
- Resolution independent
- Uses css for smooth animations on riced time
- Works in all modern browsers, [Chrome, FireFox, Safari]
- Simply compare ratio
- No need other front-end css stuff
- Dark, light modes available and text back colors are editable

<p align="right">(<a href="#top">back to top</a>)</p>

## framework support

- React JS _(no dependencies)_

<p align="right">(<a href="#top">back to top</a>)</p>

## Built With


* [React.js](https://reactjs.org/)
* [JavaScript](https://www.javascript.com/)
* [css]()

<p align="right">(<a href="#top">back to top</a>)</p>

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
<p align="right">(<a href="#top">back to top</a>)</p>

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
<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>

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

<p align="right">(<a href="#top">back to top</a>)</p>

## Browser Support

Native support

- Chrome
- Safari
- FireFox

<p align="right">(<a href="#top">back to top</a>)</p>

## License

[MIT](LICENSE)


> Developed by [`Karunaaharan Bavaram`](https://www.bavaram.info)

<p align="right">(<a href="#top">back to top</a>)</p>

## Copyright

Copyright (c) 2022 [`Karunaaharan Bavaram`](https://www.bavaram.info), contributors. Released under the MIT, GPL licenses

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/kbram/half-pie-chart.svg?style=for-the-badge
[contributors-url]: https://github.com/kbram/half-pie-chart/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kbram/half-pie-chart.svg?style=for-the-badge
[forks-url]: https://github.com/kbram/half-pie-chart/network/members
[stars-shield]: https://img.shields.io/github/stars/kbram/half-pie-chart.svg?style=for-the-badge
[stars-url]: https://github.com/kbram/half-pie-chart/stargazers
[issues-shield]: https://img.shields.io/github/issues/kbram/half-pie-chart.svg?style=for-the-badge
[issues-url]: https://github.com/kbram/half-pie-chart/issues
[license-shield]: https://img.shields.io/github/license/kbram/half-pie-chart.svg?style=for-the-badge
[license-url]: https://github.com/kbram/half-pie-chart/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/bavaram
