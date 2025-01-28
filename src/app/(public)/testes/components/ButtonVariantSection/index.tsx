import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import TestesSections from '../TestesSections';

const ButtonVariantSection = () => {
  return (
    <TestesSections title="Variantes">
      <div className="flex gap-2">
        <DefaultFormButton description={'contained'} variant={'contained'} />
        <DefaultFormButton description={'outlined'} variant={'outlined'} />
      </div>
    </TestesSections>
  );
};

export default ButtonVariantSection;
