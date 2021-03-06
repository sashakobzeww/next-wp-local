import React from 'react';
import styled from 'styled-components';
import { DownloadApp } from '../../molecules/DownloadApp';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const Banner = () => {
  const store = useStore($store);

  return (
    <StyledBanner
      className={'banner'}
      style={{ backgroundImage: `url('${store?.page?.banner?.background}')` }}
    >
      <div className='container'>
        <h1 className={'title'}>{store?.page?.banner?.title}</h1>
        <DownloadApp />
      </div>
    </StyledBanner>
  );
};

const StyledBanner = styled.section`
  height: clamp(600px, 100vh, 1020px);
  box-sizing: content-box;
  padding-top: 50px;
  padding-bottom: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 1290px;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    gap: 88px;
  }

  .title {
    font-weight: normal;
    font-size: clamp(30px, 100 / 1200 * 100vw, 100px);
    line-height: 105%;
    letter-spacing: 0.035em;
    color: #ffffff;
    max-width: 877px;
    text-shadow: 0 -1px 3px hsla(0, 0%, 0%, 0.5);
  }

  @media (max-width: 1200px) {
    background-position: 70%;
  }
`;
