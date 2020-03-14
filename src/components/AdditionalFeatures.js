import React from 'react';
import {useSelector} from 'react-redux';

 import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures);
  
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <div>
        <p>Nice looking car!</p>
        <p>Visit our  dealership for items not listed here</p>
        </div>
      )}
    </div>
  );
};

export default AdditionalFeatures;
