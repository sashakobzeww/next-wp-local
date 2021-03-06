import React, { useEffect } from 'react';
import { MainHome } from '../src/components/templates/MainHome';
import { Page } from '../src/components/templates/Page';
import { fetchData } from '../src/utils';
import { setStoreEv } from '../src/stores/global/global.store';

export default function Index(props) {
  useEffect(() => {
    setStoreEv(props);
  }, []);

  return (
    <Page>
      <MainHome />
    </Page>
  );
}

export async function getStaticProps() {
  const props = await fetchData(21);

  return { props };
}
