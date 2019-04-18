import React, { useState } from 'react';
import { css } from '@emotion/core';

import Menu from '../Menu';

const TopNav = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  return (
    <>
      <span
        css={css`
          position: absolute;
          top: 0;
          font-family: 'Canela-Medium';
          padding: 10px 100px;
          width: 100%;
          display: flex;
          background-color: transparent;
          justify-content: space-between;
          align-items: baseline;
          z-index: 1;
        `}
      >
        <svg
          width='259px'
          height='22px'
          viewBox='0 0 259 22'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <polygon
              id='path-1'
              points='0.769230769 22 259.769231 22 259.769231 0 0.769230769 0'
            />
          </defs>
          <g
            id='Concept-01'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='Desktop---Work'
              transform='translate(-118.000000, -32.000000)'
            >
              <g id='Hero'>
                <g id='Logo' transform='translate(117.230769, 32.000000)'>
                  <path
                    d='M101.949216,15.6886987 C102.812057,18.356822 102.310999,20.3362467 101.058767,21.9426438 L101.058767,22 L110.769231,22 L110.769231,21.9426438 C109.76794,20.5945618 108.877079,18.5004249 108.125905,16.4058631 L102.839252,1 L97.0812106,1 L101.076486,13.0001821 L96.0086341,13.0001821 L95.7692308,14.0818767 L101.420551,14.0818767 L101.949216,15.6886987 Z'
                    id='Fill-1'
                    fill='#282829'
                  />
                  <path
                    d='M127.169288,1.05762712 C128.773227,3.22881356 129.53194,4.51440678 129.53194,7.54279661 L129.560921,12.7427966 L119.499106,1 L112.06121,1 L112.06121,1.05762712 C113.461844,2.94322034 114.131882,4.02881356 114.131882,6.62838983 L114.131882,15.4283898 C114.131882,18.4283898 113.402583,19.7423729 111.769231,21.8572034 L111.769231,21.9144068 L117.398587,21.9144068 L117.398587,21.8572034 C115.853045,19.7423729 115.065783,18.3139831 115.065783,15.4572034 L114.97754,4.97161017 L129.53194,22 L130.465408,21.8855932 L130.465408,7.45720339 C130.465408,4.54279661 131.223688,3.25720339 132.769231,1.05762712 L132.769231,1 L127.169288,1 L127.169288,1.05762712 Z'
                    id='Fill-3'
                    fill='#282829'
                  />
                  <path
                    d='M143.864078,20.2009287 C143.633086,20.2009287 142.910538,20.1152385 142.073994,19.9725623 L142.073994,1.0265935 C142.795684,0.884339384 143.286383,0.798649219 143.604372,0.798649219 C148.77149,0.712959054 150.187016,4.10848459 150.187016,10.8708316 C150.187016,16.7771211 149.118622,20.3436049 143.864078,20.2009287 M143.604372,0 C139.706642,0 137.511999,0.113550021 134.769231,0.113550021 L134.769231,0.17095821 C135.549205,2.39636978 135.953335,3.50949768 135.953335,6.59096665 L135.953335,14.5230055 C135.953335,17.5761925 135.549205,18.7745884 134.769231,20.9430139 L134.769231,21 L143.604372,21 C151.94753,21 156.769231,17.2051499 156.769231,10.4710848 C156.769231,3.70873786 151.688253,0 143.604372,0'
                    id='Fill-5'
                    fill='#282829'
                  />
                  <polygon
                    id='Fill-7'
                    fill='#282829'
                    points='0.769230769 5.26760563 6.87850229 5.26760563 6.87850229 22 12.6897606 22 12.6897606 5.26760563 18.7692308 5.26760563 18.7692308 0 0.769230769 0'
                  />
                  <polygon
                    id='Fill-9'
                    fill='#282829'
                    points='34.8701287 22 40.7692308 22 40.7692308 0 34.8701287 0 34.8701287 8.11830986 27.668753 8.11830986 27.668753 0 21.7692308 0 21.7692308 22 27.668753 22 27.668753 13.3854851 34.8701287 13.3854851'
                  />
                  <mask id='mask-2' fill='white'>
                    <use xlinkHref='#path-1' />
                  </mask>
                  <g id='Clip-12' />
                  <polygon
                    id='Fill-11'
                    fill='#282829'
                    mask='url(#mask-2)'
                    points='44.7692308 22 50.7692308 22 50.7692308 0 44.7692308 0'
                  />
                  <path
                    d='M59.81357,5.26760563 L63.4709096,5.26760563 C63.8419815,5.26760563 64.2143448,5.46901408 64.5867082,5.87140063 C64.9582105,6.27464789 65.144177,6.85821596 65.144177,7.62253521 C65.144177,8.36576682 64.9844697,8.94460094 64.6641942,9.35774648 C64.3426272,9.77132238 63.997384,9.97703443 63.6250207,9.97703443 L59.81357,9.97703443 L59.81357,5.26760563 Z M59.81357,15.2450704 L62.0761615,15.2450704 L65.9504619,22 L72.7692308,22 L68.1196397,13.9126761 C69.1118911,13.2103286 69.8858903,12.3070031 70.44422,11.2014085 C71.0021193,10.0966745 71.2810689,8.90328638 71.2810689,7.62253521 C71.2810689,6.69295775 71.0951025,5.7685446 70.7236001,4.84886541 C70.3512368,3.93047731 69.8398291,3.11408451 69.1889467,2.40140845 C68.5384947,1.68873239 67.7580383,1.110759 66.8492996,0.666197183 C65.938839,0.222065728 64.9478791,0 63.8738369,0 L53.7692308,0 L53.7692308,22 L59.81357,22 L59.81357,15.2450704 Z'
                    id='Fill-13'
                    fill='#282829'
                    mask='url(#mask-2)'
                  />
                  <path
                    d='M80.6408631,5.26760563 L82.989516,5.26760563 C83.7322524,5.26760563 84.40473,5.40661189 85.0065305,5.68591549 C85.6091674,5.96478873 86.1156166,6.35211268 86.5271327,6.84788732 C86.939067,7.34323161 87.2543954,7.94315336 87.4760453,8.64507042 C87.6968589,9.3478482 87.8072656,10.1220657 87.8072656,10.9690141 C87.8072656,11.7953052 87.7018774,12.5596244 87.4911008,13.2615415 C87.2803243,13.9643192 86.9691779,14.5737089 86.5568254,15.0897105 C86.1457275,15.6070031 85.6392783,16.0093897 85.0370596,16.2985915 C84.4344227,16.5882238 83.75149,16.7323944 82.989516,16.7323944 L80.6408631,16.7323944 L80.6408631,5.26760563 Z M87.4158235,21.2098592 C88.7407046,20.6826682 89.874465,19.9394366 90.8183591,18.9784429 C91.7614169,18.0183099 92.489516,16.8619327 93.0014019,15.5084507 C93.5132878,14.1553991 93.7692308,12.6422535 93.7692308,10.9690141 C93.7692308,9.46103286 93.5379621,8.04041471 93.0758428,6.7084507 C92.6149783,5.37605634 91.9324637,4.21408451 91.0291357,3.22253521 C90.1258076,2.23055556 89.0012478,1.44600939 87.6562928,0.867605634 C86.3117559,0.289632238 84.755606,0 82.989516,0 L74.7692308,0 L74.7692308,22 L82.989516,22 C84.6155065,22 86.0909423,21.7366197 87.4158235,21.2098592 L87.4158235,21.2098592 Z'
                    id='Fill-14'
                    fill='#282829'
                    mask='url(#mask-2)'
                  />
                  <path
                    d='M169.764581,14.5748568 L173.557883,14.5748568 C172.221212,16.001659 170.679822,16.7137869 168.932427,16.7137869 C168.171796,16.7137869 167.483117,16.5767087 166.865962,16.3017034 C166.249234,16.026698 165.720305,15.6396535 165.278316,15.1401455 C164.8359,14.6419105 164.491989,14.0456413 164.245298,13.352611 C163.998607,12.6608538 163.874833,11.885916 163.874833,11.0307683 C163.874833,10.195567 163.998607,9.42614634 164.245298,8.72377939 C164.491989,8.02098806 164.830761,7.41495785 165.26247,6.90568877 C165.694179,6.39684407 166.208119,5.9991898 166.804717,5.71357472 C167.400459,5.42923282 168.058301,5.28621308 168.778245,5.28621308 C169.744452,5.28621308 170.659264,5.54594032 171.522683,6.06539478 C172.385673,6.58484924 173.033665,7.27193812 173.465374,8.12793457 L177.93622,4.73620247 C177.545198,4.00285499 177.041965,3.34547349 176.425666,2.76533112 C175.808939,2.18476437 175.114692,1.68568067 174.344211,1.26808002 C173.573301,0.850479369 172.73558,0.534308146 171.830618,0.320415131 C170.926513,0.106946507 169.980864,0 168.9941,0 C167.410309,0 165.936159,0.280097996 164.56908,0.840293987 C163.201572,1.40048998 162.014372,2.1643936 161.007478,3.13158047 C160.000157,4.09961612 159.208262,5.24037887 158.633078,6.5542931 C158.056609,7.86820733 157.769231,9.28906808 157.769231,10.8168753 C157.769231,12.5891317 158.056609,14.1678659 158.633078,15.5530778 C159.208262,16.9387141 159.979171,18.1096086 160.945377,19.0670345 C161.911156,20.0244603 163.042679,20.7527151 164.337807,21.2517988 C165.633363,21.7513069 166.989735,22 168.40778,22 C170.442981,22 172.242198,21.34856 173.805003,20.0448311 L173.805003,21.8476437 L178.769231,21.8476437 L178.769231,10.2974209 L169.764581,10.2974209 L169.764581,14.5748568 Z'
                    id='Fill-15'
                    fill='#282829'
                    mask='url(#mask-2)'
                  />
                  <path
                    d='M191.664441,9.35774648 C191.343297,9.77132238 190.998046,9.97703443 190.626105,9.97703443 L186.812846,9.97703443 L186.812846,5.26760563 L190.470699,5.26760563 C190.84264,5.26760563 191.215012,5.46901408 191.586092,5.87140063 C191.958464,6.27464789 192.144865,6.85821596 192.144865,7.62253521 C192.144865,8.36576682 191.984293,8.94460094 191.664441,9.35774648 M197.444598,11.2014085 C198.00251,10.0966745 198.281896,8.90328638 198.281896,7.62253521 C198.281896,6.69295775 198.095495,5.7685446 197.723554,4.84886541 C197.352043,3.93047731 196.840193,3.11408451 196.189296,2.40140845 C195.538829,1.68873239 194.758355,1.110759 193.849166,0.666197183 C192.939976,0.222065728 191.948132,0 190.873635,0 L180.769231,0 L180.769231,22 L186.812846,22 L186.812846,15.2450704 L189.075489,15.2450704 L192.949877,22 L199.769231,22 L195.119965,13.9126761 C196.112239,13.2103286 196.886686,12.3070031 197.444598,11.2014085'
                    id='Fill-16'
                    fill='#282829'
                    mask='url(#mask-2)'
                  />
                  <path
                    d='M215.437747,13.0472222 C215.244073,13.7398148 214.949536,14.3564429 214.552865,14.8958333 C214.156617,15.4356481 213.642555,15.8736111 213.011949,16.2097222 C212.381344,16.5458333 211.638856,16.7138889 210.784911,16.7138889 C209.930118,16.7138889 209.192717,16.5509259 208.572706,16.2254244 C207.951848,15.8994985 207.438209,15.4717207 207.031367,14.9416667 C206.624101,14.412037 206.318969,13.8060185 206.115971,13.1236111 C205.912126,12.4416281 205.81084,11.7337577 205.81084,11 C205.81084,10.287037 205.907465,9.58977623 206.101139,8.90694444 C206.293965,8.22453704 206.593587,7.61385031 207.000854,7.07361111 C207.407696,6.53422068 207.921334,6.10092593 208.542193,5.77542438 C209.16178,5.44949846 209.899605,5.28611111 210.753974,5.28611111 C211.588001,5.28611111 212.314808,5.44398148 212.935666,5.75972222 C213.556525,6.07588735 214.074825,6.49305556 214.492262,7.01292438 C214.908852,7.53194444 215.219069,8.13287037 215.422914,8.81527778 C215.625488,9.49810957 215.728046,10.2055556 215.728046,10.9393133 C215.728046,11.6522762 215.630997,12.3546296 215.437747,13.0472222 M218.779363,3.45277778 C217.822436,2.41388889 216.67353,1.57912809 215.330951,0.947646605 C213.988371,0.316165123 212.493649,0 210.845514,0 C209.238486,0 207.758597,0.300887346 206.40627,0.901388889 C205.053096,1.50231481 203.883424,2.30694444 202.896831,3.31527778 C201.910239,4.32361111 201.142747,5.4902392 200.59351,6.81388889 C200.043849,8.13838735 199.769231,9.51338735 199.769231,10.9393133 C199.769231,12.3444444 200.033255,13.7096836 200.562573,15.0333333 C201.091468,16.3578318 201.833532,17.5342207 202.790035,18.5625 C203.746115,19.5912037 204.895868,20.4217207 206.238448,21.0532022 C207.581028,21.6846836 209.075749,22 210.723885,22 C212.330488,22 213.810377,21.6944444 215.163552,21.0833333 C216.515879,20.4722222 217.680889,19.6625 218.656887,18.6541667 C219.633308,17.6458333 220.396138,16.4847222 220.945375,15.1708333 C221.495036,13.8573688 221.769231,12.4874614 221.769231,11.0611111 C221.769231,9.67635031 221.509869,8.32172068 220.991569,6.99722222 C220.472845,5.67314815 219.735443,4.49166667 218.779363,3.45277778'
                    id='Fill-17'
                    fill='#282829'
                    mask='url(#mask-2)'
                  />
                  <polygon
                    id='Fill-18'
                    fill='#282829'
                    mask='url(#mask-2)'
                    points='232.315294 14.4084507 228.066047 0 221.769231 0 229.839361 22 234.791226 22 242.769231 0 236.503406 0'
                  />
                  <polygon
                    id='Fill-19'
                    fill='#282829'
                    mask='url(#mask-2)'
                    points='250.549863 13.2619718 258.198085 13.2619718 258.198085 8.36619718 250.549863 8.36619718 250.549863 5.26803599 259.502432 5.26803599 259.502432 0 244.769231 0 244.769231 22 259.769231 22 259.769231 16.7323944 250.549863 16.7323944'
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <button
          css={css`
            background-color: transparent;
            padding: 0;
            margin: 0;
            border: none;
            min-height: 25px;
            :focus {
              outline: none;
            }
          `}
          type='button'
          onClick={() => toggleOpen()}
        >
          {/* Hamburger / 'X' */}
          {isOpen ? (
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 21 21'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='Concept-01'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Desktop---Menu'
                  transform='translate(-1287.000000, -33.000000)'
                >
                  <rect x='0' y='0' width='1440' height='700' />
                  <g
                    id='X-Icon'
                    transform='translate(1287.000000, 33.000000)'
                    fill='#282829'
                  >
                    <rect
                      id='Rectangle'
                      transform='translate(10.500000, 10.500000) rotate(45.000000) translate(-10.500000, -10.500000) '
                      x='-2'
                      y='9'
                      width='25'
                      height='3'
                    />
                    <rect
                      id='Rectangle'
                      transform='translate(10.500000, 10.500000) rotate(-45.000000) translate(-10.500000, -10.500000) '
                      x='-2'
                      y='9'
                      width='25'
                      height='3'
                    />
                  </g>
                </g>
              </g>
            </svg>
          ) : (
            <svg
              width='25px'
              height='25px'
              viewBox='0 0 25 23'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g
                id='Concept-01'
                stroke='none'
                strokeWidth='1'
                fill='none'
                fillRule='evenodd'
              >
                <g
                  id='Desktop---Work'
                  transform='translate(-1285.000000, -32.000000)'
                >
                  <rect x='0' y='0' width='1440' height='5040' />
                  <g id='Hero' fill='#282829'>
                    <g
                      id='Hamburger'
                      transform='translate(1285.000000, 32.000000)'
                    >
                      <rect id='Rectangle' x='0' y='0' width='25' height='3' />
                      <rect id='Rectangle' x='0' y='20' width='25' height='3' />
                      <rect id='Rectangle' x='8' y='10' width='17' height='3' />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          )}
        </button>
      </span>
      {/* // some transition in/out? */}
      {isOpen && <Menu toggleOpen={toggleOpen} />}
    </>
  );
};

export default TopNav;
