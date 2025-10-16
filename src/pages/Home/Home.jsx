import React from 'react';
import Banner from '../../components/Banner/Banner';
import StatesSection from '../StateSection/StateSection';
import TopAppsSection from '../TopAppSection/TopAppSection';
import { useLoaderData } from 'react-router';

const Home = () => {
const data = useLoaderData();
console.log(data);

    return (
        <div>
            <Banner></Banner>
            <StatesSection></StatesSection>
            <TopAppsSection  data={data}></TopAppsSection>
        </div>
    );
}

export default Home;
