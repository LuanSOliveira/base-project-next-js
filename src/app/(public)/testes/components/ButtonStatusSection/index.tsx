import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import TestesSections from '../TestesSections';

const ButtonStatusSection = () => {
  return (
    <TestesSections title="Status">
      <div className="flex gap-2">
        <DefaultFormButton description={'Ativo'} variant={'contained'} />
        <DefaultFormButton
          description={'Inativo'}
          variant={'contained'}
          disabled
        />
        <DefaultFormButton
          description={'Inativo'}
          variant={'contained'}
          loading
        />
      </div>
    </TestesSections>
  );
};

export default ButtonStatusSection;
