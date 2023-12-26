import type { FC } from 'react';
import { IndexTemplate } from '@components/templates';
import { DrawerAppBar } from '@components/molecules';
import { Footer } from '@components/organisms';

export const Index: FC = () => {
  return (
    <>
      <DrawerAppBar />
      <IndexTemplate />
      <Footer />
    </>
  );
};
