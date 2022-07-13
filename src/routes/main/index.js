import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

import { Main } from '../../pages';
import { RoutesHandler } from '../../helper';

const Instances = lazy(() => import('./instances'));

const MainRoutes = () => {
    const routes = [
        {
            path: '/*',
            component: <Navigate to={'/main/home'} replace />,
        },
        {
            path: '/instances/*',
            component: (
                <React.Suspense fallback={<div>...</div>}>
                    <Instances />
                </React.Suspense>
            )
        },
    ];

    return (
        <Main>
            <RoutesHandler routes={routes} />
        </Main>
    );
};

export default MainRoutes;
