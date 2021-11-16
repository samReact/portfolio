import { useEffect, useState } from 'react';
import { skills } from '../utils/datas';

const {
  languages,
  tools,
  versioning,
  softskills,
  testing,
  devops,
  css,
  ide,
  databases,
} = skills;

export function useChartData() {
  const [type, setType] = useState('languages');
  const [typeDatas, setTypeDatas] = useState(languages);
  const [backgroundColors, setBackgroundColors] = useState([]);
  const [borderColors, setBorderColors] = useState([]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateColor(datas) {
    let backgroundColors = [];
    let borderColors = [];
    datas.map(() => {
      let a = getRandomInt(255);
      let b = getRandomInt(255);
      let c = getRandomInt(255);
      backgroundColors.push(`rgba(${a}, ${b}, ${c}, ${0.2})`);
      borderColors.push(`rgba(${a}, ${b}, ${c}, ${1})`);
    });
    setBackgroundColors(backgroundColors);
    setBorderColors(borderColors);
  }

  useEffect(() => {
    generateColor(typeDatas);
    switch (type) {
      case 'languages':
        return setTypeDatas(languages);
      case 'tools':
        return setTypeDatas(tools);
      case 'versionning':
        return setTypeDatas(versioning);
      case 'css':
        return setTypeDatas(css);
      case 'devops':
        return setTypeDatas(devops);
      case 'testing':
        return setTypeDatas(testing);
      case 'softskills':
        return setTypeDatas(softskills);
      case 'ide':
        return setTypeDatas(ide);
      case 'databases':
        return setTypeDatas(databases);
      default:
        return setTypeDatas(languages);
    }
  }, [type]);

  return [backgroundColors, borderColors, typeDatas, type, setType];
}
