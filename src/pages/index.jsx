import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

import BtnWhatsapp from '../components/BtnWhatsapp';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

import img from '../assets/img.png';
import selo from '../assets/selo.png';

import './styles.css';


const Header = ({ children }) => {
  return (
    <div className="p-4 bg-indigo-800 sm:flex justify-between items-center">
      {children}
    </div>
  )
}

const Hero = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-center">
      <div className="p-8">
        <h2 className="font-bold text-2xl">Móveis Planejados</h2>
        <p className="text-xl">Comerciais e recidenciais para todos os ambientes</p>
        <p className="text-grey-700">Atendemos Porto Alegre e toda região</p>
      </div>
      <div>
        <img src={img} alt="Móveis projetados" className="my-4" />
      </div>
    </div>
  );
};

const Index = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `);

  const selos = [1, 2, 3, 4];
  const projetos = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
      </Helmet>
      {/* <pre>
        {JSON.stringify(site, null, 2)}
      </pre> */}
      <Header>
        <Logo />
        <div>
          <BtnWhatsapp />
        </div>
      </Header>
      <Hero />
      <div className="flex flex-col items-center sm:flex-row justify-around">
        {selos.map(() => (
          <img src={selo} alt="Selo" />
        ))}
      </div>
      <div>
        <h2 className="px-8 py-2 text-2xl font-bold">Projetos de móveis planejados</h2>
        <div className="flex flex-wrap sm:justify-center">
          {projetos.map(() => (
            <div className="max-w-sm">
              <div className="m-2 rounded shadow-lg">
                <img src={img} alt="Projeto 1"/>
                <div className="px-6 py-4">
                  <p className="font-bold text-xl mb-2">Projeto</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      <Footer />
    </div> 
  );
};

export default Index;