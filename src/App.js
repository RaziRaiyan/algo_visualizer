import React from "react";
import BubbleSort from "./visualizers/BubbleSort";
import InsertionSort from "./visualizers/InsertionSort";
import Layout from "./Layout";
import QuickSort from "./visualizers/QuickSort";
import MergeSort from "./visualizers/MergeSort";

function App() {
  return (
      <Layout>
          <div className={"w-full flex"}>
              <div className={"w-1/6 bg-gray-900 mt-16"}>

              </div>
              <div className={"w-5/6 h-screen overflow-y-scroll space-y-8 px-4 pt-20"}>
                  <BubbleSort/>
                  <InsertionSort/>
                  <QuickSort/>
                  <MergeSort/>
              </div>
          </div>
      </Layout>
  )
}

export default App;
