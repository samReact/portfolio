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
  libraries,
} = skills;

export function useChartData() {
  const [type, setType] = useState('languages');
  const [typeDatas, setTypeDatas] = useState(null);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const generateColor = (datas) => {
    let backgroundColors = [];
    let borderColors = [];
    for (let i = 0; i < datas.length; i++) {
      let a = getRandomInt(255);
      let b = getRandomInt(255);
      let c = getRandomInt(255);
      backgroundColors.push(`rgba(${a}, ${b}, ${c}, ${0.2})`);
      borderColors.push(`rgba(${a}, ${b}, ${c}, ${1})`);
    }
    setTypeDatas({ backgroundColors, borderColors, datas });
  };

  useEffect(() => {
    let datas;
    switch (type) {
      case 'languages':
        datas = languages;
        break;
      case 'tools':
        datas = tools;
        break;
      case 'versioning':
        datas = versioning;
        break;
      case 'css':
        datas = css;
        break;
      case 'devops':
        datas = devops;
        break;
      case 'testing':
        datas = testing;
        break;
      case 'softskills':
        datas = softskills;
        break;
      case 'ide':
        datas = ide;
        break;
      case 'databases':
        datas = databases;
        break;
      case 'libraries':
        datas = libraries;
        break;
      default:
        datas = languages;
        break;
    }
    generateColor(datas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return [typeDatas, type, setType];
}
