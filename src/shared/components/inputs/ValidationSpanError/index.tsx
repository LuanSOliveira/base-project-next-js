import { txDefault } from '@/shared/constants';

interface Props {
  error: string;
}

const ValidationSpanErro = ({ error }: Props) => {
  return (
    <span
      className="text-sm w-full"
      style={{ color: txDefault.txDefaultError }}
    >
      * {error}
    </span>
  );
};

export default ValidationSpanErro;
