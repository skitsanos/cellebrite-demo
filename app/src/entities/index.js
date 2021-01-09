import {makeEntity} from 'react-entities';

import mobile from 'is-mobile';

const deviceDetector = {
    initialState: {
        isMobile: mobile({
            featureDetect: true,
            tablet: true
        })
    }
};

export const useDeviceDetector = makeEntity(deviceDetector);