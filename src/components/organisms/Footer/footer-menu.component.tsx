import React from 'react';
import Link from 'next/link';
import { useStore } from 'effector-react';
import { $store } from '../../../stores/global/global.store';

export const FooterMenu = () => {
  const store = useStore($store);

  return (
    <ul className='menu'>
      {store?.menu?.menuFooter?.items?.map(({ title, url, child_items }) => (
        <li key={url}>
          <Link href={url}>
            <a>{title}</a>
          </Link>
          {child_items && (
            <div className='sub-menu'>
              {child_items.map(({ title, url }) => (
                <Link href={url} key={url}>
                  <a>{title}</a>
                </Link>
              ))}
            </div>
          )}
          {title === 'Contacts' && (
            <div className='sub-menu'>
              <Link href={`mailto:${store?.components?.footer?.email}`}>
                <a>{store?.components?.footer?.email}</a>
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
