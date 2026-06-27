import React, { Suspense, lazy } from "react";

import { Outlet, Route, Routes } from "react-router-dom";

import LocaleLayout from "./LocaleLayout";

import PageWrapper from "./PageWrapper";

import Navbar from "./Navbar";

import Footer from "./Footer";

import ScrollToTop from "./ScrollToTop";

import StickyActionButtons from "./StickyActionButtons";

import HomePageSkeleton from "./skeletons/HomePageSkeleton";

import ProjectsPageSkeleton from "./skeletons/ProjectsPageSkeleton";

import GalleryPageSkeleton from "./skeletons/GalleryPageSkeleton";

import ExperiencePageSkeleton from "./skeletons/ExperiencePageSkeleton";

import GenericPageSkeleton from "./skeletons/GenericPageSkeleton";

import ResumeSkeleton from "./skeletons/ResumeSkeleton";



const Home = lazy(() => import("./Home/Home"));

const About = lazy(() => import("./About/About"));

const Projects = lazy(() => import("./Projects/Projects"));

const Experience = lazy(() => import("./Experience/Experience"));

const Gallery = lazy(() => import("./Gallery/Gallery"));

const Contact = lazy(() => import("./Contact/Contact"));

const Resume = lazy(() => import("./Resume/ResumeNew"));

const BlogList = lazy(() => import("./Blog/BlogList"));

const BlogPost = lazy(() => import("./Blog/BlogPost"));

const BlogTag = lazy(() => import("./Blog/BlogTag"));

const BlogCategory = lazy(() => import("./Blog/BlogCategory"));

const Services = lazy(() => import("./Services/Services"));

const PrivacyPolicy = lazy(() => import("./Legal/PrivacyPolicy"));

const TermsAndConditions = lazy(() => import("./Legal/TermsAndConditions"));

const CookiesPolicy = lazy(() => import("./Legal/CookiesPolicy"));

const NotFound = lazy(() => import("./Error/NotFound"));

const Sitemap = lazy(() => import("./Sitemap/Sitemap"));

const Uses = lazy(() => import("./Uses/Uses"));

const FAQs = lazy(() => import("./FAQs/FAQs"));

const CaseStudies = lazy(() => import("./CaseStudies/CaseStudies"));

const Changelog = lazy(() => import("./Changelog/Changelog"));



const pageRoutes = [

  { path: "", index: true, component: Home, fallback: <HomePageSkeleton /> },

  { path: "about", component: About, fallback: <GenericPageSkeleton blocks={4} /> },

  { path: "project", component: Projects, fallback: <ProjectsPageSkeleton /> },

  { path: "case-studies", component: CaseStudies, fallback: <GenericPageSkeleton blocks={3} /> },

  { path: "experience", component: Experience, fallback: <ExperiencePageSkeleton /> },

  { path: "gallery", component: Gallery, fallback: <GalleryPageSkeleton /> },

  { path: "contact", component: Contact, fallback: <GenericPageSkeleton blocks={2} /> },

  { path: "resume", component: Resume, fallback: <ResumeSkeleton /> },

  { path: "services", component: Services, fallback: <GenericPageSkeleton blocks={4} /> },

  { path: "uses", component: Uses, fallback: <GenericPageSkeleton blocks={4} /> },

  { path: "faqs", component: FAQs, fallback: <GenericPageSkeleton blocks={3} /> },

  { path: "privacy", component: PrivacyPolicy, fallback: <GenericPageSkeleton blocks={3} /> },

  { path: "terms", component: TermsAndConditions, fallback: <GenericPageSkeleton blocks={3} /> },

  { path: "cookies", component: CookiesPolicy, fallback: <GenericPageSkeleton blocks={3} /> },

  { path: "sitemap", component: Sitemap, fallback: <GenericPageSkeleton blocks={2} /> },

  { path: "changelog", component: Changelog, fallback: <GenericPageSkeleton blocks={2} /> },

];



const blogRoutes = [

  { path: "blog/tag/:tag", component: BlogTag, fallback: <GenericPageSkeleton blocks={2} /> },

  {

    path: "blog/category/:category",

    component: BlogCategory,

    fallback: <GenericPageSkeleton blocks={2} />,

  },

  { path: "blog/:slug", component: BlogPost, fallback: <GenericPageSkeleton blocks={2} /> },

  { path: "blog", component: BlogList, fallback: <GenericPageSkeleton blocks={2} /> },

];



function AppShell() {

  return (

    <>

      <Navbar />

      <ScrollToTop />

      <StickyActionButtons />

      <Outlet />

      <Footer />

    </>

  );

}



function renderRoute({ component: Component, fallback }) {

  return (

    <Suspense fallback={fallback}>

      <PageWrapper>

        <Component />

      </PageWrapper>

    </Suspense>

  );

}



function AppRoutes() {

  return (

    <Routes>

      <Route element={<LocaleLayout locale="en" />}>

        <Route element={<AppShell />}>

          {pageRoutes.map(({ path, index, component, fallback }) => (

            <Route

              key={`en-${path || "home"}`}

              path={index ? "/" : `/${path}`}

              index={index}

              element={renderRoute({ component, fallback })}

            />

          ))}

          {blogRoutes.map(({ path, component, fallback }) => (

            <Route

              key={`en-${path}`}

              path={`/${path}`}

              element={renderRoute({ component, fallback })}

            />

          ))}

          <Route

            path="*"

            element={renderRoute({

              component: NotFound,

              fallback: <GenericPageSkeleton blocks={1} />,

            })}

          />

        </Route>

      </Route>



      <Route path="/:locale(ur|ar)" element={<LocaleLayout />}>

        <Route element={<AppShell />}>

          {pageRoutes.map(({ path, index, component, fallback }) => (

            <Route

              key={`loc-${path || "home"}`}

              path={index ? undefined : path}

              index={index}

              element={renderRoute({ component, fallback })}

            />

          ))}

          {blogRoutes.map(({ path, component, fallback }) => (

            <Route

              key={`loc-${path}`}

              path={path}

              element={renderRoute({ component, fallback })}

            />

          ))}

          <Route

            path="*"

            element={renderRoute({

              component: NotFound,

              fallback: <GenericPageSkeleton blocks={1} />,

            })}

          />

        </Route>

      </Route>

    </Routes>

  );

}



export default AppRoutes;
