import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { RoutesHandler } from '../../../helper';

const InstanceLocation = lazy(() => import('../../../pages/instances/InstanceLocation'));
const InstanceType = lazy(() => import('../../../pages/instances/InstanceType'));

const InstancesRoutes = () => {
    const routes = [
        {
            path: '/*',
            component: <Navigate to={'/main/instances/location'} />,
        },
        {
            path: '/location',
            component: <InstanceLocation />
        },
        {
            path: '/type',
            component: <InstanceType />
        },
    ];

    return (
        <RoutesHandler routes={routes} />
    );
};

export default InstancesRoutes;
