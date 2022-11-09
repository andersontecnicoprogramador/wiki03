import React from 'react';
import Loader from './Loader';

const WikiList = (props) => {
  const { loading, items } = props;

  return !loading ? (
    <div className="wiki-list">
      {
        Object.keys(items).map(key => (
          <div className="rounded overflow-hidden shadow-lg mb-10">

            {
              items[key].thumbnail && <a rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank">
                <img className="w-full max-w-xs m-auto" src={items[key].thumbnail.source} alt={items[key].title} />
              </a>
            }

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <a className="text-blue-500 font-bold" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> {items[key].title}
                </a>
              </div>
              <p className="text-gray-700 text-base mb-2">{items[key].extract}</p>
              <a className="text-blue-500 font-bold" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank">
                Read More...
              </a>
            </div>
          </div>
        ))
      }
    </div>
  ) : <Loader />
};

export default WikiList;
