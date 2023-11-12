import React, { useEffect, useState } from 'react';
import { useLoadingContext } from 'react-router-loading';
import loadData from '../../utils/Fetchers';

export const Contact = () => {
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
  return <div>
          <div className="card text-center w-75 mx-auto mt-5">
                  <div className="card-header">
                  <h3 className="text-grey">Contact</h3>
                  </div>
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <ul>
                      {state ? <><li><strong>Email:</strong> info@example.com</li>
                      <li><strong>Phone:</strong> 1-800-555-1234</li>
                      <li><strong>Address:</strong> 123 Main St, Anytown USA</li></> : 'loading...'}
                      
                      </ul>
                      <footer className="blockquote-footer mt-1">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                  </div>
                </div>
  </div>;
};

export default Contact;

