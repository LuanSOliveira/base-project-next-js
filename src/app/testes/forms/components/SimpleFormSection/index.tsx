'use client';

import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import FormDefaultSection from '../FormDefaultSection';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  simpleTestSchemaDefaultValues,
  simpleTestSchemaResolver,
} from '@/shared/formSchemas';
import InputTextWithValidate from '@/shared/components/inputs/InputWithValidation/InputText';

const SimpleFormSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: simpleTestSchemaResolver,
    defaultValues: simpleTestSchemaDefaultValues,
  });

  function OnSubmitForm() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1500);
  }

  return (
    <FormDefaultSection title="Formulário Simples">
      <div>
        <form>
          <div className="flex gap-5">
            <InputTextWithValidate
              label="Nome"
              required
              registerName={'name'}
              setValue={setValue}
              watch={watch}
              error={errors?.name?.message ? errors?.name?.message : ''}
            />
            <InputTextWithValidate
              label="Sobrenome"
              required
              registerName={'secondName'}
              setValue={setValue}
              watch={watch}
              error={
                errors?.secondName?.message ? errors?.secondName?.message : ''
              }
            />
          </div>
        </form>
        <div className="flex justify-between mt-5">
          <DefaultFormButton
            description={'Voltar'}
            variant={'outlined'}
            color="inherit"
            onClick={() => router.back()}
          />
          <DefaultFormButton
            description={'Salvar'}
            variant={'contained'}
            loading={loading}
            onClick={handleSubmit(OnSubmitForm)}
          />
        </div>
      </div>
    </FormDefaultSection>
  );
};

export default SimpleFormSection;
