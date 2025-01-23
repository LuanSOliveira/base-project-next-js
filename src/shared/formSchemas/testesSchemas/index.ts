import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const simpleTestSchema = yup.object({
  name: yup.string().required('Campo obrigatório.'),
  secondName: yup.string().required('Campo obrigatório.'),
});

export type SimpleTestSchemaProps = yup.InferType<typeof simpleTestSchema>;

export const simpleTestSchemaDefaultValues: SimpleTestSchemaProps = {
  name: '',
  secondName: '',
};

export const simpleTestSchemaResolver = yupResolver(simpleTestSchema);

//////////////////////////////////////////////////////////////////////////////

const compositeTestSchema = yup.object({
  name: yup.string().required('Campo obrigatório.'),
  secondName: yup.string().required('Campo obrigatório.'),
  description: yup.string().required('Campo obrigatório.'),
  type: yup.string().required('Campo obrigatório.'),
});

export type CompositeTestSchemaProps = yup.InferType<
  typeof compositeTestSchema
>;

export const compositeTestSchemaDefaultValues: CompositeTestSchemaProps = {
  name: '',
  secondName: '',
  description: '',
  type: '',
};

export const compositeTestSchemaResolver = yupResolver(compositeTestSchema);
