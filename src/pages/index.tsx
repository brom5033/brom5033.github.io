import { IndexTemplate } from '@components/templates/IndexTemplate';
import { DrawerAppBar } from '@components/molecules/DrawerAppBar';
import { Footer } from '@components/organisms/Footer';

export const Index = () => {
  return (
    <>
      <DrawerAppBar />
      <IndexTemplate />
      <Footer />
    </>
  );
};
