import DefaultMotionContainer from '@/shared/components/containers/defaultMotionContainer';
import SimpleFormSection from './components/SimpleFormSection';
import CompositeFormSection from './components/CompositeFormSection';

const FormTestesPage = () => {
  return (
    <DefaultMotionContainer>
      <SimpleFormSection />
      <CompositeFormSection />
    </DefaultMotionContainer>
  );
};

export default FormTestesPage;
