import React, { useEffect, useState } from 'react';
import { useLoadingContext } from 'react-router-loading';
import loadData from '../../utils/Fetchers';

import ChartComponent from "../component/ChartComponent";
import PieChart from "../component/PieChart";

export const Home = () => {
  const [state, setState] = useState();
  const loadingContext = useLoadingContext();

  const loading = async () => {
    // loading some data
    const data = await loadData();
    setState(data);

    // call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => { loading(); }, []);

    return (
      <>
      <div className="card w-50 mx-auto mt-5">
          <div className="card-header">
          <h3 className="text-grey">Home</h3>
          </div>
          <div className="card-body">
          {state ?  <ChartComponent /> : 'loading...'}
          
          </div>
        </div>
        
        </>
    );
  }

export default Home;