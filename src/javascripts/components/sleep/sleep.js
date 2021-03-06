import utils from '../../helpers/utils';
import sleepData from '../../helpers/data/sleepData';
import progress from '../progress/progress';
import './sleep.scss';

const printEnergyScore = () => {
  const energyScore = sleepData.getEnergy();
  let domString = '';
  domString += '<div class="sleep-container">';
  domString += '<h2>Sleep</h2>';
  domString += `<p>Energy // ${energyScore}</p>`;
  domString += '<button id="nap-btn">Nap</button>';
  domString += '<button id="deep-slumber-btn">Deep Slumber</button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
};

const takeANap = () => {
  sleepData.increaseEnergyScore();
  printEnergyScore();
  progress.getAllScores();
};

const deepSlumber = () => {
  sleepData.bigEnergyBoost();
  printEnergyScore();
  progress.getAllScores();
};

export default { printEnergyScore, takeANap, deepSlumber };
