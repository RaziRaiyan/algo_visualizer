import React from "react";
import BubbleSort from "./visualizers/BubbleSort";
import InsertionSort from "./visualizers/InsertionSort";
import Layout from "./Layout";
import QuickSort from "./visualizers/QuickSort";
import MergeSort from "./visualizers/MergeSort";

function App() {
  return (
      <Layout>
          <div className={"container mx-auto w-full space-y-8"}>
              <BubbleSort/>
              <InsertionSort/>
              <QuickSort/>
              <MergeSort/>
          </div>
      </Layout>
  )
}

export default App;
