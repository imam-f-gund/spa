import React, { useEffect, useState } from 'react';
import { useLoadingContext } from 'react-router-loading';
import loadData from '../../utils/Fetchers';

export const NoPage = () => {
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
        <div className="card w-75 mx-auto mt-5">
            <div className="card-header">
            <h3 className="text-grey">404 Not Found</h3>
            </div>
            <div className="card-body">
          
          {state ?  <>
                <h1>404 Not Found</h1>
            </> : 'loading...'}
          
          </div>
        </div>
    );
  }

export default NoPage;