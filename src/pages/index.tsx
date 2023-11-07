import { IndexTemplate } from '@components/templates';
import { DrawerAppBar } from '@components/molecules';
import { Footer } from '@components/organisms';

export const Index = () => {
  return (
    <>
      <DrawerAppBar />
      <IndexTemplate />
      <Footer />
    </>
  );
};
