import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import TestesSections from '../TestesSections';

const ButtonWidthSection = () => {
  return (
    <TestesSections title="Width">
      <div className="flex gap-2">
        <DefaultFormButton description={'default'} variant={'contained'} />
        <DefaultFormButton
          description={'fullwidth'}
          variant={'contained'}
          fullWidth
        />
      </div>
    </TestesSections>
  );
};

export default ButtonWidthSection;
