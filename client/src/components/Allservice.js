import React from 'react';
import { Slideshow, TrendingServices, UrbanCompanyServices, CarServices, PartnerDeals, OurPromise, HelpAndSupport } from './Services.js';

const AllServicesPage = () => {
    return (
        <div>
            <Slideshow />
            <TrendingServices />
            <UrbanCompanyServices />
            <CarServices />
            <PartnerDeals />
            <OurPromise />
            <HelpAndSupport />
        </div>
    );
};

export default AllServicesPage;
