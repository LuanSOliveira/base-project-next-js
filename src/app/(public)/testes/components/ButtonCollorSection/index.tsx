import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import TestesSections from '../TestesSections';

const ButtonCollorSection = () => {
  return (
    <TestesSections title="Cores">
      <div className="flex gap-2">
        <DefaultFormButton
          description={'error'}
          variant={'contained'}
          color="error"
        />
        <DefaultFormButton
          description={'info'}
          variant={'contained'}
          color="info"
        />
        <DefaultFormButton
          description={'inherit'}
          variant={'contained'}
          color="inherit"
        />
        <DefaultFormButton
          description={'primary'}
          variant={'contained'}
          color="primary"
        />
        <DefaultFormButton
          description={'secondary'}
          variant={'contained'}
          color="secondary"
        />
        <DefaultFormButton
          description={'success'}
          variant={'contained'}
          color="success"
        />
        <DefaultFormButton
          description={'warning'}
          variant={'contained'}
          color="warning"
        />
      </div>
    </TestesSections>
  );
};

export default ButtonCollorSection;
