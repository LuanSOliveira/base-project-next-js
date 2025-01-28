import DefaultMotionContainer from '@/shared/components/containers/defaultMotionContainer';
import TesteRouterSection from './components/TesteRoutesSection';
import ButtonCollorSection from './components/ButtonCollorSection';
import ButtonVariantSection from './components/ButtonVariantSection';
import ButtonWidthSection from './components/ButtonWidthSection';
import ButtonStatusSection from './components/ButtonStatusSection';

const TestesPage = () => {
  return (
    <DefaultMotionContainer>
      <TesteRouterSection />
      <section>
        <h1 className="text-center text-3xl font-bold">MODELOS DE BOTÕES</h1>
        <ButtonCollorSection />
        <ButtonVariantSection />
        <ButtonWidthSection />
        <ButtonStatusSection />
      </section>
    </DefaultMotionContainer>
  );
};

export default TestesPage;
