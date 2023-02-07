import { activities, currentProject, veiwPort } from './index.js';
import vpGen from './activityview';
import controls from './newact';

function actRefresh() {
    veiwPort.removeChild(activities);
    activities = vpGen(currentProject);
    veiwPort.insertBefore(activities, controls);
}

export default actRefresh;
