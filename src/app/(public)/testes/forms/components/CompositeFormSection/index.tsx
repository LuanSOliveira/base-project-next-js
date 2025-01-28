'use client';

import {
  compositeTestSchemaDefaultValues,
  CompositeTestSchemaProps,
  compositeTestSchemaResolver,
} from '@/shared/formSchemas';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormDefaultSection from '../FormDefaultSection';
import InputTextWithValidate from '@/shared/components/inputs/InputWithValidation/InputText';
import DefaultFormButton from '@/shared/components/buttons/defaultFormButton';
import InputAreaTextWithValidate from '@/shared/components/inputs/InputWithValidation/InputAreaText';
import InputSelectAutocompleteWithValidation, {
  defaultSelectAutocompleteValue,
} from '@/shared/components/inputs/InputWithValidation/InputSelectAutocomplete';
import { ISelectAutocompleteOptions } from '@/shared/components/inputs/InputWithValidation/interface';

const CompositeFormSection = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedType, setSelectedType] = useState<ISelectAutocompleteOptions>(
    defaultSelectAutocompleteValue,
  );
  const [filterType, setFilterType] = useState<string>('');
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: compositeTestSchemaResolver,
    defaultValues: compositeTestSchemaDefaultValues,
  });

  function OnSubmitForm(data: CompositeTestSchemaProps) {
    console.log(filterType);
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.back();
    }, 1500);
  }

  return (
    <FormDefaultSection title="Formulário Composto">
      <div>
        <form className="flex flex-col gap-5">
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
          <div className="flex gap-5">
            <InputAreaTextWithValidate
              label="Descrição"
              registerName="description"
              maxText={10}
              setValue={setValue}
              watch={watch}
              error={
                errors?.description?.message ? errors?.description?.message : ''
              }
            />
            <InputSelectAutocompleteWithValidation
              label="Tipo"
              registerName="type"
              setValue={setValue}
              watch={watch}
              error={errors?.type?.message ? errors?.type?.message : ''}
              selectedItem={selectedType}
              setSelectedItem={setSelectedType}
              setFilter={setFilterType}
              optionsList={[]}
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

export default CompositeFormSection;
