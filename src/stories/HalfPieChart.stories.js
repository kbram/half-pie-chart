import React from "react";
import {storiesOf} from '@storybook/react'

import { HalfPieChart } from "../components/HalfPieChart";


const stories = storiesOf('App Test',module);
const right= [
     {
       value: 3000,
       displayValue: "3000 $",
       text: "Achieved",
       color: "#4cb38e",
     },
   ];
const left= [
     {
       value: 10500,
       displayValue: "10500 $",
       text: "Pending",
       color: "#eee36b",
     },
   ];
stories.add('App',()=>{
     return(<HalfPieChart
          name="rentStatus2"
          right={right}
          left={left}
          dark={true}
          title="Monthly Achievement"
        />);
});

