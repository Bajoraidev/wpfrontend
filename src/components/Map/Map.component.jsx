import React from 'react';
import { MapContainer, SVGContainer } from './Map.styles';
import { Tooltip } from 'react-svg-tooltip';

const Map = ({ height, width, handleClick }) => {
  return (
    <>
      <MapContainer>
        <SVGContainer
          id='svg'
          xmlns='http://www.w3.org/2000/svg'
          height={height}
          width={width}
          version='1.1'
          viewBox='0 0 2000 900'
          handleChange
        >
          <rect className='cls-1' x='0.5' y='0.5' width='1309' height='377' />
          <path
            d='M1408,123V499H100V123H1408m1-1H99V500H1409V122Z'
            transform='translate(-99 -122)'
          />
          <rect className='cls-2' x='1310.5' y='0.5' width='398' height='702' />
          <path
            d='M1807,123V824H1410V123h397m1-1H1409V825h399V122Z'
            transform='translate(-99 -122)'
          />
          <rect className='cls-3' x='1606.5' y='620.5' width='92' height='66' />
          <path
            d='M1797,743v65h-91V743h91m1-1h-93v67h93V742Z'
            transform='translate(-99 -122)'
          />
          <circle
            id='Workspace1'
            onClick={handleClick}
            //style={{ fill: 'green' }}
            className='cls-4'
            cx='1634.5'
            cy='669.5'
            r='13'
          />

          <circle
            id='Workspace2'
            onClick={handleClick}
            style={{ fill: 'green' }}
            className='cls-4'
            cx='1673.5'
            cy='669.5'
            r='13'
          />
          <circle
            id='Workspace30'
            onClick={handleClick}
            style={{ fill: 'green' }}
            className='cls-4'
            cx='1634.5'
            cy='639.5'
            r='13'
          />
          <circle className='cls-4' cx='1673.5' cy='639.5' r='13' />
          <rect className='cls-3' x='1606.5' y='542.5' width='92' height='66' />
          <path
            d='M1797,665v65h-91V665h91m1-1h-93v67h93V664Z'
            transform='translate(-99 -122)'
          />
          <circle className='cls-4' cx='1634.5' cy='591.5' r='13' />
          <circle className='cls-4' cx='1673.5' cy='591.5' r='13' />
          <circle className='cls-4' cx='1634.5' cy='561.5' r='13' />
          <circle className='cls-4' cx='1673.5' cy='561.5' r='13' />
          <rect className='cls-3' x='1606.5' y='464.5' width='92' height='66' />
          <path
            d='M1797,587v65h-91V587h91m1-1h-93v67h93V586Z'
            transform='translate(-99 -122)'
          />
          <circle className='cls-4' cx='1634.5' cy='513.5' r='13' />
          <circle className='cls-4' cx='1673.5' cy='513.5' r='13' />
          <circle className='cls-4' cx='1634.5' cy='483.5' r='13' />
          <circle className='cls-4' cx='1673.5' cy='483.5' r='13' />
        </SVGContainer>
      </MapContainer>
    </>
  );
};

export default Map;
