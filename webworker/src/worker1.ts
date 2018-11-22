import {Calc} from './calc';
import {Worker1InApi} from '../api/worker1-in.api';
import {Worker1OutApi} from '../api/worker1-out.api';

const currentCalc = new Calc();


onmessage = function (e) {
  const params: Worker1InApi = e.data;
  if (params.start) {
    currentCalc.start();
  } else if (params.stop) {
    currentCalc.stop();
  }
};


setInterval(() => {

  const out: Worker1OutApi = {
    currentNb: currentCalc.countNb
  };

  postMessage(out);
}, 100);


