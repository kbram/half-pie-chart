// @autor Karunaaharan Bavaram (Package owns by bavaram)
import React, { Component } from "react";
import "./style.css";
export class HalfPieChart extends Component {
  render() {
    return (
      <>
        <style>
          {`
            @keyframes rotate-one-${this.props.name} {
               100% {
                 transform: rotate(0deg);
               }
               100% {
                transform: rotate(${
                  (parseInt(this.props.right[0].value) /
                    (parseInt(this.props.right[0].value) +
                      parseInt(this.props.left[0].value))) *
                  180
                }deg);
              }
             }
            @keyframes rotate-two-${this.props.name} {
              0% {
                transform: rotate(${
                  (parseInt(this.props.right[0].value) /
                    (parseInt(this.props.right[0].value) +
                      parseInt(this.props.left[0].value))) *
                  180
                }deg);
              }
              100% {
                transform: rotate(180deg);
              }
            }
            
            .chart-skills-${this.props.name} *,
            .chart-skills-${this.props.name}::before {
              box-sizing: border-box;
            }
            .chart-skills-${this.props.name} {
              position: relative;
              width:220px;
              height: 110px;
              overflow: hidden;
              margin: 0 auto ;
              margin-top: 30px;
              padding: 0;
              list-style-type: none;
            }
            .chart-skills-${this.props.name} li {
              position: absolute;
              top: 100%;
              left: 0;
              width: inherit;
              height: inherit;
              border: 35px solid;
              border-top: none;
              border-bottom-left-radius: 175px;
              border-bottom-right-radius: 175px;
              transform-origin: 50% 0;
              transform-style: preserve-3d;
              backface-visibility: hidden;
              animation-fill-mode: forwards;
              animation-duration: .4s;
              animation-timing-function: linear;
            }
            .chart-skills-${this.props.name} span {
              position: absolute;
              font-size: .85rem;
              backface-visibility: hidden;
              animation: fade-in .4s linear forwards;
            }
            .chart-skills-${this.props.name}::before,
            .chart-skills-${this.props.name}::after {
              position: absolute;
            }
            .chart-skills-${this.props.name}::after {
              content: '${parseInt(
                (parseInt(this.props.right[0].value) /
                  (parseInt(this.props.right[0].value) +
                    parseInt(this.props.left[0].value))) *
                  100
              )}%';
              left: 50%;
              bottom: 0px;
              transform: translateX(-50%);
              font-size: 1.8rem;
              font-weight: bold;
              color: ${this.props.dark ? this.props.cardTextColor ? this.props.cardTextColor : "#d3d3d3" : this.props.cardTextColor ? this.props.cardTextColor : "#373737"}!important;
              font-family: "Montserrat", sans-serif;
            }
            .chart-skills-${this.props.name}::before {
            
              width: inherit;
              height: inherit;
              border: 45px solid rgba(211, 211, 211, .3);
              border-bottom: none;
              border-top-left-radius: 175px;
              border-top-right-radius: 175px;
            }
            .chart-skills-${this.props.name} li:nth-child(1) {
              border-color: ${
                this.props.right[0].color
                  ? this.props.right[0].color
                  : "#121212"
              };
              z-index: 4;
              animation-name: rotate-one-${this.props.name};
            }
            .chart-skills-${this.props.name} li:nth-child(2) {
              border-color: ${
                this.props.left[0].color ? this.props.left[0].color : "#121212"
              };
                      z-index: 3;
              animation-name: rotate-two-${this.props.name};
              animation-delay: .4s;
            }
            

            .pieTextDark-${this.props.name} {
              color: ${
                this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
              };!important;
            }
            .pieTextLight-${this.props.name} {
              color:  ${
                this.props.cardTextColor ? this.props.cardTextColor : "#e9e9e9"
              };!important;
            }

            .DashCard-${this.props.name} {
              background-color: ${
                this.props.cardBackColor
                  ? this.props.cardBackColor
                  : "rgb(245, 245, 245)"
              };
              border-radius: 28px;
              padding-top: 10px;
              padding-bottom: 30px;
              padding-right: 10px;
              padding-left: 10px;
              max-width: 300px;
            }
            .DashCardDark-${this.props.name} {
              background-color: ${
                this.props.cardBackColor
                  ? this.props.cardBackColor
                  : "rgb(32, 32, 32)"
              };
              border-radius: 28px;
              padding-top: 10px;
              padding-bottom: 30px;
              padding-right: 10px;
              padding-left: 10px;
              max-width: 300px;
            }
            .pieHead {
              font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
              padding-left:14px;
              padding-top:5px;
              font-size: 16px;
              font-weight: 600;
            }
            .TextPie1 {
              font-family:`+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
              font-size: 16px;
              margin: 5px;
              font-weight: 600;
            }
            .TextPie2 {
              font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
              margin: 5px;
              font-size: 13px;
            }
            .TextPie3 {
              font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
              font-size: 19px;
              margin: 5px;
              font-weight: 600;
            }
            .TextPie4 {
              font-family: "Montserrat", sans-serif;
              margin: 5px;
              font-size: 17px;
            }
        `}
        </style>
        <div className={this.props.dark ? "DashCardDark-"+this.props.name : "DashCard-"+this.props.name}>
          <h1
            className={
              this.props.dark
                ? "pieHead pieTextLight-"+this.props.name
                : "pieHead pieTextDark-"+this.props.name
            }
          >
            {this.props.title}
          </h1>
          <ul class={"chart-skills-" + this.props.name}>
            {this.props.right[0] && <li></li>}
            {this.props.left[0] && <li></li>}
          </ul>
          <div className="rowPie ">
            <div className="colPie leftPieTitle">
              <div className=" TextPie-center">
                <p
                  className={
                    this.props.dark
                      ? "TextPie1 pieTextLight-"+this.props.name
                      : "TextPie1 pieTextDark-"+this.props.name
                  }
                >
                  {this.props.right[0].displayValue}
                </p>
                <p
                  className={
                    this.props.dark
                      ? "TextPie2 pieTextLight-"+this.props.name
                      : "TextPie2 pieTextDark-"+this.props.name
                  }
                >
                  {this.props.right[0].text}
                </p>
              </div>
            </div>
            <div className="colPie rightPieTitle">
              <div className=" TextPie-center">
                <p
                  className={
                    this.props.dark
                      ? "TextPie1 pieTextLight-"+this.props.name
                      : "TextPie1 pieTextDark-"+this.props.name
                  }
                >
                  {this.props.left[0].displayValue}
                </p>
                <p
                  className={
                    this.props.dark
                      ? "TextPie2 pieTextLight-"+this.props.name
                      : "TextPie2 pieTextDark-"+this.props.name
                  }
                >
                  {this.props.left[0].text}
                </p>
              </div>
            </div>
            
          </div>
          {this.props.centerText&&
          <div className="rowPie ">
            <div className="colPie  TextPie-center">
            <p
                  className={
                    this.props.dark
                      ? "TextPie2 pieTextLight-"+this.props.name
                      : "TextPie2 pieTextDark-"+this.props.name
                  }
                >
                  <b>{this.props.centerText}</b> &nbsp;&nbsp;: &nbsp;&nbsp;{(parseInt(this.props.right[0].value) +
                      parseInt(this.props.left[0].value))}{this.props.centerPostText}
                </p>
            </div>
            </div>}
        </div>
      </>
    );
  }
}

