import React from 'react';

import HeroSection from './pages/HeroSection';
import Services from './pages/services';

import About from './pages/about';
import Astrologers from './components/astrologers';
import HoroscopeVale from './pages/horoscopevale';
import HoroscopeList from './pages/HoroscopeList';

import CelebrityClients from './pages/CelebrityClients';

import AstroFormSection from './pages/astroformsection';


import Testimonials from './pages/Testimonials';
import RecentArticles from './pages/RecentArticles';
import Faqs from './components/Faqs';
import AppDownloadSection from './pages/AppDownloadSection';








// import Slider from 'react-slick';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">



<HeroSection />
<Services  />
<About /> 
<Astrologers />
<HoroscopeVale />
<HoroscopeList />
<CelebrityClients />


<AstroFormSection  />

<Testimonials />

<RecentArticles />
<Faqs  />
<AppDownloadSection />





     
    </div>
  );
}