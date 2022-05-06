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
          <rect class='cls-1' x='0.5' y='0.5' width='1338' height='377' />
          <path
            d='M1408,123V499H71V123H1408m1-1H70V500H1409V122Z'
            transform='translate(-70 -122)'
          />
          <rect class='cls-1' x='1339.5' y='0.5' width='449' height='662' />
          <path
            d='M1858,123V784H1410V123h448m1-1H1409V785h450V122Z'
            transform='translate(-70 -122)'
          />
          <rect class='cls-2' x='1171.5' y='287.5' width='71.17' height='90' />
          <path
            d='M1312.17,410v89H1242V410h70.17m1-1H1241v91h72.17V409Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace57'
            onClick={handleClick}
            class='cls-3'
            cx='1193.12'
            cy='321.66'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace58'
            onClick={handleClick}
            class='cls-3'
            cx='1223.38'
            cy='321.66'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace59'
            onClick={handleClick}
            class='cls-3'
            cx='1193.12'
            cy='300.65'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace60'
            onClick={handleClick}
            class='cls-3'
            cx='1223.38'
            cy='300.65'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace55'
            onClick={handleClick}
            class='cls-3'
            cx='1193.03'
            cy='342.79'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace56'
            onClick={handleClick}
            class='cls-3'
            cx='1222.52'
            cy='342.79'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace53'
            onClick={handleClick}
            class='cls-3'
            cx='1193.12'
            cy='364.06'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace54'
            onClick={handleClick}
            class='cls-3'
            cx='1223.38'
            cy='364.06'
            rx='10.09'
            ry='9.1'
          />
          <rect
            class='cls-2'
            x='1030.5'
            y='21.93'
            width='69.61'
            height='63.57'
          />
          <path
            d='M1169.61,144.43V207H1101V144.43h68.61m1-1H1100V208h70.61V143.43Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace192'
            onClick={handleClick}
            class='cls-3'
            cx='1051.64'
            cy='53.75'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace193'
            onClick={handleClick}
            class='cls-3'
            cx='1081.25'
            cy='53.75'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace194'
            onClick={handleClick}
            class='cls-3'
            cx='1051.64'
            cy='34.16'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace195'
            onClick={handleClick}
            class='cls-3'
            cx='1081.25'
            cy='34.16'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace190'
            onClick={handleClick}
            class='cls-3'
            cx='1051.56'
            cy='73.46'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace191'
            onClick={handleClick}
            class='cls-3'
            cx='1080.41'
            cy='73.46'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-2' x='815.5' y='20.93' width='67' height='87.57' />
          <path
            d='M952,143.43V230H886V143.43h66m1-1H885V231h68V142.43Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace180'
            onClick={handleClick}
            class='cls-3'
            cx='835.84'
            cy='53.8'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace181'
            onClick={handleClick}
            class='cls-3'
            cx='864.35'
            cy='53.8'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace182'
            onClick={handleClick}
            class='cls-3'
            cx='835.84'
            cy='33.58'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace183'
            onClick={handleClick}
            class='cls-3'
            cx='864.35'
            cy='33.58'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace178'
            onClick={handleClick}
            class='cls-3'
            cx='835.76'
            cy='74.14'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace179'
            onClick={handleClick}
            class='cls-3'
            cx='863.54'
            cy='74.14'
            rx='9.51'
            ry='8.76'
          />
          <ellipse
            id='Workspace177'
            onClick={handleClick}
            class='cls-3'
            cx='864.35'
            cy='96.77'
            rx='9.51'
            ry='8.76'
          />
          <rect
            class='cls-2'
            x='1066.52'
            y='287.93'
            width='71.17'
            height='90'
          />
          <path
            d='M1207.2,410.43v89H1137v-89h70.18m1-1H1136v91h72.18v-91Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace65'
            onClick={handleClick}
            class='cls-3'
            cx='1088.14'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace66'
            onClick={handleClick}
            class='cls-3'
            cx='1118.41'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace67'
            onClick={handleClick}
            class='cls-3'
            cx='1088.14'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace68'
            onClick={handleClick}
            class='cls-3'
            cx='1118.41'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace63'
            onClick={handleClick}
            class='cls-3'
            cx='1088.06'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace64'
            onClick={handleClick}
            class='cls-3'
            cx='1117.55'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace61'
            onClick={handleClick}
            class='cls-3'
            cx='1088.14'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace62'
            onClick={handleClick}
            class='cls-3'
            cx='1118.41'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <rect class='cls-2' x='960.52' y='285.93' width='71.17' height='90' />
          <path
            d='M1101.2,408.43v89H1031v-89h70.18m1-1H1030v91h72.18v-91Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace73'
            onClick={handleClick}
            class='cls-3'
            cx='982.14'
            cy='320.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace74'
            onClick={handleClick}
            class='cls-3'
            cx='1012.41'
            cy='320.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace75'
            onClick={handleClick}
            class='cls-3'
            cx='982.14'
            cy='299.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace76'
            onClick={handleClick}
            class='cls-3'
            cx='1012.41'
            cy='299.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace71'
            onClick={handleClick}
            class='cls-3'
            cx='982.06'
            cy='341.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace72'
            onClick={handleClick}
            class='cls-3'
            cx='1011.55'
            cy='341.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace69'
            onClick={handleClick}
            class='cls-3'
            cx='982.14'
            cy='362.5'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace70'
            onClick={handleClick}
            class='cls-3'
            cx='1012.41'
            cy='362.5'
            rx='10.09'
            ry='9.1'
          />
          <rect class='cls-2' x='854.52' y='287.93' width='71.17' height='90' />
          <path
            d='M995.2,410.43v89H925v-89H995.2m1-1H924v91H996.2v-91Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace81'
            onClick={handleClick}
            class='cls-3'
            cx='876.14'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace82'
            onClick={handleClick}
            class='cls-3'
            cx='906.41'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace83'
            onClick={handleClick}
            class='cls-3'
            cx='876.14'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace84'
            onClick={handleClick}
            class='cls-3'
            cx='906.41'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace79'
            onClick={handleClick}
            class='cls-3'
            cx='876.06'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace80'
            onClick={handleClick}
            class='cls-3'
            cx='905.55'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace77'
            onClick={handleClick}
            class='cls-3'
            cx='876.14'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace78'
            onClick={handleClick}
            class='cls-3'
            cx='906.41'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <rect class='cls-2' x='748.52' y='287.93' width='71.17' height='90' />
          <path
            d='M889.2,410.43v89H819v-89H889.2m1-1H818v91H890.2v-91Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace89'
            onClick={handleClick}
            class='cls-3'
            cx='770.14'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace90'
            onClick={handleClick}
            class='cls-3'
            cx='800.41'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace91'
            onClick={handleClick}
            class='cls-3'
            cx='770.14'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace92'
            onClick={handleClick}
            class='cls-3'
            cx='800.41'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace87'
            onClick={handleClick}
            class='cls-3'
            cx='770.06'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace88'
            onClick={handleClick}
            class='cls-3'
            cx='799.55'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace85'
            onClick={handleClick}
            class='cls-3'
            cx='770.14'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace86'
            onClick={handleClick}
            class='cls-3'
            cx='800.41'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <rect class='cls-2' x='648.52' y='287.93' width='71.17' height='90' />
          <path
            d='M789.2,410.43v89H719v-89H789.2m1-1H718v91H790.2v-91Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace97'
            onClick={handleClick}
            class='cls-3'
            cx='670.14'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace98'
            onClick={handleClick}
            class='cls-3'
            cx='700.41'
            cy='322.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace99'
            onClick={handleClick}
            class='cls-3'
            cx='670.14'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace100'
            onClick={handleClick}
            class='cls-3'
            cx='700.41'
            cy='301.09'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace95'
            onClick={handleClick}
            class='cls-3'
            cx='670.06'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace96'
            onClick={handleClick}
            class='cls-3'
            cx='699.55'
            cy='343.23'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace93'
            onClick={handleClick}
            class='cls-3'
            cx='670.14'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <ellipse
            id='Workspace94'
            onClick={handleClick}
            class='cls-3'
            cx='700.41'
            cy='364.5'
            rx='10.09'
            ry='9.1'
          />
          <rect class='cls-1' x='456.5' y='306.5' width='157' height='71' />
          <path
            d='M683,429v70H527V429H683m1-1H526v72H684V428Z'
            transform='translate(-70 -122)'
          />
          <text class='cls-4' transform='translate(500 344)'>
            <tspan class='cls-5'>M</tspan>
            <tspan x='9.72' y='0'>
              eeting{' '}
            </tspan>
            <tspan class='cls-6' x='44.44' y='0'>
              r
            </tspan>
            <tspan x='48.24' y='0'>
              oom
            </tspan>
          </text>
          <rect
            class='cls-2'
            x='361.5'
            y='315.5'
            width='63.61'
            height='61.43'
          />
          <path
            d='M494.61,438v60.43H432V438h62.61m1-1H431v62.43h64.61V437Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace103'
            onClick={handleClick}
            class='cls-3'
            cx='380.8'
            cy='346.25'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace104'
            onClick={handleClick}
            class='cls-3'
            cx='407.89'
            cy='346.25'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace105'
            onClick={handleClick}
            class='cls-3'
            cx='380.8'
            cy='327.31'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace106'
            onClick={handleClick}
            class='cls-3'
            cx='407.89'
            cy='327.31'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace101'
            onClick={handleClick}
            class='cls-3'
            cx='380.72'
            cy='365.31'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace102'
            onClick={handleClick}
            class='cls-3'
            cx='407.12'
            cy='365.31'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='274.3'
            y='315.22'
            width='63.61'
            height='61.44'
          />
          <path
            d='M407.41,437.72v60.43H344.8V437.72h62.61m1-1H343.8v62.43h64.61V436.72Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace109'
            onClick={handleClick}
            class='cls-3'
            cx='293.6'
            cy='345.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace110'
            onClick={handleClick}
            class='cls-3'
            cx='320.7'
            cy='345.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace111'
            onClick={handleClick}
            class='cls-3'
            cx='293.6'
            cy='327.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace112'
            onClick={handleClick}
            class='cls-3'
            cx='320.7'
            cy='327.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace107'
            onClick={handleClick}
            class='cls-3'
            cx='293.53'
            cy='365.02'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace108'
            onClick={handleClick}
            class='cls-3'
            cx='319.93'
            cy='365.02'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='184.3'
            y='316.22'
            width='63.61'
            height='61.44'
          />
          <path
            d='M317.41,438.72v60.43H254.8V438.72h62.61m1-1H253.8v62.43h64.61V437.72Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace115'
            onClick={handleClick}
            class='cls-3'
            cx='203.6'
            cy='346.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace116'
            onClick={handleClick}
            class='cls-3'
            cx='230.7'
            cy='346.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace117'
            onClick={handleClick}
            class='cls-3'
            cx='203.6'
            cy='328.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace118'
            onClick={handleClick}
            class='cls-3'
            cx='230.7'
            cy='328.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace113'
            onClick={handleClick}
            class='cls-3'
            cx='203.53'
            cy='366.02'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace114'
            onClick={handleClick}
            class='cls-3'
            cx='229.93'
            cy='366.02'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='97.3'
            y='316.22'
            width='63.61'
            height='61.44'
          />
          <path
            d='M230.41,438.72v60.43H167.8V438.72h62.61m1-1H166.8v62.43h64.61V437.72Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace121'
            onClick={handleClick}
            class='cls-3'
            cx='116.6'
            cy='346.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace122'
            onClick={handleClick}
            class='cls-3'
            cx='143.7'
            cy='346.96'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace123'
            onClick={handleClick}
            class='cls-3'
            cx='116.6'
            cy='328.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace124'
            onClick={handleClick}
            class='cls-3'
            cx='143.7'
            cy='328.03'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace119'
            onClick={handleClick}
            class='cls-3'
            cx='116.53'
            cy='366.02'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace120'
            onClick={handleClick}
            class='cls-3'
            cx='142.93'
            cy='366.02'
            rx='9.03'
            ry='8.21'
          />
          <rect class='cls-7' x='648.5' y='135.5' width='555' height='100' />
          <rect class='cls-7' x='680.5' y='135.5' height='100' />
          <rect class='cls-7' x='736.5' y='135.5' height='100' />
          <rect class='cls-7' x='810.5' y='135.5' height='100' />
          <rect class='cls-7' x='971.5' y='135.5' height='100' />
          <rect class='cls-7' x='1032.5' y='135.5' height='100' />
          <rect class='cls-7' x='1127.5' y='135.5' width='1' height='100' />
          <rect class='cls-7' x='1243.5' y='135.5' width='61' height='100' />
          <text class='cls-4' transform='translate(1259.17 178.52)'>
            <tspan class='cls-8'>A</tspan>
            <tspan x='7.2' y='0'>
              dmin{' '}
            </tspan>
            <tspan class='cls-9' x='0' y='14.4'>
              D
            </tspan>
            <tspan x='8.04' y='14.4'>
              esk
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1046.52 184.65)'>
            <tspan class='cls-10'>P</tspan>
            <tspan class='cls-9' x='6.19' y='0'>
              r
            </tspan>
            <tspan x='10.16' y='0'>
              i
            </tspan>
            <tspan class='cls-11' x='12.97' y='0'>
              n
            </tspan>
            <tspan class='cls-12' x='19.58' y='0'>
              t
            </tspan>
            <tspan class='cls-13' x='23.48' y='0'>
              er{' '}
            </tspan>
            <tspan class='cls-14' x='35.96' y='0'>
              r
            </tspan>
            <tspan x='39.77' y='0'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(982.24 179.11)'>
            Cloak{' '}
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <rect x='681' y='186' width='130' />
          <text class='cls-4' transform='translate(689.39 160.43)'>
            <tspan class='cls-15'>A</tspan>
            <tspan class='cls-6' x='7.31' y='0'>
              r
            </tspan>
            <tspan x='11.11' y='0'>
              chi
            </tspan>
            <tspan class='cls-14' x='25.96' y='0'>
              v
            </tspan>
            <tspan x='31.61' y='0'>
              e
            </tspan>
          </text>
          <text
            class='cls-16'
            transform='translate(758.65 162.87) scale(0.97 1)'
          >
            WC
          </text>
          <text
            class='cls-16'
            transform='translate(761.16 214.21) scale(0.97 1)'
          >
            WC
          </text>
          <text
            class='cls-16'
            transform='translate(697.16 214.21) scale(0.97 1)'
          >
            WC
          </text>
          <rect class='cls-2' x='916.3' y='21.8' width='69.61' height='63.57' />
          <path
            d='M1055.41,144.3v62.57H986.8V144.3h68.61m1-1H985.8v64.57h70.61V143.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace186'
            onClick={handleClick}
            class='cls-3'
            cx='937.44'
            cy='53.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace187'
            onClick={handleClick}
            class='cls-3'
            cx='967.05'
            cy='53.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace188'
            onClick={handleClick}
            class='cls-3'
            cx='937.44'
            cy='34.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace189'
            onClick={handleClick}
            class='cls-3'
            cx='967.05'
            cy='34.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace184'
            onClick={handleClick}
            class='cls-3'
            cx='937.36'
            cy='73.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace185'
            onClick={handleClick}
            class='cls-3'
            cx='966.21'
            cy='73.33'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-2' x='711.3' y='19.8' width='69.61' height='63.57' />
          <path
            d='M850.41,142.3v62.57H781.8V142.3h68.61m1-1H780.8v64.57h70.61V141.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace173'
            onClick={handleClick}
            class='cls-3'
            cx='732.44'
            cy='51.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace174'
            onClick={handleClick}
            class='cls-3'
            cx='762.05'
            cy='51.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace175'
            onClick={handleClick}
            class='cls-3'
            cx='732.44'
            cy='32.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace176'
            onClick={handleClick}
            class='cls-3'
            cx='762.05'
            cy='32.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace171'
            onClick={handleClick}
            class='cls-3'
            cx='732.36'
            cy='71.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace172'
            onClick={handleClick}
            class='cls-3'
            cx='761.21'
            cy='71.33'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-7' x='582' y='18' width='97' height='69' />
          <text x='-70' y='-122' />
          <text class='cls-4' transform='translate(606.22 52.74)'>
            <tspan class='cls-9'>R</tspan>
            <tspan x='6.5' y='0'>
              est{' '}
            </tspan>
            <tspan class='cls-14' x='23.78' y='0'>
              r
            </tspan>
            <tspan x='27.59' y='0'>
              oom
            </tspan>
          </text>
          <rect class='cls-7' x='183.5' y='134.5' width='423' height='100' />
          <rect class='cls-7' x='264.5' y='135.5' height='99' />
          <rect class='cls-7' x='183.5' y='185.5' width='81' />
          <text class='cls-4' transform='translate(183.13 155.7)'>
            <tspan class='cls-17'>C</tspan>
            <tspan x='6.83' y='0'>
              ommunic
            </tspan>
            <tspan class='cls-11' x='54.89' y='0'>
              a
            </tspan>
            <tspan class='cls-18' x='60.62' y='0'>
              tion{' '}
            </tspan>
            <tspan x='0' y='14.4' xmlSpace='preserve'>
              {' '}
            </tspan>
            <tspan class='cls-6' x='15.26' y='14.4'>
              r
            </tspan>
            <tspan x='19.07' y='14.4'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(183.94 205.91)'>
            <tspan class='cls-17'>C</tspan>
            <tspan x='6.83' y='0'>
              ommunic
            </tspan>
            <tspan class='cls-11' x='54.89' y='0'>
              a
            </tspan>
            <tspan class='cls-18' x='60.62' y='0'>
              tion{' '}
            </tspan>
            <tspan x='0' y='14.4' xmlSpace='preserve'>
              {' '}
            </tspan>
            <tspan class='cls-6' x='15.26' y='14.4'>
              r
            </tspan>
            <tspan x='19.07' y='14.4'>
              oom
            </tspan>
          </text>
          <rect x='320' y='136' width='1' height='99' />
          <rect x='407' y='136' width='1' height='99' />
          <rect x='571' y='136' height='99' />
          <rect x='483' y='186' width='88' height='3' />
          <rect x='483' y='186' height='49' />
          <text class='cls-4' transform='translate(499.13 211.39)'>
            Ele
            <tspan class='cls-11' x='14.75' y='0'>
              va
            </tspan>
            <tspan class='cls-19' x='26.21' y='0'>
              t
            </tspan>
            <tspan x='30.11' y='0'>
              or
            </tspan>
          </text>
          <text class='cls-4' transform='translate(332.96 186.13)'>
            <tspan class='cls-15'>S</tspan>
            <tspan x='5.88' y='0'>
              tairs
            </tspan>
          </text>
          <rect
            class='cls-2'
            x='70.43'
            y='220.87'
            width='63.61'
            height='45.63'
          />
          <path
            d='M203.54,343.37V388H140.93V343.37h62.61m1-1H139.93V389h64.61V342.37Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace125'
            onClick={handleClick}
            class='cls-3'
            cx='89.73'
            cy='251.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace126'
            onClick={handleClick}
            class='cls-3'
            cx='116.83'
            cy='251.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace127'
            onClick={handleClick}
            class='cls-3'
            cx='89.73'
            cy='232.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace128'
            onClick={handleClick}
            class='cls-3'
            cx='116.83'
            cy='232.68'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='56.5'
            y='140.23'
            width='71.46'
            height='57.27'
          />
          <path
            d='M197.46,262.73V319H127V262.73h70.46m1-1H126V320h72.46V261.73Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace130'
            onClick={handleClick}
            class='cls-3'
            cx='92.26'
            cy='180.14'
            rx='9.52'
            ry='8.15'
          />
          <ellipse
            id='Workspace133'
            onClick={handleClick}
            class='cls-3'
            cx='92.26'
            cy='155.71'
            rx='9.52'
            ry='8.15'
          />
          <ellipse
            id='Workspace129'
            onClick={handleClick}
            class='cls-3'
            cx='70.29'
            cy='180.14'
            rx='9.52'
            ry='8.15'
          />
          <ellipse
            id='Workspace132'
            onClick={handleClick}
            class='cls-3'
            cx='70.29'
            cy='155.71'
            rx='9.52'
            ry='8.15'
          />
          <ellipse
            id='Workspace131'
            onClick={handleClick}
            class='cls-3'
            cx='114.38'
            cy='180.21'
            rx='9.52'
            ry='8.15'
          />
          <ellipse
            id='Workspace134'
            onClick={handleClick}
            class='cls-3'
            cx='114.38'
            cy='156.4'
            rx='9.52'
            ry='8.15'
          />
          <rect
            class='cls-2'
            x='453.43'
            y='15.8'
            width='69.61'
            height='63.57'
          />
          <path
            d='M592.54,138.3v62.57H523.93V138.3h68.61m1-1H522.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace167'
            onClick={handleClick}
            class='cls-3'
            cx='474.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace168'
            onClick={handleClick}
            class='cls-3'
            cx='504.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace169'
            onClick={handleClick}
            class='cls-3'
            cx='474.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace170'
            onClick={handleClick}
            class='cls-3'
            cx='504.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace165'
            onClick={handleClick}
            class='cls-3'
            cx='474.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace166'
            onClick={handleClick}
            class='cls-3'
            cx='503.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect
            class='cls-2'
            x='358.43'
            y='15.8'
            width='69.61'
            height='63.57'
          />
          <path
            d='M497.54,138.3v62.57H428.93V138.3h68.61m1-1H427.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace161'
            onClick={handleClick}
            class='cls-3'
            cx='379.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace162'
            onClick={handleClick}
            class='cls-3'
            cx='409.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace163'
            onClick={handleClick}
            class='cls-3'
            cx='379.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace164'
            onClick={handleClick}
            class='cls-3'
            cx='409.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace159'
            onClick={handleClick}
            class='cls-3'
            cx='379.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace160'
            onClick={handleClick}
            class='cls-3'
            cx='408.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect
            class='cls-2'
            x='276.43'
            y='15.8'
            width='69.61'
            height='63.57'
          />
          <path
            d='M415.54,138.3v62.57H346.93V138.3h68.61m1-1H345.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace155'
            onClick={handleClick}
            class='cls-3'
            cx='297.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace156'
            onClick={handleClick}
            class='cls-3'
            cx='327.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace157'
            onClick={handleClick}
            class='cls-3'
            cx='297.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace158'
            onClick={handleClick}
            class='cls-3'
            cx='327.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace153'
            onClick={handleClick}
            class='cls-3'
            cx='297.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace154'
            onClick={handleClick}
            class='cls-3'
            cx='326.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect
            class='cls-2'
            x='186.43'
            y='15.8'
            width='69.61'
            height='63.57'
          />
          <path
            d='M325.54,138.3v62.57H256.93V138.3h68.61m1-1H255.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace149'
            onClick={handleClick}
            class='cls-3'
            cx='207.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace150'
            onClick={handleClick}
            class='cls-3'
            cx='237.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace151'
            onClick={handleClick}
            class='cls-3'
            cx='207.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace152'
            onClick={handleClick}
            class='cls-3'
            cx='237.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace147'
            onClick={handleClick}
            class='cls-3'
            cx='207.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace148'
            onClick={handleClick}
            class='cls-3'
            cx='236.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-2' x='99.43' y='15.8' width='69.61' height='63.57' />
          <path
            d='M238.54,138.3v62.57H169.93V138.3h68.61m1-1H168.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace143'
            onClick={handleClick}
            class='cls-3'
            cx='120.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace144'
            onClick={handleClick}
            class='cls-3'
            cx='150.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace145'
            onClick={handleClick}
            class='cls-3'
            cx='120.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace146'
            onClick={handleClick}
            class='cls-3'
            cx='150.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace141'
            onClick={handleClick}
            class='cls-3'
            cx='120.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace142'
            onClick={handleClick}
            class='cls-3'
            cx='149.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-2' x='6.43' y='15.8' width='69.61' height='63.57' />
          <path
            d='M145.54,138.3v62.57H76.93V138.3h68.61m1-1H75.93v64.57h70.61V137.3Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace137'
            onClick={handleClick}
            class='cls-3'
            cx='27.57'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace138'
            onClick={handleClick}
            class='cls-3'
            cx='57.18'
            cy='47.62'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace139'
            onClick={handleClick}
            class='cls-3'
            cx='27.57'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace140'
            onClick={handleClick}
            class='cls-3'
            cx='57.18'
            cy='28.03'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace135'
            onClick={handleClick}
            class='cls-3'
            cx='27.49'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <ellipse
            id='Workspace136'
            onClick={handleClick}
            class='cls-3'
            cx='56.34'
            cy='67.33'
            rx='9.87'
            ry='8.49'
          />
          <rect class='cls-1' x='1125.5' y='21.5' width='213' height='66' />
          <path
            d='M1408,144v65H1196V144h212m1-1H1195v67h214V143Z'
            transform='translate(-70 -122)'
          />
          <text
            class='cls-20'
            transform='translate(1184.59 56.36) scale(1.46 1)'
          >
            <tspan class='cls-21'>M</tspan>
            <tspan x='9.04' y='0'>
              eeting{' '}
            </tspan>
            <tspan class='cls-22' x='41.35' y='0'>
              r
            </tspan>
            <tspan x='44.89' y='0'>
              oom
            </tspan>
          </text>
          <rect
            class='cls-2'
            x='1339.91'
            y='539.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1473,662.27V706.9h-62.61V662.27H1473m1-1h-64.61V707.9H1474V661.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace45'
            onClick={handleClick}
            class='cls-3'
            cx='1359.21'
            cy='570.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace46'
            onClick={handleClick}
            class='cls-3'
            cx='1386.31'
            cy='570.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace47'
            onClick={handleClick}
            class='cls-3'
            cx='1359.21'
            cy='551.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace48'
            onClick={handleClick}
            class='cls-3'
            cx='1386.31'
            cy='551.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1339.91'
            y='464.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1473,587.27V631.9h-62.61V587.27H1473m1-1h-64.61V632.9H1474V586.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace49'
            onClick={handleClick}
            class='cls-3'
            cx='1359.21'
            cy='495.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace50'
            onClick={handleClick}
            class='cls-3'
            cx='1386.31'
            cy='495.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace51'
            onClick={handleClick}
            class='cls-3'
            cx='1359.21'
            cy='476.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace52'
            onClick={handleClick}
            class='cls-3'
            cx='1386.31'
            cy='476.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1464.91'
            y='587.87'
            width='63.61'
            height='61.43'
          />
          <path
            d='M1598,710.37V770.8h-62.61V710.37H1598m1-1h-64.61V771.8H1599V709.37Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace41'
            onClick={handleClick}
            class='cls-3'
            cx='1484.21'
            cy='618.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace42'
            onClick={handleClick}
            class='cls-3'
            cx='1511.31'
            cy='618.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace43'
            onClick={handleClick}
            class='cls-3'
            cx='1484.21'
            cy='599.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace44'
            onClick={handleClick}
            class='cls-3'
            cx='1511.31'
            cy='599.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace39'
            onClick={handleClick}
            class='cls-3'
            cx='1484.14'
            cy='637.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace40'
            onClick={handleClick}
            class='cls-3'
            cx='1510.54'
            cy='637.68'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1555.91'
            y='587.87'
            width='63.61'
            height='61.43'
          />
          <path
            d='M1689,710.37V770.8h-62.61V710.37H1689m1-1h-64.61V771.8H1690V709.37Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace35'
            onClick={handleClick}
            class='cls-3'
            cx='1575.21'
            cy='618.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace36'
            onClick={handleClick}
            class='cls-3'
            cx='1602.31'
            cy='618.62'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace37'
            onClick={handleClick}
            class='cls-3'
            cx='1575.21'
            cy='599.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace38'
            onClick={handleClick}
            class='cls-3'
            cx='1602.31'
            cy='599.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace33'
            onClick={handleClick}
            class='cls-3'
            cx='1575.14'
            cy='637.68'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace34'
            onClick={handleClick}
            class='cls-3'
            cx='1601.54'
            cy='637.68'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1714.91'
            y='603.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1848,726.27V770.9h-62.61V726.27H1848m1-1h-64.61V771.9H1849V725.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace1'
            onClick={handleClick}
            class='cls-3'
            cx='1734.21'
            cy='634.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace2'
            onClick={handleClick}
            class='cls-3'
            cx='1761.31'
            cy='634.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace3'
            onClick={handleClick}
            class='cls-3'
            cx='1734.21'
            cy='615.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace4'
            onClick={handleClick}
            class='cls-3'
            cx='1761.31'
            cy='615.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1712.91'
            y='528.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1846,651.27V695.9h-62.61V651.27H1846m1-1h-64.61V696.9H1847V650.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace5'
            onClick={handleClick}
            class='cls-3'
            cx='1732.21'
            cy='559.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace6'
            onClick={handleClick}
            class='cls-3'
            cx='1759.31'
            cy='559.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace7'
            onClick={handleClick}
            class='cls-3'
            cx='1732.21'
            cy='540.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace8'
            onClick={handleClick}
            class='cls-3'
            cx='1759.31'
            cy='540.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1711.91'
            y='453.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1845,576.27V620.9h-62.61V576.27H1845m1-1h-64.61V621.9H1846V575.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace9'
            onClick={handleClick}
            class='cls-3'
            cx='1731.21'
            cy='484.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace10'
            onClick={handleClick}
            class='cls-3'
            cx='1758.31'
            cy='484.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace11'
            onClick={handleClick}
            class='cls-3'
            cx='1731.21'
            cy='465.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace12'
            onClick={handleClick}
            class='cls-3'
            cx='1758.31'
            cy='465.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1708.91'
            y='384.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1842,507.27V551.9h-62.61V507.27H1842m1-1h-64.61V552.9H1843V506.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace13'
            onClick={handleClick}
            class='cls-3'
            cx='1728.21'
            cy='415.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace14'
            onClick={handleClick}
            class='cls-3'
            cx='1755.31'
            cy='415.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace15'
            onClick={handleClick}
            class='cls-3'
            cx='1728.21'
            cy='396.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace16'
            onClick={handleClick}
            class='cls-3'
            cx='1755.31'
            cy='396.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1709.91'
            y='312.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1843,435.27V479.9h-62.61V435.27H1843m1-1h-64.61V480.9H1844V434.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace17'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='343.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace18'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='343.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace19'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='324.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace20'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='324.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1710.91'
            y='240.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1844,363.27V407.9h-62.61V363.27H1844m1-1h-64.61V408.9H1845V362.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace21'
            onClick={handleClick}
            class='cls-3'
            cx='1730.21'
            cy='271.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace22'
            onClick={handleClick}
            class='cls-3'
            cx='1757.31'
            cy='271.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace23'
            onClick={handleClick}
            class='cls-3'
            cx='1730.21'
            cy='252.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace24'
            onClick={handleClick}
            class='cls-3'
            cx='1757.31'
            cy='252.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1709.91'
            y='171.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1843,294.27V338.9h-62.61V294.27H1843m1-1h-64.61V339.9H1844V293.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace25'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='202.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace26'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='202.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace27'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='183.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace28'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='183.58'
            rx='9.03'
            ry='8.21'
          />
          <rect
            class='cls-2'
            x='1709.91'
            y='108.77'
            width='63.61'
            height='45.63'
          />
          <path
            d='M1843,231.27V275.9h-62.61V231.27H1843m1-1h-64.61V276.9H1844V230.27Z'
            transform='translate(-70 -122)'
          />
          <ellipse
            id='Workspace29'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='139.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace30'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='139.52'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace31'
            onClick={handleClick}
            class='cls-3'
            cx='1729.21'
            cy='120.58'
            rx='9.03'
            ry='8.21'
          />
          <ellipse
            id='Workspace32'
            onClick={handleClick}
            class='cls-3'
            cx='1756.31'
            cy='120.58'
            rx='9.03'
            ry='8.21'
          />
          <rect class='cls-1' x='1339.5' y='268.5' width='102' height='171' />
          <path
            d='M1511,391V561H1410V391h101m1-1H1409V562h103V390Z'
            transform='translate(-70 -122)'
          />
          <rect class='cls-1' x='1339' y='315' width='103' />
          <polygon points='1442 315 1339 315 1442 315 1442 315' />
          <rect class='cls-1' x='1339' y='355' width='103' />
          <polygon points='1442 355 1339 355 1442 355 1442 355' />
          <text class='cls-4' transform='translate(1359.91 293.3)'>
            <tspan class='cls-23'>M</tspan>
            <tspan x='9.72' y='0'>
              eeting
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1351.39 341.09)'>
            Cloa
            <tspan class='cls-24' x='22.16' y='0'>
              k
            </tspan>
            <tspan class='cls-25' x='28' y='0'>
              r
            </tspan>
            <tspan x='31.8' y='0'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1358.09 392.7)'>
            <tspan class='cls-23'>M</tspan>
            <tspan x='9.72' y='0'>
              eeting
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <rect class='cls-7' x='1339.5' y='21.5' width='97' height='66' />
          <text class='cls-4' transform='translate(1347.22 47.61)'>
            <tspan class='cls-26'>E</tspan>
            <tspan class='cls-11' x='5.82' y='0'>
              v
            </tspan>
            <tspan x='11.54' y='0'>
              acu
            </tspan>
            <tspan class='cls-11' x='29.32' y='0'>
              a
            </tspan>
            <tspan x='35.05' y='0'>
              tion
            </tspan>
            <tspan x='0' y='14.4'>
              stiars
            </tspan>
          </text>
          <rect class='cls-7' x='1478.5' y='3.41' width='189' height='536.09' />
          <rect class='cls-7' x='1667.5' y='96.5' width='121' />
          <rect class='cls-7' x='1478.5' y='499.5' width='189' />
          <rect class='cls-7' x='1478.5' y='430.5' width='189' />
          <rect class='cls-7' x='1478.5' y='358.5' width='189' />
          <line class='cls-27' x1='1572.5' y1='499.5' x2='1572.5' y2='539.5' />
          <text class='cls-4' transform='translate(1481.83 512.48)'>
            <tspan class='cls-17'>C</tspan>
            <tspan x='6.83' y='0'>
              ommunic
            </tspan>
            <tspan class='cls-11' x='54.89' y='0'>
              a
            </tspan>
            <tspan x='60.62' y='0'>
              tion
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1580.25 513.73)'>
            <tspan class='cls-17'>C</tspan>
            <tspan x='6.83' y='0'>
              ommunic
            </tspan>
            <tspan class='cls-11' x='54.89' y='0'>
              a
            </tspan>
            <tspan x='60.62' y='0'>
              tion
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <line class='cls-28' x1='1529' y1='430' x2='1530' y2='504' />
          <line class='cls-27' x1='1539.5' y1='430.5' x2='1540.5' y2='499.5' />
          <text class='cls-4' transform='translate(1560.87 451.43)'>
            <tspan class='cls-8'>A</tspan>
            <tspan x='7.2' y='0'>
              uzilia
            </tspan>
            <tspan class='cls-29' x='33.18' y='0'>
              r
            </tspan>
            <tspan x='37.4' y='0'>
              y
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1485.05 451.73)'>
            <tspan class='cls-8'>A</tspan>
            <tspan x='7.2' y='0'>
              uzilia
            </tspan>
            <tspan class='cls-29' x='33.18' y='0'>
              r
            </tspan>
            <tspan x='37.4' y='0'>
              y
            </tspan>
            <tspan class='cls-14' x='0' y='14.4'>
              r
            </tspan>
            <tspan x='3.8' y='14.4'>
              oom
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1540.05 389.74)'>
            <tspan class='cls-26'>E</tspan>
            <tspan class='cls-11' x='5.82' y='0'>
              v
            </tspan>
            <tspan x='11.54' y='0'>
              acu
            </tspan>
            <tspan class='cls-11' x='29.32' y='0'>
              a
            </tspan>
            <tspan x='35.05' y='0'>
              tion stairs
            </tspan>
          </text>
          <line x1='1478' y1='315' x2='1667' y2='315' />
          <line x1='1572' y1='315' x2='1573' y2='358' />
          <text class='cls-4' transform='translate(1500.09 337.35)'>
            El
            <tspan class='cls-30' x='8.74' y='0'>
              a
            </tspan>
            <tspan class='cls-11' x='14.42' y='0'>
              va
            </tspan>
            <tspan class='cls-12' x='25.88' y='0'>
              t
            </tspan>
            <tspan x='29.78' y='0'>
              or
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1596.75 335.94)'>
            El
            <tspan class='cls-30' x='8.74' y='0'>
              a
            </tspan>
            <tspan class='cls-11' x='14.42' y='0'>
              va
            </tspan>
            <tspan class='cls-12' x='25.88' y='0'>
              t
            </tspan>
            <tspan x='29.78' y='0'>
              or
            </tspan>
          </text>
          <line x1='1478' y1='189' x2='1667' y2='188' />
          <line x1='1479' y1='149' x2='1668' y2='149' />
          <line x1='1573' y1='149' x2='1574' y2='192' />
          <text class='cls-4' transform='translate(1501.09 171.35)'>
            El
            <tspan class='cls-30' x='8.74' y='0'>
              a
            </tspan>
            <tspan class='cls-11' x='14.42' y='0'>
              va
            </tspan>
            <tspan class='cls-12' x='25.88' y='0'>
              t
            </tspan>
            <tspan x='29.78' y='0'>
              or
            </tspan>
          </text>
          <text class='cls-4' transform='translate(1597.75 169.94)'>
            El
            <tspan class='cls-30' x='8.74' y='0'>
              a
            </tspan>
            <tspan class='cls-11' x='14.42' y='0'>
              va
            </tspan>
            <tspan class='cls-12' x='25.88' y='0'>
              t
            </tspan>
            <tspan x='29.78' y='0'>
              or
            </tspan>
          </text>
          <line class='cls-7' x1='1482.5' y1='112.5' x2='1666.5' y2='112.5' />
          <text class='cls-4' transform='translate(1533.87 38.22)'>
            WC
          </text>
          <text class='cls-4' transform='translate(1698.22 31.17)'>
            <tspan class='cls-31'>K</tspan>
            <tspan x='6.62' y='0'>
              i
            </tspan>
            <tspan class='cls-32' x='9.43' y='0'>
              t
            </tspan>
            <tspan x='13.33' y='0'>
              chen
            </tspan>
          </text>
        </SVGContainer>
      </MapContainer>
    </>
  );
};

export default Map;
